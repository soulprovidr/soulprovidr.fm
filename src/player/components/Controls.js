import React, { useCallback } from 'react';

import { PlayerStatus } from '@/player';

import Spinner from '@/common/components/Spinner';
import PlayIcon from '@/common/components/PlayIcon';
import PauseIcon from '@/common/components/PauseIcon';

import styles from './Player.module.css';

const { BUFFERING, PLAYING } = PlayerStatus;

export default function Controls({ pause, play, status }) {
  const onPauseClick = useCallback(() => pause(), [pause]);
  const onPlayClick = useCallback(() => play(), [play]);
  switch (status) {
    case BUFFERING:
      return <Spinner size={20} />;
    case PLAYING:
      return (
        <PauseIcon
          className={styles.controlsBtn}
          color="#000000"
          onClick={onPauseClick}
          size={20}
        />
      );
    default:
      return (
        <PlayIcon
          className={styles.controlsBtn}
          color="#000000"
          onClick={onPlayClick}
          size={20}
        />
      );
  }
}
