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
  const { progress, status } = usePlayerState();

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
  return (
    <div className={`
      player position-fixed px-4 py-2 bg-white
      ${status >= PLAYER_STATUS.BUFFERING ? 'visible' : ''}
    `}>
      {renderControl()}
    </div>
  );
}

Player.defaultProps = {
  pause: () => null,
  play: () => null
};

const mapDispatchToProps = { pause, play };

export default connect(null, mapDispatchToProps)(Player);