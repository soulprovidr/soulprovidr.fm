import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';

import theme from './theme';

const globalStyles = (theme) => css`
  html,
  body {
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes[11]};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    font-weight: bold;
  }

  button {
    font-family: ${theme.fonts.heading};
    text-transform: uppercase;
    font-weight: 700 !important;
  }
`;

export const ThemeProvider = ({ children }) => (
  <EmotionThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    {children}
  </EmotionThemeProvider>
);
