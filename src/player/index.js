import { PlayerStatus } from './constants';
import playerMiddleware from './middleware';
import playerSlice from './slice';

export { PlayerStatus };

export const {
  load,
  pause,
  play,
  queue,
  reset,
  seek,
  stop,
  updateMeta,
  updateProgress,
  updateStatus
} = playerSlice.actions;

export { playerMiddleware };

export default playerSlice.reducer;
