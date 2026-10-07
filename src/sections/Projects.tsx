import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, UtensilsCrossed, ShoppingCart, Bot } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
  features: string[];
  status: 'Aktif' | 'Geliştirme' | 'Yayında';
  url?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'AkıllıSofra',
    tagline: 'Akıllı Restoran Yönetimi',
    description: 'Restoranlar için kapsamlı dijital çözüm. QR menü, sipariş yönetimi, mutfak ekranları ve raporlama sistemi.',
    icon: UtensilsCrossed,
    color: 'text-orange-500',
    gradient: 'from-orange-500/20 to-red-500/20',
    features: ['QR Dijital Menü', 'Masa Yönetimi', 'Sipariş Takibi', 'Raporlama'],
    status: 'Yayında',
    url: 'https://akillisofra.com.tr'
  },
  {
    id: 2,
    name: 'İhaleYapı',
    tagline: 'İhale & Tedarik Yönetimi',
    description: 'Kamu ve özel sektör için ihale ve tedarik süreçleri yönetim platformu. İhale takibi ve teklif yönetimi.',
    icon: ShoppingCart,
    color: 'text-emerald-500',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    features: ['İhale Takibi', 'Teklif Yönetimi', 'Tedarikçi Portalı', 'Bütçe Planlama'],
    status: 'Aktif',
    url: 'https://ihaleyapi.com.tr'
  },
  {
    id: 3,
    name: 'Salvo Agent',
    tagline: 'Yapay Zekâ Operasyon Platformu',
    description:
      'SALVO merkezi süpervizörü liderliğindeki hiyerarşik CrewAI ajan takımlarıyla Finans, Satış, Pazarlama ve Mühendislik operasyonlarını tek çatıda otonom yöneten yeni nesil yapay zekâ platformu. CoinMarketCap, TradingView, Investing.com ve Bloomberg kaynaklı gerçek zamanlı veri kazıma, RAG hafızası ve Obsidian tarzı Sinaps Bilgi Ağı.',
    icon: Bot,
    color: 'text-blue-500',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    features: ['CrewAI Ajan Takımları', 'Gerçek Zamanlı Veri Kazıma', 'RAG Hafızası', 'Sinaps Bilgi Ağı'],
    status: 'Geliştirme',
    url: 'https://salvoagent.ai'
  }
];

export function Projects() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projeler" className="relative py-24 sm:py-32 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Projelerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Geliştirdiğimiz{' '}
            <span className="gradient-text">Dijital Ürünler</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            İşletmelerin dijital dönüşümüne katkı sağlayan özel projelerimiz.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isVisible = visibleCards.has(index);
            
            return (
              <div
                key={project.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`
                  group relative rounded-2xl overflow-hidden
                  transition-all duration-700
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-white border border-gray-100 rounded-2xl group-hover:border-orange-200 group-hover:shadow-lg transition-all" />
                
                {/* Gradient Glow */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${project.gradient} 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl
                `} />

                <div className="relative p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`
                      w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient}
                      flex items-center justify-center border border-gray-100
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      <Icon className={`w-7 h-7 ${project.color}`} />
                    </div>
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${project.status === 'Yayında' ? 'bg-emerald-100 text-emerald-600' : 
                        project.status === 'Aktif' ? 'bg-orange-100 text-craft-orange' : 
                        'bg-amber-100 text-amber-600'}
                    `}>
                      {project.status}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-craft-orange transition-colors">
                    {project.name}
                  </h3>
                  <p className={`text-sm font-medium ${project.color} mb-4`}>
                    {project.tagline}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, fIndex) => (
                      <span 
                        key={fIndex}
                        className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a 
                    href={project.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-craft-orange/70 hover:text-craft-orange group/btn transition-colors"
                  >
                    <span>Projeyi İncele</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
