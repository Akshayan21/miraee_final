import * as React from 'react';
import { useInView } from '@/hooks/use-in-view';

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Scroll-triggered count-up — reimplements the mockup's [data-count] behavior. */
function CountUp({ value, prefix = '', suffix = '', duration = 1400, className }: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [display, setDisplay] = React.useState(prefersReducedMotion() ? value : 0);

  React.useEffect(() => {
    if (!inView || prefersReducedMotion()) return;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export { CountUp };
