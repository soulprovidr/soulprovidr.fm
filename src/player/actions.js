import { createAction, createActions } from 'redux-actions';

export const play = createAction('PLAY', null, (src, meta) => meta || null);
export const {
  pause,
  reset,
  seek,
  stop,
  updateMeta,
  updateProgress,
  updateStatus,
} = createActions(
  'PAUSE',
  'RESET',
  'SEEK',
  'STOP',
  'UPDATE_META',
  'UPDATE_PROGRESS',
  'UPDATE_STATUS'
);
