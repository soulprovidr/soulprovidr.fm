import React from 'react';

const Header = () => ([
  <nav class="navbar navbar-expand-lg bg-white border-bottom-grey">
    <a class="navbar-brand">
      <img
        class="d-inline-block align-middle rounded-circle mr-2"
        width="32"
        height="32"
        src="/images/logo.svg"
      />
      <span class="font-weight-bold">
        SOUL PROVIDER
      </span>
    </a>
  </nav>,
  <div class="subnav container-fluid border-bottom-grey bg-white p-2">
    <div class="container d-flex">
      <div class="subnav-item subnav-item--active text-pink mr-3 font-weight-bold text-uppercase">
        Live
      </div>
      <div class="subnav-item text-pink mr-3 font-weight-bold text-uppercase">
        Popular
      </div>
      <div class="subnav-item text-pink mr-3 font-weight-bold text-uppercase">
        Saved
      </div>
    </div>
  </div>
]);

export default Header;