import React from 'react';

export default function CardOverlay({ children, onClick }) {
  return (
    <div
      className="card__overlay position-absolute d-flex justify-content-center align-items-center"
      onClick={onClick}
    >
      {children}
    </div>
  );
}