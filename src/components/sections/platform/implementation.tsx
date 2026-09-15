import { Reveal } from '@/components/motion/reveal';

const STAGES = [
  {
    stage: 'STAGE 01 · SET UP',
    accent: true,
    items: [
      {
        title: 'Guided setup wizard',
        body: 'Five steps, in order. Each one tells you what it needs and marks itself done, so you always know how far along you are and what is left.',
      },
      {
        title: 'Setup progress',
        body: 'A running completion percentage across the wizard. Configuration is never a guess.',
      },
      {
        title: 'Web console',
        body: 'Your administrative home. Everything you configure during setup lives here, and everything you change later starts here too.',
      },
    ],
  },
  {
    stage: 'STAGE 02 · BRING IN YOUR COMPANY',
    accent: false,
    items: [
      {
        title: 'Domain setup and account creation',
        body: 'Enter your domain and Miraee fills in what it can, so account creation is a confirmation rather than a form.',
      },
      {
        title: 'Multi-domain mapping',
        body: 'Map every domain your company uses. Anyone who signs up after you is routed to the right place automatically.',
      },
      {
        title: 'Company headcount',
        body: 'Set your employee range once. It shapes the defaults Miraee suggests as you build the rest of your programme.',
      },
    ],
  },
  {
    stage: 'STAGE 03 · SET YOUR RULES',
    accent: false,
    items: [
      {
        title: 'Default configurations and travel policies',
        body: 'Start from a policy you write yourself, or let an AI-guided setup draft one for you to adjust. Either way you are editing, not starting from a blank page.',
      },
      {
        title: 'Policy mapping',
        body: 'A single panel to review and edit every rule before it goes live. Nothing publishes until you say so.',
      },
      {
        title: 'Grade-based inheritance',
        body: 'Assign policy by seniority or grade, and travelers inherit the right rules the moment they are added. No per-person setup.',
      },
      {
        title: 'Traveler profile vs account login',
        body: 'Two separate things, kept separate. The login and admin data that runs the account, and the personal travel identity that belongs to each traveler.',
      },
    ],
  },
];

export function Implementation() {
  return (
    <section id="implementation" className="bg-mi-cream py-[clamp(64px,9vw,120px)] text-background-dark">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-background-dark/50">
          GETTING STARTED · IMPLEMENTATION &amp; ONBOARDING
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4.5 max-w-[24ch] font-mi-accent text-[clamp(2rem,4vw,3.4rem)] leading-[1.04] font-bold tracking-[-0.04em] text-background-dark">
            Live in an afternoon, not a quarter.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 max-w-[54ch] text-pretty font-mi-body text-[1.04rem] leading-[1.6] text-background-dark/72">
            A guided setup takes you from a fresh domain to a working travel programme. No
            implementation team, no waiting.
          </p>
        </Reveal>

        <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
          {STAGES.map((stage, i) => (
            <Reveal
              key={stage.stage}
              delay={i * 80}
              className="border-t-2 pt-5"
              style={{ borderColor: stage.accent ? '#F25C05' : 'rgb(from var(--color-background-dark) r g b / .2)' }}
            >
              <b className="block font-mi-body text-[.68rem] font-bold tracking-[0.14em] text-mi-scarlet">
                {stage.stage}
              </b>
              <div className="mt-5 grid gap-4.5">
                {stage.items.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-mi-accent text-[1rem] leading-[1.3] font-bold text-background-dark">
                      {item.title}
                    </h4>
                    <p className="mt-2 font-mi-body text-[.93rem] leading-[1.6] text-background-dark/72">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
