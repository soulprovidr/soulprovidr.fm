import { ChromecastStatus } from '../constants';
import { selectStatus } from '../selectors';
import { initialize } from '../thunks';

const { DEFAULT } = ChromecastStatus;

export const initializeMiddleware = ({ getState, dispatch }) => {
  return (next) => (action) => {
    next(action);
    if (typeof window !== 'undefined') {
      const chromecastStatus = selectStatus(getState());
      if (chromecastStatus === DEFAULT) {
        dispatch(initialize());
      }
    }
  };
};
