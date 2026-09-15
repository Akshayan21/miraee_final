import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Magnetic } from '@/components/motion/magnetic';
import { allPagesNav, primaryCta, primaryNav, signInCta } from '@/config/navigation';
import { useTheme } from '@/hooks/use-theme';
import logo from '@/assets/Miraee_Logo.png';

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1280px)');
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  return (
    <>
      <header
        data-site-header
        className={cn(
          'fixed inset-x-0 top-0 z-[100] border-b py-3.5 transition-[background-color,backdrop-filter,padding,border-color] duration-500 [will-change:background-color,backdrop-filter,padding] sm:py-[18px]',
          (scrolled || pathname === '/terms-and-conditions' || pathname === '/privacy-policy')
            ? 'border-mi-cream/10 bg-background-dark/85 py-2.5 backdrop-blur-md sm:py-3'
            : 'border-mi-cream/10 bg-background-dark',
        )}
      >
        <div className="mx-auto flex w-[min(1360px,100%-2*clamp(16px,4vw,64px))] items-center gap-3 sm:gap-6">
          <Link
            to="/"
            className="block shrink-0 opacity-100 transition-opacity hover:opacity-75"
            onClick={() => setOpen(false)}
          >
            <img src={logo} alt="Miraee" className="h-6 w-auto sm:h-7" width={110} height={28} />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden flex-1 items-center justify-center gap-1 whitespace-nowrap font-mi-body text-sm font-semibold xl:flex"
          >
            {primaryNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'rounded-full px-3 py-2 transition-colors',
                    active ? 'text-mi-orange' : 'text-mi-cream/72 hover:text-mi-orange',
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex flex-none items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={toggleTheme}
              className="flex size-10 flex-none items-center justify-center rounded-2xl border border-mi-cream/16 bg-transparent text-mi-cream transition-colors hover:border-mi-cream/30 hover:bg-mi-cream/5 sm:size-[42px]"
            >
              {theme === 'dark' ? <Sun className="size-4.5" aria-hidden="true" /> : <Moon className="size-4.5" aria-hidden="true" />}
            </button>

            <a
              href={signInCta.href}
              className="hidden h-10 items-center rounded-2xl border border-mi-cream/16 px-3.5 font-mi-body text-[.76rem] font-bold tracking-[0.02em] whitespace-nowrap text-mi-cream no-underline transition-colors hover:border-mi-cream/30 hover:bg-mi-cream/5 sm:flex sm:h-[42px] sm:px-5 sm:text-[.8rem]"
            >
              {signInCta.label}
            </a>

            <Magnetic>
              <Link
                to={primaryCta.href}
                className="hidden items-center gap-2 rounded-2xl bg-mi-scarlet px-3.5 font-mi-body text-[.76rem] font-bold tracking-[0.02em] whitespace-nowrap text-white no-underline transition-transform active:scale-95 sm:inline-flex sm:h-[42px] sm:px-5 sm:text-[.8rem]"
              >
                {primaryCta.label}
              </Link>
            </Magnetic>

            <button
              type="button"
              aria-label={open ? 'Close menu' : 'All pages'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              aria-controls="site-menu"
              className="relative flex size-10 flex-none items-center justify-center rounded-2xl border border-mi-cream/16 bg-transparent transition-colors hover:border-mi-cream/30 hover:bg-mi-cream/5 sm:size-[42px] xl:hidden"
            >
              <i
                className={cn(
                  'absolute block h-0.5 w-4 rounded-sm bg-mi-cream transition-transform duration-300 ease-(--motion-ease)',
                  open ? 'rotate-45' : '-translate-y-[3px]',
                )}
              />
              <i
                className={cn(
                  'absolute block h-0.5 w-4 rounded-sm bg-mi-cream transition-transform duration-300 ease-(--motion-ease)',
                  open ? '-rotate-45' : 'translate-y-[3px]',
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="site-menu"
        data-lenis-prevent
        inert={!open}
        className={cn(
          'fixed inset-0 z-[75] flex flex-col overflow-y-auto overscroll-contain bg-background-deep pt-[clamp(84px,12vh,112px)] pb-8 transition-[opacity,transform,visibility] duration-500 ease-(--motion-ease) xl:hidden',
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3.5 opacity-0',
        )}
      >
        <div className="mx-auto grid w-[min(1360px,100%-2*clamp(16px,4vw,64px))] flex-1 grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] content-center gap-x-12 gap-y-10">
          <ol className="m-0 grid list-none gap-0.5 p-0 font-mi-accent">
            {allPagesNav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href} className="border-b border-mi-cream/8 last:border-none">
                  <Link
                    to={item.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex items-baseline gap-4 py-2 text-[clamp(1.15rem,4vw,1.9rem)] leading-[1.3] font-bold tracking-[-0.03em] no-underline transition-colors',
                      active ? 'text-mi-orange' : 'text-mi-cream hover:text-mi-orange',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ol>
          <div className="flex flex-col gap-8 border-t border-mi-cream/10 pt-8 sm:border-t-0 sm:pt-0">
            <div className="font-mi-body text-[.95rem] leading-[1.9] text-mi-cream/72">
              <span className="font-mi-script text-[2rem] text-mi-orange">Travel Limitless</span>
              <br />
              Miraee · the employee travel platform
              <br />
              of the Tabhi group
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={signInCta.href}
                className="flex h-12 flex-1 items-center justify-center rounded-2xl border border-mi-cream/24 bg-mi-cream/[0.04] px-5 font-mi-body text-[.85rem] font-bold tracking-[0.02em] text-mi-cream no-underline transition-colors hover:border-mi-cream/40 hover:bg-mi-cream/[0.08]"
              >
                {signInCta.label}
              </a>
              <Link
                to={primaryCta.href}
                onClick={() => setOpen(false)}
                className="flex h-12 flex-1 items-center justify-center rounded-2xl bg-mi-scarlet px-5 font-mi-body text-[.85rem] font-bold tracking-[0.02em] text-white no-underline transition-transform active:scale-95"
              >
                {primaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

