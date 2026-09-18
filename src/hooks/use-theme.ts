import { useSyncExternalStore } from 'react';
import { applyTheme, getInitialTheme, type Theme } from '@/lib/theme';

let theme: Theme = getInitialTheme();
const listeners = new Set<() => void>();

function setTheme(next: Theme) {
  theme = next;
  applyTheme(theme);
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useTheme() {
  const current = useSyncExternalStore(subscribe, () => theme, () => theme);

  function toggleTheme() {
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  return { theme: current, toggleTheme };
}
