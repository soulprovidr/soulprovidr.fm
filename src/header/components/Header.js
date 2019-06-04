import React from 'react';

import LogoImage from '../../static/images/logo.svg';
import Hamburger from './Hamburger';

const styles = (
  <style jsx>{`
    header {
      border-bottom: 1px solid #ddd;
      height: 59px;
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1;
    }

    .header__subtitle {
      font-size: 0.8em;
    }

    @media (max-width: 360px) {
      header {
        font-size: .9em;
      }  
    }
  `}</style>
)

const defaultProps = {
  isMenuOpen: false,
  toggleMenu: () => null
};

function Header({ isMenuOpen, toggleMenu }) {
  return (
    <header className="bg-white">
      {styles}
      <div className="d-flex align-items-center py-2 px-4">
        <img
          className="d-inline-block align-middle rounded-circle mr-3"
          width="40"
          height="40"
          src={LogoImage}
        />
        <div className="header__text">
          <p className="h5 font-weight-bold m-0">
            SOUL PROVIDER
          </p>
          <p className="header__subtitle m-0 text-muted">
            Internet radio for those who like to groove.
          </p>
        </div>
        {/* <Hamburger
          isActive={isMenuOpen}
          onClick={toggleMenu}
        /> */}
      </div>
    </header>
  );
}

Header.defaultProps = defaultProps;

export default Header;