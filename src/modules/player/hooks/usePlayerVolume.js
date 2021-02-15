import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectPlayerVolume } from '../selectors';

export const usePlayerVolume = () => {
  const playerVolume = useSelector(selectPlayerVolume);
  return useMemo(() => playerVolume, [playerVolume]);
};
