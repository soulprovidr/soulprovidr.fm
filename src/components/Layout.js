import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';

import '../static/fonts/hk-grotesk/hk-grotesk.css';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: hk-grotesk, Avenir Next, sans-serif;
  }

  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: hk-grotesk, Avenir Next, sans-serif;
  }
`;

const Hero = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(https://unsplash.it/1920/1080/?random);
  background-size: cover;
  filter: brightness(40%) grayscale(80%);
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
