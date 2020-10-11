import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { pause, play, resume, stop } from '../actions';
import { useIsSelected } from './useIsSelected';
import useIsPlaying from './useIsPlaying';

/**
 * Return an onClick handler for playing or pausing a media stream,
 * depending on the current state of the player.
 * @param {String} src
 * @param {Boolean} pauseEnabled
 */
export const useOnClick = (src, pauseEnabled = true) => {
  const dispatch = useDispatch();
  const isSelected = useIsSelected(src);
  const isPlaying = useIsPlaying(src);
  const pauseAction = pauseEnabled ? pause : stop;
  const onClick = useCallback(
    (meta) => {
      if (!src) {
        return null;
      }
      return isSelected
        ? isPlaying
          ? dispatch(pauseAction())
          : dispatch(resume())
        : dispatch(play(src, meta));
    },
    [isSelected, isPlaying, src]
  );
  return onClick;
};
