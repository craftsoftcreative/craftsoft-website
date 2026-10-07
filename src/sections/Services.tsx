import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/services';
import { Reveal } from '@/components/shared/Reveal';

export function Services() {
  return (
    <section id="hizmetler" className="relative py-24 sm:py-32 bg-craft-navy overflow-hidden">
      {/* Dekoratif arka plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-craft-navy-50/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-craft-orange/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-craft-orange/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="text-center mb-16 sm:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-craft-orange text-sm font-medium mb-4">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Dijital Başarı İçin{' '}
            <span className="gradient-text">Tüm Çözümler</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            İşletmenizin ihtiyaçlarına özel, sonuç odaklı dijital hizmetler sunuyoruz.
            Her hizmetin detaylı sayfasına göz atabilirsiniz.
          </p>
          <Link
            to="/hizmetler"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-craft-navy font-semibold transition-all duration-300 hover:bg-orange-50 hover:gap-3 hover:shadow-glow-navy hover:scale-105"
          >
            Tüm Hizmetleri İncele
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: (index % 4) * 0.08 }}
                className="h-full"
              >
                <Link
                  to={`/hizmetler/${service.slug}`}
                  className="group relative flex flex-col h-full p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl overflow-hidden"
                >
                  {/* Hover wash */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div
                    className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-lg font-semibold text-gray-900 mb-1 group-hover:text-craft-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="relative text-craft-orange text-xs font-medium mb-3">
                    {service.shortTitle}
                  </p>
                  <p className="relative text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="relative space-y-1.5 mb-4">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-gray-400">
                        <CheckCircle2 className="w-3 h-3 text-craft-orange/60 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <div className="relative flex items-center gap-2 text-xs font-semibold text-craft-orange">
                    <span>Detayları Gör</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform" />
                  </div>

                  <Icon className="absolute top-4 right-4 w-4 h-4 text-gray-200 group-hover:text-craft-orange group-hover:animate-wiggle transition-colors" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
