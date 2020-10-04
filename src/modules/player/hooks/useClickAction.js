import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { pause, play, stop } from '../actions';
import useIsActive from './useIsActive';
import useIsPlaying from './useIsPlaying';

export default (src, meta, pauseEnabled = true) => {
  const dispatch = useDispatch();
  const isActive = useIsActive(src);
  const isPlaying = useIsPlaying(src);
  const pauseAction = pauseEnabled ? pause : stop;
  const clickAction = useCallback(() => {
    if (!src) {
      return null;
    }
    return isActive
      ? isPlaying
        ? dispatch(pauseAction())
        : dispatch(play())
      : dispatch(play(src, meta));
  }, [meta, isActive, isPlaying, src]);
  return clickAction;
};
