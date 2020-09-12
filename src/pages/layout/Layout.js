import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Head from './Head';
import Header from './Header';
import { GlobalPlayer } from '@/modules/player';

import { ThemeProvider, Box } from '@/theme';

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
      <Box mt={[5, 0]} pt={[5, 0]}>
        {children}
        <GlobalPlayer />
      </Box>
    </ThemeProvider>
  );
}
