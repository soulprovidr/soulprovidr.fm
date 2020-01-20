import React from 'react';

export default function Spinner({ modifier ='secondary' }) {
  return (
    <div className={`spinner-border text-${modifier}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
}