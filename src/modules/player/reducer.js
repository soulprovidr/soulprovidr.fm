import { handleActions } from 'redux-actions';
import {
  play,
  reset,
  setPlayerMeta,
  updateProgress,
  updateStatus
} from './actions';
import { PlayerStatus } from './constants';

const { UNSTARTED } = PlayerStatus;

const initialState = {
  meta: {},
  progress: null,
  status: UNSTARTED,
  src: null
};

export default handleActions(
  {
    [play]: (state, action) => {
      if (action.payload) {
        return { ...state, src: action.payload, meta: action.meta };
      }
      return state;
    },
    [reset]: () => initialState,
    [setPlayerMeta]: (state, action) => ({
      ...state,
      meta: { ...state.meta, ...action.payload }
    }),
    [updateProgress]: (state, action) => ({
      ...state,
      progress: action.payload
    }),
    [updateStatus]: (state, action) => ({ ...state, status: action.payload })
  },
  initialState,
  {
    prefix: 'player'
  }
);
