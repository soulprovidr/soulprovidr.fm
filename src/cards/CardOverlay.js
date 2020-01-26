import React from 'react';

export default function CardOverlay({ children }) {
  return (
    <div className="card__overlay position-absolute d-flex justify-content-center align-items-center">
      {children}
    </div>
  );
}