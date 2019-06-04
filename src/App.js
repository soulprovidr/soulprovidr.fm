import React, { useState } from 'react'

import Header from './header/components/Header';
import Listen from './views/Listen';
import Menu from './menu/components/Menu';

const globalStyles = (
  <style jsx global>{`
    html, body {
      font-family: Avenir Next, sans-serif;
    }
    
    .h1, .h2, .h3, .h4, .h5, .h6 {
      font-family: Avenir Next;
    }

    main {
      width: 100vw;
      height: 100vh;
    }
  `}</style>
);

const styles = (
  <style jsx>{`
    section {
      overflow-y: auto;
      position: fixed;
      top: 59px; right: 0; bottom: 0; left: 0;
      transition: transform 350ms cubic-bezier(.37,.52,.26,1);
      width: 100%;
    }
    section.hidden {
      transform: translateX(25%);
    }
  `}</style>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {globalStyles}
      {styles}
      <Header
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <Menu isOpen={isMenuOpen} />
      <section className={`
        container
        ${isMenuOpen ? 'hidden' : ''}
      `}>
        <Listen />
      </section>
    </>
  );
}
