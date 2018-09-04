import React from 'react';
import Link from 'gatsby-link'

const Nav = () => (
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
    >
      Donate
    </a>
    <a
      href="https://github.com/soulprovidr/soulprovidr.fm"
      target="_blank"
    >
      Source
    </a>
  </nav>
);

export default Nav;