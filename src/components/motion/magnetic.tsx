import * as React from 'react';
import gsap from 'gsap';

type MagneticProps = {
  children: React.ReactElement;
};

/** Pointer-follow magnetic hover — reimplements the mockup's [data-magnet] behavior (desktop, pointer:fine only). */
function Magnetic({ children }: MagneticProps) {
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node || !window.matchMedia('(pointer: fine)').matches) return;

    const xTo = gsap.quickTo(node, 'x', { duration: 0.5, ease: 'power3.out' });
    const yTo = gsap.quickTo(node, 'y', { duration: 0.5, ease: 'power3.out' });

    function onMove(e: PointerEvent) {
      const rect = node!.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      xTo(relX * 0.25);
      yTo(relY * 0.25);
    }
    function onLeave() {
      xTo(0);
      yTo(0);
    }

    node.addEventListener('pointermove', onMove);
    node.addEventListener('pointerleave', onLeave);
    return () => {
      node.removeEventListener('pointermove', onMove);
      node.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return React.cloneElement(children, { ref } as Partial<unknown>);
}

export { Magnetic };
