import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from "gatsby"

import Favicon from '../assets/favicon.png';
import Header from '../components/header';

import '../styles/fonts.css';
import '../styles/site.css';
import '../styles/mobile.css';

const Layout = ({ children, data }) => (
  <StaticQuery
    className="container"
    query={graphql`
      query SiteMetaQuery {
        site {
          siteMetadata {
            title,
            description,
            keywords
          }
        }
      }
    `}
    render={data => (
      <div className="container">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description
            },
            {
              name: 'keywords',
              content: data.site.siteMetadata.keywords
            },
          ]}
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${Favicon}`
            }
          ]}
        />
        <Header
          description={data.site.siteMetadata.description}
          title={data.site.siteMetadata.title}
        />
        <div className="content">
          {children}
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
