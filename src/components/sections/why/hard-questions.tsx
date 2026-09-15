import { Reveal } from '@/components/motion/reveal';

const QA = [
  {
    q: '“We just signed with our TMC.”',
    a: 'Most programs run a pilot on one entity or region alongside the incumbent, then compare like for like. Nothing has to be torn out to see the number.',
  },
  {
    q: '“Our travelers won’t adopt another tool.”',
    a: 'Miraee is a conversation, not a portal. There is no interface to learn. Employees describe the trip in the tools they already have open, and the itinerary comes back in policy.',
  },
  {
    q: '“We can’t let AI book without approval.”',
    a: 'Then don’t. Every agent has a written limit on what it may do alone, and you set it. Many programs start with approval on everything and relax it once the audit trail earns trust.',
  },
  {
    q: '“Our travel policy is too complex.”',
    a: 'Policy is configured by route, grade, trip type and entity, and applied at search rather than at approval. The more complex the policy, the more that matters.',
  },
  {
    q: '“What happens when a trip goes badly wrong?”',
    a: 'The agent detects the disruption, prices the alternatives, and escalates to a human travel specialist with the whole trip already attached. The traveler never starts over.',
  },
  {
    q: '“You’re new.”',
    a: 'The software is. The supply, the payments and the engineering are the Tabhi group, which already reaches 125M+ travelers across 500+ airlines and 2M+ properties, and distributes through 65,000 travel businesses.',
  },
];

export function HardQuestions() {
  return (
    <section className="py-[clamp(64px,9vw,120px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal>
          <h2 className="font-mi-accent text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.06] font-bold tracking-[-0.035em]">
            The hard questions
          </h2>
        </Reveal>
        <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(400px,100%),1fr))] gap-x-12 gap-y-8">
          {QA.map((item, i) => (
            <Reveal
              key={item.q}
              delay={i * 60}
              className="border-l-2 border-mi-orange/60 pl-6"
            >
              <h3 className="m-0 font-mi-accent text-[1.18rem] leading-[1.3] font-bold tracking-[-0.02em]">
                {item.q}
              </h3>
              <p className="mt-3 text-pretty font-mi-body text-[.97rem] leading-[1.65] text-mi-cream/74">
                {item.a}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
