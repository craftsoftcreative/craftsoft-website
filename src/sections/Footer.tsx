import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Github, Mail, Phone, MapPin, ArrowUp, Zap } from 'lucide-react';
import { services } from '@/data/services';
import { blogPosts } from '@/data/blog';

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/craftsoft', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/craftsoft', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/craftsoft', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/craftsoft', label: 'GitHub' },
];

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToAnchor = (hash: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: hash } });
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const latestPosts = blogPosts.slice(0, 3);

  return (
    <footer className="relative overflow-hidden bg-craft-navy pt-20 pb-8">
      {/* Dekoratif ışıklar */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-craft-navy-50/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-craft-orange/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 group mb-6">
              <span className="text-2xl font-bold text-white tracking-tight">
                craftsoft<span className="text-craft-orange">creative</span>
              </span>
              <span className="w-6 h-6 rounded-md gradient-bg animate-gradient flex items-center justify-center opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:rotate-12 transition-all duration-300">
                <Zap className="w-3.5 h-3.5 text-white" fill="currentColor" />
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              İstanbul merkezli dijital pazarlama ve yazılım geliştirme ajansı.
              Meta reklamları, Google Ads, sosyal medya yönetimi ve özel yazılım çözümleri.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@craftsoft.com.tr" className="flex items-center gap-3 text-white/60 hover:text-craft-orange transition-colors text-sm">
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </span>
                info@craftsoft.com.tr
              </a>
              <a href="tel:+905551234567" className="flex items-center gap-3 text-white/60 hover:text-craft-orange transition-colors text-sm">
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </span>
                +90 555 123 45 67
              </a>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </span>
                İstanbul, Türkiye
              </div>
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-craft-orange" />
              Hizmetler
            </h4>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/hizmetler/${service.slug}`}
                    className="text-white/60 hover:text-craft-orange transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-craft-orange" />
              Blog
            </h4>
            <ul className="space-y-2.5">
              {latestPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-white/60 hover:text-craft-orange transition-colors text-sm line-clamp-2"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/blog"
                  className="text-craft-orange font-medium text-sm hover:underline"
                >
                  Tüm yazılar →
                </Link>
              </li>
            </ul>
          </div>

          {/* Şirket */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-craft-orange" />
              Şirket
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => goToAnchor('projeler')}
                  className="text-white/60 hover:text-craft-orange transition-colors text-sm"
                >
                  Projelerimiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => goToAnchor('hakkimizda')}
                  className="text-white/60 hover:text-craft-orange transition-colors text-sm"
                >
                  Hakkımızda
                </button>
              </li>
              <li>
                <button
                  onClick={() => goToAnchor('sss')}
                  className="text-white/60 hover:text-craft-orange transition-colors text-sm"
                >
                  Sıkça Sorulan Sorular
                </button>
              </li>
              <li>
                <button
                  onClick={() => goToAnchor('iletisim')}
                  className="text-white/60 hover:text-craft-orange transition-colors text-sm"
                >
                  İletişim
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Craftsoft. Tüm hakları saklıdır.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-craft-orange hover:bg-craft-orange hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Yukarı çık"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-craft-orange hover:-translate-y-1 transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
