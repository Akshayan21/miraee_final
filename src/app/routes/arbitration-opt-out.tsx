import { Link } from 'react-router-dom';
import { LegalIntakeForm } from '@/components/forms/legal-intake-form';
import { usePageMeta } from '@/hooks/use-page-meta';
import '@/components/forms/legal-intake-form.css';

export default function ArbitrationOptOutRoute() {
  usePageMeta('Arbitration Opt Out Form | Miraee', 'Opt out of Miraee mandatory arbitration provisions.');
  return <main className="legal-page bg-background-dark pt-[clamp(112px,15vh,156px)] pb-[clamp(72px,10vw,140px)] text-mi-cream">
    <div className="mx-auto grid w-[min(1240px,100%-2*clamp(20px,4vw,64px))] items-start gap-10 lg:grid-cols-[minmax(300px,.72fr)_minmax(0,1.28fr)] lg:gap-14">
      <div className="lg:sticky lg:top-28">
        <p className="font-mi-body text-[.72rem] font-bold tracking-[.12em] text-mi-orange">MIRAEE LEGAL</p>
        <h1 className="mt-4 font-mi-display text-[clamp(2.55rem,5vw,4.7rem)] leading-[.95] font-black tracking-[-.045em]">Arbitration Opt Out Form</h1>
        <p className="mt-7 max-w-[58ch] font-mi-body text-[1.02rem] leading-[1.7] text-mi-cream/72">You may use this form to opt out of mandatory arbitration provisions in Section 20 of the <Link to="/terms-and-conditions" className="font-semibold text-mi-orange underline underline-offset-4">Miraee Terms of Use</Link>.</p>
        <div className="mt-6 rounded-[24px] border border-mi-orange/30 bg-mi-orange/8 p-6 font-mi-body text-[.95rem] leading-[1.65] text-mi-cream/80"><strong className="block text-mi-cream">To be effective, your opt-out request must be submitted:</strong><ul className="mt-3 grid gap-2 pl-5"><li>Within thirty (30) days after you create your Miraee account; or</li><li>Within thirty (30) days after updated arbitration provisions take effect.</li></ul></div>
        <p className="mt-5 max-w-[58ch] font-mi-body text-[.96rem] leading-[1.7] text-mi-cream/65">Opting out of an update does not cancel arbitration terms you previously accepted. The most recent terms you accepted and did not timely opt out of will continue to apply.</p>
        <div className="mt-8 rounded-[24px] border border-mi-cream/14 bg-mi-cream/5 p-6"><p className="font-mi-body text-[.7rem] font-bold tracking-[.12em] text-mi-orange">MIRAEE LEGAL</p><p className="mt-5 font-mi-accent text-[1.65rem] leading-[1.08] font-bold tracking-[-.04em]">Your rights matter. We make it simple.</p><div className="mt-7 grid gap-3 font-mi-body text-[.86rem] font-semibold text-mi-cream/75"><span className="rounded-full border border-mi-cream/12 px-4 py-3">30-day opt-out window</span><span className="rounded-full border border-mi-cream/12 px-4 py-3">Processed within 5 business days</span></div></div>
      </div>
      <div><LegalIntakeForm kind="optOut" /></div>
    </div>
  </main>;
}
