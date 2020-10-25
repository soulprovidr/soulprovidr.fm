import { createActions } from 'redux-actions';

export const {
  play,
  pause,
  reset,
  resume,
  seek,
  setMeta: setPlayerMeta,
  setProgress,
  stop,
  updateProgress,
  updateStatus
} = createActions(
  {
    PLAY: [(src) => src, (_, meta) => meta || null]
  },
  'PAUSE',
  'RESET',
  'RESUME',
  'SEEK',
  'SET_META',
  'SET_PROGRESS',
  'STOP',
  'UPDATE_PROGRESS',
  'UPDATE_STATUS',
  { prefix: 'player' }
);
