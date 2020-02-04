import React from 'react';

import PlayIcon from '@/common/components/PlayIcon';
import PauseIcon from '@/common/components/PauseIcon';

export default function CardControls({ isPlaying = false }) {
  return isPlaying ? (
    <PauseIcon
      className="card__control"
      color="#FFFFFF"
      onClick={() => console.log('pause')}
      size={60}
    />
  ) : (
      <PlayIcon
        className="card__control"
        color="#FFFFFF"
        onClick={() => console.log('play')}
        size={60}
      />
    );
}