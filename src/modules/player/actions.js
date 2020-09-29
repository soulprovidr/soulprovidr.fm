import { createActions } from 'redux-actions';

export const {
  play,
  pause,
  reset,
  seek,
  setMeta: setPlayerMeta,
  stop,
  updateProgress,
  updateStatus
} = createActions(
  {
    PLAY: [(src) => src, (_, meta) => meta || null]
  },
  'PAUSE',
  'RESET',
  'SEEK',
  'SET_META',
  'STOP',
  'UPDATE_PROGRESS',
  'UPDATE_STATUS',
  { prefix: 'player' }
);
