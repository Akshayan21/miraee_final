import { useState, type FormEvent } from 'react';

type FormState = {
  firstName: string;
  lastName: string;
  workEmail: string;
  companyName: string;
};

const INITIAL_STATE: FormState = {
  firstName: '',
  lastName: '',
  workEmail: '',
  companyName: '',
};

const inputClass =
  'h-12 rounded-2xl border border-mi-cream/18 bg-background-dark/55 px-4 font-mi-body text-[.95rem] font-medium text-mi-cream outline-none transition-colors placeholder:text-mi-cream/40 focus:border-mi-orange';

const labelClass = 'grid gap-2 font-mi-body text-[.74rem] font-semibold tracking-[0.06em] text-mi-cream/60';

export function ContactForm() {
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isValid = Object.values(values).every((value) => value.trim().length > 0);
    if (!isValid) return;
    setSubmitted(true);
  }

  return (
    <div className="rounded-[32px] border border-mi-cream/14 bg-mi-cream/4 p-[clamp(24px,3vw,40px)] backdrop-blur-md">
      <div className="font-mi-body text-[.68rem] font-bold tracking-[0.14em] text-mi-cream/50">
        REQUEST A DEMO
      </div>

      {submitted ? (
        <p className="mt-6 font-mi-accent text-[1.15rem] leading-[1.4] font-bold text-mi-cream">
          Thank you — we&rsquo;ll be in touch
        </p>
      ) : (
        <form className="mt-6" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(180px,100%),1fr))] gap-4">
            <label className={labelClass}>
              <span>FIRST NAME</span>
              <input
                type="text"
                placeholder="Priya"
                required
                value={values.firstName}
                onChange={handleChange('firstName')}
                className={inputClass}
              />
            </label>
            <label className={labelClass}>
              <span>LAST NAME</span>
              <input
                type="text"
                placeholder="Menon"
                required
                value={values.lastName}
                onChange={handleChange('lastName')}
                className={inputClass}
              />
            </label>
          </div>
          <div className="mt-4 grid gap-4">
            <label className={labelClass}>
              <span>WORK EMAIL</span>
              <input
                type="email"
                placeholder="priya@company.com"
                required
                value={values.workEmail}
                onChange={handleChange('workEmail')}
                className={inputClass}
              />
            </label>
            <label className={labelClass}>
              <span>COMPANY NAME</span>
              <input
                type="text"
                placeholder="Company"
                required
                value={values.companyName}
                onChange={handleChange('companyName')}
                className={inputClass}
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 h-[54px] w-full cursor-pointer rounded-2xl border-0 bg-mi-scarlet font-mi-body text-[.95rem] font-bold text-white"
          >
            Request a Demo
          </button>
          <p className="mt-4 font-mi-body text-[.8rem] leading-[1.55] text-mi-cream/50">
            Twenty minutes with your policy and your routes. Bring a real trip.
          </p>
        </form>
      )}
    </div>
  );
}
