import { usePageMeta } from '@/hooks/use-page-meta';
import { DARK_PAGE_CLASS } from '@/lib/dark-page';
import { Hero } from '@/components/sections/contact/hero';

export default function ContactRoute() {
  usePageMeta(
    'See the Agentic Platform in Action | Miraee',
    'A demo, a mutual NDA, and your exact savings number in two weeks.',
  );

  return (
    <main className={DARK_PAGE_CLASS}>
      <Hero />
    </main>
  );
}
