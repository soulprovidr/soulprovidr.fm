import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GlobalPlayer } from 'modules/player';
import { ThemeProvider, Box } from 'theme';

import { Header } from '../header';
import { Head } from './Head';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export function Layout({ children }) {
  const {
    site: { siteMetadata }
  } = useStaticQuery(query);

  return (
    <ThemeProvider>
      <Head description={siteMetadata.description} title={siteMetadata.title} />
      <Header />
      {children}
      <GlobalPlayer />
    </ThemeProvider>
  );
}
