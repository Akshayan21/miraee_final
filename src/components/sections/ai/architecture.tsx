import { useEffect, useRef } from 'react';
import { Reveal } from '@/components/motion/reveal';

type Agent = {
  n: string;
  title: string;
  color: string;
  path: string;
  feed: string[];
};

const AGENTS: Agent[] = [
  {
    n: '01 · BOOKING AGENT',
    title: 'Turns a sentence into a trip, in policy from the first result.',
    color: '#DE5533',
    path: 'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2 3.7 7.2 9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3z',
    feed: ['Reading the request · calendar checked', 'Tokyo · Tue 09:20 · business', 'Itinerary assembled in 6s', 'Trip thread opened · 1 of 6 agents'],
  },
  {
    n: '02 · POLICY AGENT',
    title: 'Applies per diem, grade and rules at search, before you see options.',
    color: 'var(--color-mi-blue-text)',
    path: 'M12 3 4 6v6c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V6Z',
    feed: ['Grade A · business permitted', 'Per diem applied · Tokyo band', 'Hotel cap ¥42,000 · under', 'Out-of-policy options withheld'],
  },
  {
    n: '03 · NEGOTIATION AGENT',
    title: 'Works wholesale and direct supply to land the best available rate.',
    color: '#F25C05',
    path: 'M4 20V10M10 20V6M16 20v-7M22 20V4',
    feed: ['Four contract layers compared', 'Tabhi wholesale wins · −$876', 'Direct deal applied · hotel', 'Best bookable fare held'],
  },
  {
    n: '04 · REBOOKING AGENT',
    title: 'Watches for disruption and rebooks in the same thread.',
    color: 'var(--color-mi-amber-text)',
    path: 'M21 12a9 9 0 1 1-3-6.7M21 3v5h-5',
    feed: ['NH 217 delayed · 2h 40m', 'Alternatives priced · in band', 'Rebooked NH 219 · 14:05', 'Hotel night held · transfer moved'],
  },
  {
    n: '05 · EXPENSE AGENT',
    title: 'Matches receipts to trips and reconciles automatically.',
    color: 'var(--color-mi-green-text)',
    path: 'M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2Z M9 8h6M9 12h6',
    feed: ['Receipt captured at source', 'Coded GL 6410 · cost centre 22', 'Matched to booking · no variance', 'Report closed on landing'],
  },
  {
    n: '06 · SUPPORT AGENT',
    title: 'Answers questions and pulls in a human when it matters.',
    color: '#FF69AD',
    path: 'M21 12a8 8 0 0 1-8 8H8l-5 3 1.5-4.5A8 8 0 1 1 21 12Z',
    feed: ['Answered in Japanese · 38s', 'Visa validity confirmed', 'Exception escalated · thread attached', 'Named specialist joined'],
  },
];

function AgentCard({ agent, index }: { agent: Agent; index: number }) {
  const feedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const node = feedRef.current;
    if (!node) return;
    let k = 0;
    node.textContent = agent.feed[k++ % agent.feed.length];
    if (reduced) return;

    node.style.transition = 'opacity .35s';
    let interval: ReturnType<typeof setInterval>;
    const next = () => {
      node.style.opacity = '0';
      setTimeout(() => {
        node.textContent = agent.feed[k++ % agent.feed.length];
        node.style.opacity = '1';
      }, 360);
    };
    const timeout = setTimeout(() => {
      next();
      interval = setInterval(next, 3400 + Math.random() * 1600);
    }, 700 + index * 420);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [agent, index]);

  return (
    <Reveal
      delay={(index % 3) * 80}
      className="flex min-h-[230px] flex-col gap-4 rounded-[32px] border border-mi-cream/12 bg-mi-cream/3.5 p-6"
    >
      <span
        className="grid size-11.5 place-items-center rounded-2xl border"
        style={{ background: `${agent.color}29`, borderColor: `${agent.color}73` }}
      >
        <svg
          viewBox="0 0 24 24"
          className="size-5.5"
          style={{ stroke: agent.color }}
          fill="none"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={agent.path} />
        </svg>
      </span>
      <div>
        <div className="font-mi-body text-[.62rem] font-bold tracking-[0.12em] text-mi-cream/45">
          {agent.n}
        </div>
        <h3 className="mt-2 font-mi-accent text-[1.15rem] leading-[1.3] font-bold tracking-[-0.02em]">
          {agent.title}
        </h3>
      </div>
      <div className="mt-auto flex min-h-[2.6em] items-center gap-2.5 font-mi-body text-[.82rem] font-semibold leading-[1.35] text-mi-cream/80">
        <i
          className="size-1.75 flex-none animate-pulse rounded-full"
          style={{ background: agent.color }}
          aria-hidden="true"
        />
        <span ref={feedRef} />
      </div>
    </Reveal>
  );
}

export function Architecture() {
  return (
    <section className="py-[clamp(64px,9vw,120px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal className="font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
              THE ARCHITECTURE
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4.5 font-mi-accent text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.06] font-bold tracking-[-0.035em]">
                Not one agent. A workforce.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160} className="max-w-[46ch] text-pretty font-mi-body text-[1rem] leading-[1.6] text-mi-cream/74">
            Six specialised agents, each running its own allotted task under the same thread.
            Beneath them sits the Tabhi Brain, connecting Mondee One supply, policy, payment and
            expense into one framework, working to complete a single trip.
          </Reveal>
        </div>

        <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
          {AGENTS.map((agent, i) => (
            <AgentCard key={agent.n} agent={agent} index={i} />
          ))}
        </div>

        <Reveal
          delay={80}
          className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-center gap-6 rounded-[32px] border border-[#7349F5]/35 bg-[linear-gradient(120deg,rgba(115,73,245,.16),rgba(17,14,9,0)_75%)] p-7"
        >
          <div>
            <div className="font-mi-body text-[.66rem] font-bold tracking-[0.12em] text-[var(--color-mi-blue-text)]">
              BENEATH THEM · THE TABHI BRAIN
            </div>
            <p className="mt-3.5 text-pretty font-mi-body text-[1rem] leading-[1.6] text-mi-cream/82">
              Two layers, one system. An agent is a bounded, permissioned worker with one job,
              its own tools, and a written limit on what it may do alone. Competitors bolt AI
              onto a booking tool. Here the intelligence and the supply were built together.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Mondee One supply', 'Policy', 'Payment', 'Expense'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-mi-cream/20 px-3.5 py-2 font-mi-body text-[.76rem] font-semibold text-mi-cream/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
