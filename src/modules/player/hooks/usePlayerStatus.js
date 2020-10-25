import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectPlayerStatus } from '../selectors';

export const usePlayerStatus = () => {
  const playerStatus = useSelector(selectPlayerStatus);
  return useMemo(() => playerStatus, [playerStatus]);
};
