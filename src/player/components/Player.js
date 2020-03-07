import React from 'react';
import { connect } from 'react-redux';

import { PLAYER_STATUS } from '../constants';
import { usePlayerState } from '../hooks';
import Spinner from '@/common/components/Spinner';
import PlayIcon from '@/common/components/PlayIcon';
import PauseIcon from '@/common/components/PauseIcon';
import { pause, play } from '@/player/actions';

import './Player.css';

function Player({ pause, play }) {
  const { playerItem, progress, status } = usePlayerState();
  if (!playerItem) {
    return null;
  }

  const { artist, duration, postUrl, title } = playerItem;

  const renderControl = () => {
    switch (status) {
      case PLAYER_STATUS.BUFFERING:
        return <Spinner size={20} />;
      case PLAYER_STATUS.PLAYING:
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
            onClick={play}
            size={20}
          />
        );
    }
  };

  const renderProgress = () => {
    if (!duration) {
      return null;
    }
    return (
      <div className="progress-bar mx-4">
        <div
          className="progress-bar__progress"
          style={{
            width: `${(progress/duration) * 100}%`
          }}
        />
      </div>
    )
  };

  return (
    <div className={`
      player position-fixed px-4 py-2 bg-white
      ${status >= PLAYER_STATUS.BUFFERING ? 'visible' : ''}
    `}>
      <div className="container d-flex justify-content-between align-items-center">
        {renderControl()}
        {renderProgress()}
        {title}
      </div>
    </div>
  );
}

Player.defaultProps = {
  pause: () => null,
  play: () => null
};

const mapDispatchToProps = { pause, play };

export default connect(null, mapDispatchToProps)(Player);