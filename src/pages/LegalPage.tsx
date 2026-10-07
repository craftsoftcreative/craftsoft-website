import { useEffect, useState } from 'react';
import { Navigate, Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CalendarDays, ShieldCheck, ListTree } from 'lucide-react';
import { getLegalDocBySlug, legalDocs } from '@/data/legal';
import { usePageMeta } from '@/hooks/usePageMeta';

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function LegalPage() {
  const { slug } = useParams<{ slug: string }>();
  const doc = slug ? getLegalDocBySlug(slug) : undefined;
  const [activeSection, setActiveSection] = useState<string>('');

  usePageMeta(
    doc
      ? {
          title: `${doc.title} | Craftsoft`,
          description: doc.description,
          canonicalPath: `/yasal/${doc.slug}`,
        }
      : { title: 'Yasal | Craftsoft', description: 'Yasal bilgilendirme sayfaları.', canonicalPath: '/yasal/kvkk-aydinlatma-metni' }
  );

  const sectionIds = doc ? doc.sections.map((s) => slugifyHeading(s.heading)) : [];

  // Scroll-spy: görünümdeki bölümü takip et
  useEffect(() => {
    if (!doc) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doc, slug]);

  if (!doc) return <Navigate to="/yasal/kvkk-aydinlatma-metni" replace />;

  // Hiçbir bölüm henüz işaretlenmediyse ilk bölümü aktif say
  const currentActive = sectionIds.includes(activeSection) ? activeSection : (sectionIds[0] ?? '');

  const tocItems = doc.sections.map((section, i) => ({
    id: sectionIds[i],
    label: section.heading.replace(/^\d+\.\s*/, ''),
  }));

  const tocLinkClass = (id: string) =>
    `block px-3 py-2 rounded-lg text-sm leading-snug transition-all duration-200 border-l-2 -ml-px ${
      currentActive === id
        ? 'border-craft-orange bg-orange-50 text-craft-orange font-semibold'
        : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
    }`;

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-gray-500 mb-8"
        >
          <Link to="/" className="hover:text-craft-orange transition-colors flex items-center gap-1 py-2.5 -my-2.5 px-1 -mx-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            Anasayfa
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-700">{doc.shortTitle}</span>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_270px] gap-10">
          {/* ===== Ana içerik ===== */}
          <div className="min-w-0">
            <motion.header
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-craft-orange text-sm font-medium mb-5">
                <ShieldCheck className="w-4 h-4" />
                Yasal Bilgilendirme
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mb-4 leading-tight">{doc.title}</h1>
              <p className="flex items-center gap-2 text-sm text-gray-400">
                <CalendarDays className="w-4 h-4" />
                Son güncelleme: {new Date(doc.updatedAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </motion.header>

            {/* Mobil içindekiler (yatay kaydırmalı çipler) */}
            <div className="lg:hidden mb-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                <ListTree className="w-3.5 h-3.5" />
                İçindekiler
              </p>
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                      currentActive === item.id
                        ? 'bg-craft-orange text-white'
                        : 'bg-white border border-gray-200 text-gray-600'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50"
            >
              {doc.sections.map((section, i) => (
                <section key={section.heading} id={sectionIds[i]} className="p-6 sm:p-10 scroll-mt-28">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                  {section.body.map((paragraph, j) => (
                    <p key={j} className="text-gray-600 sm:text-[1.05rem] leading-[1.85] mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </motion.div>

            {/* Diğer yasal sayfalar */}
            <div className="mt-8 flex flex-wrap gap-2">
              {legalDocs
                .filter((d) => d.slug !== doc.slug)
                .map((d) => (
                  <Link
                    key={d.slug}
                    to={`/yasal/${d.slug}`}
                    className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-600 hover:border-craft-orange hover:text-craft-orange transition-colors"
                  >
                    {d.shortTitle}
                  </Link>
                ))}
            </div>
          </div>

          {/* ===== Sağ sekme: İçindekiler ===== */}
          <aside className="hidden lg:block">
            <motion.nav
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="sticky top-28 bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
              aria-label="İçindekiler"
            >
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400 mb-4">
                <ListTree className="w-4 h-4 text-craft-orange" />
                İçindekiler
              </p>
              <ul className="border-l border-gray-100">
                {tocItems.map((item, i) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className={tocLinkClass(item.id)}
                    >
                      <span className="flex items-start gap-2">
                        <span className={`text-[10px] font-bold mt-0.5 ${currentActive === item.id ? 'text-craft-orange' : 'text-gray-300'}`}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </aside>
        </div>
      </div>
    </div>
  );
}
