import React from 'react';

import PauseIcon from '@/static/images/pause.png';
import PlayIcon from '@/static/images/play.png';

export default function CardControls({ isPlaying = false }) {
  return isPlaying ? (
    <img
      alt="Paused"
      className="card__control"
      src={PauseIcon}
    />
  ) : (
      <img
        alt="Play"
        className="card__control"
        src={PlayIcon}
      />
    );
}