import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  keywords: string[];
}

const faqs: FAQItem[] = [
  {
    question: 'Craftsoft hangi dijital pazarlama hizmetlerini sunuyor?',
    answer: 'Craftsoft olarak Meta (Facebook ve Instagram) reklamları, Google Ads, SEO optimizasyonu, sosyal medya yönetimi, içerik pazarlama ve dönüşüm optimizasyonu hizmetleri sunuyoruz. İstanbul merkezli ajansımız, işletmelerin dijital varlıklarını güçlendirmek için kapsamlı çözümler üretiyor.',
    keywords: ['dijital pazarlama', 'meta reklamları', 'google ads', 'seo', 'sosyal medya yönetimi', 'istanbul dijital ajans']
  },
  {
    question: 'Meta reklamları (Facebook ve Instagram) için nasıl bir çalışma süreci izliyorsunuz?',
    answer: 'Meta reklam kampanyalarımızda önce hedef kitle analizi yapıyor, ardından A/B testleri ile en etkili görsel ve metinleri belirliyoruz. Kampanya optimizasyonu ve düzenli performans raporlaması ile reklam bütçenizden maksimum verimi almanızı sağlıyoruz. Facebook Business Manager ve Meta Pixel kurulumu da hizmetlerimiz arasındadır.',
    keywords: ['meta reklamları', 'facebook reklamları', 'instagram reklamları', 'facebook business manager', 'meta pixel', 'hedef kitle analizi']
  },
  {
    question: 'Google Ads kampanya yönetimi hizmetiniz neleri kapsıyor?',
    answer: 'Google Ads hizmetlerimiz; Arama Ağı reklamları, Display Ağı, YouTube reklamları, Remarketing kampanyaları ve Alışveriş reklamlarını kapsıyor. Google Ads sertifikalı uzmanlarımız, anahtar kelime araştırması, reklam metni optimizasyonu ve dönüşüm takibi ile kampanyalarınızı yönetiyor.',
    keywords: ['google ads', 'arama ağı reklamları', 'display reklamları', 'youtube reklamları', 'remarketing', 'google ads sertifikası']
  },
  {
    question: 'Web tasarım ve yazılım geliştirme hizmetleriniz neleri kapsıyor?',
    answer: 'Kurumsal web siteleri, e-ticaret altyapıları, özel yönetim panelleri, rezervasyon ve sipariş sistemleri ile fikirden lansmana kadar uçtan uca SaaS ürün geliştirme hizmetleri sunuyoruz. AkıllıSofra, İhaleYapı ve Salvo Agent gibi kendi ürünlerimiz üzerinde kanıtlanmış ürün geliştirme deneyimimizi her projeye taşıyoruz.',
    keywords: ['web tasarım', 'web geliştirme', 'yazılım geliştirme', 'e-ticaret', 'kurumsal web sitesi', 'saas geliştirme']
  },
  {
    question: 'Drone çekim hizmetleriniz hangi alanlarda kullanılabilir?',
    answer: 'Profesyonel drone çekimlerimiz; emlak tanıtımları, inşaat projeleri, etkinlikler, turizm tanıtımları, endüstriyel çekimler ve 360° panorama çekimleri için kullanılabilir. 4K video kalitesinde havadan çekimlerle projelerinize farklı bir perspektif kazandırıyoruz.',
    keywords: ['drone çekim', 'havadan çekim', '4k video', 'emlak tanıtımı', 'inşaat çekimi', '360 panorama']
  },
  {
    question: 'Video ve fotoğraf düzenleme hizmetleriniz neleri içeriyor?',
    answer: 'Profesyonel video kurgu, renk düzenleme (color grading), motion graphics, sosyal medya formatlarına uygun video editleri ve fotoğraf retouch hizmetleri sunuyoruz. Reels, TikTok, YouTube ve kurumsal videolar için özel çözümler üretiyoruz.',
    keywords: ['video edit', 'video kurgu', 'fotoğraf düzenleme', 'motion graphics', 'color grading', 'reels edit']
  },
  {
    question: 'AkıllıSofra, İhaleYapı ve Salvo Agent projeleri nedir?',
    answer: 'AkıllıSofra restoranlar için QR dijital menü ve sipariş yönetim sistemi, İhaleYapı inşaat ve yapı firmaları için sektöre özel geliştirilen ihale yönetim platformu, Salvo Agent ise SALVO merkezi süpervizörü liderliğindeki hiyerarşik CrewAI ajan takımlarıyla finans, satış, pazarlama ve mühendislik operasyonlarını otonom yöneten yapay zekâ operasyon platformudur. Bu projeler, Craftsoft\'un yazılım geliştirme uzmanlığının bir göstergesidir.',
    keywords: ['akillisofra', 'ihaleyapi', 'salvo agent', 'restoran yazılımı', 'ihale takip', 'yapay zekâ ajan']
  },
  {
    question: 'Bir proje için teklif almak istiyorum, nasıl iletişime geçebilirim?',
    answer: 'Web sitemizdeki iletişim formunu doldurarak veya info@craftsoft.com.tr adresine e-posta göndererek bize ulaşabilirsiniz. Telefon numaramız +90 555 123 45 67\'dir. 24 saat içinde size dönüş yapıyor, projeniz için ücretsiz keşif görüşmesi planlıyoruz.',
    keywords: ['teklif al', 'iletişim', 'ücretsiz danışmanlık', 'craftsoft iletişim', 'dijital ajans istanbul']
  },
  {
    question: 'SEO hizmetlerinizde hangi çalışmalar yapılıyor?',
    answer: 'SEO çalışmalarımız; teknik SEO analizi, anahtar kelime araştırması, içerik optimizasyonu, backlink stratejisi, Core Web Vitals optimizasyonu ve yerel SEO (Local SEO) çalışmalarını kapsıyor. Google Search Console ve Analytics entegrasyonu ile düzenli raporlama sağlıyoruz.',
    keywords: ['seo', 'arama motoru optimizasyonu', 'teknik seo', 'yerel seo', 'google search console', 'core web vitals']
  },
  {
    question: 'Sosyal medya yönetimi hizmetiniz neleri kapsıyor?',
    answer: 'Sosyal medya yönetimi hizmetlerimiz; içerik takvimi oluşturma, görsel tasarım, topluluk yönetimi, influencer işbirlikleri, sosyal medya reklamları ve performans raporlamasını içerir. Instagram, Facebook, LinkedIn, Twitter ve TikTok platformlarında profesyonel yönetim sağlıyoruz.',
    keywords: ['sosyal medya yönetimi', 'instagram yönetimi', 'linkedin yönetimi', 'içerik takvimi', 'influencer marketing']
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" ref={sectionRef} className="relative py-24 sm:py-32 bg-white">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
            Sıkça Sorulan Sorular
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Merak Ettikleriniz
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dijital pazarlama ve yazılım hizmetlerimiz hakkında sık sorulan soruların cevapları.
          </p>
        </div>

        {/* FAQ List */}
        <div 
          className={`
            space-y-4
            transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`
                rounded-2xl border border-gray-100 overflow-hidden bg-white
                transition-all duration-300
                ${openIndex === index ? 'border-orange-200 shadow-md' : 'hover:border-gray-200'}
              `}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`
                    w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                    transition-colors duration-300
                    ${openIndex === index ? 'bg-orange-100' : 'bg-gray-100'}
                  `}>
                    <HelpCircle className={`w-5 h-5 ${openIndex === index ? 'text-craft-orange' : 'text-gray-500'}`} />
                  </div>
                  <span 
                    className="text-gray-900 font-medium pr-4"
                    itemProp="name"
                  >
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`
                    w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300
                    ${openIndex === index ? 'rotate-180 text-craft-orange' : ''}
                  `} 
                />
              </button>
              
              <div 
                className={`
                  overflow-hidden transition-all duration-300
                  ${openIndex === index ? 'max-h-96' : 'max-h-0'}
                `}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-16 sm:pl-20">
                  <p 
                    className="text-gray-600 leading-relaxed"
                    itemProp="text"
                  >
                    {faq.answer}
                  </p>
                  {/* Hidden keywords for SEO/GEO */}
                  <div className="sr-only" aria-hidden="true">
                    {faq.keywords.join(', ')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Başka sorularınız mı var?</p>
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity hover:shadow-glow-orange"
          >
            Bize Ulaşın
          </Link>
        </div>
      </div>

      {/* Structured Data for FAQ Page */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answer
            }
          }))
        })
      }} />
    </section>
  );
}
