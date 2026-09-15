import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/app/routes/root-layout';
import HomeRoute from '@/app/routes/home';
import PlatformRoute from '@/app/routes/platform';
import AiRoute from '@/app/routes/ai';
import PricingRoute from '@/app/routes/pricing';
import SolutionsRoute from '@/app/routes/solutions';
import UseCasesRoute from '@/app/routes/use-cases';
import WhyRoute from '@/app/routes/why';
import SecurityRoute from '@/app/routes/security';
import CompanyRoute from '@/app/routes/company';
import CareersRoute from '@/app/routes/careers';
import ContactRoute from '@/app/routes/contact';
import ResourcesRoute from '@/app/routes/resources';
import PrivacyPolicyRoute from '@/app/routes/privacy-policy';
import DisputeNoticeRoute from '@/app/routes/dispute-notice';
import ArbitrationOptOutRoute from '@/app/routes/arbitration-opt-out';
import NotFoundRoute from '@/app/routes/not-found';
import TermsRoute from '@/app/routes/terms';
import { PagePlaceholder } from '@/components/templates/page-placeholder';
import { pages } from '@/content/pages';

const builtPaths = new Set([
  '/platform',
  '/ai/agentic-travel',
  '/pricing',
  '/solutions',
  '/use-cases',
  '/why-miraee',
  '/security',
  '/company',
  '/careers',
  '/contact',
  '/resources',
]);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomeRoute /> },
      { path: 'platform', element: <PlatformRoute /> },
      { path: 'ai/agentic-travel', element: <AiRoute /> },
      { path: 'pricing', element: <PricingRoute /> },
      { path: 'solutions', element: <SolutionsRoute /> },
      { path: 'use-cases', element: <UseCasesRoute /> },
      { path: 'why-miraee', element: <WhyRoute /> },
      { path: 'security', element: <SecurityRoute /> },
      { path: 'company', element: <CompanyRoute /> },
      { path: 'careers', element: <CareersRoute /> },
      { path: 'contact', element: <ContactRoute /> },
      { path: 'book-a-demo', element: <ContactRoute /> },
      { path: 'resources', element: <ResourcesRoute /> },
      { path: 'terms-and-conditions', element: <TermsRoute /> },
      { path: 'privacy-policy', element: <PrivacyPolicyRoute /> },
      { path: 'dispute-notice', element: <DisputeNoticeRoute /> },
      { path: 'arbitration-opt-out', element: <ArbitrationOptOutRoute /> },
      ...pages
        .filter((page) => !builtPaths.has(page.path))
        .map((page) => ({
          path: page.path.slice(1),
          element: <PagePlaceholder {...page} />,
        })),
      { path: '*', element: <NotFoundRoute /> },
    ],
  },
]);
