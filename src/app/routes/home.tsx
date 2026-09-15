import { usePageMeta } from '@/hooks/use-page-meta';
import { DARK_PAGE_CLASS } from '@/lib/dark-page';
import { Hero } from '@/components/sections/home/hero';
import { ProblemStatement } from '@/components/sections/home/problem-statement';
import { RoleGrid } from '@/components/sections/home/role-grid';
import { HowItWorks } from '@/components/sections/home/how-it-works';
import { BusinessCase } from '@/components/sections/home/business-case';
import { Experiences } from '@/components/sections/home/experiences';
import { ClosingCta } from '@/components/sections/home/closing-cta';

export default function HomeRoute() {
  usePageMeta(
    'A Private Travel Assistant for Every Employee | Miraee',
    'Travel Limitless. Business travel, personalized: one platform for booking, travel management and expenses, plus the personal trips people love.',
  );

  return (
    <main className={DARK_PAGE_CLASS}>
      <Hero />
      <ProblemStatement />
      <RoleGrid />
      <HowItWorks />
      <BusinessCase />
      <Experiences />
      <ClosingCta />
    </main>
  );
}
