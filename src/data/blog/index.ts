import type { BlogPost } from './types';
import post1 from '../posts/post-1';
import post2 from '../posts/post-2';
import post3 from '../posts/post-3';
import post4 from '../posts/post-4';
import post5 from '../posts/post-5';
import post6 from '../posts/post-6';
import post7 from '../posts/post-7';
import post8 from '../posts/post-8';
import post9 from '../posts/post-9';
import post10 from '../posts/post-10';

export * from './types';

export const blogPosts: BlogPost[] = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
  post10,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  const counts = new Map<string, number>();
  blogPosts.forEach((p) => p.tags.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)));
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'tr'))
    .map(([tag]) => tag);
}

export function getAllCategories(): string[] {
  const cats = new Set<string>();
  blogPosts.forEach((p) => cats.add(p.category));
  return Array.from(cats).sort();
}

export function getRelatedPosts(post: BlogPost, count = 3): BlogPost[] {
  return blogPosts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      post: p,
      score: (p.category === post.category ? 2 : 0) + p.tags.filter((t) => post.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((x) => x.post);
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
