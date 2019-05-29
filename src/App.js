import React, { useState } from 'react'

import Header from './header/components/Header';
import Listen from './views/Listen';
import Menu from './menu/components/Menu';

const globalStyles = (
  <style jsx global>{`
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
      top: 60px; right: 0; bottom: 0; left: 0;
      transition: transform 150ms ease;
      width: 100%;
    }
    section.hidden {
      transform: translateX(-25%);
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
      <section className={isMenuOpen ? 'hidden' : ''}>
        <Listen />
      </section>
    </>
  );
}
