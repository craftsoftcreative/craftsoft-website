import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Reveal } from './Reveal';

interface PageHeroProps {
  badge: string;
  title: string;
  highlight?: string;
  subtitle: string;
  breadcrumb?: { label: string; to?: string }[];
}

export function PageHero({ badge, title, highlight, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gray-50 pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-100 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-50 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <Reveal>
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link to="/" className="hover:text-craft-orange transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                Anasayfa
              </Link>
              {breadcrumb.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-gray-300">/</span>
                  {crumb.to ? (
                    <Link to={crumb.to} className="hover:text-craft-orange transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gray-700">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}

        <Reveal delay={0.05}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-craft-orange text-sm font-medium mb-5">
            {badge}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 text-balance">
            {title} {highlight && <span className="gradient-text">{highlight}</span>}
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
