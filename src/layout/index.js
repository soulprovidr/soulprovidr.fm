import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';

import Header from './header';

import '../static/fonts/hk-grotesk/hk-grotesk.css';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: hk-grotesk, sans-serif;
  }

  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: hk-grotesk;
  }

  .card {
    cursor: pointer;
    transition: transform 100ms ease-in-out;
    &:hover {
      transform: scale(1.01);
    }
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
}
