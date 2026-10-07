import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  type: 'page' | 'anchor';
  to?: string;
  hash?: string;
}

const navItems: NavItem[] = [
  { label: 'Hizmetler', type: 'anchor', hash: 'hizmetler' },
  { label: 'Projeler', type: 'anchor', hash: 'projeler' },
  { label: 'Blog', type: 'page', to: '/blog' },
  { label: 'Hakkımızda', type: 'anchor', hash: 'hakkimizda' },
  { label: 'İletişim', type: 'anchor', hash: 'iletisim' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rota değişince mobil menüyü kapat (render sırasında senkronize — React'ın
  // "adjust state during render" kalıbı; effect'te setState kaskad render yaratır)
  const routeKey = `${location.pathname}${location.hash}`;
  const [lastRouteKey, setLastRouteKey] = useState(routeKey);
  if (routeKey !== lastRouteKey) {
    setLastRouteKey(routeKey);
    setIsMobileMenuOpen(false);
  }

  const handleNav = (item: NavItem) => {
    setIsMobileMenuOpen(false);
    if (item.type === 'page' && item.to) {
      navigate(item.to);
      return;
    }
    if (item.hash) {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: item.hash } });
      } else {
        document.getElementById(item.hash)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const goToContact = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'iletisim' } });
    } else {
      document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (item: NavItem) =>
    (item.type === 'page' && item.to && location.pathname.startsWith(item.to)) ||
    (item.type === 'anchor' && location.pathname === '/' && location.hash === `#${item.hash}`);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled || location.pathname !== '/'
            ? 'py-3 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm'
            : 'py-5 bg-transparent'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group" aria-label="Craftsoft anasayfa">
              <img
                src="/favicon.png"
                alt="Craftsoft"
                className="w-9 h-9 rounded-xl object-cover ring-1 ring-gray-100 shadow-sm group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-300"
              />
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                craftsoft<span className="text-craft-orange">creative</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item)}
                  className={`
                    relative px-4 py-2 text-sm rounded-lg transition-colors duration-300
                    ${isActive(item)
                      ? 'text-craft-orange font-semibold'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-orange-50'
                    }
                  `}
                >
                  {item.label}
                  {item.type === 'page' && (
                    <span
                      className={`absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full gradient-bg transition-transform duration-300 origin-left ${
                        isActive(item) ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={goToContact}
                className="gradient-bg text-white border-0 hover:shadow-glow-orange transition-all duration-300 hover:scale-105"
              >
                Teklif Al
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menü"
              className="md:hidden p-2 rounded-lg bg-orange-50 text-craft-orange hover:bg-orange-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 md:hidden bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="fixed top-20 left-4 right-4 z-40 md:hidden p-6 rounded-2xl bg-white shadow-xl border border-gray-100"
            >
              <div className="space-y-2">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNav(item)}
                    className={`
                      w-full px-4 py-3 text-left rounded-xl transition-all
                      ${isActive(item)
                        ? 'text-craft-orange font-semibold bg-orange-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-orange-50'
                      }
                    `}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Button
                  onClick={goToContact}
                  className="w-full gradient-bg text-white border-0 hover:shadow-glow-orange"
                >
                  Teklif Al
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
