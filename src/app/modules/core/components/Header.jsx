import React from 'react';

import Logo from '~/images/logo.svg';

const Header = () => ([
  <nav className="navbar navbar-expand-lg bg-white border-bottom-grey">
    <a className="navbar-brand">
      <img
        className="d-inline-block align-middle rounded-circle mr-2"
        width="32"
        height="32"
        src={Logo}
      />
      <span className="font-weight-bold">
        SOUL PROVIDER
      </span>
    </a>
  </nav>,
  <div className="subnav container-fluid border-bottom-grey bg-white p-2">
    <div className="container d-flex">
      <div className="subnav-item subnav-item--active font-weight-bold text-uppercase">
        Live now:&nbsp;&nbsp;<span className="text-pink">R&B Heat</span>
      </div>
    </div>
  </div>
]);

export default Header;