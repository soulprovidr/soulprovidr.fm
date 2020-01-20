import { PLAYER_STATUS } from './constants';

const initialState = {
  progress: 0,
  state: PLAYER_STATUS.UNSTARTED,
  streamUrl: null
}

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
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