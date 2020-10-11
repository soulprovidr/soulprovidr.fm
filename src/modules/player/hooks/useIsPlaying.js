import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { PlayerStatus } from '../constants';
import { selectPlayerStatus } from '../selectors';
import { useIsSelected } from './useIsSelected';

const { BUFFERING, PLAYING } = PlayerStatus;

export default (src) => {
  const isSelected = useIsSelected(src);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerStatus = useSelector(selectPlayerStatus);
  useEffect(() => {
    if (isSelected && [BUFFERING, PLAYING].includes(playerStatus)) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [isSelected, playerStatus]);
  return isPlaying;
};
