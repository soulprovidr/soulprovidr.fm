import { createSlice } from '@reduxjs/toolkit';

import { PlayerStatus } from './constants';

const { UNSTARTED } = PlayerStatus;

const initialState = {
  meta: {},
  progress: null,
  status: UNSTARTED,
  src: null
};

export default createSlice({
  name: 'player',
  initialState,
  reducers: {
    load: {
      reducer(state, action) {
        const { meta, src } = action.payload;
        state.src = src;
        state.meta = meta;
      },
      prepare(src = null, meta = {}) {
        if (!src) {
          throw new Error('No `src` specified!');
        }
        return { payload: { src, meta } };
      }
    },
    pause: (state) => state,
    play: (state) => state,
    reset: () => initialState,
    seek: {
      prepare(progress) {
        return { payload: { progress } };
      }
    },
    stop: (state) => state,
    updateMeta: {
      reducer(state, action) {
        const { meta } = action.payload;
        state.meta = { ...state.meta, ...meta };
      },
      prepare(meta = {}) {
        return { payload: { meta } };
      }
    },
    updateProgress: {
      reducer(state, action) {
        const { progress } = action.payload;
        state.progress = progress;
      },
      prepare(progress) {
        return { payload: { progress } };
      }
    },
    updateStatus: {
      reducer(state, action) {
        const { status } = action.payload;
        state.status = status;
      },
      prepare(status) {
        return { payload: { status } };
      }
    }
  }
});
