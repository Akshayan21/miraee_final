import { Reveal } from '@/components/motion/reveal';
import { FaqAccordion } from '@/components/ui/faq-accordion';

const FAQ_ITEMS = [
  {
    q: 'Where is our data stored?',
    a: 'In the region you select at contract: US, EU or India. It stays in-region except where a supplier must receive it to fulfil a booking.',
  },
  {
    q: 'Do agents train on our data?',
    a: 'No. Personalisation is scoped to your tenant only.',
  },
  {
    q: 'What can agents do without approval?',
    a: 'Search, assemble, book in policy, rebook in band, code expenses. Anything above your thresholds goes to a named human.',
  },
  {
    q: 'Can we see what an agent did and why?',
    a: 'Yes. Every action is logged with actor, rule, time and cost, exportable, and cannot be altered by any agent.',
  },
  {
    q: 'How is traveler personal data handled?',
    a: 'Only what is needed to book and support the trip, with role-based access and published retention periods.',
  },
];

export function Faq() {
  return (
    <section className="py-[clamp(56px,8vw,110px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal>
          <h2 className="font-mi-accent text-[clamp(1.7rem,3.2vw,2.8rem)] leading-[1.06] font-bold tracking-[-0.035em]">
            Security, answered clearly
          </h2>
        </Reveal>
        <Reveal delay={80} className="mt-[clamp(32px,5vw,56px)]">
          <FaqAccordion items={FAQ_ITEMS} />
        </Reveal>
      </div>
    </section>
  );
}
