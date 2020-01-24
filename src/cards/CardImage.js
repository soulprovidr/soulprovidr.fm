import React from 'react';

export default function CardImage({ children }) {
  return (
    <div className="card-image card-img-top position-relative">
      {children}
    </div>
  );
}