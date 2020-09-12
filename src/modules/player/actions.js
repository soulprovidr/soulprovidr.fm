import { createActions } from 'redux-actions';

export const {
  play,
  pause,
  reset,
  seek,
  stop,
  updateMeta,
  updateProgress,
  updateStatus
} = createActions(
  {
    PLAY: [(src) => src, (_, meta) => meta || null]
  },
  'PAUSE',
  'RESET',
  'SEEK',
  'STOP',
  'UPDATE_META',
  'UPDATE_PROGRESS',
  'UPDATE_STATUS',
  { prefix: 'player' }
);
