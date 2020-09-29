import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { PlayerStatus } from '../constants';
import { selectPlayerStatus } from '../selectors';
import useIsActive from './useIsActive';

const { BUFFERING, PLAYING } = PlayerStatus;

export default (src) => {
  const isActive = useIsActive(src);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerStatus = useSelector(selectPlayerStatus);
  useEffect(() => {
    if (isActive && [BUFFERING, PLAYING].includes(playerStatus)) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [isActive, playerStatus]);
  return isPlaying;
};
