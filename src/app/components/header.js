import React from 'react'
import Link from 'gatsby-link'

import Logo from '../assets/rpj.png';

const Header = ({ description, title }) => (
  <header>
    <div className="header__left">
      <img
        src={Logo}
        alt="Soul Provider logo"
      />
      <div>
        <h2>
          <Link to="/">
            {title}
          </Link>
        </h2>
        <p>{description}</p>
      </div>
    </div>
    <div className="header__right">
      <nav>
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
        <a
          href="https://github.com/soulprovidr/soulprovidr.fm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </nav>
    </div>
  </header>
)

export default Header
