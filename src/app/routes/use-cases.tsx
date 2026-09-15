import { usePageMeta } from '@/hooks/use-page-meta';
import { DARK_PAGE_CLASS } from '@/lib/dark-page';
import { UseCasesHero } from '@/components/sections/use-cases/hero';
import { BusinessTravel } from '@/components/sections/use-cases/business-travel';
import { MiceBleisure } from '@/components/sections/use-cases/mice-bleisure';
import { ExecutiveTravel } from '@/components/sections/use-cases/executive-travel';
import { GlobalMobility } from '@/components/sections/use-cases/global-mobility';
import { EmergencyDisruption } from '@/components/sections/use-cases/emergency-disruption';
import { UseCasesClosingCta } from '@/components/sections/use-cases/closing-cta';

export default function UseCasesRoute() {
  usePageMeta(
    'Use Cases | Every kind of trip your company takes | Miraee',
    'Business travel, MICE and bleisure, executive travel, global mobility, and emergency and disruption.',
  );

  return (
    <main className={DARK_PAGE_CLASS}>
      <UseCasesHero />
      <BusinessTravel />
      <MiceBleisure />
      <ExecutiveTravel />
      <GlobalMobility />
      <EmergencyDisruption />
      <UseCasesClosingCta />
    </main>
  );
}
