import { Reveal } from '@/components/motion/reveal';

const CARDS = [
  {
    color: '#F25C05',
    title: 'GLOBAL FOOTPRINT',
    body: 'Headquartered in Austin, Texas, operating in 12+ countries, with a Global Capability Center in Hyderabad, India.',
  },
  {
    color: 'var(--color-mi-blue-text)',
    title: 'AI RESEARCH',
    body: 'Deep AI research centres across Austin, IIT Madras and IIIT Hyderabad power the deep agents in the Tabhi Brain.',
  },
];

export function Footprint() {
  return (
    <section className="py-[clamp(56px,8vw,110px)]">
      <div className="mx-auto grid w-[min(1360px,100%-2*clamp(20px,4vw,64px))] grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-6">
        {CARDS.map((card, i) => (
          <Reveal
            key={card.title}
            delay={i * 80}
            className="rounded-[32px] border border-mi-cream/12 bg-mi-cream/3.5 p-7"
          >
            <div className="font-mi-body text-[.66rem] font-bold tracking-[0.12em]" style={{ color: card.color }}>
              {card.title}
            </div>
            <p className="mt-4 text-pretty font-mi-body text-[1.02rem] leading-[1.6] text-mi-cream/80">
              {card.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
