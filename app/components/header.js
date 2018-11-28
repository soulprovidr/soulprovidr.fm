import React from 'react';

const Header = () => (
  <nav className="navbar navbar-expand-lg bg-white border-bottom-grey">
    <a className="navbar-brand">
      <img
        className="d-inline-block align-middle rounded-circle mr-3"
        width="32"
        height="32"
        src="/static/images/logo.svg"
      />
      <span className="font-weight-bold">
        SOULPROVIDR.FM
      </span>
    </a>
  </nav>
);

export default Header;