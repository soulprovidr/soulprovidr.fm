import parseISO from 'date-fns/parseISO';
import {
  selectIsListening,
  setProgress,
  setStatus,
  PlayerStatus
} from 'modules/player';
import { RadioUrl } from '../constants';
import { selectRadioMeta } from '../selectors';

const { PLAYING } = PlayerStatus;

/**
 * Updates the player progress according to the time the current radio track started.
 */
export const setProgressMiddleware = ({ dispatch, getState }) => (next) => (
  action
) => {
  next(action);

  const { payload: status } = action;
  if (setStatus.match(action) && status === PLAYING) {
    const state = getState();
    const isRadioPlaying = selectIsListening(state, RadioUrl);
    if (isRadioPlaying) {
      const radioMeta = selectRadioMeta(state);
      const currentTime = new Date().valueOf();
      const startedAt = parseISO(radioMeta.started_at).valueOf();
      dispatch(setProgress(currentTime - startedAt));
    }
  }
};
