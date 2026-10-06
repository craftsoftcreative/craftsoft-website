import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, Tag, ArrowRight, Newspaper, Flame, LayoutGrid, ChevronDown, ChevronUp } from 'lucide-react';
import { blogPosts, getAllTags, getAllCategories, formatDate } from '@/data/blog';
import { PageHero } from '@/components/shared/PageHero';
import { JsonLd } from '@/components/shared/JsonLd';
import { usePageMeta } from '@/hooks/usePageMeta';

const BASE_URL = 'https://craftsoft.com.tr';

export function BlogPage() {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const routerLocation = useLocation();

  usePageMeta({
    title: 'Blog | Dijital Pazarlama, SEO & Yazılım Rehberleri | Craftsoft',
    description:
      'Dijital pazarlama, SEO, Meta ve Google Ads reklamları, sosyal medya, web tasarım ve yazılım üzerine uzman rehberler. Uzun ve uygulanabilir blog yazıları.',
    canonicalPath: '/blog',
  });

  // Blog yazısındaki etikete tıklayınca gelen filtre — render sırasında senkronize
  // edilir (React "adjust state during render" kalıbı); replaceState ise effect'te.
  const stateTag = (routerLocation.state as { tag?: string } | null)?.tag ?? null;
  const [prevStateTag, setPrevStateTag] = useState(stateTag);
  if (stateTag !== prevStateTag) {
    setPrevStateTag(stateTag);
    if (stateTag) setActiveTag(stateTag);
  }

  useEffect(() => {
    if (stateTag) window.history.replaceState(null, '');
  }, [stateTag]);

  const allTags = useMemo(() => getAllTags(), []);
  const allCategories = useMemo(() => getAllCategories(), []);
  const popularPosts = useMemo(() => [...blogPosts].sort((a, b) => b.readingTime - a.readingTime).slice(0, 4), []);
  const [showAllTags, setShowAllTags] = useState(false);
  const TAG_LIMIT = 12;
  const visibleTags = showAllTags ? allTags : allTags.slice(0, TAG_LIMIT);

  const hasFilter = Boolean(search.trim() || activeTag || activeCategory);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Craftsoft Blog',
    description: 'Dijital pazarlama, SEO, tasarım ve yazılım üzerine uzman rehberler.',
    url: `${BASE_URL}/blog`,
    inLanguage: 'tr-TR',
    blogPost: blogPosts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${BASE_URL}/blog/${p.slug}`,
      datePublished: p.date,
      author: { '@type': 'Organization', name: p.author },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    ],
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLocaleLowerCase('tr-TR');
    return blogPosts.filter((post) => {
      const matchesCategory = !activeCategory || post.category === activeCategory;
      const matchesTag = !activeTag || post.tags.includes(activeTag);
      const matchesSearch =
        !q ||
        post.title.toLocaleLowerCase('tr-TR').includes(q) ||
        post.excerpt.toLocaleLowerCase('tr-TR').includes(q) ||
        post.category.toLocaleLowerCase('tr-TR').includes(q) ||
        post.tags.some((t) => t.toLocaleLowerCase('tr-TR').includes(q));
      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [search, activeTag, activeCategory]);

  const clearFilters = () => {
    setSearch('');
    setActiveTag(null);
    setActiveCategory(null);
  };

  const featured = !hasFilter ? filtered[0] : undefined;
  const rest = featured ? filtered.slice(1) : filtered;

  return (
    <>
      <PageHero
        badge="Blog"
        title="Dijital Dünyadan"
        highlight="İçgörüler"
        subtitle="Pazarlama, tasarım ve yazılım üzerine derinlemesine rehberler. Uzun, konuya hakim ve uygulanabilir içerikler."
        breadcrumb={[{ label: 'Blog' }]}
      />

      {/* Konular — ana başlıkta her zaman görünür */}
      <div className="bg-white border-b border-gray-100 sticky top-[64px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="flex items-center gap-1.5 text-sm font-semibold text-gray-900 flex-shrink-0">
              <LayoutGrid className="w-4 h-4 text-craft-orange" />
              Konular:
            </span>
            <button
              onClick={() => setActiveCategory(null)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === null
                  ? 'gradient-bg text-white shadow-md'
                  : 'bg-orange-50 text-gray-600 border border-orange-100 hover:border-craft-orange/40 hover:text-craft-orange'
              }`}
            >
              Tümü
            </button>
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'gradient-bg text-white shadow-md'
                    : 'bg-orange-50 text-gray-600 border border-orange-100 hover:border-craft-orange/40 hover:text-craft-orange'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
            {/* Sol: arama + yazılar */}
            <div className="min-w-0">
              {/* Arama */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative mb-8"
              >
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Yazılarda ara: SEO, Google Ads, Instagram..."
                  className="w-full pl-14 pr-5 py-4 rounded-2xl bg-white border border-orange-100 text-gray-900 placeholder:text-gray-400 outline-none transition-all focus:border-craft-orange focus:ring-4 focus:ring-orange-100"
                />
              </motion.div>

              {/* Aktif filtre rozeti */}
              {hasFilter && (
                <div className="flex items-center gap-2 mb-6 text-sm">
                  <span className="text-gray-500">
                    {filtered.length} sonuç bulundu
                  </span>
                  {(activeTag || activeCategory) && (
                    <button
                      onClick={clearFilters}
                      className="px-3 py-1 rounded-full bg-orange-100 text-craft-orange font-medium hover:bg-orange-200 transition-colors"
                    >
                      Filtreleri Temizle ×
                    </button>
                  )}
                </div>
              )}

              <AnimatePresence mode="wait">
                {filtered.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-20 bg-white rounded-3xl border border-orange-100"
                  >
                    <Newspaper className="w-14 h-14 text-orange-200 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sonuç bulunamadı</h3>
                    <p className="text-gray-500 mb-6">
                      Aramanızla eşleşen yazı yok. Farklı bir anahtar kelime deneyin.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="px-6 py-2.5 rounded-xl gradient-bg text-white font-semibold hover:shadow-glow-orange transition-all"
                    >
                      Tüm Yazıları Göster
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {/* Öne çıkan yazı */}
                    {featured && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-10"
                      >
                        <Link
                          to={`/blog/${featured.slug}`}
                          className="group grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-orange-100 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                        >
                          <div className="relative p-8 sm:p-10 flex flex-col justify-center">
                            <span className="inline-flex w-fit px-3 py-1 rounded-full gradient-bg text-white text-xs font-semibold mb-4">
                              Öne Çıkan
                            </span>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-craft-orange transition-colors">
                              {featured.title}
                            </h2>
                            <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                              <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                {formatDate(featured.date)}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                {featured.readingTime} dk okuma
                              </span>
                            </div>
                            <span className="inline-flex items-center gap-2 text-craft-orange font-semibold">
                              Okumaya Başla
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                            </span>
                          </div>
                          <div className="relative min-h-[220px] gradient-bg animate-gradient flex items-center justify-center p-10">
                            <span className="text-white/90 font-black text-4xl sm:text-5xl text-center leading-tight">
                              {featured.title.split(':')[0].split(' ').slice(0, 3).join(' ')}
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    )}

                    {/* Yazı ızgarası */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {rest.map((post, index) => (
                        <motion.article
                          key={post.slug}
                          layout
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.4) }}
                        >
                          <Link
                            to={`/blog/${post.slug}`}
                            className="group flex flex-col h-full p-6 rounded-2xl bg-white border border-orange-100 hover:border-craft-orange/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                          >
                            <div className="flex items-center justify-between mb-4">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  setActiveCategory(post.category);
                                }}
                                className="px-3 py-1 rounded-full bg-orange-100 text-craft-orange text-xs font-medium hover:bg-orange-200 transition-colors"
                              >
                                {post.category}
                              </button>
                              <span className="flex items-center gap-1 text-xs text-gray-400">
                                <Clock className="w-3.5 h-3.5" />
                                {post.readingTime} dk
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-craft-orange transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4 flex-1">
                              {post.excerpt}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {post.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className="flex items-center gap-1 text-xs text-gray-400">
                                  <Tag className="w-3 h-3 text-craft-orange/60" />
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-orange-50">
                              <span className="flex items-center gap-1.5 text-xs text-gray-400">
                                <Calendar className="w-3.5 h-3.5" />
                                {formatDate(post.date)}
                              </span>
                              <ArrowRight className="w-4 h-4 text-craft-orange group-hover:translate-x-1 transition-transform" />
                            </div>
                          </Link>
                        </motion.article>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sağ: yapışkan kenar çubuğu */}
            <aside className="space-y-8 lg:sticky lg:top-[140px] self-start">
              {/* Etiketler */}
              <div className="p-6 rounded-2xl bg-white border border-orange-100">
                <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-4">
                  <Tag className="w-4 h-4 text-craft-orange" />
                  Etiketler
                </h3>
                <div className="flex flex-wrap gap-2">
                  {visibleTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                        activeTag === tag
                          ? 'gradient-bg text-white shadow-md scale-105'
                          : 'bg-orange-50 text-gray-600 border border-orange-100 hover:border-craft-orange/40 hover:text-craft-orange'
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
                {allTags.length > TAG_LIMIT && (
                  <button
                    onClick={() => setShowAllTags(!showAllTags)}
                    className="mt-4 w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-craft-orange bg-orange-50 border border-orange-100 hover:bg-orange-100 transition-colors"
                  >
                    {showAllTags ? (
                      <>Daha Az Göster <ChevronUp className="w-3.5 h-3.5" /></>
                    ) : (
                      <>Daha Fazla Göster ({allTags.length - TAG_LIMIT}) <ChevronDown className="w-3.5 h-3.5" /></>
                    )}
                  </button>
                )}
              </div>

              {/* Popüler yazılar */}
              <div className="p-6 rounded-2xl bg-white border border-orange-100">
                <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-5">
                  <Flame className="w-4 h-4 text-craft-orange" />
                  Öne Çıkanlar
                </h3>
                <div className="space-y-5">
                  {popularPosts.map((post) => (
                    <Link
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className="group flex gap-3"
                    >
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl gradient-bg text-white font-black flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                        {post.readingTime}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-craft-orange transition-colors">
                          {post.title}
                        </h4>
                        <span className="text-xs text-gray-400">{post.category}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 rounded-2xl gradient-bg animate-gradient text-center">
                <h3 className="text-white font-bold mb-2">Sorularınız mı var?</h3>
                <p className="text-white/80 text-sm mb-4">
                  Dijital projeleriniz için ücretsiz keşif görüşmesi planlayalım.
                </p>
                <Link
                  to="/"
                  state={{ scrollTo: 'iletisim' }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-craft-orange text-sm font-semibold hover:scale-105 transition-transform"
                >
                  Bize Ulaşın
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <JsonLd data={[blogSchema, breadcrumbSchema]} />
    </>
  );
}
