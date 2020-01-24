import React from 'react';

export default function Card({ children, onClick, isPlayable }) {
  return (
    <div
      className={`
        card
        ${isPlayable ? 'card--playable' : ''}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  )
}