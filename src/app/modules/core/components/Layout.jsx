import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="content container">
      <div className="row">
        {children}
      </div>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
