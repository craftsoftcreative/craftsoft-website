import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Code2, Video, Plane } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      const orbs = heroRef.current.querySelectorAll('.orb');
      orbs.forEach((orb, index) => {
        const factor = (index + 1) * 0.5;
        (orb as HTMLElement).style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white"
    >
      {/* Subtle Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb absolute top-20 left-10 w-72 h-72 bg-orange-100 rounded-full blur-[100px] transition-transform duration-300 ease-out" />
        <div className="orb absolute top-40 right-20 w-96 h-96 bg-blue-50 rounded-full blur-[120px] transition-transform duration-300 ease-out" />
        <div className="orb absolute bottom-20 left-1/3 w-80 h-80 bg-orange-50 rounded-full blur-[100px] transition-transform duration-300 ease-out" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-craft-orange animate-pulse" />
              <span className="text-sm text-gray-600">Dijital Çözümler, Yaratıcı Sonuçlar</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-gray-900">Markanızı</span>
              <br />
              <span className="gradient-text">Dijitalde Büyütüyoruz</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Meta reklamları, Google Ads, sosyal medya yönetimi ve özel yazılım çözümleriyle işletmenizi büyütüyoruz.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                size="lg" 
                className="gradient-bg text-white border-0 hover:opacity-90 transition-all duration-300 hover:shadow-glow-orange group px-8"
                onClick={() => navigate('/iletisim')}
              >
                Ücretsiz Teklif Al
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-orange-50 hover:text-gray-900 hover:border-craft-orange transition-all duration-300 px-8"
                onClick={() => navigate('/hizmetler')}
              >
                Hizmetlerimiz
              </Button>
            </div>

            {/* Service Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {[
                { icon: TrendingUp, label: 'Dijital Pazarlama' },
                { icon: Video, label: 'Video & Fotoğraf' },
                { icon: Plane, label: 'Drone Çekim' },
                { icon: Code2, label: 'Web Geliştirme' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group/chip flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 hover:border-craft-orange/50 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                >
                  <span className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center group-hover/chip:rotate-12 transition-transform duration-300">
                    <item.icon className="w-3.5 h-3.5 text-white" />
                  </span>
                  <span className="text-xs font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Services Image */}
          <div className="relative animate-fade-in-up hidden lg:block" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-orange-100/50 rounded-3xl blur-3xl" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-xl">
                <img 
                  src="/hizmetler.jpg" 
                  alt="Craftsoft Dijital Hizmetler - Meta Reklam, Google Ads, Sosyal Medya, Web Tasarım, Yazılım"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl bg-white border border-gray-100 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">+</span>
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">50+</div>
                    <div className="text-gray-500 text-xs">Başarılı Proje</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
