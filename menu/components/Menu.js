import React, { useState } from 'react';

import Hamburger from './Hamburger';

function Menu({ }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function onHamburgerClick() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="menu bg-white">
      <div className="menu__title d-flex justify-content-between align-items-center py-1 px-4">
        <img
          className="d-inline-block align-middle rounded-circle"
          width="35"
          height="35"
          src="/static/images/logo.svg"
        />
        <span className="h4 font-weight-bold m-0">
          SOUL PROVIDER
        </span>
        <Hamburger
          isActive={isExpanded}
          onClick={onHamburgerClick}
        />
      </div>
      
      {isExpanded && (
        <div className="container menu__content mt-3 text-justify d-flex flex-column flex-grow-1">
          <div>
            <p>
              <strong>Soul Provider</strong> is an online radio station for those who like to groove.
            </p>
            <p>Tune in daily for a handpicked mix of soulful music spanning the genres of <strong>funk, soul, disco, R&B, hip-hop</strong>, and everything in-between.</p>
            <p>Stay in the loop by signing up for the <strong>Soul Provider</strong> newsletter:</p>
            <form className="form-inline">
              <input type="email" placeholder="shola@soulprovidr.fm" />
              <button type="submit">Sign up</button>
            </form>
            <ul className="d-none">
              <li>LISTEN</li>
              <li>SCHEDULE</li>
              <li>ABOUT</li>
            </ul>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to:{ opacity: 1; } 
        }

        .menu {
          border-bottom: 1px solid #ddd;
          height: ${isExpanded ? '100%' : '60px'};
          position: fixed;
          top: 0; left: 0; right: 0;
          transition: height 250ms ease;
          z-index: 1;
        }

        .menu__content {
          animation: fadeIn 250ms ease 250ms;
          animation-fill-mode: backwards;
        }
      `}</style>

    </div>
  );
}

export default Menu;