import { handleActions } from 'redux-actions';
import {
  play,
  reset,
  setPlayerMeta,
  setProgress,
  updateProgress,
  updateStatus
} from './actions';
import { PauseAction, PlayerStatus } from './constants';

const { PAUSE } = PauseAction;
const { STOPPED } = PlayerStatus;

const initialState = {
  meta: {},
  pauseAction: PAUSE,
  progress: 0,
  status: STOPPED,
  src: null
};

export default handleActions(
  {
    [play]: (state, action) => {
      const { payload } = action;
      return Object.keys(payload).reduce(
        (acc, key) => ({ ...acc, [key]: payload[key] }),
        { ...state }
      );
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
