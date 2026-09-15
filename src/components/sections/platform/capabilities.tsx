import { Reveal } from '@/components/motion/reveal';
import { photography } from '@/content/photography';

const CARDS = [
  {
    color: '#F25C05',
    eyebrow: 'GLOBAL CONTENT',
    body: 'Access to 2M+ hotels, 500+ airlines with NDC, and worldwide rail.',
  },
  {
    color: 'var(--color-mi-amber-text)',
    eyebrow: 'AGENTIC FULFILMENT',
    body: 'Zero forms. Agents manage booking, coordinating, paying and expense.',
  },
  {
    color: '#DE5533',
    eyebrow: 'COMPLEX BOOKINGS',
    body: 'Agent-assisted fulfilment for what standard portals cannot handle, including rail, deposit hotels and complex group itineraries.',
  },
  {
    color: '#FF69AD',
    eyebrow: 'MICE AND AFTER 5PM',
    body: 'Plan offsites and customer events once, and unlock hyperlocal experiences after hours through Abhee.',
  },
];

export function Capabilities() {
  return (
    <section className="border-t border-mi-cream/8 py-[clamp(64px,9vw,120px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="mb-[clamp(32px,5vw,64px)] h-0.5 bg-gradient-to-r from-mi-orange via-mi-amber to-mi-rust" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <Reveal
              key={card.eyebrow}
              delay={i * 80}
              className="rounded-[32px] border border-mi-cream/10 bg-mi-cream/3.5 p-7"
            >
              <div
                className="font-mi-body text-[.62rem] font-bold tracking-[0.12em]"
                style={{ color: card.color }}
              >
                {card.eyebrow}
              </div>
              <p className="mt-3.5 text-pretty font-mi-body text-[.98rem] leading-[1.6] text-mi-cream/76">
                {card.body}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal className="grid grid-cols-[minmax(0,1fr)_112px] items-center gap-5 overflow-hidden rounded-[32px] border border-mi-orange/32 bg-[linear-gradient(140deg,rgba(242,92,5,.12),rgba(17,14,9,0)_70%)] p-6 sm:grid-cols-[minmax(0,1fr)_148px] sm:p-8">
            <div>
              <div className="flex items-center gap-2.5 font-mi-body text-[.68rem] font-bold tracking-[0.12em] text-mi-amber-text">
                <i className="size-2 rounded-full bg-mi-orange" aria-hidden="true" />
                24X7 SUPPORT, AI AND HUMAN
              </div>
              <p className="mt-4 text-pretty font-mi-body text-[1.02rem] leading-[1.6] text-mi-cream/82">
                Miraee handles standard changes and refunds instantly. When a complex exception
                arises, a human specialist takes over in the same thread.
              </p>
            </div>
            <img {...photography['platform-human-care']} sizes="(min-width: 1440px) 700px, (min-width: 1024px) 50vw, (min-width: 768px) 700px, calc(100vw - 40px)" decoding="async" alt="Travel support specialist ready to help" className="aspect-square size-full rounded-[22px] object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={80} className="rounded-[32px] border border-mi-cream/14 bg-mi-cream/4 p-8">
            <div className="font-mi-body text-[.68rem] font-bold tracking-[0.12em] text-[var(--color-mi-blue-text)]">
              COMPLETE PERSONALISATION
            </div>
            <p className="mt-4 text-pretty font-mi-body text-[1.02rem] leading-[1.6] text-mi-cream/82">
              Your assistant has a memory. It knows seat preferences, hotel brands, airline
              status and arrival buffers, and recommends rather than listing.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
