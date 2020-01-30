import { PLAYER_STATUS } from './constants';

const initialState = {
  progress: 0,
  status: PLAYER_STATUS.UNSTARTED,
  streamUrl: null
}

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'PLAY': {
      const { seekProgress, streamUrl } = payload;
      return {
        ...state,
        progress: seekProgress,
        status: PLAYER_STATUS.BUFFERING,
        streamUrl
      };
    }
    case 'STOP':
      return {
        ...state,

        status: PLAYER_STATUS.UNSTARTED,
        streamUrl: null
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