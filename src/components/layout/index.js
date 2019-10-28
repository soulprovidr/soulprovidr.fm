import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';

import Head from './head';
import Header from './header';

import '../../static/fonts/hk-grotesk/hk-grotesk.css';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: hk-grotesk, sans-serif;
  }

  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: hk-grotesk;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Head
        description="For those who like to groove."
        title="Soul Provider"
      />
      <Header />
      {children}
    </>
  );
}
