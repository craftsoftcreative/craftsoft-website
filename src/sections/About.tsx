import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Lightbulb, Users, Rocket, Award, Zap, CheckCircle2 } from 'lucide-react';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';

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
    description: 'Her projede ölçülebilir sonuçlar ve gerçek iş değeri hedefliyoruz.'
  },
  {
    icon: Lightbulb,
    title: 'Yenilikçi',
    description: 'En son teknolojileri ve trendleri takip ederek yenilikçi çözümler sunuyoruz.'
  },
  {
    icon: Users,
    title: 'Müşteri Merkezli',
    description: 'İhtiyaçlarınızı anlayarak, size özel çözümler geliştiriyoruz.'
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

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hakkimizda" ref={sectionRef} className="relative py-24 sm:py-32 bg-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium mb-4">
            Hakkımızda
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Neden{' '}
            <span className="gradient-text">Craftsoft?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dijital dünyada işletmenizi büyütmek için yanınızdayız.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Story */}
          <div 
            className={`
              transition-all duration-700
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
            `}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Dijital Dönüşümünüzde{' '}
              <span className="text-craft-orange">Güvenilir Partneriniz</span>
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                <strong className="text-gray-900">Craftsoft</strong> olarak, İstanbul merkezli bir dijital pazarlama ve 
                yazılım geliştirme ajansıyız. Meta reklamları, Google Ads, sosyal medya yönetimi, 
                profesyonel drone çekimler ve özel yazılım projeleri konusunda uzmanlaştık.
              </p>
              <p>
                <strong className="text-gray-900">AkıllıSofra</strong> (QR menü ve restoran yönetimi),{' '}
                <strong className="text-gray-900">İhaleYapı</strong> (inşaat sektörüne özel ihale yönetimi) ve{' '}
                <strong className="text-gray-900">Salvo Agent</strong> (SALVO süpervizörlü yapay zekâ operasyon platformu) gibi kendi 
                ürünlerimizi geliştirirken edindiğimiz deneyimi, müşterilerimizin projelerine de yansıtıyoruz.
              </p>
              <p>
                Amacımız, işletmenizin dijital varlığını güçlendirmek, marka bilinirliğinizi 
                artırmak ve satışlarınızı yükseltmek için etkili çözümler üretmek.
              </p>
            </div>

            {/* Why Choose Us List */}
            <div className="space-y-3">
              <h4 className="text-gray-900 font-semibold mb-4">Neden Bizi Seçmelisiniz?</h4>
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-craft-orange flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="#iletisim" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity hover:shadow-glow-orange"
              >
                Bizimle Çalışın
              </a>
              <Link
                to="/hizmetler"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-craft-orange font-semibold border-2 border-orange-200 hover:bg-orange-50 hover:border-craft-orange transition-colors"
              >
                Hizmetleri Keşfet
              </Link>
            </div>
          </div>

          {/* Right: Values */}
          <div 
            className={`
              space-y-4 transition-all duration-700 delay-200
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
            `}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                      <Icon className="w-6 h-6 text-craft-orange" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-craft-orange transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div 
          className={`
            grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6
            transition-all duration-700 delay-300
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="relative">
                  <Icon className="w-6 h-6 text-craft-orange mx-auto mb-3" />
                  <AnimatedCounter
                    value={stat.value}
                    className="block text-3xl sm:text-4xl font-bold gradient-text mb-1"
                  />
                  <div className="text-gray-500 text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
