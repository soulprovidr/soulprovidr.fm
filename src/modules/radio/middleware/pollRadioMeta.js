import parseISO from 'date-fns/parseISO';
import fetchJson from 'modules/common/helpers/fetchJson';
import { batch } from 'react-redux';
import { selectIsListening, setPlayerMeta, setProgress } from 'modules/player';
import { setRadioMeta } from '../actions';
import { RadioMetaUrl, RadioUrl } from '../constants';
import { selectRadioMeta } from '../selectors';

const formatRadioMetaDuration = (radioMeta) => ({
  ...radioMeta,
  duration: radioMeta.duration * 1000
});

/**
 * Middleware for fetching live stream metadata and updating the radio and
 * player state appropriately.
 */
export const pollRadioMetaMiddleware = ({ dispatch, getState }) => {
  let pollTimeout = null;
  const poll = async () => {
    const actions = [];
    const currentRadioMeta = selectRadioMeta(getState());
    const nextRadioMeta = await fetchJson(RadioMetaUrl);

    const schedulePoll = (interval) => {
      clearTimeout(pollTimeout);
      pollTimeout = setTimeout(poll, interval);
    };

    // Don't update state if new data is the same as old data.
    // Poll again in 1 second.
    const currentRadioMetaStartedAt = currentRadioMeta?.started_at ?? null;
    const nextRadioMetaStartedAt = nextRadioMeta?.started_at ?? null;
    if (
      !nextRadioMeta ||
      currentRadioMetaStartedAt === nextRadioMetaStartedAt
    ) {
      schedulePoll(1000);
      return false;
    }

    // Update radio meta.
    const currentTime = new Date().valueOf();
    const isRadioPlaying = selectIsListening(getState(), RadioUrl);
    actions.push(setRadioMeta(formatRadioMetaDuration(nextRadioMeta)));

    // If the radio stream is currently playing, update the player meta, too.
    if (isRadioPlaying) {
      actions.push(setPlayerMeta(formatRadioMetaDuration(nextRadioMeta)));
      // Set the player progress so it reflects the time the current track started.
      const nextStartedAt = parseISO(nextRadioMeta.started_at).valueOf();
      actions.push(setProgress(Math.max(nextStartedAt - currentTime, 0)));
    }

    // Dispatch actions in a single update.
    batch(() => actions.forEach(dispatch));

    // Schedule the next poll.
    const nextTrackTime = parseISO(nextRadioMeta.next_track).valueOf();
    const timeoutInterval = nextTrackTime - currentTime;
    schedulePoll(timeoutInterval);
  };

  poll();
  return (next) => (action) => next(action);
};
