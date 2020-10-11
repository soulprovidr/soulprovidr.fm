import { handleActions } from 'redux-actions';
import {
  play,
  reset,
  setPlayerMeta,
  setProgress,
  updateProgress,
  updateStatus
} from './actions';
import { PlayerStatus } from './constants';

const { STOPPED } = PlayerStatus;

const initialState = {
  meta: {},
  progress: 0,
  status: STOPPED,
  src: null
};

export default handleActions(
  {
    [play]: (state, action) => {
      if (action.payload) {
        const { payload: src, meta } = action;
        return { ...state, src, meta };
      }
      return state;
    },
    [reset]: () => initialState,
    [setPlayerMeta]: (state, action) => ({
      ...state,
      meta: { ...state.meta, ...action.payload }
    }),
    [setProgress]: (state, { payload: progress }) => ({
      ...state,
      progress
    }),
    [updateProgress]: (state, { payload: progress }) => ({
      ...state,
      progress: state.progress + progress
    }),
    [updateStatus]: (state, action) => ({ ...state, status: action.payload })
  },
  initialState,
  {
    prefix: 'player'
  }
);
