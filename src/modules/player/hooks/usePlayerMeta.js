import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectPlayerMeta } from '../selectors';

export const usePlayerMeta = () => {
  const playerMeta = useSelector(selectPlayerMeta);
  return useMemo(() => playerMeta, [playerMeta]);
};
