import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { services } from '@/data/services';

interface NavItem {
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  { label: 'Projeler', to: '/projeler' },
  { label: 'Blog', to: '/blog' },
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'İletişim', to: '/iletisim' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rota değişince menüleri kapat (render sırasında senkronize — React'ın
  // "adjust state during render" kalıbı; effect'te setState kaskad render yaratır)
  const routeKey = `${location.pathname}${location.hash}`;
  const [lastRouteKey, setLastRouteKey] = useState(routeKey);
  if (routeKey !== lastRouteKey) {
    setLastRouteKey(routeKey);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }

  const openServices = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setIsServicesOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  const handleNav = (item: NavItem) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    navigate(item.to);
  };

  const goToContact = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    navigate('/iletisim');
  };

  const isActive = (item: NavItem) => location.pathname.startsWith(item.to);

  const isServicesActive = location.pathname.startsWith('/hizmetler');

  const navLinkClass = (active: boolean) =>
    `relative flex items-center gap-1 px-5 py-2.5 text-base font-semibold rounded-xl transition-colors duration-300 ${
      active
        ? 'text-craft-orange'
        : 'text-gray-800 hover:text-craft-orange hover:bg-orange-50'
    }`;

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group" aria-label="Craftsoft anasayfa">
              <span className="relative flex items-center justify-center">
                {/* Hover'da beliren gradyan halka */}
                <span className="absolute w-10 h-10 rounded-xl gradient-bg opacity-0 scale-75 blur-[1px] group-hover:opacity-100 group-hover:scale-110 group-hover:blur-md transition-all duration-500" />
                <img
                  src="/favicon.png"
                  alt="Craftsoft"
                  className="relative w-9 h-9 rounded-xl object-cover ring-1 ring-gray-100 bg-white shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:ring-2 group-hover:ring-craft-orange/60 group-hover:shadow-glow-orange"
                />
              </span>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                craftsoft<span className="text-craft-orange">creative</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              {/* Hizmetler — Mega Menü */}
              <div
                onMouseEnter={openServices}
                onMouseLeave={scheduleClose}
              >
                <button
                  onClick={() => navigate('/hizmetler')}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  className={navLinkClass(isServicesActive)}
                >
                  Hizmetler
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-craft-orange' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className="absolute left-0 right-0 top-full pt-3"
                    >
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-2xl shadow-gray-900/10">
                          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_250px]">
                          {/* Hizmet listesi */}
                          <div className="col-span-2 grid grid-cols-2 gap-1 p-4">
                            {services.map((service) => {
                              const Icon = service.icon;
                              return (
                                <Link
                                  key={service.slug}
                                  to={`/hizmetler/${service.slug}`}
                                  className="group/item flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-orange-50 transition-colors duration-200"
                                >
                                  <span className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform duration-300`}>
                                    <Icon className="w-5 h-5 text-white" />
                                  </span>
                                  <span className="min-w-0">
                                    <span className="flex items-center gap-1.5 font-semibold text-gray-900 text-sm group-hover/item:text-craft-orange transition-colors">
                                      {service.title}
                                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover/item:text-craft-orange group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
                                    </span>
                                    <span className="block text-xs text-gray-400 mt-0.5 leading-snug">
                                      {service.shortTitle}
                                    </span>
                                  </span>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Sağ promo panel */}
                          <div className="relative bg-craft-navy p-6 flex flex-col justify-between overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-36 h-36 bg-craft-orange/20 rounded-full blur-3xl" />
                            <div className="relative">
                              <Sparkles className="w-6 h-6 text-craft-orange mb-3" />
                              <p className="text-white font-bold text-lg leading-snug mb-2">
                                Özel bir projeniz mi var?
                              </p>
                              <p className="text-white/50 text-sm leading-relaxed">
                                İhtiyacınıza özel dijital çözüm için ücretsiz keşif görüşmesi planlayalım.
                              </p>
                            </div>
                            <button
                              onClick={goToContact}
                              className="relative mt-6 inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl gradient-bg text-white font-semibold text-sm transition-all duration-300 hover:shadow-glow-orange hover:scale-[1.02]"
                            >
                              Teklif Al
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Alt bar */}
                        <Link
                          to="/hizmetler"
                          className="flex items-center justify-between px-6 py-3.5 bg-gray-50 hover:bg-orange-50 border-t border-gray-100 transition-colors group/footer"
                        >
                          <span className="text-sm font-semibold text-gray-700 group-hover/footer:text-craft-orange transition-colors">
                            Tüm hizmetleri incele
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover/footer:text-craft-orange group-hover/footer:translate-x-1 transition-all" />
                        </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item)}
                  className={navLinkClass(isActive(item))}
                >
                  {item.label}
                  <span
                    className={`absolute left-5 right-5 bottom-1 h-0.5 rounded-full gradient-bg transition-transform duration-300 origin-left ${
                      isActive(item) ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                onClick={goToContact}
                className="gradient-bg text-white border-0 text-base px-6 hover:shadow-glow-orange transition-all duration-300 hover:scale-105"
              >
                Teklif Al
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menü"
              className="lg:hidden p-2 rounded-lg bg-orange-50 text-craft-orange hover:bg-orange-100 transition-colors"
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
              className="fixed inset-0 z-40 lg:hidden bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="fixed top-20 left-4 right-4 z-40 lg:hidden p-5 rounded-2xl bg-white shadow-xl border border-gray-100 max-h-[calc(100vh-6rem)] overflow-y-auto"
            >
              {/* Hizmetler (akordeon) */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
              >
                <button
                  onClick={() => setIsMobileServicesOpen((v) => !v)}
                  aria-expanded={isMobileServicesOpen}
                  className={`w-full flex items-center justify-between px-4 py-3.5 text-left text-lg font-medium rounded-xl transition-all ${
                    isMobileServicesOpen || isServicesActive
                      ? 'text-craft-orange bg-orange-50'
                      : 'text-gray-700 hover:bg-orange-50'
                  }`}
                >
                  Hizmetler
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-1 pl-3 space-y-1">
                        {services.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.slug}
                              to={`/hizmetler/${service.slug}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:text-craft-orange hover:bg-orange-50 transition-colors"
                            >
                              <span className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                                <Icon className="w-4 h-4 text-white" />
                              </span>
                              <span className="text-base font-medium">{service.title}</span>
                            </Link>
                          );
                        })}
                        <Link
                          to="/hizmetler"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-craft-orange"
                        >
                          Tüm hizmetler
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <div className="mt-1 space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (i + 1) * 0.05 }}
                    onClick={() => handleNav(item)}
                    className={`
                      w-full px-4 py-3.5 text-left text-lg font-medium rounded-xl transition-all
                      ${isActive(item)
                        ? 'text-craft-orange font-semibold bg-orange-50'
                        : 'text-gray-700 hover:bg-orange-50'
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
                  className="w-full gradient-bg text-white border-0 text-base py-6 hover:shadow-glow-orange"
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
