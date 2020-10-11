import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Player } from 'ui/player';
import { ThemeProvider } from 'theme';

import { Header, HeaderLinks } from '../header';
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

// Rendering navigation separately here on mobile due to Safari scrolling issue.
// https://stackoverflow.com/a/59182323/1024766
const StyledHeaderLinks = styled(HeaderLinks)(
  css({
    display: ['flex', 'none'],
    'a, a:active, a:visited': {
      color: 'textPrimary'
    }
  })
);

export function Layout({ children }) {
  const {
    site: { siteMetadata }
  } = useStaticQuery(query);

  return (
    <ThemeProvider>
      <Head description={siteMetadata.description} title={siteMetadata.title} />
      <Header />
      {children}
      <Player />
      <StyledHeaderLinks />
    </ThemeProvider>
  );
}
