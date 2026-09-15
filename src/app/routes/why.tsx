import { usePageMeta } from '@/hooks/use-page-meta';
import { DARK_PAGE_CLASS } from '@/lib/dark-page';
import { WhyHero } from '@/components/sections/why/hero';
import { ComparisonTable } from '@/components/sections/why/comparison-table';
import { Implementation } from '@/components/sections/why/implementation';
import { HardQuestions } from '@/components/sections/why/hard-questions';
import { WhyClosingCta } from '@/components/sections/why/closing-cta';

export default function WhyRoute() {
  usePageMeta(
    'Why Miraee | Same Trip, Different Operating Model',
    'How Miraee compares to a legacy TMC and first-generation T&E, and what switching actually takes.',
  );

  return (
    <main className={DARK_PAGE_CLASS}>
      <WhyHero />
      <ComparisonTable />
      <Implementation />
      <HardQuestions />
      <WhyClosingCta />
    </main>
  );
}
