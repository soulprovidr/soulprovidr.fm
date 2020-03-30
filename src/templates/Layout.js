import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';

import Head from './Head';
import Header from '@/header/Header';
import Player from '@/player/components/Player';

import '@/static/fonts/hk-grotesk/hk-grotesk.css';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: sans-serif;
  }

  h1, .h1,
  h2, .h2,
  h3, .h3,
  h4, .h4,
  h5, .h5,
  h6, .h6 {
    font-family: hk-grotesk;
  }

  button {
    font-family: hk-grotesk;
    text-transform: uppercase;
    font-weight: 700 !important;
  }
`;

export default function Layout({ children }) {
  const {
    site: { siteMetadata }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Head description={siteMetadata.description} title={siteMetadata.title} />
      <Header />
      <div className="mt-5 mt-md-0 pt-5 pt-md-0">
        {children}
        <Player />
      </div>
    </>
  );
}
