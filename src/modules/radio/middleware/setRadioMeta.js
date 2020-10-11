import fetchJson from 'common/helpers/fetchJson';
import { selectIsPlaying, setPlayerMeta } from 'modules/player';
import { setRadioMeta } from '../actions';
import { RadioMetaUrl, RadioUrl } from '../constants';
import { selectRadioMeta } from '../selectors';

/**
 * Middleware for fetching live stream metadata and updating the radio and
 * player state appropriately.
 */
export const setRadioMetaMiddleware = ({ dispatch, getState }) => {
  let pollTimeout = null;
  const poll = async () => {
    const currentRadioMeta = selectRadioMeta(getState());
    const nextRadioMeta = await fetchJson(RadioMetaUrl);

    const schedulePoll = (interval) => {
      clearTimeout(pollTimeout);
      pollTimeout = setTimeout(poll, interval);
    };

    // Don't update state if new data is the same as old data.
    // Poll again in 10 seconds.
    const currentRadioMetaId = currentRadioMeta?.id ?? null;
    const nextRadioMetaId = nextRadioMeta?.id ?? null;
    if (currentRadioMetaId === nextRadioMetaId) {
      schedulePoll(10 * 1000);
      return false;
    }

    // Update radio meta.
    const isRadioPlaying = selectIsPlaying(getState(), RadioUrl);
    dispatch(setRadioMeta(nextRadioMeta));

    // If the radio stream is currently playing, update the player meta, too.
    // TODO: Convert to interface or document somewhere!
    if (isRadioPlaying) {
      dispatch(
        setPlayerMeta({
          ...nextRadioMeta,
          duration: nextRadioMeta.duration * 1000
        })
      );
    }

    // Schedule the next poll.
    const timeoutInterval = new Date(nextRadioMeta.next_track) - new Date();
    schedulePoll(timeoutInterval);
  };

  poll();
  return (next) => (action) => next(action);
};
