import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { pause, play, stop } from '../slice';
import { PauseAction } from '../constants';
import { useIsListening } from './useIsListening';
import { useIsPlaying } from './useIsPlaying';

const { PAUSE, STOP } = PauseAction;

/**
 * Returns a function which starts or stops a specified audio src,depending on the current state of the player.
 * @param {String} src
 * @param {Object} meta Title, artist, duration, etc.
 * @param {String} pauseAction
 */
export const useListen = (src, meta, pauseAction = PAUSE) => {
  const dispatch = useDispatch();
  const isListening = useIsListening(src);
  const isPlaying = useIsPlaying(src);
  return useCallback(
    // Return a 'listen' function that accepts a progress parameter (for seeking).
    (progress = null) => {
      if (!src) return () => false;
      const payload = { src, meta, pauseAction };
      // Handle case where src is not already selected.
      if (!isListening) {
        if (progress !== null) {
          payload.progress = progress;
        }
        return dispatch(play(payload));
      }
      // Seek if src is already selected.
      if (progress !== null) {
        return dispatch(play({ progress }));
      }
      // Pause if src is currently playing.
      if (isPlaying) {
        switch (pauseAction) {
          case STOP:
            return dispatch(stop());
          default:
            return dispatch(pause());
        }
      }
      // Otherwise, play the audio.
      return dispatch(play(payload));
    },
    [isListening, isPlaying, meta, src]
  );
};
