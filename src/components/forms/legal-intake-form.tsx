import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

type FormKind = 'dispute' | 'optOut';

type Field = {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'date' | 'textarea';
  hint?: string;
  required?: boolean;
  placeholder?: string;
  wide?: boolean;
};

const inputClass =
  'mt-2 min-w-0 w-full rounded-xl border border-mi-cream/16 bg-background-dark/70 px-4 py-3 font-mi-body text-[.95rem] text-mi-cream outline-none transition focus:border-mi-orange focus:ring-2 focus:ring-mi-orange/20 placeholder:text-mi-cream/45';
const labelClass = 'block font-mi-body text-[.84rem] leading-[1.35] font-semibold text-background-dark';

const disputeFields: Field[] = [
  { name: 'fullName', label: 'Full legal name', required: true, placeholder: 'Your full legal name' },
  { name: 'email', label: 'Email address associated with your Miraee account', type: 'email', required: true, placeholder: 'you@company.com' },
  { name: 'mailingAddress', label: 'Mailing address', required: true, placeholder: 'Street, city, state / province, postal code, country' },
  { name: 'company', label: 'Company or organization name, if applicable', placeholder: 'Company name' },
  { name: 'accountId', label: 'Miraee account or user ID, if available', placeholder: 'Account or user ID', wide: true },
  { name: 'description', label: 'Description of the dispute', type: 'textarea', required: true, hint: 'Please include relevant dates, transactions, communications, features, or Services involved.' },
  { name: 'disputeDate', label: 'Date the dispute arose or was first discovered', type: 'date', required: true },
  { name: 'reference', label: 'Relevant transaction, booking, confirmation, invoice, or reference numbers', placeholder: 'Reference numbers' },
  { name: 'involved', label: 'Individuals or entities involved', required: true, placeholder: 'Names or organizations' },
  { name: 'stepsTaken', label: 'Steps you have already taken to resolve the dispute', type: 'textarea', required: true },
  { name: 'requestedResolution', label: 'Requested resolution', type: 'textarea', required: true, hint: 'Describe the specific relief or outcome you are requesting, including any amount claimed and how it was calculated.' },
  { name: 'amountClaimed', label: 'Amount claimed, if applicable', placeholder: '$0.00' },
];

const optOutFields: Field[] = [
  { name: 'fullName', label: 'Full legal name', required: true, placeholder: 'Your full legal name' },
  { name: 'email', label: 'Email address associated with your Miraee account', type: 'email', required: true, placeholder: 'you@company.com' },
  { name: 'company', label: 'Company or organization name, if applicable', placeholder: 'Company name' },
  { name: 'accountId', label: 'Miraee account or user ID, if available', placeholder: 'Account or user ID' },
];

const disputeAcknowledgements = [
  'the information provided is accurate to the best of my knowledge;',
  'I am submitting this notice in good faith to begin the informal dispute resolution process;',
  'I understand that the 60-day informal resolution period begins when Miraee receives a substantially complete notice;',
  'I agree to participate reasonably and in good faith in the informal resolution process and, if requested, an individual settlement conference;',
  'I understand that submission of this notice does not commence arbitration or litigation; and',
  'Miraee may contact me or my authorized representative using the contact information provided above regarding this dispute.',
];

const optOutAcknowledgements = [
  'I am the individual identified above or am authorized to submit this request on that individual’s behalf;',
  'the information provided in this form is accurate;',
  'I understand that this request applies only to the arbitration provisions identified above;',
  'opting out of an update does not affect arbitration provisions that I previously accepted and did not timely opt out of; and',
  'submitting this form does not terminate my Miraee account or otherwise modify the Terms of Use.',
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 border-b border-background-dark/14 pb-3 font-mi-body text-[.72rem] font-bold tracking-[0.12em] text-mi-scarlet">{children}</h2>;
}

