import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectPlayerSrc } from '../selectors';

export const useIsListening = (src) => {
  const playerSrc = useSelector(selectPlayerSrc);
  return useMemo(
    () => playerSrc && (src === playerSrc || playerSrc.includes(src)),
    [playerSrc, src]
  );
};
