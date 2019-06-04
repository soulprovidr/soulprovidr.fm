import React from 'react';

const styles = (
  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; }
      to:{ opacity: 1; } 
    }

    .menu {
      overflow-y: auto;
      position: fixed;
      top: 60px; left: 0; right: 0; bottom: 0;
      transform: translateX(-100%);
      transition: transform 250ms cubic-bezier(.37,.52,.26,1);
      z-index: 1;
    }

    .menu.is-open {
      transform: translateX(0);
    }

    .menu__content {
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
      {/* <img src={RayImage} width="100%" /> */}
      <div className="container menu__content mt-3 d-flex flex-column justify-content-center align-items-center h-100 text-center">
        <div>
          <p className="h6">
            Internet radio for those who like to groove.
          </p>
          <p><a href="mailto:shola@soulprovidr.fm">shola@soulprovidr.fm</a></p>
          {/* <p>Stay in the loop by signing up for the <strong>Soul Provider</strong> newsletter:</p>
          <form className="form-inline">
            <input type="email" placeholder="shola@soulprovidr.fm" />
            <button type="submit">Sign up</button>
          </form> */}
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