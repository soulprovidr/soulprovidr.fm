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
    // Update player meta, if the radio stream is currently playing.
    if (selectIsPlaying(getState(), RadioUrl)) {
      // TODO: Convert to interface or document somewhere!
      dispatch(
        setPlayerMeta({
          artist: meta.artist,
          cover: meta.cover,
          duration: 0,
          title: meta.title
        })
      );
    }
  };

  update() && setInterval(update, INTERVAL_MS);
  return (next) => (action) => next(action);
};
