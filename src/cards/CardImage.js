import React from 'react';

import PauseIcon from '@/static/images/pause.png';
import PlayIcon from '@/static/images/play.png';

export default function CardImage({ children, onClick, isPlaying }) {
  const getIcon = () => isPlaying
    ? (
      <img
        alt="Paused"
        className="card-image__icon"
        src={PauseIcon}
      />
    ) : (
      <img
        alt="Play"
        className="card-image__icon"
        src={PlayIcon}
      />
    );
  return (
    <div
      className="card-image card-img-top position-relative"
      onClick={onClick}
    >
      <div className="card-image__overlay position-absolute d-flex justify-content-center align-items-center">
        {getIcon()}
      </div>
      {children}
    </div>
  );
}