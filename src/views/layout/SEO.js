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
        siteUrl
      }
    }
  }
`;

export const SEO = ({
  description = null,
  image = null,
  slug = '',
  title = null,
  type = null
}) => {
  const {
    site: { siteMetadata }
  } = useStaticQuery(query);
  const pageTitle = `${title} | ${siteMetadata.title}`;
  return (
    <Helmet title={title}>
      <meta
        property="description"
        content={description || siteMetadata.description}
      />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${slug}`} />
      <meta
        property="og:image"
        content={`${siteMetadata.siteUrl}${image || LogoImage}`}
      />
      <meta property="og:title" content={pageTitle} />
      <meta
        property="og:description"
        content={description || siteMetadata.description}
      />
      {type && <meta property="og:type" content={type} />}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={pageTitle} />
      <meta
        property="twitter:description"
        content={description || siteMetadata.description}
      />
    </Helmet>
  );
};
