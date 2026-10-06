// Mobil görünümde tüm rotaları tarar: yatay taşma, konsol hatası, menü.
import { chromium } from 'playwright-core';

const BASE = process.argv[2] || 'http://localhost:5173';
const ROUTES = [
  '/', '/hizmetler', '/blog',
  '/hizmetler/dijital-pazarlama', '/hizmetler/meta-reklamlari', '/hizmetler/google-ads',
  '/hizmetler/sosyal-medya', '/hizmetler/video-fotograf', '/hizmetler/drone-cekim',
  '/hizmetler/web-tasarim', '/hizmetler/yazilim-gelistirme',
  '/blog/teknik-seo-rehberi', '/blog/yapay-zeka-dijital-pazarlama', '/blog/donusum-odakli-web-tasarimi',
];

const WIDTH = Number(process.env.AUDIT_WIDTH || 390);
const HEIGHT = Number(process.env.AUDIT_HEIGHT || 844);

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: WIDTH, height: HEIGHT }, isMobile: WIDTH < 500, hasTouch: true });
const page = await ctx.newPage();
const consoleErrors = [];

let failCount = 0;
for (const route of ROUTES) {
  const errsBefore = consoleErrors.length;
  page.on('pageerror', (e) => consoleErrors.push(`${route}: ${String(e).slice(0, 160)}`));
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(`${route}: ${m.text().slice(0, 160)}`); });

  try {
    await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1400);

    const metrics = await page.evaluate(() => {
      const doc = document.documentElement;
      const h1 = document.querySelector('h1')?.textContent?.trim().slice(0, 50) ?? '(yok)';
      const buttons = [...document.querySelectorAll('button, a')];
      const smallTap = buttons.filter((b) => {
        const r = b.getBoundingClientRect();
        return r.width > 0 && r.width < 40 && r.height > 0 && r.height < 40;
      }).length;
      const docScroll = doc.scrollWidth - doc.clientWidth;
      // taşan ama kırpılmayan gerçek taşmalar: scrollWidth > clientWidth olan ancestor'suz elemanlar
      let clippedOverflow = 0;
      document.querySelectorAll('body *').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.right > doc.clientWidth + 1) {
          let p = el.parentElement;
          let clipped = false;
          while (p && p !== document.body) {
            const o = getComputedStyle(p);
            if (o.overflowX !== 'visible' && p.clientWidth < p.scrollWidth) { clipped = true; break; }
            p = p.parentElement;
          }
          if (!clipped) clippedOverflow++;
        }
      });
      return { docScroll, h1, smallTap, clippedOverflow };
    });

    const newErrs = consoleErrors.length - errsBefore;
    const bad = metrics.docScroll > 0 || metrics.clippedOverflow > 0 || newErrs > 0;
    if (bad) failCount++;
    console.log(`${bad ? '✗' : '✓'} ${route}  h1="${metrics.h1}"  taşma=${metrics.docScroll}px kırpılmayan=${metrics.clippedOverflow} küçükHedef=${metrics.smallTap} hata=${newErrs}`);
  } catch (err) {
    failCount++;
    console.log(`✗ ${route}  YÜKLENEMEDİ: ${String(err).slice(0, 120)}`);
  }
}

// Mobil menü testi (yalnızca mobil genişlikte anlamlı)
if (WIDTH < 500) {
  try {
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  const menuBtn = page.locator('button').filter({ has: page.locator('svg') }).first();
  // daha güvenilir: navbar'daki son buton (hamburger)
  const navButtons = page.locator('header button, nav button');
  const count = await navButtons.count();
  let opened = false;
  for (let i = 0; i < count; i++) {
    const btn = navButtons.nth(i);
    const label = ((await btn.getAttribute('aria-label')) ?? '') + (await btn.innerText().catch(() => ''));
    if (/menü|menu/i.test(label) || i === count - 1) {
      await btn.tap();
      opened = true;
      break;
    }
  }
  await page.waitForTimeout(800);
  const menuVisible = await page.evaluate(() => {
    const links = [...document.querySelectorAll('a')].map((a) => a.textContent?.trim());
    return links.includes('Hizmetlerimiz') || links.includes('Hizmetler');
  });
  const menuLinks = await page.evaluate(() => document.body.innerText.includes('Sıkça Sorulan'));
  console.log(`${opened && menuLinks ? '✓' : '✗'} mobil menü açılıyor: tıklandı=${opened} içerikGörünür=${menuLinks}`);
  if (!(opened && menuLinks)) failCount++;
  } catch (err) {
    failCount++;
    console.log(`✗ mobil menü testi hatası: ${String(err).slice(0, 120)}`);
  }
}

if (consoleErrors.length) {
  console.log('\nKonsol hataları:');
  consoleErrors.slice(0, 10).forEach((e) => console.log('  ' + e));
}

await browser.close();
console.log(failCount === 0 ? '\nTÜM MOBİL TESTLER GEÇTİ' : `\n${failCount} sorun`);
process.exitCode = failCount === 0 ? 0 : 1;
