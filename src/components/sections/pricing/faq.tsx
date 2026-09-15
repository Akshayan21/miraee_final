import { Reveal } from '@/components/motion/reveal';
import { FaqAccordion } from '@/components/ui/faq-accordion';

const FAQ_ITEMS = [
  {
    q: 'Can you honour our existing negotiated rates?',
    a: 'Yes. We load, honour and report on your negotiated airline, hotel and car rates, and show you where they are being bypassed today.',
  },
  {
    q: 'What data do you actually need?',
    a: 'A booking-level export of air, hotel, car and expense for the last 12 months, with employee IDs in place of names.',
  },
  {
    q: 'How is our data protected?',
    a: 'Everything is governed by a mutual NDA, and we ask for employee IDs only, no other personal information.',
  },
  {
    q: 'What are the four contract layers?',
    a: 'Tabhi wholesale rates, your own negotiated rates, our direct supplier deals and third-party content. The best bookable fare wins on every search.',
  },
  {
    q: 'Is the audit free?',
    a: 'Yes. You get your savings number before any commitment.',
  },
  {
    q: 'What if the numbers don’t add up?',
    a: 'Then there is no pilot. We only move forward if the savings match your goals.',
  },
  {
    q: 'How does pricing work after the audit?',
    a: 'A pilot runs on one entity or region first, and commercial terms are set against the savings we have shown you.',
  },
  {
    q: 'How soon can we start?',
    a: 'The audit takes two weeks, and pilots reach full deployment in as little as 90 days.',
  },
];

export function Faq() {
  return (
    <section className="py-[clamp(64px,9vw,120px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal>
          <h2 className="font-mi-accent text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.06] font-bold tracking-[-0.04em]">
            Pricing, answered clearly
          </h2>
        </Reveal>
        <Reveal delay={80} className="mt-[clamp(32px,5vw,56px)]">
          <FaqAccordion items={FAQ_ITEMS} />
        </Reveal>
      </div>
    </section>
  );
}
