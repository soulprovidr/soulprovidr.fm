import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../menu';

const Layout = ({ children }) => (
  <>
    <div className="content container d-flex flex-column justify-content-around">
      {children}
    </div>

    <style jsx>{`
      .content {
        position: absolute;
        overflow-y: scroll;
        top: 93px; right: 0; left: 0; bottom: 0;
      }
    `}</style>
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ])
};

export default Layout;
