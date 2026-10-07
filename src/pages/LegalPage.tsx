import { Navigate, Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CalendarDays, ShieldCheck } from 'lucide-react';
import { getLegalDocBySlug, legalDocs } from '@/data/legal';
import { usePageMeta } from '@/hooks/usePageMeta';

export function LegalPage() {
  const { slug } = useParams<{ slug: string }>();
  const doc = slug ? getLegalDocBySlug(slug) : undefined;

  usePageMeta(
    doc
      ? {
          title: `${doc.title} | Craftsoft`,
          description: doc.description,
          canonicalPath: `/yasal/${doc.slug}`,
        }
      : { title: 'Yasal | Craftsoft', description: 'Yasal bilgilendirme sayfaları.', canonicalPath: '/yasal/kvkk-aydinlatma-metni' }
  );

  if (!doc) return <Navigate to="/yasal/kvkk-aydinlatma-metni" replace />;

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-10"
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50"
        >
          {doc.sections.map((section) => (
            <section key={section.heading} className="p-6 sm:p-10">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{section.heading}</h2>
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-gray-600 sm:text-[1.05rem] leading-[1.85] mb-4 last:mb-0">
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
    </div>
  );
}
