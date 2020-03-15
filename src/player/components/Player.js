import React from 'react';
import { observer } from 'mobx-react-lite';

import { StreamableStatus } from '@/streamable';

import Spinner from '@/common/components/Spinner';
import PlayIcon from '@/common/components/PlayIcon';
import PauseIcon from '@/common/components/PauseIcon';
import { usePlayerStore } from '../index';

import './Player.css';

const Player = observer(() => {
  const { pause, streamable } = usePlayerStore();

  if (!streamable) {
    return null;
  }

  const { duration, progress, status } = streamable;

  const renderControl = () => {
    switch (status) {
      case StreamableStatus.BUFFERING:
        return <Spinner size={20} />;
      case StreamableStatus.PLAYING:
        return (
          <PauseIcon
            className="player__control"
            color="#000000"
            onClick={pause}
            size={20}
          />
        );
      default:
        return (
          <PlayIcon
            className="player__control"
            color="#000000"
            onClick={() => null}
            size={20}
          />
        );
    }
  };

  const renderProgress = () => {
    const widthPercent = duration ? (progress / duration) * 100 : 100;
    return (
      <div className="progress mx-4">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          style={{
            width: `${widthPercent}%`
          }}
        />
      </div>
    )
  };

  return (
    <div className={`
      player position-fixed px-4 py-2 bg-white
      ${status >= StreamableStatus.BUFFERING ? 'visible' : ''}
    `}>
      <div className="container d-flex justify-content-between align-items-center">
        {renderControl()}
        {renderProgress()}
      </div>
    </div>
  );
});

export default Player;