import React from 'react'
import Link from 'gatsby-link'

import Logo from '../assets/rpj.png';
import Nav from './nav';

const Header = ({ description, title }) => (
  <header>
    <div className="header__logo">
      <img src={Logo} />
      <h2>
        <Link to="/">
          {title}
        </Link>
      </h2>
    </div>
    <Nav />
  </header>
)

export default Header
