import fetchJson from 'common/helpers/fetchJson';
import { selectIsPlaying, setPlayerMeta } from 'modules/player';
import { setRadioMeta } from '../actions';
import { RadioMetaUrl, RadioUrl } from '../constants';

const INTERVAL_MS = 5 * 1000;

/**
 * Fetch radio meta every INTERVAL_MS + update application state appropriately.
 */
export const setRadioMetaMiddleware = ({ dispatch, getState }) => {
  const update = async () => {
    const meta = await fetchJson(RadioMetaUrl);
    // Update radio meta.
    dispatch(setRadioMeta(meta));
    // If the radio stream is currently playing, update the player meta.
    if (selectIsPlaying(getState(), RadioUrl)) {
      // TODO: Convert to interface or document somewhere!
      dispatch(setPlayerMeta({ ...meta, duration: meta.duration * 1000 }));
    }
  };

  update() && setInterval(update, INTERVAL_MS);
  return (next) => (action) => next(action);
};
