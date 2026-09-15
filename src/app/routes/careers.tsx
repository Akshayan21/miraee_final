import { usePageMeta } from '@/hooks/use-page-meta';
import { DARK_PAGE_CLASS } from '@/lib/dark-page';
import { Hero } from '@/components/sections/careers/hero';
import { Culture } from '@/components/sections/careers/culture';
import { ClosingCta } from '@/components/sections/careers/closing-cta';

export default function CareersRoute() {
  usePageMeta(
    'Careers | Build the Future of Global Travel | Miraee',
    'Join an engineering-led, AI-forward team across the US, India and beyond.',
  );

  return (
    <main className={DARK_PAGE_CLASS}>
      <Hero />
      <Culture />
      <ClosingCta />
    </main>
  );
}
