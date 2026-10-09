import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { products } from '@/data/products';
import { Reveal } from '@/components/shared/Reveal';
import { JsonLd } from '@/components/shared/JsonLd';
import { usePageMeta } from '@/hooks/usePageMeta';

const BASE_URL = 'https://craftsoft.com.tr';

const statusStyles: Record<string, string> = {
  'Yayında': 'bg-emerald-100 text-emerald-600',
  'Aktif': 'bg-orange-100 text-craft-orange',
  'Geliştirme': 'bg-amber-100 text-amber-600',
};

export function ProjectsPage() {
  usePageMeta({
    title: 'Projelerimiz — AkıllıSofra, İhaleYapı & Salvo Agent | Craftsoft',
    description:
      'Craftsoft\'un geliştirdiği dijital ürünler: AkıllıSofra (restoranlar için QR menü ve sipariş yönetimi), İhaleYapı (inşaat sektörüne özel ihale yönetimi) ve Salvo Agent (yapay zekâ operasyon platformu).',
    canonicalPath: '/projeler',
  });

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Craftsoft Projeleri',
    url: `${BASE_URL}/projeler`,
    description:
      'Craftsoft tarafından geliştirilen dijital ürünler: AkıllıSofra, İhaleYapı ve Salvo Agent.',
    isPartOf: { '@type': 'WebSite', name: 'Craftsoft', url: BASE_URL },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Projeler', item: `${BASE_URL}/projeler` },
    ],
  };

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-craft-navy pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-craft-navy-50/50 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 -right-24 w-96 h-96 bg-craft-orange/15 rounded-full blur-[110px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-white/50 mb-8"
          >
            <Link to="/" className="hover:text-craft-orange transition-colors flex items-center gap-1 py-2.5 -my-2.5 px-1 -mx-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              Anasayfa
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/90">Projeler</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-craft-orange text-sm font-medium mb-5">
              Projelerimiz
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 text-balance leading-tight">
              Geliştirdiğimiz <span className="gradient-text">Dijital Ürünler</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60">
              Müşterilerimiz için çalışırken öğrendiğimiz her dersi kendi ürünlerimize de yansıtıyoruz.
              İşletmelerin gerçek sorunlarına çözüm üreten, canlıda kanıtlanmış üç platform geliştirdik.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ===== Ürün Kartları ===== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Reveal key={product.slug} delay={index * 0.05}>
                <div className="group relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none`} />
                  <div className="relative grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-10 items-center p-6 sm:p-10">
                    {/* İkon */}
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-2xl blur-xl opacity-30`} />
                      <div className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* İçerik */}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-craft-orange transition-colors">
                          {product.name}
                        </h2>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[product.status]}`}>
                          {product.status}
                        </span>
                      </div>
                      <p className={`text-sm font-semibold ${product.color} mb-3`}>{product.tagline}</p>
                      <p className="text-gray-600 leading-relaxed mb-4 max-w-2xl">{product.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.highlights.map((h) => (
                          <span key={h.label} className="px-3 py-1.5 rounded-lg bg-white border border-gray-100 text-xs">
                            <span className="font-bold text-gray-900">{h.value}</span>{' '}
                            <span className="text-gray-500">{h.label}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex lg:flex-col gap-3 lg:items-end">
                      <Link
                        to={`/urunler/${product.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-semibold text-sm transition-all duration-300 hover:shadow-glow-orange hover:scale-105 whitespace-nowrap"
                      >
                        Detayları Gör
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold text-sm transition-all duration-300 hover:border-craft-orange hover:text-craft-orange whitespace-nowrap"
                      >
                        Siteyi Ziyaret Et
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-craft-navy px-6 sm:px-12 py-12 sm:py-16 text-center">
              <div className="absolute -top-16 -left-16 w-64 h-64 bg-craft-orange/20 rounded-full blur-[100px]" />
              <div className="relative">
                <Sparkles className="w-8 h-8 text-craft-orange mx-auto mb-4" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
                  Sizin de geliştirilecek bir projeniz mi var?
                </h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
                  Kendi ürünlerimizde kanıtlanmış ürün geliştirme sürecimizi projenize taşıyalım.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/iletisim"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl gradient-bg text-white font-semibold transition-all duration-300 hover:shadow-glow-orange hover:scale-105"
                  >
                    Projenizi Anlatın
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/hizmetler"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-semibold transition-all duration-300 hover:bg-white/10"
                  >
                    Hizmetlerimiz
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <JsonLd data={[collectionSchema, breadcrumbSchema]} />
    </>
  );
}
