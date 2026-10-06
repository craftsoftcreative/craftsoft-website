import { useEffect } from 'react';

interface PageMeta {
  title: string;
  description: string;
  canonicalPath?: string;
}

const BASE_URL = 'https://craftsoft.com.tr';

export function usePageMeta({ title, description, canonicalPath }: PageMeta) {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;

    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    ogTitle?.setAttribute('content', title);
    const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    ogDesc?.setAttribute('content', description);

    if (canonicalPath !== undefined) {
      let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `${BASE_URL}${canonicalPath}`;
    }
  }, [title, description, canonicalPath]);
}
