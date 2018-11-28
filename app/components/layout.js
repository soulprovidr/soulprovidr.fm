import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="content container">
      <div className="row py-4 justify-content-between">
        {children}
      </div>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ])
};

export default Layout;
