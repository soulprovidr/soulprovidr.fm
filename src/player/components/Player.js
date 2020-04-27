import React from 'react';
import { connect } from 'react-redux';
import c from 'classnames';
import get from 'lodash.get';

import { play, pause, stop } from '@/player/actions';
import { PlayerStatus } from '@/player/constants';

import Controls from './Controls';
import Meta from './Meta';
import ProgressBar from './ProgressBar';

import styles from './Player.module.css';

const { BUFFERING } = PlayerStatus;

function Player({ meta, pause, play, progress, status }) {
  const className = c(
    styles.player,
    { [styles.visible]: status >= BUFFERING },
    'position-fixed',
    'px-4',
    'py-2',
    'bg-white',
    'row'
  );
  const duration = get(meta, 'duration', 0);

  return (
    <div className={className}>
      <div className="container-lg d-flex flex-row-reverse flex-md-row justify-content-between align-items-center">
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
  status: state.player.status,
});

const mapDispatch = { play, pause, stop };

export default connect(mapState, mapDispatch)(Player);
