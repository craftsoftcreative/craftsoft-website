import { Link, Navigate, useParams } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Compass,
  ClipboardList,
  Rocket,
  BarChart3,
  Users,
  Wrench,
} from 'lucide-react';
import { useRef, useState } from 'react';
import { getServiceBySlug, services } from '@/data/services';
import { Reveal } from '@/components/shared/Reveal';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { JsonLd } from '@/components/shared/JsonLd';
import { usePageMeta } from '@/hooks/usePageMeta';

const processIcons = [Compass, ClipboardList, Rocket, BarChart3];
const BASE_URL = 'https://craftsoft.com.tr';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    service
      ? {
          title: `${service.title} | Craftsoft`,
          description: service.description,
          canonicalPath: `/hizmetler/${service.slug}`,
        }
      : { title: 'Hizmetler | Craftsoft', description: 'Craftsoft dijital hizmetleri.', canonicalPath: '/hizmetler' }
  );

  // Zaman çizelgesi scroll ilerlemesi
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.7', 'end 0.6'],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  if (!service) return <Navigate to="/hizmetler" replace />;

  const Icon = service.icon;
  const currentIndex = services.findIndex((s) => s.slug === service.slug);
  const prevService = services[(currentIndex - 1 + services.length) % services.length];
  const nextService = services[(currentIndex + 1) % services.length];
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: `${BASE_URL}/hizmetler/${service.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'Craftsoft',
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
    },
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    serviceType: service.shortTitle,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/iletisim`,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
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
      { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: `${BASE_URL}/hizmetler` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${BASE_URL}/hizmetler/${service.slug}` },
    ],
  };

  return (
    <>
      {/* ===== Zengin Hero ===== */}
      <section className="relative overflow-hidden bg-craft-navy pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* Dekoratif katmanlar */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-craft-navy-50/50 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 -right-24 w-96 h-96 bg-craft-orange/15 rounded-full blur-[110px]" />
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
            <Link to="/hizmetler" className="hover:text-craft-orange transition-colors py-2.5 -my-2.5 px-3 -mx-3">
              Hizmetler
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/90">{service.title}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="flex items-center gap-3 mb-5"
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-craft-orange text-sm font-medium">
                  {service.shortTitle}
                </span>
                <span className="hidden sm:flex items-center gap-1.5 text-xs text-white/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Hizmet aktif — teklif alınabilir
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 text-balance leading-tight"
              >
                {service.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="text-lg sm:text-xl text-white/60 max-w-2xl mb-8"
              >
                {service.tagline}
              </motion.p>

              {/* Hızlı istatistik çipleri */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-9"
              >
                {service.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    <span className="block text-craft-orange font-bold text-sm">{stat.value}</span>
                    <span className="block text-white/50 text-xs">{stat.label}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.38 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/"
                  state={{ scrollTo: 'iletisim' }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl gradient-bg text-white font-semibold transition-all duration-300 hover:shadow-glow-orange hover:scale-105"
                >
                  Bu Hizmet İçin Teklif Al
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/hizmetler"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-semibold transition-all duration-300 hover:bg-white/10"
                >
                  Tüm Hizmetler
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
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-2xl opacity-40`} />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className={`relative w-44 h-44 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl`}
                >
                  <Icon className="w-20 h-20 text-white" strokeWidth={1.5} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Alt dalga geçişi */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ===== Detaylı Anlatım + Sidebar ===== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                  {service.title} <span className="gradient-text">Neler Sunar?</span>
                </h2>
              </Reveal>
              {service.longDescription.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{paragraph}</p>
                </Reveal>
              ))}

              {/* Sayaçlar */}
              <Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                  {service.stats.map((stat) => (
                    <div key={stat.label} className={`p-5 rounded-2xl ${service.softBg} text-center`}>
                      <AnimatedCounter
                        value={stat.value}
                        className={`block text-2xl sm:text-3xl font-bold ${service.textColor} mb-1`}
                      />
                      <span className="text-sm text-gray-600">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Reveal delay={0.1}>
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 lg:sticky lg:top-24">
                  <h3 className="font-bold text-gray-900 mb-4">Neler İçerir?</h3>
                  <ul className="space-y-3 mb-6">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle2 className={`w-4 h-4 ${service.textColor} mt-0.5 flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <h3 className="font-bold text-gray-900 mb-4">Öne Çıkanlar</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium ${service.softBg} ${service.textColor}`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/"
                    state={{ scrollTo: 'iletisim' }}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl gradient-bg text-white font-semibold transition-all duration-300 hover:shadow-glow-orange hover:scale-[1.02]"
                  >
                    Teklif Al
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Kimler İçin + Araçlar ===== */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Reveal>
              <div className="h-full p-7 sm:p-9 rounded-3xl bg-white border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-11 h-11 rounded-xl ${service.softBg} flex items-center justify-center`}>
                    <Users className={`w-5 h-5 ${service.textColor}`} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Bu Hizmet <span className="gradient-text">Kimler İçin?</span>
                  </h2>
                </div>
                <ul className="space-y-4">
                  {service.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                      <CheckCircle2 className={`w-5 h-5 ${service.textColor} mt-0.5 flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full p-7 sm:p-9 rounded-3xl bg-craft-navy text-white shadow-sm overflow-hidden relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-craft-orange/10 rounded-full blur-3xl" />
                <div className="relative flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-craft-orange" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Kullandığımız <span className="text-craft-orange">Araçlar</span>
                  </h2>
                </div>
                <div className="relative flex flex-wrap gap-2.5">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white/80 hover:bg-craft-orange hover:border-craft-orange hover:text-white hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="relative text-white/40 text-sm mt-6">
                  Her projede işe yarayan araç seti, ihtiyaca göre özelleştirilir.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Animasyonlu Süreç Zaman Çizelgesi ===== */}
      <section className={`py-16 sm:py-24 ${service.softBg} bg-opacity-40`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-100 text-craft-orange text-sm font-medium mb-4 shadow-sm">
              Çalışma Sürecimiz
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nasıl <span className="gradient-text">Çalışıyoruz?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Şeffaf, ölçülebilir ve süreci birlikte yönettiğimiz {service.process.length} adımlık yol haritamız.
            </p>
          </Reveal>

          <div ref={timelineRef} className="relative">
            {/* İlerleme çizgisi */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-1 sm:-translate-x-1/2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                style={{ scaleY: lineScale }}
                className={`w-full h-full origin-top bg-gradient-to-b ${service.gradient} rounded-full`}
              />
            </div>

            <div className="space-y-12">
              {service.process.map((step, i) => {
                const StepIcon = processIcons[i % processIcons.length];
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className={`relative flex items-start gap-6 sm:gap-0 ${
                      isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {/* Nokta */}
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-gray-100 shadow-lg flex items-center justify-center z-10">
                      <span className={`font-black text-sm ${service.textColor}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Kart */}
                    <div className={`ml-16 sm:ml-0 sm:w-[calc(50%-3rem)] ${isLeft ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                      <div className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-xl ${service.softBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                            <StepIcon className={`w-5 h-5 ${service.textColor}`} />
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

      {/* ===== SSS ===== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sıkça Sorulan <span className="gradient-text">Sorular</span>
            </h2>
          </Reveal>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
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
                      <HelpCircle className={`w-5 h-5 flex-shrink-0 ${openFaq === index ? service.textColor : 'text-gray-400'}`} />
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

      {/* ===== Önceki / Sonraki ===== */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to={`/hizmetler/${prevService.slug}`}
              className="group flex items-center gap-4 p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-craft-orange group-hover:-translate-x-1 transition-all flex-shrink-0" />
              <div>
                <span className="text-xs text-gray-400">Önceki Hizmet</span>
                <div className="font-semibold text-gray-900 group-hover:text-craft-orange transition-colors">
                  {prevService.title}
                </div>
              </div>
            </Link>
            <Link
              to={`/hizmetler/${nextService.slug}`}
              className="group flex items-center justify-end gap-4 p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 text-right"
            >
              <div>
                <span className="text-xs text-gray-400">Sonraki Hizmet</span>
                <div className="font-semibold text-gray-900 group-hover:text-craft-orange transition-colors">
                  {nextService.title}
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-craft-orange group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          </div>

          <Reveal className="mt-14">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Diğer Hizmetlerimiz</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherServices.map((s) => {
                const OtherIcon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    to={`/hizmetler/${s.slug}`}
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <OtherIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-craft-orange transition-colors">
                        {s.title}
                      </div>
                      <div className="text-xs text-gray-500">{s.shortTitle}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />
    </>
  );
}
