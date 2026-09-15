import { usePageMeta } from '@/hooks/use-page-meta';
import { DARK_PAGE_CLASS } from '@/lib/dark-page';
import { Hero } from '@/components/sections/security/hero';
import { TrustGrid } from '@/components/sections/security/trust-grid';
import { PermissionMatrix } from '@/components/sections/security/permission-matrix';
import { Faq } from '@/components/sections/security/faq';
import { ClosingCta } from '@/components/sections/security/closing-cta';

export default function SecurityRoute() {
  usePageMeta(
    'Enterprise-Grade Security and Control | Miraee',
    'What the agents may do, must ask about, and may never do, with a complete audit trail.',
  );

  return (
    <main className={DARK_PAGE_CLASS}>
      <Hero />
      <TrustGrid />
      <PermissionMatrix />
      <Faq />
      <ClosingCta />
    </main>
  );
}
