import { useSelector } from 'react-redux';

import { selectPlayerStatus } from '../selectors';

export const usePlayerStatus = () => {
  return useSelector(selectPlayerStatus);
};
