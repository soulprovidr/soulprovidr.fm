import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Head from './Head';
import Header from '@/header/Header';
import Player from '@/player/components/Player';

import { ThemeProvider, Box } from '@/ui';

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

export default function Layout({ children }) {
  const {
    site: { siteMetadata }
  } = useStaticQuery(query);

  return (
    <ThemeProvider>
      <Head description={siteMetadata.description} title={siteMetadata.title} />
      <Header />
      <Box mt={[5, 0]} pt={[5, 0]}>
        {children}
        <Player />
      </Box>
    </ThemeProvider>
  );
}
