import { Reveal } from '@/components/motion/reveal';
import { FaqAccordion } from '@/components/ui/faq-accordion';

const FAQ_ITEMS = [
  {
    q: 'What is Miraee?',
    a: 'Miraee is an AI-native employee travel platform that plans, books, changes and expenses business trips end to end. Rather than connecting a booking tool to an expense tool, Miraee runs the entire journey as one continuous travel and expense management system, so the same agent that plans a trip also rebooks it during disruption and closes the expense afterwards.',
  },
  {
    q: 'How is Miraee different from a travel management company?',
    a: 'A travel management company processes bookings and charges per transaction, with changes and support billed separately. Miraee is software: it understands a request in natural language, applies company policy before showing options, books the whole trip as one item, and handles changes and expenses automatically. Human travel specialists are included rather than charged per call.',
  },
  {
    q: 'What does it mean that Miraee uses AI agents?',
    a: 'Miraee runs a multi-agent AI system: bounded, permissioned workers that complete tasks rather than answer questions. Separate agents own booking, policy, negotiation, rebooking, expense and support, and all of them read the same trip thread. Each agent has a written limit on what it may do without human approval, and every action it takes is logged.',
  },
  {
    q: 'Does Miraee enforce our travel policy automatically?',
    a: 'Yes. Miraee applies company policy before search results are shown, so travelers see options that are already in policy rather than discovering violations at approval. Policy can be set by route, grade, trip type and entity, and out-of-policy requests are either flagged for review or blocked, depending on how the rules are configured.',
  },
  {
    q: 'Do travelers still have to file expense reports?',
    a: 'No. Miraee captures the receipt at the point of transaction, codes it to the correct category, entity and cost centre, matches it against the original booking, and posts it to the finance system. Travelers do not submit reports and finance teams do not chase receipts.',
  },
  {
    q: 'What happens when a flight is cancelled or delayed?',
    a: 'Miraee monitors every segment of every trip continuously and detects most disruptions before the airline notifies the traveler. The agent finds alternatives, prices each against company policy, and either rebooks automatically inside limits you have set or presents one clear recommendation for approval.',
  },
  {
    q: 'Can employees book personal travel through Miraee?',
    a: 'Yes. The same agent plans personal trips using the traveler’s own payment card, with corporate negotiated rates applied where supplier agreements permit. Personal spend never enters company reporting and company funds are never used, so business and personal travel stay entirely separate while sharing one experience.',
  },
  {
    q: 'What travel inventory does Miraee have access to?',
    a: 'Miraee books flights, hotels, rail and car hire from live inventory sourced through direct supplier connections and wholesale agreements held by the Tabhi group, covering over 500 airlines and more than two million hotels. It also carries hyperlocal experience content from Abhee that is not available through other corporate travel channels.',
  },
  {
    q: 'Which systems does Miraee integrate with?',
    a: 'Miraee connects to identity providers via SSO and SCIM, to HRIS platforms for traveler and cost centre data, to ERP and accounting systems for expense posting, to corporate card networks for payment, and to calendar and messaging tools for itineraries.',
  },
  {
    q: 'How long does implementation take?',
    a: 'Pilots reach full deployment in as little as 90 days.',
  },
];

export function Faq() {
  return (
    <section className="py-[clamp(64px,9vw,120px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal>
          <h2 className="font-heading text-section font-semibold text-balance">
            The platform, answered clearly
          </h2>
        </Reveal>
        <Reveal delay={80} className="mt-[clamp(32px,5vw,56px)]">
          <FaqAccordion items={FAQ_ITEMS} />
        </Reveal>
      </div>
    </section>
  );
}
