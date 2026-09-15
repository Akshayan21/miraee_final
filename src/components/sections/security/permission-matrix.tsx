import type { CSSProperties } from 'react';
import { Reveal } from '@/components/motion/reveal';

const ROWS = [
  { action: 'Search and assemble options', permission: 'Always permitted', good: true },
  { action: 'Book in-policy trip', permission: 'Permitted; approval optional', good: true },
  { action: 'Rebook within fare band', permission: 'Permitted; traveler notified', good: true },
  { action: 'Rebook above fare band', permission: 'Requires named approver', good: false },
  { action: 'Code and post expense', permission: 'Permitted; sign-off optional', good: true },
  { action: 'Book out of policy', permission: 'Never without approval', good: false },
  { action: 'Issue virtual card', permission: 'Permitted within trip value', good: true },
];

const HARD_LIMITS = [
  'Move money outside pre-authorised rails',
  'Change policy, approvals or limits',
  'Book excluded suppliers',
  'Mix personal and company funds',
  'Act on traveler data beyond the trip',
  'Delete, alter or suppress audit records',
  'Take any unlogged action',
];

const HUMAN_IN_LOOP = [
  { label: 'Policy and limits:', body: 'you, always' },
  { label: 'Routine booking:', body: 'agent within limits' },
  { label: 'Out of policy:', body: 'named human approver' },
  { label: 'Disruption in band:', body: 'agent, with notification' },
  { label: 'Disruption above band:', body: 'human, with agent recommendation' },
  { label: 'Escalation:', body: 'traveler, any time, full context' },
];

export function PermissionMatrix() {
  return (
    <section className="bg-mi-cream py-[clamp(56px,8vw,110px)] text-background-dark">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal>
          <h2 className="max-w-[26ch] font-mi-accent text-[clamp(1.9rem,3.8vw,3.2rem)] leading-[1.04] font-bold tracking-[-0.04em] text-background-dark">
            What the agents may do, must ask about, and may never do.
          </h2>
        </Reveal>

        <div className="mt-[clamp(32px,5vw,56px)] overflow-x-auto">
          <div className="min-w-[520px]">
            <div className="grid grid-cols-[1.4fr_1fr] gap-4 border-b border-background-dark/22 pb-3.5 font-mi-body text-[.66rem] leading-[1.3] font-bold tracking-[0.1em] text-background-dark/50">
              <span>ACTION</span>
              <span>DEFAULT PERMISSION</span>
            </div>
            {ROWS.map((row) => (
              <Reveal
                key={row.action}
                className="grid grid-cols-[1.4fr_1fr] gap-4 border-b border-background-dark/12 py-3.75 font-mi-body text-[.95rem] leading-[1.4] font-medium"
              >
                <span>{row.action}</span>
                <span className={row.good ? 'font-bold text-[#00893f]' : 'font-bold text-mi-scarlet'}>
                  {row.permission}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-6">
          <Reveal className="rounded-[32px] border border-mi-scarlet/40 bg-mi-scarlet/6 p-7">
            <h3 className="m-0 font-mi-body text-[.72rem] font-bold tracking-[0.12em] text-mi-scarlet">
              HARD LIMITS, NEVER CONFIGURABLE
            </h3>
            <div className="mt-4.5 grid gap-2.5 font-mi-body text-[.93rem] leading-[1.45] font-medium text-background-dark/82">
              {HARD_LIMITS.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
          <Reveal
            delay={80}
            className="rounded-[32px] border border-background-dark/14 bg-white p-7"
            style={{ '--color-background-dark': '#150b08' } as CSSProperties}
          >
            <h3 className="m-0 font-mi-body text-[.72rem] font-bold tracking-[0.12em] text-background-dark/50">
              HUMAN IN THE LOOP
            </h3>
            <div className="mt-4.5 grid gap-3 font-mi-body text-[.93rem] leading-[1.45] font-medium text-background-dark/82">
              {HUMAN_IN_LOOP.map((item) => (
                <span key={item.label}>
                  <b className="font-bold">{item.label}</b> {item.body}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-6">
          <Reveal>
            <h3 className="m-0 font-mi-accent text-[1.05rem] leading-[1.3] font-bold tracking-[-0.02em] text-background-dark">
              Data lifecycle
            </h3>
            <p className="mt-2.5 text-pretty font-mi-body text-[.96rem] leading-[1.6] text-background-dark/74">
              Your data stays scoped to your organisation and is not used to train foundation
              models. Retention and deletion periods are documented in the security package.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="m-0 font-mi-accent text-[1.05rem] leading-[1.3] font-bold tracking-[-0.02em] text-background-dark">
              Audit trail
            </h3>
            <p className="mt-2.5 text-pretty font-mi-body text-[.96rem] leading-[1.6] text-background-dark/74">
              Every action logged with actor, rule, time and cost. Exportable at any time. Cannot
              be altered or deleted by any agent.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
