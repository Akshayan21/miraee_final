import type { MouseEvent } from 'react';
import { BrainCircuit, Bot, Globe, Layers, PartyPopper } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import { photography } from '@/content/photography';

function trackSpotlight(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  el.style.setProperty('--my', `${e.clientY - rect.top}px`);
}

function Spotlight({ color }: { color: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{ background: `radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), color-mix(in srgb, ${color} 22%, transparent), transparent 72%)` }}
    />
  );
}

const CARDS = [
  {
    icon: Globe,
    color: '#F25C05',
    eyebrow: 'GLOBAL CONTENT',
    body: 'Access to 2M+ hotels, 500+ airlines with NDC, and worldwide rail.',
    span: 'lg:col-span-3',
  },
  {
    icon: Bot,
    color: 'var(--color-mi-amber-text)',
    eyebrow: 'AGENTIC FULFILMENT',
    body: 'Zero forms. Agents manage booking, coordinating, paying and expense.',
    span: 'lg:col-span-3',
  },
  {
    icon: Layers,
    color: '#DE5533',
    eyebrow: 'COMPLEX BOOKINGS',
    body: 'Agent-assisted fulfilment for what standard portals cannot handle, including rail, deposit hotels and complex group itineraries.',
    span: 'lg:col-span-6',
  },
];

export function Capabilities() {
  return (
    <section className="border-t border-mi-cream/8 py-[clamp(64px,9vw,120px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="mb-[clamp(32px,5vw,56px)] h-0.5 bg-gradient-to-r from-mi-orange via-mi-amber to-mi-rust" />

        <Reveal className="font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
          PLATFORM CAPABILITIES
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4.5 max-w-[24ch] text-balance font-heading text-section font-semibold">
            Everything a travel program needs, one platform.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 max-w-[54ch] text-pretty font-mi-body text-[1.04rem] leading-[1.6] text-mi-cream/72">
            From wholesale content to the human backup when it matters, every capability lives
            behind one agent instead of a stack of disconnected tools.
          </p>
        </Reveal>

        <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {CARDS.map((card, i) => (
            <Reveal
              key={card.eyebrow}
              delay={i * 80}
              onMouseMove={trackSpotlight}
              className={`group relative isolate overflow-hidden rounded-[32px] border border-mi-cream/10 bg-mi-cream/3.5 p-7 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1.5 hover:border-mi-cream/26 hover:bg-mi-cream/5 sm:p-8 ${card.span}`}
            >
              <Spotlight color={card.color} />
              <div
                className="flex size-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                style={{ background: `color-mix(in srgb, ${card.color} 16%, transparent)` }}
              >
                <card.icon className="size-5" style={{ color: card.color }} aria-hidden="true" />
              </div>
              <div
                className="mt-5 font-mi-body text-[.66rem] font-bold tracking-[0.12em]"
                style={{ color: card.color }}
              >
                {card.eyebrow}
              </div>
              <p className="mt-3 max-w-[46ch] text-pretty font-mi-body text-[.98rem] leading-[1.6] text-mi-cream/76">
                {card.body}
              </p>
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 transition-[width] duration-500 group-hover:w-full"
                style={{ background: card.color }}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Reveal className="group relative isolate overflow-hidden rounded-[32px] border border-mi-orange/32 bg-[linear-gradient(140deg,rgba(242,92,5,.14),rgba(17,14,9,0)_75%)] transition-[border-color] duration-300 hover:border-mi-orange/55 lg:col-span-7">
            <div className="flex flex-col-reverse sm:grid sm:grid-cols-[minmax(0,1fr)_38%]">
              <div className="p-7 sm:p-8">
                <div className="flex items-center gap-2.5 font-mi-body text-[.68rem] font-bold tracking-[0.12em] text-mi-amber-text">
                  <i className="size-2 animate-pulse rounded-full bg-mi-orange" aria-hidden="true" />
                  24X7 SUPPORT, AI AND HUMAN
                </div>
                <p className="mt-4 max-w-[42ch] text-pretty font-mi-body text-[1.02rem] leading-[1.6] text-mi-cream/82">
                  Miraee handles standard changes and refunds instantly. When a complex
                  exception arises, a human specialist takes over in the same thread.
                </p>
                <a
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 border-b border-mi-orange/50 pb-1 font-mi-body text-[.85rem] font-bold text-mi-orange no-underline transition-[gap] duration-300 hover:gap-2.5"
                >
                  Talk to support →
                </a>
              </div>
              <div className="overflow-hidden">
                <img
                  {...photography['platform-human-care']}
                  sizes="(min-width: 1024px) 32vw, calc(100vw - 40px)"
                  decoding="async"
                  alt="Travel support specialist ready to help"
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:aspect-auto sm:h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={80}
            onMouseMove={trackSpotlight}
            className="group relative isolate overflow-hidden rounded-[32px] border border-[#FF69AD]/30 bg-[linear-gradient(150deg,rgba(255,105,173,.1),rgba(17,14,9,0)_70%)] p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1.5 hover:border-[#FF69AD]/55 sm:p-8 lg:col-span-5"
          >
            <Spotlight color="#FF69AD" />
            <div className="flex size-11 items-center justify-center rounded-2xl bg-[#FF69AD]/16 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <PartyPopper className="size-5 text-[#FF69AD]" aria-hidden="true" />
            </div>
            <div className="mt-5 font-mi-body text-[.66rem] font-bold tracking-[0.12em] text-[#FF69AD]">
              MICE AND AFTER 5PM
            </div>
            <p className="mt-3 max-w-[42ch] text-pretty font-mi-body text-[.98rem] leading-[1.6] text-mi-cream/76">
              Plan offsites and customer events once, and unlock hyperlocal experiences after
              hours through Abhee.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={120}
          onMouseMove={trackSpotlight}
          className="group relative isolate mt-6 flex flex-col items-start gap-5 overflow-hidden rounded-[32px] border border-mi-cream/14 bg-mi-cream/4 p-7 transition-[border-color,background-color] duration-300 hover:border-[var(--color-mi-blue-text)]/40 hover:bg-mi-cream/6 sm:flex-row sm:items-center sm:p-8"
        >
          <Spotlight color="var(--color-mi-blue-text)" />
          <div className="flex size-11 flex-none items-center justify-center rounded-2xl bg-[var(--color-mi-blue-text)]/16 transition-transform duration-300 group-hover:scale-110">
            <BrainCircuit className="size-5 text-[var(--color-mi-blue-text)]" aria-hidden="true" />
          </div>
          <div>
            <div className="font-mi-body text-[.66rem] font-bold tracking-[0.12em] text-[var(--color-mi-blue-text)]">
              COMPLETE PERSONALISATION
            </div>
            <p className="mt-2 max-w-[64ch] text-pretty font-mi-body text-[1rem] leading-[1.6] text-mi-cream/82">
              Your assistant has a memory. It knows seat preferences, hotel brands, airline
              status and arrival buffers, and recommends rather than listing.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
