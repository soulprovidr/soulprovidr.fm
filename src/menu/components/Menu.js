import React from 'react';

const styles = (
  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; }
      to:{ opacity: 1; } 
    }

    .menu {
      position: fixed;
      top: 60px; left: 0; right: 0; bottom: 0;
      transform: translateX(100%);
      transition: transform 150ms ease;
      z-index: 1;
    }

    .menu.is-open {
      transform: translateX(0);
    }

    .menu__content {
      #animation: fadeIn 150ms ease 150ms;
      animation-fill-mode: backwards;
    }
  `}</style>
);

function Menu({ isOpen }) {
  return (
    <div className={`
      menu bg-white ${isOpen ? 'is-open' : ''}
    `}>
      {styles}
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
    </div> 
  );
}

export default Menu;