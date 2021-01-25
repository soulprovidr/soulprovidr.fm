import React from 'react';

import { defaultTheme, darkTheme } from '../theme';

/**
 * Renders a script tag which contains code that determines what color mode
 * the user has selected (if any), and sets CSS variables according to this
 * selection.
 *
 * Code taken quite liberally from: https://www.joshwcomeau.com/react/dark-mode/
 *
 * Sets the following CSS variables:
 *  --color-text-primary
 *  --color-bg
 *  --color-hover
 *  --initial-color-mode
 */
export const ColorMode = () => {
  const getColorMode = `
(function() {
  function getInitialColorMode() {
    const persistedColorPreference = window.localStorage.getItem('color-mode');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    // If they haven't been explicit, let's check the media
    // query
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }
    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.
    return 'light';
  }
  const colorMode = getInitialColorMode();
  console.log('colorMode', colorMode);
  const root = document.documentElement;
  root.style.setProperty(
    '--color-text-primary',
    colorMode === 'light'
      ? '${defaultTheme.colors.text.primary}'
      : '${darkTheme.colors.text.primary}'
  );
  root.style.setProperty(
    '--color-bg',
    colorMode === 'light'
      ? '${defaultTheme.colors.bg}'
      : '${darkTheme.colors.bg}'
  );
  root.style.setProperty(
    '--color-hover',
    colorMode === 'light'
      ? '${defaultTheme.colors.hover}'
      : '${darkTheme.colors.hover}'
  );
  root.style.setProperty('--initial-color-mode', colorMode);
})()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: getColorMode }} />;
};
