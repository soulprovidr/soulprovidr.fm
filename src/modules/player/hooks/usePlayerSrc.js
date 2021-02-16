import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectPlayerSrc } from '../selectors';

export const usePlayerSrc = () => {
  const playerSrc = useSelector(selectPlayerSrc);
  return useMemo(() => playerSrc, [playerSrc]);
};
