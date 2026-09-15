import { usePageMeta } from '@/hooks/use-page-meta';
import { DARK_PAGE_CLASS } from '@/lib/dark-page';
import { Hero } from '@/components/sections/pricing/hero';
import { AuditModel } from '@/components/sections/pricing/audit-model';
import { Faq } from '@/components/sections/pricing/faq';
import { ClosingCta } from '@/components/sections/pricing/closing-cta';

export default function PricingRoute() {
  usePageMeta(
    'Pricing | Prove the savings before you commit | Miraee',
    'We re-price your last 12 months of booking and expense data to find your exact savings potential.',
  );

  return (
    <main className={DARK_PAGE_CLASS}>
      <Hero />
      <AuditModel />
      <Faq />
      <ClosingCta />
    </main>
  );
}
