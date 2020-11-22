import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { PlayerStatus } from '../constants';
import { selectPlayerStatus } from '../selectors';
import { useIsListening } from './useIsListening';

const { BUFFERING, PLAYING } = PlayerStatus;

export const useIsPlaying = (src) => {
  const isSelected = useIsListening(src);
  const playerStatus = useSelector(selectPlayerStatus);
  return useMemo(() => {
    if (isSelected && [BUFFERING, PLAYING].includes(playerStatus)) {
      return true;
    } else {
      return false;
    }
  }, [isSelected, playerStatus]);
};
