import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';
import PlayerView from './PlayerView';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: Avenir Next, sans-serif;
  }

  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: Avenir Next;
  }
`;

const Section = styled.section`
  overflow-y: auto;
  position: fixed;
  top: 75px; right: 0; bottom: 0; left: 0;
  width: 100%;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Section className="container">
        {/* <PlayerView /> */}
        {children}
      </Section>
    </>
  );
}
