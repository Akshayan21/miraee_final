export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'mi-theme';

export function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'light' ? 'light' : 'dark';
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('light', theme === 'light');
  window.localStorage.setItem(STORAGE_KEY, theme);
}
