import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavBar } from '@/components/navigation/nav-bar';
import { Footer } from '@/components/footer/footer';
import { resetLenisScroll, useLenis } from '@/hooks/use-lenis';

export default function RootLayout() {
  useLenis();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'auto', block: 'start' });
      } else {
        resetLenisScroll();
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return (
    <div className="relative isolate flex min-h-svh flex-col">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
