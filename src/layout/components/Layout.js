import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Head from './Head';
import Header from '@/header/Header';
import StaticPlayer from '@/player/components/StaticPlayer';

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
        <StaticPlayer />
      </Box>
    </ThemeProvider>
  );
}
