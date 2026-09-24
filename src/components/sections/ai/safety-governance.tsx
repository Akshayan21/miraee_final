import { Reveal } from '@/components/motion/reveal';
import governanceReviewImage from '@/assets/images/safety-governance-review.png';

const CARDS = [
  {
    accent: true,
    title: 'Policy and budget guardrails',
    body: 'The agents search, match and rebook. Choices that carry cost or risk still come to a person, always inside the policy and budget you set.',
  },
  {
    accent: false,
    title: 'Human in the loop',
    body: 'It stops and asks. Genuine exceptions pause and route to the right person, with full context.',
  },
  {
    accent: false,
    title: 'Full audit trail',
    body: 'Every agent action is logged and attributable. Nothing is invisible after the fact.',
  },
  {
    accent: false,
    title: 'Role-based permissions',
    body: 'Only within each person’s existing access. Permissions follow responsibilities.',
  },
];

export function SafetyGovernance() {
  return (
    <section className="bg-mi-cream py-[clamp(64px,9vw,120px)] text-background-dark">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-background-dark/50">
          SAFETY AND GOVERNANCE
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4.5 font-heading text-background-dark text-section font-semibold text-balance">
            Autonomy with guardrails.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 max-w-[48ch] text-pretty font-mi-body text-[1.04rem] leading-[1.6] text-background-dark/72">
            Four guardrails are easy to claim. Here is how each one holds.
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-8 overflow-hidden rounded-[clamp(22px,3vw,28px)] border border-background-dark/14">
          <div className="grid items-stretch bg-background-dark/4 md:grid-cols-[.85fr_1.15fr]">
            <div className="flex flex-col justify-center border-b border-background-dark/10 p-6 sm:p-8 md:border-b-0 md:border-r">
              <span className="font-mi-body text-[.68rem] font-bold tracking-[.14em] text-mi-scarlet">DECISION OWNERSHIP</span>
              <p className="mt-5 font-mi-accent text-[clamp(1.1rem,2.5vw,1.8rem)] leading-[1.25] font-semibold text-background-dark">The final call stays with the people who own the outcome.</p>
              <p className="mt-4 max-w-[30ch] font-mi-body text-[.9rem] leading-[1.55] text-background-dark/65">Automation handles the repeatable work. People step in when context, judgment, or accountability matters.</p>
            </div>
            <img
              src={governanceReviewImage}
              alt="Travel operations team reviewing an itinerary together"
              className="aspect-[16/10] w-full object-cover object-center"
              width={2048}
              height={1280}
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>

        <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-6">
          {CARDS.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 80}
              className="border-t-2 pt-5"
              style={{ borderColor: card.accent ? '#F25C05' : 'rgb(from var(--color-background-dark) r g b / .2)' }}
            >
              <h3 className="font-mi-accent text-[1.05rem] leading-[1.3] font-bold text-background-dark">
                {card.title}
              </h3>
              <p className="mt-3 font-mi-body text-[.95rem] leading-[1.6] text-background-dark/74">
                {card.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-10 max-w-[36ch] font-mi-accent text-[clamp(1.15rem,2.2vw,1.8rem)] leading-[1.35] font-medium tracking-[-0.03em] text-background-dark">
            The agents move fast because the guardrails are fixed.{' '}
            <span className="text-mi-scarlet">Speed for the traveler, safety for the business.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
