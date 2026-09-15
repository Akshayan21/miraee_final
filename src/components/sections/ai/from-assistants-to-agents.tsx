import { Reveal } from '@/components/motion/reveal';

export function FromAssistantsToAgents() {
  return (
    <section className="border-t border-mi-cream/8 py-[clamp(64px,9vw,120px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="mb-[clamp(32px,5vw,64px)] h-0.5 bg-gradient-to-r from-mi-orange via-mi-amber to-mi-rust" />
        <Reveal className="font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
          AI ASSISTANT FOR EVERY EMPLOYEE
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4.5 font-mi-accent text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.06] font-bold tracking-[-0.035em]">
            From assistants to agents.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 max-w-[56ch] text-pretty font-mi-body text-[1.04rem] leading-[1.6] text-mi-cream/74">
            Most AI travel products suggest while you execute. Miraee takes action end to end:
            agentic AI travel, not an assistant with a travel skin.
          </p>
        </Reveal>

        <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-6">
          <Reveal className="rounded-[32px] border border-mi-cream/10 bg-mi-cream/3 p-8">
            <div className="font-mi-body text-[.68rem] font-bold tracking-[0.12em] text-mi-cream/50">
              ASSISTANT AI
            </div>
            <h3 className="mt-4 font-mi-accent text-[clamp(1.3rem,2.2vw,1.9rem)] leading-[1.15] font-bold tracking-[-0.03em] text-mi-cream/60">
              Answers, drafts, waits.
            </h3>
            <p className="mt-3.5 font-mi-body text-[1rem] leading-[1.6] text-mi-cream/60">
              It presents options and leaves execution to the traveler.
            </p>
          </Reveal>
          <Reveal
            delay={80}
            className="rounded-[32px] border border-mi-orange/40 bg-[linear-gradient(140deg,rgba(242,92,5,.16),rgba(115,73,245,.1)_90%)] p-8"
          >
            <div className="font-mi-body text-[.68rem] font-bold tracking-[0.12em] text-mi-amber-text">
              AGENTIC AI · MIRAEE
            </div>
            <h3 className="mt-4 font-mi-accent text-[clamp(1.3rem,2.2vw,1.9rem)] leading-[1.15] font-bold tracking-[-0.03em] text-mi-cream">
              Plans, books, reconciles.
            </h3>
            <p className="mt-3.5 text-pretty font-mi-body text-[1rem] leading-[1.6] text-mi-cream/86">
              It interprets intent, enforces policy, handles disruptions, and escalates only
              when judgment is needed.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
