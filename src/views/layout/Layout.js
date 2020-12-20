import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import Helmet from 'react-helmet';
import { Player } from 'views/player';
import { Text, ThemeProvider } from 'theme';
import Favicon from 'static/images/favicon.png';

import { Header, HeaderLinks } from '../header';

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
      color: 'text.primary'
    }
  })
);

export function Layout({ children }) {
  const {
    site: { siteMetadata }
  } = useStaticQuery(query);

  return (
    <ThemeProvider>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        defaultTitle={siteMetadata.title}
        description={siteMetadata.description}
        titleTemplate={`%s | ${siteMetadata.title}`}
      >
        <link rel="icon" href={Favicon} type="image/png" />
      </Helmet>
      <Header />
      {children}
      <Player />
      <StyledHeaderLinks />
    </ThemeProvider>
  );
}
