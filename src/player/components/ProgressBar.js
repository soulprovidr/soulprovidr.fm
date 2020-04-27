import React from 'react';
import c from 'classnames';

import { PlayerStatus } from '@/player/constants';
import msToTime from '@/player/helpers/msToTime';

import styles from './Player.module.css';

const { BUFFERING } = PlayerStatus;

export default function ProgressBar({ duration, progress, status }) {
  const widthPercent = duration
    ? Math.min(100, (progress / duration) * 100)
    : status <= BUFFERING
    ? 0
    : 100;
  return (
    <div className={c('d-none d-md-flex', 'flex-grow-1', 'align-items-center')}>
      <span className={c(styles.progressDuration, 'px-3', 'text-muted')}>
        {msToTime(progress)}
      </span>
      <div className={c(styles.progress)}>
        <div
          className={c(
            styles.progressBar,
            'progress-bar progress-bar-striped progress-bar-animated flex-grow-1'
          )}
          style={{
            height: '100%',
            width: `${widthPercent}%`,
          }}
        />
      </div>
      <span className={c(styles.progressDuration, 'px-3', 'text-muted')}>
        {msToTime(duration)}
      </span>
    </div>
  );
}
