import { createSlice } from '@reduxjs/toolkit';
import { subscribe } from './thunks/subscribe';

export const { actions, reducer } = createSlice({
  name: 'subscribe',
  initialState: {
    isPending: false,
    isSubscribed: false
  },
  extraReducers: {
    [subscribe.pending]: (state) => {
      state.isPending = true;
    },
    [subscribe.fulfilled]: (state) => {
      state.isPending = false;
      state.isSubscribed = true;
    },
    [subscribe.rejected]: (state) => {
      state.isPending = false;
    }
  }
});
