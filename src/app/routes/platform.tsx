import { usePageMeta } from '@/hooks/use-page-meta';
import { DARK_PAGE_CLASS } from '@/lib/dark-page';
import { Hero } from '@/components/sections/platform/hero';
import { Capabilities } from '@/components/sections/platform/capabilities';
import { DesignedForEveryone } from '@/components/sections/platform/designed-for-everyone';
import { TwoViews } from '@/components/sections/platform/two-views';
import { SavingsLoop } from '@/components/sections/platform/savings-loop';
import { Integrations } from '@/components/sections/platform/integrations';
import { TabhiAdvantage } from '@/components/sections/platform/tabhi-advantage';
import { PlatformDepth } from '@/components/sections/platform/platform-depth';
import { Faq } from '@/components/sections/platform/faq';
import { ClosingCta } from '@/components/sections/platform/closing-cta';

export default function PlatformRoute() {
  usePageMeta(
    'Platform | Plan, Book, Expense, Change | Miraee',
    'One AI-native platform for employee travel: six capabilities covering the whole journey, wholesale savings, and the integrations your stack already runs.',
  );

  return (
    <main className={DARK_PAGE_CLASS}>
      <Hero />
      <Capabilities />
      <DesignedForEveryone />
      <TwoViews />
      <SavingsLoop />
      <Integrations />
      <TabhiAdvantage />
      <PlatformDepth />
      <Faq />
      <ClosingCta />
    </main>
  );
}
