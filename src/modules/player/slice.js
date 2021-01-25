import { createAction, createSlice } from '@reduxjs/toolkit';
import { PauseAction, PlayerStatus } from './constants';

const { PAUSE } = PauseAction;
const { STOPPED } = PlayerStatus;

const initialState = {
  meta: {},
  pauseAction: PAUSE,
  prevVolume: null,
  progress: 0,
  status: STOPPED,
  src: null,
  volume: 100
};

const { actions, reducer } = createSlice({
  name: 'player',
  initialState,
  reducers: {
    play: (state, { payload }) => {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    reset: () => initialState,
    setPlayerMeta: (state, action) => ({
      ...state,
      meta: { ...state.meta, ...action.payload }
    }),
    setProgress: (state, { payload: progress }) => {
      state.progress = progress;
    },
    toggleMute: (state) => {
      if (!state.prevVolume) {
        state.prevVolume = state.volume;
        state.volume = 0;
      } else {
        state.volume = state.prevVolume;
        state.prevVolume = 0;
      }
    },
    updateProgress: (state, { payload: progress }) => {
      state.progress += progress;
    },
    updateStatus: (state, { payload: status }) => {
      state.status = status;
    }
  }
});

export const pause = createAction('player/pause');
export const stop = createAction('player/stop');

export const {
  play,
  reset,
  setPlayerMeta,
  setProgress,
  toggleMute,
  updateProgress,
  updateStatus
} = actions;

export { reducer };
