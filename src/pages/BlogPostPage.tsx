import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import {
  getPostBySlug,
  getRelatedPosts,
  formatDate,
  type BlogBlock,
} from '@/data/blog';
import { Reveal } from '@/components/shared/Reveal';
import { ShareButtons } from '@/components/shared/ShareButtons';
import { JsonLd } from '@/components/shared/JsonLd';
import { usePageMeta } from '@/hooks/usePageMeta';

const BASE_URL = 'https://craftsoft.com.tr';

function blockText(block: BlogBlock): string {
  switch (block.type) {
    case 'list':
      return block.items.join(' ');
    case 'quote':
      return block.text;
    default:
      return block.text;
  }
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case 'heading':
      return (
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5 text-balance">
          {block.text}
        </h2>
      );
    case 'subheading':
      return (
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          {block.text}
        </h3>
      );
    case 'list':
      return (
        <ul className="my-6 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-600 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-craft-orange mt-2.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote className="my-8 p-6 sm:p-8 rounded-2xl bg-orange-50 border-l-4 border-craft-orange">
          <Quote className="w-6 h-6 text-craft-orange mb-3" />
          <p className="text-lg text-gray-800 font-medium leading-relaxed italic">
            {block.text}
          </p>
          {block.author && (
            <cite className="block mt-3 text-sm text-gray-500 not-italic">— {block.author}</cite>
          )}
        </blockquote>
      );
    case 'highlight':
      return (
        <div className="my-8 p-6 rounded-2xl gradient-bg animate-gradient">
          <p className="text-white font-semibold leading-relaxed">{block.text}</p>
        </div>
      );
    default:
      return (
        <p className="text-gray-600 text-lg leading-relaxed my-5">{block.text}</p>
      );
  }
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  const fullText = post ? post.blocks.map(blockText).join(' ') : '';
  const wordCount = fullText.split(/\s+/).filter(Boolean).length;

  usePageMeta(
    post
      ? {
          title: `${post.title} | Craftsoft Blog`,
          description: post.excerpt,
          canonicalPath: `/blog/${post.slug}`,
        }
      : { title: 'Blog | Craftsoft', description: 'Craftsoft blog yazıları.', canonicalPath: '/blog' }
  );

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedPosts(post);
  const shareUrl = `${window.location.origin}/blog/${post.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    inLanguage: 'tr-TR',
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Craftsoft',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${post.slug}` },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    wordCount,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE_URL}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      {/* Article hero */}
      <section className="relative overflow-hidden bg-gray-50 pt-32 pb-14 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-orange-100 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-50 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-gray-500 mb-8"
          >
            <Link to="/" className="hover:text-craft-orange transition-colors flex items-center gap-1 py-2.5 -my-2.5 px-1 -mx-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              Anasayfa
            </Link>
            <span className="text-gray-300">/</span>
            <Link to="/blog" className="hover:text-craft-orange transition-colors py-2.5 -my-2.5 px-3 -mx-3">
              Blog
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-700 line-clamp-1">{post.title}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-craft-orange text-sm font-medium mb-5">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-9 h-9 rounded-full gradient-bg text-white flex items-center justify-center text-xs font-bold">
                  CS
                </span>
                <span>
                  <span className="block text-gray-900 font-medium">{post.author}</span>
                  <span className="block text-xs">{post.authorRole}</span>
                </span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readingTime} dk okuma
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {post.blocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <Block block={block} />
            </motion.div>
          ))}

          {/* Tags */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-gray-100">
              <Tag className="w-4 h-4 text-gray-400 mr-1" />
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  to="/blog"
                  state={{ tag }}
                  className="px-3.5 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium hover:bg-orange-100 hover:text-craft-orange transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </Reveal>

          {/* Share */}
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Bu yazıyı faydalı buldunuz mu?</h3>
                <p className="text-sm text-gray-500">Paylaşarak daha fazla kişiye ulaşmasına yardımcı olun.</p>
              </div>
              <ShareButtons title={post.title} url={shareUrl} />
            </div>
          </Reveal>
        </div>
      </article>

      {/* Related posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex items-center justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Benzer <span className="gradient-text">Yazılar</span>
            </h2>
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center gap-2 text-craft-orange font-semibold hover:gap-3 transition-all"
            >
              Tüm Yazılar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rel, i) => (
              <motion.div
                key={rel.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={`/blog/${rel.slug}`}
                  className="group flex flex-col h-full p-6 rounded-2xl bg-white border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="inline-flex w-fit px-3 py-1 rounded-full bg-orange-100 text-craft-orange text-xs font-medium mb-4">
                    {rel.category}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-craft-orange transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3 flex-1">{rel.excerpt}</p>
                  <span className="flex items-center gap-1.5 text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100">
                    <Clock className="w-3.5 h-3.5" />
                    {rel.readingTime} dk okuma
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <JsonLd data={[articleSchema, breadcrumbSchema]} />
    </>
  );
}
