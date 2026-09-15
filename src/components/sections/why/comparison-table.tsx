import { Reveal } from '@/components/motion/reveal';

const ROWS = [
  { capability: 'Natural-language planning', legacy: 'No', firstGen: 'No', miraee: 'Yes' },
  { capability: 'Policy applied before booking', legacy: 'Partial', firstGen: 'Partial', miraee: 'Yes' },
  { capability: 'Proactive disruption handling', legacy: 'No', firstGen: 'No', miraee: 'Yes' },
  { capability: 'Expense prepared automatically', legacy: 'No', firstGen: 'Partial', miraee: 'Yes' },
  { capability: 'Business and personal travel', legacy: 'No', firstGen: 'No', miraee: 'Yes' },
  { capability: '24/7 human support', legacy: 'Billed per call', firstGen: 'Add-on', miraee: 'Included' },
  { capability: 'Agents that complete the work', legacy: 'No', firstGen: 'No', miraee: 'Yes' },
];

export function ComparisonTable() {
  return (
    <section className="border-t border-mi-cream/8 py-[clamp(64px,9vw,120px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="mb-[clamp(32px,5vw,64px)] h-0.5 bg-gradient-to-r from-mi-orange via-mi-amber to-mi-rust" />
        <Reveal>
          <h2 className="font-mi-accent text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.06] font-bold tracking-[-0.035em]">
            Same trip. Different operating models.
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-[clamp(32px,5vw,56px)] overflow-x-auto">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 border-b border-mi-cream/20 pb-4 font-mi-body text-[.68rem] font-bold tracking-[0.12em] text-mi-cream/45">
              <span>CAPABILITY</span>
              <span>LEGACY TMC</span>
              <span>FIRST-GEN T&amp;E</span>
              <span className="text-mi-orange">MIRAEE</span>
            </div>
            {ROWS.map((row) => (
              <div
                key={row.capability}
                className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center gap-4 border-b border-mi-cream/10 py-4.5 font-mi-body text-[.95rem] font-medium"
              >
                <span>{row.capability}</span>
                <span className="text-mi-cream/42">{row.legacy}</span>
                <span className="text-mi-cream/42">{row.firstGen}</span>
                <span className="font-bold text-mi-green-text">{row.miraee}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