export function LegalIntakeForm({ kind }: { kind: FormKind }) {
  const isDispute = kind === 'dispute';
  const fields = isDispute ? disputeFields : optOutFields;
  const [values, setValues] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<File[]>([]);
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function setValue(name: string, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  function handleFiles(event: ChangeEvent<HTMLInputElement>) {
    setFiles(Array.from(event.target.files ?? []));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity() || !confirmed) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="legal-intake-form rounded-[28px] border border-mi-green/35 bg-mi-green/8 p-7" role="status">
        <p className="font-mi-accent text-[1.4rem] font-bold tracking-[-0.03em] text-background-dark">Form complete</p>
        <p className="mt-3 font-mi-body text-[.96rem] leading-[1.65] text-background-dark/72">
          Your information has been validated in this browser. A secure submission endpoint has not been configured in this codebase, so nothing has been sent or stored.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="legal-intake-form w-full min-w-0 rounded-[28px] border border-mi-cream/14 bg-background-deep p-[clamp(18px,3vw,42px)] text-mi-cream shadow-[0_24px_70px_rgba(0,0,0,.2)]" noValidate>
      <SectionTitle>{isDispute ? 'YOUR INFORMATION' : 'ACCOUNT INFORMATION'}</SectionTitle>
      <div className="mt-6 grid min-w-0 gap-5 sm:grid-cols-2">
        {fields.slice(0, isDispute ? 5 : 4).map((field) => <FieldInput key={field.name} field={field} value={values[field.name] ?? ''} onChange={setValue} />)}
      </div>

      {isDispute && (
        <>
          <SectionTitle>DISPUTE INFORMATION</SectionTitle>
          <div className="mt-6 grid min-w-0 gap-5 sm:grid-cols-2">
            {fields.slice(5).map((field) => <FieldInput key={field.name} field={field} value={values[field.name] ?? ''} onChange={setValue} />)}
          </div>

          <SectionTitle>SUPPORTING DOCUMENTS</SectionTitle>
          <p className="mt-4 font-mi-body text-[.92rem] leading-[1.6] text-background-dark/68">Upload receipts, invoices, screenshots, correspondence, booking records, or account statements. PDF, PNG, and JPG accepted.</p>
          <label className="mt-4 flex min-w-0 flex-wrap cursor-pointer items-center justify-between gap-3 rounded-2xl border border-dashed border-background-dark/24 bg-white px-4 py-4 font-mi-body text-[.9rem] font-semibold text-background-dark transition hover:border-mi-orange focus-within:border-mi-orange focus-within:ring-2 focus-within:ring-mi-orange/20">
            <span>{files.length ? `${files.length} file${files.length === 1 ? '' : 's'} selected` : 'Choose supporting documents'}</span>
            <span className="rounded-full bg-mi-orange/10 px-3 py-1 text-[.75rem] text-mi-scarlet">Browse files</span>
            <input className="sr-only" type="file" accept=".pdf,.png,.jpg,.jpeg" multiple onChange={handleFiles} />
          </label>
          <p className="mt-3 font-mi-body text-[.78rem] leading-[1.55] text-background-dark/56">Do not submit passwords, complete payment-card numbers, security codes, government IDs, medical information, or other unnecessary sensitive information.</p>

          <SectionTitle>SETTLEMENT CONFERENCE</SectionTitle>
          <p className="mt-4 font-mi-body text-[.92rem] leading-[1.6] text-background-dark/68">Section 20 permits either party to request an individual settlement conference during the informal resolution period.</p>
          <RadioGroup name="conference" value={values.conference ?? ''} onChange={setValue} options={[
            'I request an individual settlement conference.',
            'I do not currently request an individual settlement conference.',
            'I am willing to participate if Miraee requests one.',
          ]} />
          <div className="mt-5 grid min-w-0 gap-5 sm:grid-cols-2">
            <FieldInput field={{ name: 'availability', label: 'General availability for a settlement conference', placeholder: 'Days and times that work for you', wide: true }} value={values.availability ?? ''} onChange={setValue} />
          </div>

          <SectionTitle>REPRESENTATION</SectionTitle>
          <RadioGroup name="representation" value={values.representation ?? ''} onChange={setValue} required options={[
            'I am submitting this notice on my own behalf.',
            'I am represented by an attorney or other authorized representative.',
          ]} />
        </>
      )}

      {!isDispute && (
        <>
          <SectionTitle>OPT-OUT ELECTION</SectionTitle>
          <RadioGroup name="election" value={values.election ?? ''} onChange={setValue} required options={[
            'I am opting out of the arbitration provisions applicable when I created my Miraee account.',
            'I am opting out of the most recent update to the arbitration provisions.',
          ]} />
        </>
      )}

      <SectionTitle>ACKNOWLEDGEMENT</SectionTitle>
      <p className="mt-4 font-mi-body text-[.92rem] text-background-dark/68">By submitting this form, I confirm that:</p>
      <ul className="mt-3 grid gap-2 pl-5 font-mi-body text-[.88rem] leading-[1.55] text-background-dark/70">
        {(isDispute ? disputeAcknowledgements : optOutAcknowledgements).map((item) => <li key={item}>{item}</li>)}
      </ul>
      <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-2xl border border-background-dark/12 bg-white p-4 font-mi-body text-[.9rem] leading-[1.45] font-semibold text-background-dark">
        <input type="checkbox" required checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} className="mt-0.5 size-4 accent-mi-scarlet" />
        I confirm all of the statements above. <span className="text-mi-scarlet">*</span>
      </label>

      <SectionTitle>ELECTRONIC SIGNATURE</SectionTitle>
      <div className="mt-5 grid min-w-0 gap-5 sm:grid-cols-2">
        <FieldInput field={{ name: 'signature', label: 'Electronic signature', required: true, placeholder: 'Type your full legal name' }} value={values.signature ?? ''} onChange={setValue} />
        <div className={labelClass}>
          <span>Date</span>
          <div className={`${inputClass} cursor-default bg-background-dark/5 text-background-dark/60`}>{new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date())}</div>
        </div>
      </div>
      <p className="mt-6 font-mi-body text-[.8rem] leading-[1.55] text-background-dark/58">By continuing, you agree to our <Link to="/privacy-policy" className="font-semibold text-mi-scarlet underline underline-offset-4">Privacy Policy</Link> and <Link to="/terms-and-conditions" className="font-semibold text-mi-scarlet underline underline-offset-4">Terms &amp; Conditions</Link>.</p>
      <button type="submit" className="mt-6 inline-flex h-12 items-center justify-center rounded-2xl bg-mi-scarlet px-6 font-mi-body text-[.92rem] font-bold text-white transition hover:bg-mi-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mi-scarlet">Submit form</button>
      <p className="mt-4 font-mi-body text-[.8rem] leading-[1.55] text-background-dark/58">{isDispute ? 'After submission, Miraee will send a confirmation to the email address provided.' : 'After submission, Miraee will send a confirmation to the email address associated with your account.'}</p>
    </form>
  );
}

