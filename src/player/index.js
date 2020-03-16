import { createSlice } from '@reduxjs/toolkit';

import { PlayerStatus } from './constants';

const {
  UNSTARTED,
} = PlayerStatus;

const initialState = {
  meta: {},
  progress: null,
  status: UNSTARTED,
  src: null
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    queue: {
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
    }
  },
  reset: () => initialState,
  updateMeta: {
    reducer(state, action) {
      const { meta } = action.payload;
      Object.keys(meta).reduce(
        (acc, key) => acc[key] = meta[key],
        state.meta
      );
    },
    prepare(meta = {}) {
      return { payload: { meta } };
    }
  },
  updateProgress: {
    reducer(state, action) {
      const { status } = action.payload;
      state.status = status;
    },
    prepare(progress) {
      return { payload: { progress } };
    }
  },
  updateStatus: {
    reducer(state, action) {
      const { status } = action.payload;
      state.status = status;
    }
  },
});

export const {
  queue,
  reset,
  updateMeta,
  updateProgress,
  updateStatus
} = playerSlice.actions;

export default playerSlice.reducer;