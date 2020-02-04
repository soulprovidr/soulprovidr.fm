import React from 'react';

import Link from 'gatsby-link';

export default function Navigation({ icons, links }) {
  return (
    <nav>
      <div className="d-flex align-items-center">
        {icons.map((icon, i) => (
          <a
            href={icon.href}
            key={i}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt=""
              className="icon mr-3 align-text-bottom"
              src={icon.src}
            />
          </a>
        ))}
        <ul className="m-0">
          {links.map(link => (
            <div
              className="link h7 d-inline-block text-uppercase pr-4"
              key={link.href}
            >
              {link.external ? (
                <a
                  className="text-dark"
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.text}  
                </a>
              ) : (
                <Link
                  className="text-dark"
                  to={link.href}
                >
                  {link.text}
                </Link>
              )}
            </div>
          ))}
        </ul>
      </div>
    </nav>
  );
}