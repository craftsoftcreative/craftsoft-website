import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Target, Lightbulb, Users, Rocket, Award, Zap, CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/shared/Reveal';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { JsonLd } from '@/components/shared/JsonLd';
import { usePageMeta } from '@/hooks/usePageMeta';

const BASE_URL = 'https://craftsoft.com.tr';

const stats = [
  { value: '50+', label: 'Tamamlanan Proje', icon: Rocket },
  { value: '30+', label: 'Mutlu Müşteri', icon: Users },
  { value: '5+', label: 'Yıllık Deneyim', icon: Award },
  { value: '24/7', label: 'Destek', icon: Zap },
];

const values = [
  {
    icon: Target,
    title: 'Sonuç Odaklı',
    description: 'Her projede ölçülebilir sonuçlar ve gerçek iş değeri hedefliyoruz. Gösterişli raporlar değil, satışlara yansıyan sonuçlar üretiyoruz.'
  },
  {
    icon: Lightbulb,
    title: 'Yenilikçi',
    description: 'Yapay zekâ destekli pazarlama ve modern ürün geliştirme yaklaşımlarını takip ederek çözümlerimizi sürekli güncelliyoruz.'
  },
  {
    icon: Users,
    title: 'Müşteri Merkezli',
    description: 'İşletmenizin hedeflerini, bütçesini ve gerçek ihtiyaçlarını anlamadan tek bir satır kuralım, tek bir reklam yayınlamayız.'
  }
];

const whyChooseUs = [
  'SEO ve GEO optimizasyonu uzmanlığı',
  'Meta Business Partner sertifikalı ekip',
  'Google Ads sertifikalı uzmanlar',
  '7/24 teknik destek ve raporlama',
  'Şeffaf fiyatlandırma ve sözleşme',
  'Yerinde görüşme ve danışmanlık'
];

export function AboutPage() {
  usePageMeta({
    title: 'Hakkımızda — İstanbul Dijital Pazarlama & Yazılım Ajansı | Craftsoft',
    description:
      'Craftsoft; İstanbul merkezli dijital pazarlama ve yazılım geliştirme ajansı. Meta reklamları, Google Ads, sosyal medya yönetimi ve özel yazılım çözümleri ile işletmelerin dijital dönüşümüne öncülük ediyoruz.',
    canonicalPath: '/hakkimizda',
  });

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Hakkımızda — Craftsoft',
    url: `${BASE_URL}/hakkimizda`,
    isPartOf: { '@type': 'WebSite', name: 'Craftsoft', url: BASE_URL },
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Craftsoft',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    email: 'info@craftsoft.com.tr',
    telephone: '+90 555 123 45 67',
    address: { '@type': 'PostalAddress', addressLocality: 'İstanbul', addressCountry: 'TR' },
    description:
      'İstanbul merkezli dijital pazarlama ve yazılım geliştirme ajansı. AkıllıSofra, İhaleYapı ve Salvo Agent ürünlerinin geliştiricisi.',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Hakkımızda', item: `${BASE_URL}/hakkimizda` },
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
            <span className="text-white/90">Hakkımızda</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-craft-orange text-sm font-medium mb-5">
              Hakkımızda
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 text-balance leading-tight">
              Dijital Dönüşümünüzde{' '}
              <span className="gradient-text">Güvenilir Partneriniz</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60">
              İstanbul merkezli dijital pazarlama ve yazılım geliştirme ajansıyız.
              Markaları büyüten stratejiler ve işletmelerin işini kolaylaştıran ürünler geliştiriyoruz.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ===== Hikaye ===== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <div className="space-y-5 text-gray-600 leading-relaxed text-[1.05rem]">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Ajans Değil, <span className="gradient-text">Büyüme Ortağı</span>
                </h2>
                <p>
                  <strong className="text-gray-900">Craftsoft</strong> olarak yola dijital pazarlama ajansı olarak çıktık;
                  zamanla müşterilerimizin ihtiyaç duyduğu yazılım çözümlerini de kendimiz geliştirmeye başladık.
                  Bugün hem markaların dijital görünürlüğünü büyütüyor hem de kendi ürünlerimizle sektörlere özel
                  platformlar sunuyoruz.
                </p>
                <p>
                  <strong className="text-gray-900">AkıllıSofra</strong> (restoranlar için QR menü ve sipariş yönetimi),{' '}
                  <strong className="text-gray-900">İhaleYapı</strong> (inşaat sektörüne özel ihale yönetimi) ve{' '}
                  <strong className="text-gray-900">Salvo Agent</strong> (SALVO süpervizörlü yapay zekâ operasyon platformu)
                  gibi ürünlerimiz; ajans hizmetlerimizde öğrendiğimiz her dersin, gerçek işletme problemlerine dönüşmüş hâlidir.
                </p>
                <p>
                  Amacımız net: işletmenizin dijital varlığını güçlendirmek, marka bilinirliğinizi artırmak ve
                  satışlarınızı yükseltmek için ölçülebilir, şeffaf ve sürdürülebilir çözümler üretmek.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-gray-900 font-semibold mb-4">Neden Bizi Seçmelisiniz?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {whyChooseUs.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-craft-orange flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/iletisim"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-semibold hover:shadow-glow-orange hover:scale-105 transition-all"
                >
                  Bizimle Çalışın
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/hizmetler"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-craft-orange font-semibold border-2 border-orange-200 hover:bg-orange-50 hover:border-craft-orange transition-colors"
                >
                  Hizmetleri Keşfet
                </Link>
              </div>
            </Reveal>

            {/* Değerler */}
            <div className="space-y-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Reveal key={value.title} delay={index * 0.08}>
                    <div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 group-hover:rotate-3 transition-all">
                          <Icon className="w-6 h-6 text-craft-orange" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-craft-orange transition-colors">
                            {value.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== İstatistikler ===== */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Rakamlarla <span className="gradient-text">Craftsoft</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Reveal key={stat.label} delay={index * 0.06}>
                  <div className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 text-center">
                    <Icon className="w-6 h-6 text-craft-orange mx-auto mb-3" />
                    <AnimatedCounter
                      value={stat.value}
                      className="block text-3xl sm:text-4xl font-bold gradient-text mb-1"
                    />
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <JsonLd data={[aboutSchema, orgSchema, breadcrumbSchema]} />
    </>
  );
}
