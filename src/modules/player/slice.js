import { createAction, createSlice } from '@reduxjs/toolkit';
import { PauseAction, PlayerStatus } from './constants';

const { PAUSE } = PauseAction;
const { STOPPED } = PlayerStatus;

const initialState = {
  meta: {},
  pauseAction: PAUSE,
  previousVolume: 0,
  progress: 0,
  status: STOPPED,
  src: null,
  volume: 1
};

const { actions, reducer } = createSlice({
  name: 'player',
  initialState,
  reducers: {
    incrementProgress: (state, { payload: progress }) => {
      state.progress += progress;
    },
    play: (state, { payload }) => {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    reset: () => initialState,
    setPlayerMeta: (state, action) => {
      state.meta = { ...state.meta, ...action.payload };
    },
    setProgress: (state, { payload: progress }) => {
      state.progress = progress;
    },
    mute: (state) => {
      if (!state.previousVolume) {
        state.previousVolume = state.volume;
        state.volume = 0;
      } else {
        state.volume = state.previousVolume;
        state.previousVolume = 0;
      }
    },
    setStatus: (state, { payload: status }) => {
      state.status = status;
    },
    setVolume: (state, { payload: volume }) => {
      state.volume = volume;
      state.previousVolume = 0;
    }
  }
});

export const pause = createAction('player/pause');
export const stop = createAction('player/stop');

export const {
  incrementProgress,
  play,
  reset,
  setPlayerMeta,
  setProgress,
  setStatus,
  setVolume,
  mute
} = actions;

export { reducer };
