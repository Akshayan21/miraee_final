import NeuralVortex from '@/components/ui/neural-vortex';
import { useTheme } from '@/hooks/use-theme';

export const VORTEX_THEME = {
  dark: {
    colors: ['#450e14', '#c74400', '#e55602'] as [string, string, string],
    opacity: 0.95,
    overlay:
      'linear-gradient(100deg, rgba(10,6,4,.92) 0%, rgba(10,6,4,.7) 32%, rgba(10,6,4,.15) 58%, rgba(10,6,4,.55) 100%)',
  },
  light: {
    colors: ['#c74400', '#e55602', '#450e14'] as [string, string, string],
    opacity: 0.85,
    overlay:
      'linear-gradient(100deg, rgba(251,249,246,.96) 0%, rgba(251,249,246,.82) 30%, rgba(251,249,246,.2) 56%, rgba(251,249,246,.45) 100%)',
  },
} as const;

/** Animated neural-vortex gradient used behind every page hero. */
export function HeroVortexBackground() {
  const { theme } = useTheme();
  const vortex = VORTEX_THEME[theme];

  return (
    <>
      <NeuralVortex className="pointer-events-none -z-10" colors={vortex.colors} opacity={vortex.opacity} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: vortex.overlay }}
      />
    </>
  );
}
