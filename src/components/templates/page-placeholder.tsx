import { useEffect } from 'react';
import type { PageMeta } from '@/content/pages';

function setMetaDescription(content: string) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', 'description');
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export function PagePlaceholder({ seoTitle, metaDescription, h1 }: PageMeta) {
  useEffect(() => {
    document.title = seoTitle;
    setMetaDescription(metaDescription);
  }, [seoTitle, metaDescription]);

  return (
    <main className="mx-auto max-w-[var(--layout-container)] px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-body text-sm font-medium tracking-wide text-brand-strong uppercase">
          Page in progress
        </p>
        <h1 className="font-heading mt-4 text-4xl text-text">{h1}</h1>
        <p className="mt-4 text-base text-text-muted">{metaDescription}</p>
        <p className="mt-8 rounded-(--radius-panel) border border-border bg-surface-muted px-6 py-4 text-sm text-text-muted">
          This route is scaffolded as a placeholder. Section content will be composed here per
          PROJECT_SOURCE_OF_TRUTH.md.
        </p>
      </div>
    </main>
  );
}
