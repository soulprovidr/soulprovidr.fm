import { useSelector } from 'react-redux';
import { selectIsDarkModeEnabled } from '../selectors';

export const useIsDarkModeEnabled = () => {
  return useSelector(selectIsDarkModeEnabled);
};
