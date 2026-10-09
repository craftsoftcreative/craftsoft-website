import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { services } from '@/data/services';
import { PageHero } from '@/components/shared/PageHero';
import { Reveal } from '@/components/shared/Reveal';
import { JsonLd } from '@/components/shared/JsonLd';
import { usePageMeta } from '@/hooks/usePageMeta';

const BASE_URL = 'https://craftsoft.com.tr';

export function ServicesPage() {
  usePageMeta({
    title: 'Hizmetlerimiz | Dijital Pazarlama, Reklam, Tasarım & Yazılım | Craftsoft',
    description:
      'Dijital pazarlama, Meta reklamları, Google Ads, sosyal medya yönetimi, video ve drone çekim, web tasarım ve özel yazılım geliştirme hizmetlerimizi keşfedin.',
    canonicalPath: '/hizmetler',
  });

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Craftsoft Dijital Hizmetler',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        url: `${BASE_URL}/hizmetler/${service.slug}`,
        provider: { '@type': 'Organization', name: 'Craftsoft', url: BASE_URL },
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: `${BASE_URL}/hizmetler` },
    ],
  };

  return (
    <>
      <PageHero
        badge="Hizmetlerimiz"
        title="Dijital Başarı İçin"
        highlight="Tüm Çözümler"
        subtitle="İşletmenizin ihtiyaçlarına özel, sonuç odaklı dijital hizmetler sunuyoruz. Her hizmetimizin kendi detay sayfası var; merak ettiklerinizi inceleyin."
        breadcrumb={[{ label: 'Hizmetler' }]}
      />

      <section className="relative py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                >
                  <Link
                    to={`/hizmetler/${service.slug}`}
                    className="group relative block h-full p-7 sm:p-9 rounded-3xl bg-white border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-transparent"
                  >
                    {/* Hover gradient wash */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    <div className="relative flex flex-col sm:flex-row gap-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-semibold ${service.textColor}`}>
                            {service.shortTitle}
                          </span>
                          <Sparkles className="w-3.5 h-3.5 text-gray-300 group-hover:text-craft-orange transition-colors" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-craft-orange transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-5">
                          {service.description}
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                          {service.features.slice(0, 4).map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle2 className={`w-4 h-4 ${service.textColor} flex-shrink-0`} />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-craft-orange">
                          Detaylı İncele
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <Reveal className="mt-16">
            <div className="relative overflow-hidden rounded-3xl gradient-bg animate-gradient p-8 sm:p-12 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
              <h3 className="relative text-2xl sm:text-3xl font-bold text-white mb-3">
                Hangi hizmet size uygun? Karar veremediniz mi?
              </h3>
              <p className="relative text-white/85 max-w-xl mx-auto mb-7">
                Ücretsiz keşif görüşmesinde işletmenizi dinliyor, ihtiyacınıza en uygun çözümü birlikte belirliyoruz.
              </p>
              <Link
                to="/iletisim"
                className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-craft-orange font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Ücretsiz Görüşme Planla
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <JsonLd data={[servicesSchema, breadcrumbSchema]} />
    </>
  );
}
