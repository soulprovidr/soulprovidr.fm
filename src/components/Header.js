import React from 'react';

import LogoImage from '../static/images/logo.svg';

export default function Header() {
  return (
    <header className="bg-white">
      <style jsx>{`
        header {
          border-bottom: 1px solid #ddd;
          height: 75px;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1;
        }

        .header__subtitle {
          font-size: 0.8em;
        }

        @media (max-width: 368px) {
          header {
            font-size: .9em;
          }  
        }
      `}</style>

      <div className="d-flex align-items-center py-3 px-4">
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
      </div>
    </header>
  );
}