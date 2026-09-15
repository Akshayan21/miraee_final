import * as React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

type RevealProps = React.ComponentProps<'div'> & {
  as?: 'div' | 'span' | 'li';
  delay?: number;
  visibleOnLoad?: boolean;
};

/** Scroll-triggered fade/translate-up reveal — reimplements the mockup's [data-step] behavior. */
function Reveal({ as = 'div', delay = 0, visibleOnLoad = false, className, style, ...props }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Comp = as as 'div';

  return (
    <Comp
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn('transition-all duration-700 ease-(--motion-ease)', className)}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visibleOnLoad || inView ? 1 : 0,
        transform: visibleOnLoad || inView ? 'none' : 'translateY(24px)',
        ...style,
      }}
      {...props}
    />
  );
}

export { Reveal };
