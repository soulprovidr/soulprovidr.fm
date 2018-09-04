import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Logo from '../assets/rpj.png';
import Player from '../components/player';

import '../styles/fonts.css';
import '../styles/site.css';
import '../styles/mobile.css';

const Layout = ({ children, data }) => (
  <div className="container">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <div>
      <div className="logo">
        <a
          href="//soulprovidr.co"
          target="_blank"
        >
          <img src={Logo} />
        </a>
      </div>
    </div>
    <div>
      <Header
        description={data.site.siteMetadata.description}
        title={data.site.siteMetadata.title}
      />
      <div className="content">
        {children()}
      </div>
    </div>
    <Player />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteMetaQuery {
    site {
      siteMetadata {
        title,
        description,
        keywords
      }
    }
  }
`;
