import { Link, Navigate, useParams } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  Target,
  Users,
  Wrench,
  Lightbulb,
  Workflow,
  Quote,
} from 'lucide-react';
import { useRef, useState } from 'react';
import { getProductBySlug, products } from '@/data/products';
import { Reveal } from '@/components/shared/Reveal';
import { JsonLd } from '@/components/shared/JsonLd';
import { usePageMeta } from '@/hooks/usePageMeta';

const stepIcons = [Lightbulb, Workflow, ArrowRight, CheckCircle2];
const BASE_URL = 'https://craftsoft.com.tr';

const statusStyles: Record<string, string> = {
  'Yayında': 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300',
  'Aktif': 'bg-orange-500/15 border-orange-400/30 text-orange-300',
  'Geliştirme': 'bg-amber-500/15 border-amber-400/30 text-amber-300',
};

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    product
      ? {
          title: `${product.name} — ${product.tagline} | Craftsoft`,
          description: product.description,
          canonicalPath: `/urunler/${product.slug}`,
        }
      : { title: 'Ürünler | Craftsoft', description: 'Craftsoft dijital ürünleri.', canonicalPath: '/urunler' }
  );

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.7', 'end 0.6'],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  if (!product) return <Navigate to="/" replace />;

  const Icon = product.icon;
  const otherProducts = products.filter((p) => p.slug !== product.slug);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    description: product.description,
    url: `${BASE_URL}/urunler/${product.slug}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    provider: {
      '@type': 'Organization',
      name: 'Craftsoft',
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Ürünler', item: `${BASE_URL}/#projeler` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `${BASE_URL}/urunler/${product.slug}` },
    ],
  };

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-craft-navy pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-craft-navy-50/50 rounded-full blur-[120px]" />
          <div className={`absolute top-1/3 -right-24 w-96 h-96 rounded-full blur-[110px] bg-gradient-to-br ${product.gradient} opacity-20`} />
          <Icon className="absolute -right-10 -bottom-16 w-72 h-72 text-white/[0.04]" strokeWidth={1} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
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
            <Link to="/#projeler" className="hover:text-craft-orange transition-colors py-2.5 -my-2.5 px-3 -mx-3">
              Ürünler
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/90">{product.name}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="flex flex-wrap items-center gap-3 mb-5"
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-craft-orange text-sm font-medium">
                  {product.heroTag}
                </span>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${statusStyles[product.status]}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  {product.status}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 text-balance leading-tight"
              >
                {product.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="text-lg sm:text-xl text-white/60 max-w-2xl mb-8"
              >
                {product.heroDescription}
              </motion.p>

              {/* Öne çıkan metrikler */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-9"
              >
                {product.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    <span className="block text-craft-orange font-bold text-sm">{h.value}</span>
                    <span className="block text-white/50 text-xs">{h.label}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.38 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl gradient-bg text-white font-semibold transition-all duration-300 hover:shadow-glow-orange hover:scale-105"
                >
                  Siteyi Ziyaret Et
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  to="/"
                  state={{ scrollTo: 'iletisim' }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-semibold transition-all duration-300 hover:bg-white/10"
                >
                  Bu Ürün Hakkında Konuşalım
                </Link>
              </motion.div>
            </div>

            {/* Büyük ikon kartı */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-3xl blur-2xl opacity-40`} />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className={`relative w-44 h-44 rounded-3xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-2xl`}
                >
                  <Icon className="w-20 h-20 text-white" strokeWidth={1.5} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ===== Problem / Çözüm ===== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-craft-orange text-sm font-medium mb-4">
              Neden {product.name}?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Problemi Anlıyoruz, <span className="gradient-text">Çözümü İnşa Ediyoruz</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Reveal>
              <div className="h-full p-7 sm:p-9 rounded-3xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                    <Target className="w-5 h-5 text-gray-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Yaşanan Sorun</h3>
                </div>
                <div className="space-y-4">
                  {product.problem.map((p, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full p-7 sm:p-9 rounded-3xl bg-craft-navy text-white shadow-sm overflow-hidden relative">
                <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br ${product.gradient} opacity-25`} />
                <div className="relative flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-craft-orange" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    {product.name} <span className="text-craft-orange">Çözümü</span>
                  </h3>
                </div>
                <div className="relative space-y-4">
                  {product.solution.map((s, i) => (
                    <p key={i} className="text-white/70 leading-relaxed">
                      {s}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Özellikler ===== */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Öne Çıkan <span className="gradient-text">Özellikler</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {product.name} platformunda işletmenizi güçlendiren başlıca yetenekler.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.features.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 3) * 0.08}>
                <div className="group h-full p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <span className="text-white font-black text-sm">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Nasıl Çalışır — animasyonlu zaman çizelgesi ===== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-craft-orange text-sm font-medium mb-4 shadow-sm">
              Nasıl Çalışır?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {product.name} ile <span className="gradient-text">4 Adımda Balayın</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Kurulumdan günlük kullanıma kadar net ve hızlı bir başlangıç akışı.
            </p>
          </Reveal>

          <div ref={timelineRef} className="relative">
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-1 sm:-translate-x-1/2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                style={{ scaleY: lineScale }}
                className={`w-full h-full origin-top bg-gradient-to-b ${product.gradient} rounded-full`}
              />
            </div>

            <div className="space-y-12">
              {product.howItWorks.map((step, i) => {
                const StepIcon = stepIcons[i % stepIcons.length];
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className={`relative flex items-start gap-6 sm:gap-0 ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                  >
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-gray-100 shadow-lg flex items-center justify-center z-10">
                      <span className={`font-black text-sm ${product.color}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className={`ml-16 sm:ml-0 sm:w-[calc(50%-3rem)] ${isLeft ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                      <div className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                            <StepIcon className={`w-5 h-5 ${product.color}`} />
                          </div>
                          <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Teknik Altyapı + Hedef Kitle ===== */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Reveal>
              <div className="h-full p-7 sm:p-9 rounded-3xl bg-craft-navy text-white shadow-sm overflow-hidden relative">
                <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br ${product.gradient} opacity-25`} />
                <div className="relative flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-craft-orange" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Teknik <span className="text-craft-orange">Altyapı</span>
                  </h2>
                </div>
                <div className="relative flex flex-wrap gap-2.5">
                  {product.techStack.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white/80 hover:bg-craft-orange hover:border-craft-orange hover:text-white hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full p-7 sm:p-9 rounded-3xl bg-white border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Users className="w-5 h-5 text-craft-orange" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Kimler <span className="gradient-text">Kullanmalı?</span>
                  </h2>
                </div>
                <ul className="space-y-4">
                  {product.targetAudience.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-craft-orange mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SSS ===== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sıkça Sorulan <span className="gradient-text">Sorular</span>
            </h2>
          </Reveal>

          <div className="space-y-4">
            {product.faqs.map((faq, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div
                  className={`rounded-2xl border bg-white transition-all duration-300 overflow-hidden ${
                    openFaq === index ? 'border-orange-200 shadow-md' : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className={`w-5 h-5 flex-shrink-0 ${openFaq === index ? 'text-craft-orange' : 'text-gray-400'}`} />
                      <span className="font-medium text-gray-900">{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-64' : 'max-h-0'
                    }`}
                  >
                    <p className="px-5 pb-5 pl-14 text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA + Diğer Ürünler ===== */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-craft-navy px-6 sm:px-12 py-12 sm:py-16 text-center mb-14">
              <div className={`absolute -top-16 -left-16 w-64 h-64 rounded-full blur-[100px] bg-gradient-to-br ${product.gradient} opacity-30`} />
              <div className="relative">
                <Quote className="w-8 h-8 text-craft-orange mx-auto mb-4" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
                  {product.name} işletmeniz için ne yapabilir?
                </h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
                  Kullanım senaryonuzu konuşalım; size özel bir demo ve entegrasyon planı çıkaralım.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/"
                    state={{ scrollTo: 'iletisim' }}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl gradient-bg text-white font-semibold transition-all duration-300 hover:shadow-glow-orange hover:scale-105"
                  >
                    Bize Ulaşın
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-semibold transition-all duration-300 hover:bg-white/10"
                  >
                    {product.url.replace('https://', '')}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Diğer Ürünlerimiz</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {otherProducts.map((p) => {
                const OtherIcon = p.icon;
                return (
                  <Link
                    key={p.slug}
                    to={`/urunler/${p.slug}`}
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <OtherIcon className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-craft-orange transition-colors">
                        {p.name}
                      </div>
                      <div className="text-xs text-gray-500 truncate">{p.tagline}</div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-craft-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-auto flex-shrink-0" />
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <JsonLd data={[productSchema, faqSchema, breadcrumbSchema]} />
    </>
  );
}
