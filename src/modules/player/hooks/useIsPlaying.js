import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { PlayerStatus } from '../constants';
import { selectPlayerStatus } from '../selectors';
import { useIsSelected } from './useIsSelected';

const { BUFFERING, PLAYING } = PlayerStatus;

export const useIsPlaying = (src) => {
  const isSelected = useIsSelected(src);
  const playerStatus = useSelector(selectPlayerStatus);
  return useMemo(() => {
    if (isSelected && [BUFFERING, PLAYING].includes(playerStatus)) {
      return true;
    } else {
      return false;
    }
  }, [isSelected, playerStatus]);
};
