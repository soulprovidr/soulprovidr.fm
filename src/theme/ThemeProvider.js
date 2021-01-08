import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import { globalStyles } from './globalStyles';
import { useIsDarkModeEnabled } from './hooks';

import { defaultTheme, darkTheme } from './theme';

export const ThemeProvider = ({ children }) => {
  const isDarkModeEnabled = useIsDarkModeEnabled();
  return (
    <EmotionThemeProvider theme={isDarkModeEnabled ? darkTheme : defaultTheme}>
      <Global styles={globalStyles} />
      {children}
    </EmotionThemeProvider>
  );
};
