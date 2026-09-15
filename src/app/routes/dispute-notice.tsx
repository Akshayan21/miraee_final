import { Link } from 'react-router-dom';
import { LegalIntakeForm } from '@/components/forms/legal-intake-form';
import { usePageMeta } from '@/hooks/use-page-meta';
import '@/components/forms/legal-intake-form.css';

export default function DisputeNoticeRoute() {
  usePageMeta('Informal Dispute Resolution Notice | Miraee', 'Submit an informal dispute resolution notice to Miraee.');
  return <main className="legal-page bg-background-dark pt-[clamp(112px,15vh,156px)] pb-[clamp(72px,10vw,140px)] text-mi-cream">
    <div className="mx-auto grid w-[min(1240px,100%-2*clamp(20px,4vw,64px))] items-start gap-10 lg:grid-cols-[minmax(300px,.72fr)_minmax(0,1.28fr)] lg:gap-14">
      <div className="lg:sticky lg:top-28">
        <p className="font-mi-body text-[.72rem] font-bold tracking-[.12em] text-mi-orange">MIRAEE LEGAL</p>
        <h1 className="mt-4 font-mi-display text-[clamp(2.55rem,5vw,4.7rem)] leading-[.95] font-black tracking-[-.045em]">Informal Dispute Resolution Notice</h1>
        <p className="mt-7 max-w-[58ch] font-mi-body text-[1.02rem] leading-[1.7] text-mi-cream/72">Before initiating arbitration or other formal proceedings, Section 20 of the <Link to="/terms-and-conditions" className="font-semibold text-mi-orange underline underline-offset-4">Miraee Terms of Use</Link> requires you and Miraee to attempt to resolve disputes informally within sixty (60) days.</p>
        <p className="mt-4 max-w-[58ch] font-mi-body text-[1.02rem] leading-[1.7] text-mi-cream/72">Please provide enough information for Miraee to understand, investigate, and respond to your concern. Submission of this form does not guarantee any particular outcome or resolution.</p>
        <div className="mt-8 rounded-[24px] border border-mi-cream/14 bg-mi-cream/5 p-6"><p className="font-mi-body text-[.7rem] font-bold tracking-[.12em] text-mi-orange">INFORMAL RESOLUTION</p><p className="mt-5 font-mi-accent text-[1.65rem] leading-[1.08] font-bold tracking-[-.04em]">Transparent process. Fair resolution.</p><div className="mt-7 grid gap-3 font-mi-body text-[.86rem] font-semibold text-mi-cream/75"><span className="rounded-full border border-mi-cream/12 px-4 py-3">60-day informal resolution period</span><span className="rounded-full border border-mi-cream/12 px-4 py-3">Settlement conference available</span></div></div>
      </div>
      <div><LegalIntakeForm kind="dispute" /></div>
    </div>
  </main>;
}
