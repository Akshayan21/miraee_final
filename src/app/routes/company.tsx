import { usePageMeta } from '@/hooks/use-page-meta';
import { DARK_PAGE_CLASS } from '@/lib/dark-page';
import { Hero } from '@/components/sections/company/hero';
import { Foundation } from '@/components/sections/company/foundation';
import { GroupCompanies } from '@/components/sections/company/group-companies';
import { Footprint } from '@/components/sections/company/footprint';
import { HowWeBuild } from '@/components/sections/company/how-we-build';
import { ClosingCta } from '@/components/sections/company/closing-cta';

export default function CompanyRoute() {
  usePageMeta(
    'Company | The Agentic Core | Miraee',
    'Miraee is the employee travel platform of the Tabhi group: 23 companies, one platform, three products, direct supply across 500+ airlines and 2M+ hotels.',
  );

  return (
    <main className={DARK_PAGE_CLASS}>
      <Hero />
      <Foundation />
      <GroupCompanies />
      <Footprint />
      <HowWeBuild />
      <ClosingCta />
    </main>
  );
}
