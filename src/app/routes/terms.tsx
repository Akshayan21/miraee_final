import { LegalPage } from '@/components/templates/legal-page';
import { terms } from '@/content/terms';
import { usePageMeta } from '@/hooks/use-page-meta';

export default function TermsRoute() {
  usePageMeta('Terms & Conditions | Miraee', 'Read the terms governing access to and use of the Miraee Platform, travel services, AI features, payments and related services.');
  return <LegalPage document={terms} />;
}
