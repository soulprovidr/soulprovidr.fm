import React from 'react';
import { connect } from 'react-redux';
import c from 'classnames';
import get from 'lodash.get';

import { PlayerStatus, play, pause, stop } from '@/player';

import Controls from './Controls';
import Meta from './Meta';
import ProgressBar from './ProgressBar';

import styles from './Player.module.css';

const { BUFFERING, PLAYING } = PlayerStatus;

function Player(props) {
  const { meta, pause, play, progress, src, status, stop } = props;

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
        <Controls pause={pause} play={play} status={status} />
        <ProgressBar duration={duration} progress={progress} status={status} />
        <Meta meta={meta} />
      </div>
    </div>
  );
}

const mapState = (state) => ({
  meta: state.player.meta,
  progress: state.player.progress,
  src: state.player.src,
  status: state.player.status
});

const mapDispatch = { play, pause, stop };

export default connect(mapState, mapDispatch)(Player);
