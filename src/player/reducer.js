import {
  pause,
  play,
  reset,
  seek,
  updateMeta,
  updateProgress,
  updateStatus,
} from './actions';
import { PlayerStatus } from './constants';

const { UNSTARTED } = PlayerStatus;

const PLAY = play.toString();
const RESET = reset.toString();
const SEEK = seek.toString();
const UPDATE_META = updateMeta.toString();
const UPDATE_PROGRESS = updateProgress.toString();
const UPDATE_STATUS = updateStatus.toString();

const initialState = {
  meta: {},
  progress: null,
  status: UNSTARTED,
  src: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case PLAY: {
      if (action.payload) {
        const { payload: src, meta } = action;
        return { ...state, src, meta };
      }
      return state;
    }
    case RESET: {
      return initialState;
    }
    case UPDATE_META: {
      const { payload: meta } = action;
      return { ...state, meta: { ...state.meta, ...meta } };
    }
    case UPDATE_PROGRESS: {
      const { payload: progress } = action;
      return { ...state, progress };
    }
    case UPDATE_STATUS: {
      const { payload: status } = action;
      return { ...state, status };
    }
    default:
      return state;
  }
}

export default reducer;
