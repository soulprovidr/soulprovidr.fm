import { createActions } from 'redux-actions';

export const {
  pause,
  play,
  reset,
  seek,
  setMeta: setPlayerMeta,
  setProgress,
  stop,
  updateProgress,
  updateStatus
} = createActions(
  'PAUSE',
  'PLAY',
  'RESET',
  'SEEK',
  'SET_META',
  'SET_PROGRESS',
  'STOP',
  'UPDATE_PROGRESS',
  'UPDATE_STATUS',
  { prefix: 'player' }
);
