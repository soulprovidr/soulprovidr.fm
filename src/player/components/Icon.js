import React from 'react';

export default function Icon({
  disabled,
  onClick,
  src
}) {
  return (
    <>
      <style jsx>{`
        .player__icon {
          height: 35px;
          width: 35px;
          cursor: pointer;
        }

        .player__icon--disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
      <img
        className={`
          player__icon
          ${disabled ? 'player__icon--disabled' : ''}
        `}
        src={src}
        onClick={onClick}
        src={src}
      />
    </>
  );
}