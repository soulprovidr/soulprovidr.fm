import React from 'react';

import { PLAYER_STATUS } from '../constants';
import { usePlayerState } from '../hooks';
import Spinner from '@/common/components/Spinner';
import PlayIcon from '@/common/components/PlayIcon';
import PauseIcon from '@/common/components/PauseIcon';

import './Player.css';

export default function Player() {
  const { progress, status } = usePlayerState();

  const renderStatus = () => {
    switch (status) {
      case PLAYER_STATUS.BUFFERING:
        return <Spinner size={20} />;
      case PLAYER_STATUS.PLAYING:
        return (
          <PauseIcon
            color="#000000"
            onClick={() => console.log('pause')}
            size={20}
          />
        );
      default:
        return (
          <PlayIcon
            color="#000000"
            onClick={() => console.log('play')}
            size={20}
          />
        );
    }
  };
  return (
    <div className={`
      player position-fixed px-4 py-2 bg-white
      ${status >= PLAYER_STATUS.BUFFERING ? 'visible' : ''}
    `}>
      {renderStatus()}
    </div>
  );
}