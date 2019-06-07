import React, { useState } from 'react'

import Header from './Header';
import Player from './Player';

export default function App() {
  return (
    <>
      <style jsx global>{`
        html, body {
          font-family: Avenir Next, sans-serif;
        }
        
        .h1, .h2, .h3, .h4, .h5, .h6 {
          font-family: Avenir Next;
        }
      `}</style>

      <style jsx>{`
        section {
          overflow-y: auto;
          position: fixed;
          top: 75px; right: 0; bottom: 0; left: 0;
          width: 100%;
        }
      `}</style>

      <Header />
      <section className="container">
        <Player />
      </section>
    </>
  );
}
