import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

import Logo from '../assets/rpj.png';

const propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const Header = ({ description, title }) => (
  <header className="header">
    <div className="header__left">
      <img
        className="header__logo"
        src={Logo}
        alt="Soul Provider logo"
      />
      <div className="header__text">
        <p className="header__title">
          <Link to="/">
            {title}
          </Link>
        </p>
        <p className="header__description">
          {description}
        </p>
      </div>
    </div>
    <div className="header__right">
      <nav className="header__nav">
        <Link to="/">
          Home
        </Link>
        <Link to="/faq">
          FAQ
        </Link>
        <a
          href="https://www.buymeacoffee.com/ZPCo2GTd1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate
        </a>
      </nav>
    </div>
  </header>
);

Header.propTypes = propTypes;

export default Header;
