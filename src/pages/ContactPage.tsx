import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Contact } from '@/sections/Contact';
import { usePageMeta } from '@/hooks/usePageMeta';
import { JsonLd } from '@/components/shared/JsonLd';

const BASE_URL = 'https://craftsoft.com.tr';

const contactInfo = [
  {
    icon: Mail,
    label: 'E-posta',
    value: 'info@craftsoft.com.tr',
    href: 'mailto:info@craftsoft.com.tr'
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: '+90 555 123 45 67',
    href: 'tel:+905551234567'
  },
  {
    icon: MapPin,
    label: 'Konum',
    value: 'İstanbul, Türkiye',
    href: 'https://www.google.com/maps/search/?api=1&query=%C4%B0stanbul'
  },
  {
    icon: Clock,
    label: 'Çalışma Saatleri',
    value: 'Hafta içi 09:00 - 18:00',
    href: undefined
  }
];

export function ContactPage() {
  usePageMeta({
    title: 'İletişim — Ücretsiz Teklif Alın | Craftsoft',
    description:
      'Craftsoft ile iletişime geçin: dijital pazarlama, Meta ve Google reklamları, sosyal medya yönetimi, drone çekim ve özel yazılım projeleri için ücretsiz teklif alın. 24 saat içinde dönüş yapıyoruz.',
    canonicalPath: '/iletisim',
  });

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'İletişim — Craftsoft',
    url: `${BASE_URL}/iletisim`,
    isPartOf: { '@type': 'WebSite', name: 'Craftsoft', url: BASE_URL },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'İletişim', item: `${BASE_URL}/iletisim` },
    ],
  };

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-craft-navy pt-32 pb-14 sm:pt-40 sm:pb-20">
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
            <span className="text-white/90">İletişim</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-craft-orange text-sm font-medium mb-5">
              İletişim
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 text-balance leading-tight">
              Projenizi <span className="gradient-text">Konuşalım</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 mb-8">
              Formu doldurun, 24 saat içinde size dönelim. Dilerseniz doğrudan arayın veya e-posta gönderin.
            </p>

            {/* Hızlı iletişim çipleri */}
            <div className="flex flex-wrap gap-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <>
                    <Icon className="w-4 h-4 text-craft-orange" />
                    <span>
                      <span className="block text-white/40 text-xs">{item.label}</span>
                      <span className="block text-white font-semibold text-sm">{item.value}</span>
                    </span>
                  </>
                );
                const cls = 'flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:border-craft-orange/50';
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={cls}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.label} className={cls}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* ===== Form (iletisim bölümünü yeniden kullan) ===== */}
      <div className="bg-gray-50">
        <Contact hideHeader />
      </div>

      <JsonLd data={[contactSchema, breadcrumbSchema]} />
    </>
  );
}
