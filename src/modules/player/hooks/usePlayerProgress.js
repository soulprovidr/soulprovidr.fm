import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectPlayerProgress } from '../selectors';

export const usePlayerProgress = () => {
  const playerProgress = useSelector(selectPlayerProgress);
  return useMemo(() => playerProgress, [playerProgress]);
};
