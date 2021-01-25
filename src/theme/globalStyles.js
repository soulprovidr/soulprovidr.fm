import { css } from '@emotion/core';

export const globalStyles = (theme) => css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes[3]};
    background: var(--color-bg);
    margin: 0;
  }

  a,
  a:active,
  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  h1,
  h2,
  h3,
  h4,
  h3,
  h6 {
    color: var(--color-text-primary);
    font-family: ${theme.fonts.heading};
    font-weight: bold;
  }

  h1 a,
  h1 a:active,
  h1 a:visited,
  h2 a,
  h2 a:active,
  h2 a:visited,
  h3 a,
  h3 a:active,
  h3 a:visited,
  h4 a,
  h4 a:active,
  h4 a:visited,
  h3 a,
  h3 a:active,
  h3 a:visited,
  h6 a,
  h6 a:active,
  h6 a:visited {
    color: var(--color-text-primary);
  }

  button {
    font-family: ${theme.fonts.heading};
    text-transform: uppercase;
    font-weight: 700 !important;
  }
`;
