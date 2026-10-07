// Build sonrası çalışır: dist'i headless Chromium ile gezer, her rotanın
// render edilmiş HTML'ini dist/<rota>/index.html olarak kaydeder ve
// sitemap.xml üretir. Böylece arama motorları JS çalıştırmadan içeriği okur.
import { createServer } from 'node:http';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const BASE_URL = 'https://craftsoft.com.tr';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.mp4': 'video/mp4',
};

// Slug listelerini veri dosyalarından regex ile çıkar (TS import'u gerektirmez)
function collectSlugs() {
  const servicesSrc = readFileSync(join(ROOT, 'src/data/services.ts'), 'utf8');
  const serviceSlugs = [...servicesSrc.matchAll(/slug: '([^']+)'/g)].map((m) => m[1]);

  const postsDir = join(ROOT, 'src/data/posts');
  const postSlugs = readdirSync(postsDir)
    .filter((f) => f.endsWith('.ts'))
    .map((f) => {
      const src = readFileSync(join(postsDir, f), 'utf8');
      return src.match(/slug: '([^']+)'/)?.[1];
    })
    .filter(Boolean);

  const legalSrc = readFileSync(join(ROOT, 'src/data/legal.ts'), 'utf8');
  const legalSlugs = [...legalSrc.matchAll(/slug: '([^']+)'/g)].map((m) => m[1]);

  const productsSrc = readFileSync(join(ROOT, 'src/data/products.ts'), 'utf8');
  const productSlugs = [...productsSrc.matchAll(/slug: '([^']+)'/g)].map((m) => m[1]);

  return { serviceSlugs, postSlugs, legalSlugs, productSlugs };
}

function serveDist(port) {
  const server = createServer((req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, `http://localhost:${port}`).pathname);
    let filePath = join(DIST, urlPath);
    if (existsSync(filePath) && !filePath.endsWith('/')) {
      // dizin istendiyse içindeki index.html'e düş
      if (extname(filePath) === '') filePath = join(filePath, 'index.html');
    } else {
      filePath = join(filePath, 'index.html');
    }
    if (!existsSync(filePath) || !filePath.startsWith(DIST)) {
      filePath = join(DIST, 'index.html'); // SPA fallback
    }
    try {
      const body = readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] ?? 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end('not found');
    }
  });
  return new Promise((resolvePromise) => server.listen(port, () => resolvePromise(server)));
}

async function main() {
  if (process.env.PRERENDER_SKIP === '1') {
    console.log('PRERENDER_SKIP=1 — prerender atlandı');
    return;
  }
  const { serviceSlugs, postSlugs, legalSlugs, productSlugs } = collectSlugs();
  const routes = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/hizmetler', changefreq: 'monthly', priority: '0.9' },
    { path: '/blog', changefreq: 'weekly', priority: '0.8' },
    ...serviceSlugs.map((slug) => ({ path: `/hizmetler/${slug}`, changefreq: 'monthly', priority: '0.8' })),
    ...postSlugs.map((slug) => ({ path: `/blog/${slug}`, changefreq: 'monthly', priority: '0.7' })),
    ...legalSlugs.map((slug) => ({ path: `/yasal/${slug}`, changefreq: 'yearly', priority: '0.3' })),
    ...productSlugs.map((slug) => ({ path: `/urunler/${slug}`, changefreq: 'monthly', priority: '0.7' })),
  ];

  const port = 4173 + Math.floor(Math.random() * 500);
  const server = await serveDist(port);
  const browser = await chromium.launch({
    headless: true,
    // Container/CI ortamında sistem Chromium'u kullan (Playwright cache'i yoksa)
    executablePath: process.env.CHROMIUM_PATH || undefined,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  });

  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const failures = [];

    for (const route of routes) {
      const url = `http://localhost:${port}${route.path}`;
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
        // Giriş animasyonlarının ve usePageMeta etkisinin tamamlanmasını bekle
        await page.waitForTimeout(1600);
        const html = await page.content();
        const outFile = route.path === '/' ? join(DIST, 'index.html') : join(DIST, route.path, 'index.html');
        mkdirSync(dirname(outFile), { recursive: true });
        writeFileSync(outFile, html);
        const title = (await page.title()) || '(başlıksız)';
        console.log(`✓ ${route.path}  — ${title}`);
      } catch (err) {
        failures.push(route.path);
        console.error(`✗ ${route.path} — ${err.message}`);
      }
    }

    // GitHub Pages vb. için 404 fallback: SPA kabını kopyala
    writeFileSync(join(DIST, '404.html'), readFileSync(join(DIST, 'index.html')));

    // Sitemap üret
    const today = new Date().toISOString().slice(0, 10);
    const urls = routes
      .map((r) => {
        const lastmod = r.path === '/' || r.path === '/blog' || r.path === '/hizmetler' ? `    <lastmod>${today}</lastmod>\n` : '';
        return `  <url>\n    <loc>${BASE_URL}${r.path}</loc>\n${lastmod}    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`;
      })
      .join('\n');
    writeFileSync(
      join(DIST, 'sitemap.xml'),
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
    );
    console.log(`\nSitemap: ${routes.length} URL → dist/sitemap.xml`);

    if (failures.length > 0) {
      console.error(`\n${failures.length} rota başarısız: ${failures.join(', ')}`);
      process.exitCode = 1;
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
