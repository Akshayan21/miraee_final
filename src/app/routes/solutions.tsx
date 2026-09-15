import { usePageMeta } from '@/hooks/use-page-meta';
import { DARK_PAGE_CLASS } from '@/lib/dark-page';
import { SolutionsHero } from '@/components/sections/solutions/hero';
import { Employees } from '@/components/sections/solutions/employees';
import { Managers } from '@/components/sections/solutions/managers';
import { Finance } from '@/components/sections/solutions/finance';
import { TravelLeads } from '@/components/sections/solutions/travel-leads';
import { Admins } from '@/components/sections/solutions/admins';
import { People } from '@/components/sections/solutions/people';
import { SolutionsClosingCta } from '@/components/sections/solutions/closing-cta';

export default function SolutionsRoute() {
  usePageMeta(
    'Solutions by Role and Use Case | Miraee',
    'One platform, six views. What changes for employees, finance, travel leads, admins, HR teams and managers, plus every kind of company travel.',
  );

  return (
    <main className={DARK_PAGE_CLASS}>
      <SolutionsHero />
      <Employees />
      <Managers />
      <Finance />
      <TravelLeads />
      <Admins />
      <People />
      <SolutionsClosingCta />
    </main>
  );
}
