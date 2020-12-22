import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import LogoImage from 'static/images/logo.png';

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

export const SEO = ({
  description = null,
  image = null,
  title = null,
  type = 'website'
}) => {
  const {
    site: { siteMetadata }
  } = useStaticQuery(query);
  return (
    <Helmet title={title}>
      <meta
        property="description"
        content={description || siteMetadata.description}
      />
      <meta property="og:url" content="https://soulprovidr.fm" />
      <meta property="og:image" content={image || LogoImage} />
      <meta property="og:title" content={title || siteMetadata.title} />
      <meta
        property="og:description"
        content={description || siteMetadata.description}
      />
      <meta property="og:type" content={type} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title || siteMetadata.title} />
      <meta
        property="twitter:description"
        content={description || siteMetadata.description}
      />
    </Helmet>
  );
};
