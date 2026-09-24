import { ArrowRight, Check, X } from 'lucide-react';
const COMPARISONS = [
  ['Searching across booking tools', 'One request. A complete itinerary.'],
  ['Checking policy after you choose', 'Compliant options from the start.'],
  ['Chasing receipts and reports', 'Expenses matched and filed for you.'],
  ['Calling support when plans change', 'An agent that coordinates the next move.'],
];
export function ProblemStatement() {
  return <section className="py-[clamp(56px,7vw,96px)]">
    <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
      <div className="max-w-[52ch]">
        <p className="text-sm text-mi-amber-text">A better way to travel</p>
        <h2 className="mt-5 max-w-[20ch] font-heading text-section font-semibold text-balance">Business travel shouldn’t be a second job.</h2>
        <p className="mt-6 max-w-[42ch] font-mi-body text-base leading-relaxed text-mi-cream/75">Booking, policy, expenses and support belong together. Miraee handles the details so your team can focus on the reason for the trip.</p>
      </div>
      <div className="mt-12 grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
        <div className="rounded-[32px] border border-mi-cream/10 bg-mi-cream/[0.03] p-8">
          <p className="text-sm font-medium text-mi-cream/55">Without Miraee</p>
          <div className="mt-6 flex flex-col gap-5">
            {COMPARISONS.map(([before]) => (
              <div key={before} className="flex items-start gap-3 font-mi-body text-sm leading-relaxed text-mi-cream/50">
                <X className="mt-0.5 size-3.5 shrink-0 text-mi-cream/35" />
                {before}
              </div>
            ))}
          </div>
        </div>
        <div className="z-10 mx-auto flex size-11 shrink-0 -my-4 items-center justify-center rounded-full border border-mi-cream/10 bg-background-dark text-mi-cream/50 lg:-mx-5 lg:my-0">
          <ArrowRight className="size-4" />
        </div>
        <div className="rounded-[32px] border border-mi-amber/25 bg-gradient-to-b from-mi-amber/[0.08] to-transparent p-8 shadow-[0_28px_58px_rgba(69,14,20,.16)]">
          <p className="text-sm font-medium text-mi-amber-text">With your agent</p>
          <div className="mt-6 flex flex-col gap-5">
            {COMPARISONS.map(([, after]) => (
              <div key={after} className="flex items-start gap-3 font-mi-body text-sm font-medium leading-relaxed text-mi-cream">
                <Check className="mt-0.5 size-3.5 shrink-0 text-mi-green-text" />
                {after}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-6 flex items-center gap-2 text-xs text-mi-cream/65">Four disconnected tools <ArrowRight size={14} /> One connected journey</p>
    </div>
  </section>;
}
