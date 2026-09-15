import { usePageMeta } from '@/hooks/use-page-meta';
import { DARK_PAGE_CLASS } from '@/lib/dark-page';
import { Hero } from '@/components/sections/ai/hero';
import { FromAssistantsToAgents } from '@/components/sections/ai/from-assistants-to-agents';
import { Architecture } from '@/components/sections/ai/architecture';
import { SafetyGovernance } from '@/components/sections/ai/safety-governance';
import { ClosingCta } from '@/components/sections/ai/closing-cta';

export default function AiRoute() {
  usePageMeta(
    'AI & Technology | The Intelligence Beneath Every Trip | Miraee',
    'Agentic AI for employee travel: six specialised agents on the Tabhi Brain, bounded by policy, budget and permissions, with a complete audit trail.',
  );

  return (
    <main className={DARK_PAGE_CLASS}>
      <Hero />
      <FromAssistantsToAgents />
      <Architecture />
      <SafetyGovernance />
      <ClosingCta />
    </main>
  );
}