function FieldInput({ field, value, onChange }: { field: Field; value: string; onChange: (name: string, value: string) => void }) {
  const common = { required: field.required, value, onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(field.name, event.target.value), placeholder: field.placeholder };
  return (
    <label className={`${labelClass} ${field.wide || field.type === 'textarea' ? 'sm:col-span-2' : ''}`}>
      <span>{field.label}{field.required && <span className="ml-1 text-mi-scarlet">*</span>}</span>
      {field.type === 'textarea' ? <textarea rows={5} {...common} className={`${inputClass} min-h-30 resize-y`} /> : <input type={field.type ?? 'text'} {...common} className={inputClass} />}
      {field.hint && <span className="font-medium text-background-dark/55">{field.hint}</span>}
    </label>
  );
}

function RadioGroup({ name, value, onChange, options, required = false }: { name: string; value: string; onChange: (name: string, value: string) => void; options: string[]; required?: boolean }) {
  return <div className="mt-5 grid min-w-0 gap-3">{options.map((option, index) => <label key={option} className="flex min-w-0 cursor-pointer items-start gap-3 rounded-2xl border border-background-dark/12 bg-white p-3.5 font-mi-body text-[.9rem] leading-[1.45] text-background-dark transition hover:border-mi-orange sm:p-4">
    <input type="radio" name={name} value={option} required={required && index === 0} checked={value === option} onChange={(event) => onChange(name, event.target.value)} className="mt-0.5 size-4 accent-mi-scarlet" />
    {option}
  </label>)}</div>;
}
