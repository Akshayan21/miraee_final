import { ArrowRight, Check } from 'lucide-react';
const COMPARISONS = [
  ['Searching across booking tools', 'One request. A complete itinerary.'],
  ['Checking policy after you choose', 'Compliant options from the start.'],
  ['Chasing receipts and reports', 'Expenses matched and filed for you.'],
  ['Calling support when plans change', 'An agent that coordinates the next move.'],
];
export function ProblemStatement() {
  return <section className="py-[clamp(56px,7vw,96px)]">
    <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div><p className="text-sm text-mi-amber-text">A better way to travel</p><h2 className="mt-5 max-w-[20ch] font-mi-accent text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[1.12] tracking-[-.04em]">Business travel shouldn’t be a second job.</h2><p className="mt-6 max-w-[42ch] font-mi-body text-base leading-relaxed text-mi-cream/75">Booking, policy, expenses and support belong together. Miraee handles the details so your team can focus on the reason for the trip.</p></div>
        <div><div className="grid grid-cols-2 gap-6 border-b border-mi-cream/15 pb-4 text-sm font-medium"><span className="text-mi-cream/65">Without Miraee</span><span className="text-mi-amber-text">With your agent</span></div>{COMPARISONS.map(([before,after])=><div key={before} className="grid grid-cols-2 items-center gap-6 border-b border-mi-cream/12 py-6 font-mi-body text-sm leading-relaxed"><span className="text-mi-cream/65">{before}</span><span className="flex items-start gap-2"><Check className="mt-1 size-3.5 shrink-0 text-mi-green-text" />{after}</span></div>)}<p className="mt-5 flex items-center gap-2 text-xs text-mi-cream/65">Five disconnected tools <ArrowRight size={14} /> One connected journey</p></div>
      </div>
    </div>
  </section>;
}
