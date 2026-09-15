import type { CSSProperties } from 'react';
import { Reveal } from '@/components/motion/reveal';
import mondeeLogo from '@/assets/images/mondee_logo.png';
import miraeeLogo from '@/assets/Miraee_Logo.png';
// Abhee has separate light/dark-bg logo files; this section's cards are always
// light (white), so the dark-text ("-dark") variant is the correct one here.
import abheeLogo from '@/assets/images/abhee-logo-dark.png';

const COMPANIES = [
  {
    eyebrow: 'MONDEE ONE · B2B',
    eyebrowColor: '#CC3600',
    title: 'The agentic AI travel marketplace.',
    highlight: false,
    logo: mondeeLogo,
  },
  {
    eyebrow: 'MIRAEE · B2E',
    eyebrowColor: '#F25C05',
    title: 'The employee travel platform.',
    highlight: true,
    logo: miraeeLogo,
  },
  {
    eyebrow: 'ABHEE · B2C',
    eyebrowColor: '#CC3600',
    title: 'The hyperlocal experiential marketplace.',
    highlight: false,
    logo: abheeLogo,
  },
];

const ADVANTAGE_ROWS = [
  { label: 'Direct supply', body: 'Contracts held with carriers rather than resold', proof: '500+ airlines' },
  { label: 'Global content', body: 'Inventory sourced at wholesale, not screen-scraped', proof: '2M+ hotels' },
  { label: 'Volume', body: 'Buying power that a single company cannot negotiate alone', proof: '125M+ reached' },
  { label: 'Distribution', body: 'A B2B network already selling at scale', proof: '65,000 businesses' },
  {
    label: 'Experience content',
    body: 'Hyperlocal supply no corporate channel carries',
    proof: '10M+ from 100K creators',
  },
  { label: 'Financial stability', body: 'Institutionally backed', proof: 'TCW · Morgan Stanley' },
  {
    label: 'Shared AI infrastructure',
    body: 'One engineering group behind all three products',
    proof: 'The Tabhi Brain',
  },
];

export function GroupCompanies() {
  return (
    <section className="bg-mi-cream py-[clamp(56px,8vw,110px)] text-background-dark">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-background-dark/50">
          BACKED BY TABHI
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4.5 font-mi-accent text-[clamp(1.9rem,3.8vw,3.2rem)] leading-[1.04] font-bold tracking-[-0.04em] text-background-dark">
            Twenty-three companies. One platform. Three products.
          </h2>
        </Reveal>

        <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-6">
          {COMPANIES.map((company, i) => (
            <Reveal
              key={company.eyebrow}
              delay={i * 80}
              className={
                company.highlight
                  ? 'rounded-[32px] border border-mi-orange/40 bg-[linear-gradient(140deg,rgba(242,92,5,.12),#fff_70%)] p-7'
                  : 'rounded-[32px] border border-background-dark/14 bg-white p-7'
              }
              style={{ '--color-background-dark': '#150b08' } as CSSProperties}
            >
              <img src={company.logo} alt={company.eyebrow.split(' · ')[0]} className="h-6 w-auto object-contain" />
              <div
                className="mt-3 font-mi-body text-[.66rem] font-bold tracking-[0.12em]"
                style={{ color: company.eyebrowColor }}
              >
                {company.eyebrow}
              </div>
              <h3 className="mt-3.5 font-mi-accent text-[1.3rem] leading-[1.25] font-bold tracking-[-0.03em] text-background-dark">
                {company.title}
              </h3>
            </Reveal>
          ))}
        </div>

        <div className="mt-[clamp(40px,6vw,72px)]">
          <Reveal className="font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-background-dark/50">
            THE GROUP ADVANTAGE · WHY THIS MATTERS TO YOUR TRAVEL PROGRAM
          </Reveal>
          <div className="mt-6 overflow-x-auto">
            <div className="min-w-[560px]">
              <div className="grid grid-cols-[1fr_1.6fr_1fr] gap-4 border-b border-background-dark/20 pb-3.5 font-mi-body text-[.66rem] leading-[1.3] font-bold tracking-[0.1em] text-background-dark/50">
                <span />
                <span>WHAT IT MEANS</span>
                <span>PROOF</span>
              </div>
              {ADVANTAGE_ROWS.map((row) => (
                <Reveal
                  key={row.label}
                  className="grid grid-cols-[1fr_1.6fr_1fr] items-baseline gap-4 border-b border-background-dark/12 py-4 font-mi-body text-[.93rem] leading-[1.5]"
                >
                  <b className="font-bold">{row.label}</b>
                  <span className="text-background-dark/74">{row.body}</span>
                  <span className="font-mi-accent text-[1rem] leading-[1] font-bold text-mi-scarlet">
                    {row.proof}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
