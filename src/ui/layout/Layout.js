import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { GlobalPlayer } from 'modules/player';
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
      <GlobalPlayer />
      <StyledHeaderLinks />
    </ThemeProvider>
  );
}
