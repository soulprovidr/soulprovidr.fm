import { useSelector } from 'react-redux';

import { getStatus } from '../selectors';

export const usePlayerStatus = () => {
  return useSelector(getStatus);
};
