import { PLAYER_STATUS } from './constants';

const initialState = {
  progress: 0,
  playerItem: null,
  status: PLAYER_STATUS.UNSTARTED,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'PLAY': {
      const {
        duration,
        playerItem,
        seekProgress,
      } = payload;
      return {
        ...state,
        duration,
        playerItem,
        progress: seekProgress,
        status: PLAYER_STATUS.BUFFERING
      };
    }
    case 'STOP':
      return {
        ...state,
        playerItem: null,
        progress: 0,
        status: PLAYER_STATUS.UNSTARTED,
      };
    case 'UPDATE_PROGRESS':
      const { progress } = payload;
      return { ...state, progress };
    case 'UPDATE_STATUS':
      const { status } = payload;
      return { ...state, status };
    default:
      return state;
  }
}