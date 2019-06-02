import React from 'react';

import LogoImage from '../../static/images/logo.svg';
import Hamburger from './Hamburger';

const defaultProps = {
  isMenuOpen: false,
  toggleMenu: () => null
};

function Header({ isMenuOpen, toggleMenu }) {
  return (
    <header className="bg-white">
      <div className="d-flex justify-content-between align-items-center py-1 px-4">
        <img
          className="d-inline-block align-middle rounded-circle"
          width="35"
          height="35"
          src={LogoImage}
        />
        <span className="h5 font-weight-bold m-0">
          SOUL PROVIDER
        </span>
        <Hamburger
          isActive={isMenuOpen}
          onClick={toggleMenu}
        />
      </div>

      <style jsx>{`
        header {
          border-bottom: 1px solid #ddd;
          height: 60px;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1;
        }
      `}</style>

    </header>
  );
}

Header.defaultProps = defaultProps;

export default Header;