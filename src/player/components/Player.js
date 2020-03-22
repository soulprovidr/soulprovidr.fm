import React from 'react';
import { connect } from 'react-redux';
import c from 'classnames';
import get from 'lodash.get';

import {
  PlayerStatus,
  play,
  pause,
  stop
} from '@/player';

import Spinner from '@/common/components/Spinner';
import PlayIcon from '@/common/components/PlayIcon';
import PauseIcon from '@/common/components/PauseIcon';
import ProgressBar from './ProgressBar';
import DefaultCover from '@/static/images/default.png';

import styles from './Player.module.css';

const { BUFFERING, PLAYING } = PlayerStatus;

function Player(props) {
  const {
    meta,
    pause,
    play,
    progress,
    src,
    status,
    stop
  } = props;

  const renderControl = () => {
    switch (status) {
      case BUFFERING:
        return <Spinner size={20} />;
      case PLAYING:
        return (
          <PauseIcon
            className={styles.playerBtn}
            color="#000000"
            onClick={() => pause()}
            size={20}
          />
        );
      default:
        return (
          <PlayIcon
            className={styles.playerBtn}
            color="#000000"
            onClick={() => {
              play();
            }}
            size={20}
          />
        );
    }
  };

  const renderMeta = () => {
    return (
      <div className={c(styles.meta, 'd-flex')}>
        <img
          className={c(styles.cover, 'mr-3')}
          src={meta.cover || DefaultCover}
        />
        <div className="d-flex flex-column justify-content-center overflow-hidden">
          <p className={c(styles.truncated, 'h5', 'font-weight-bold', 'm-0')}>
            {meta.title}
          </p>
          <p className={c(styles.truncated, 'h6', 'm-0')}>
            {meta.artist}
          </p>
        </div>
      </div>
    )
  };

  const className = c(
    styles.player,
    { [styles.visible]: status >= BUFFERING },
    'position-fixed',
    'px-4',
    'py-2',
    'bg-white'
  );
  const duration = get(meta, 'duration', 0);

  return (
    <div className={className}>
      <div className="container d-flex justify-content-between align-items-center">
        {renderControl()}
        <ProgressBar
          duration={duration}
          progress={progress}
          status={status}
        />
        {renderMeta()}
      </div>
    </div>
  );
};

const mapState = state => ({
  meta: state.player.meta,
  progress: state.player.progress,
  src: state.player.src,
  status: state.player.status
});

const mapDispatch = { play, pause, stop };

export default connect(mapState, mapDispatch)(Player);