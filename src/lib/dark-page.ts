/**
 * Base classes for every dark-theme marketing page <main>. Headings inherit
 * text-text from globals.css's base layer, so `mi-page` (globals.css, zero-specificity
 * :where() selector) overrides it to text-mi-cream by default — any component-level
 * text-* utility placed directly on a heading (e.g. an inverted light-band section)
 * still wins over it.
 */
export const DARK_PAGE_CLASS = 'mi-page relative z-2 overflow-hidden bg-background-dark font-mi-body text-mi-cream';

import type { CSSProperties } from 'react';

/**
 * Pins a "product screenshot" subtree (chat/console/app mockups) to the dark-theme
 * palette regardless of the site's light/dark toggle — these represent the actual
 * Miraee app UI, not page chrome, so they don't flip. Pass directly as a `style` prop.
 */
export const CONSOLE_PIN_STYLE = {
  '--color-mi-cream': '#f3f1ed',
  '--color-background-dark': '#110e09',
  '--color-mi-amber-text': '#ffbe4d',
  '--color-mi-blue-text': '#809bff',
  '--color-mi-green-text': '#00bf62',
} as CSSProperties;
