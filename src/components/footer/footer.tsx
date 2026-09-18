import { Link } from 'react-router-dom';
import logo from '@/assets/Miraee_Logo.png';

const columns = [
  {
    title: 'Platform',
    links: [
      { label: 'Platform', href: '/platform' },
      { label: 'Implementation', href: '/platform#implementation' },
      { label: 'Integrations', href: '/platform#integrations' },
      { label: 'AI travel assistant', href: '/ai/agentic-travel' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Employees', href: '/solutions#employees' },
      { label: 'Finance', href: '/solutions#finance' },
      { label: 'Travel Leads', href: '/solutions#travel-leads' },
      { label: 'Use cases', href: '/use-cases' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Company', href: '/company' },
      { label: 'Resources', href: '/resources' },
      { label: 'Careers', href: '/careers' },
      { label: 'Security / Trust', href: '/security' },
    ],
  },
  {
    title: 'Get started',
    links: [
      { label: 'Request a Demo', href: '/contact' },
      { label: 'Book a Demo', href: '/book-a-demo' },
      { label: 'Savings analysis', href: '/pricing' },
      { label: 'Why Miraee', href: '/why-miraee' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative z-2 border-t border-mi-cream/10 bg-background-dark py-[clamp(48px,7vw,88px)] pb-6 font-mi-body">
      <div className="mx-auto grid w-[min(1360px,100%-2*clamp(20px,4vw,64px))] grid-cols-1 gap-x-10 gap-y-12 text-[.9rem] text-mi-cream/70 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
        <div className="min-w-0 sm:col-span-2 lg:col-span-1">
          <img src={logo} alt="Miraee" className="h-[38px] w-auto pb-1" width={110} height={38} />
          <p className="mt-4 max-w-[30ch] text-pretty leading-relaxed">
            Your team’s personal travel agent.
            Booking, support and expenses, together.
          </p>
          <div className="mt-6 text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/65">
            TRAVEL LIMITLESS
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="grid content-start gap-1">
            <b className="mb-3 block font-bold text-mi-cream">{col.title}</b>
            {col.links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="py-2 leading-relaxed text-inherit no-underline transition-colors hover:text-mi-orange"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-[clamp(40px,6vw,72px)] flex w-[min(1360px,100%-2*clamp(20px,4vw,64px))] flex-wrap justify-between gap-3 border-t border-mi-cream/10 pt-6 text-[.75rem] leading-[1.6] font-semibold tracking-[0.06em] text-mi-cream/65">
        <span>© 2026 Miraee · a Tabhi group company</span>
        <Link to="/terms-and-conditions" className="text-mi-cream/70 hover:text-mi-orange focus-visible:outline-2 focus-visible:outline-mi-orange">Terms & Conditions</Link>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <span>Mondee One · Miraee · Abhee — three products, one platform</span>
          <Link to="/privacy-policy" className="text-inherit no-underline transition-colors hover:text-mi-orange">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
