import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from '@/components/ui/sonner';
import { usePageMeta } from '@/hooks/usePageMeta';
import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { Projects } from '@/sections/Projects';
import { About } from '@/sections/About';
import { FAQ } from '@/sections/FAQ';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { Marquee } from '@/components/shared/Marquee';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { BlogPage } from '@/pages/BlogPage';
import { BlogPostPage } from '@/pages/BlogPostPage';
import { LegalPage } from '@/pages/LegalPage';
import { ProductPage } from '@/pages/ProductPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import './App.css';

// HashRouter döneminden kalan "/#/hizmetler/..." biçimli URL'leri temiz
// path'e yönlendirir (eski bookmark'lar ve indekslenmiş linkler için)
function LegacyHashRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash.startsWith('#/')) {
      navigate(location.hash.slice(1), { replace: true });
    }
  }, [location.hash, navigate]);

  return null;
}

function ScrollManager() {
  const { pathname, hash, state } = useLocation();

  useEffect(() => {
    const anchor = hash || (state as { scrollTo?: string } | null)?.scrollTo;
    if (anchor) {
      // Sayfa geçiş animasyonu bitene kadar hedef bölümün DOM'a girmesini bekle
      let attempts = 0;
      let cancelled = false;
      const tryScroll = () => {
        if (cancelled) return;
        const element = document.getElementById(anchor.replace(/^#/, ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts++ < 20) {
          setTimeout(tryScroll, 150);
        }
      };
      const timer = setTimeout(tryScroll, 100);
      return () => {
        cancelled = true;
        clearTimeout(timer);
      };
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash, state]);

  return null;
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  );
}

function HomePage() {
  usePageMeta({
    title: 'Craftsoft | Dijital Pazarlama, Meta Reklamları & Web Geliştirme Ajansı',
    description:
      'Craftsoft - İstanbul merkezli dijital ajans. Meta reklamları, Google Ads, SEO, sosyal medya yönetimi, drone çekim ve özel web yazılım hizmetleriyle işletmenizi dijitalde büyütüyoruz.',
    canonicalPath: '/',
  });
  return (
    <PageWrapper>
      <Hero />
      <Marquee />
      <Services />
      <Projects />
      <About />
      <FAQ />
      <Contact />
    </PageWrapper>
  );
}

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/hizmetler" element={<PageWrapper><ServicesPage /></PageWrapper>} />
        <Route path="/hizmetler/:slug" element={<PageWrapper><ServiceDetailPage /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><BlogPage /></PageWrapper>} />
        <Route path="/blog/:slug" element={<PageWrapper><BlogPostPage /></PageWrapper>} />
        <Route path="/yasal/:slug" element={<PageWrapper><LegalPage /></PageWrapper>} />
        <Route path="/urunler/:slug" element={<PageWrapper><ProductPage /></PageWrapper>} />
        <Route path="/projeler" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
        <Route path="/hakkimizda" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/iletisim" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-clip">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: 'white',
            border: '1px solid #e5e7eb',
            color: '#1f2937',
          },
        }}
      />
      <BrowserRouter>
        <LegacyHashRedirect />
        <ScrollManager />
        <Navbar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
