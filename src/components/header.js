import React from 'react'
import Link from 'gatsby-link'

import Nav from './nav';

const Header = ({ description, title }) => (
  <header>
    <h1>
      <Link to="/">
        {title}
      </Link>
    </h1>
    <h2>
      {description}
    </h2>
    <Nav />
  </header>
)

export default Header
