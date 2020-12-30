import { createSlice } from '@reduxjs/toolkit';
import { ChromecastStatus } from './constants';
import { initialize } from './thunks';

const { DEFAULT, PENDING, AVAILABLE } = ChromecastStatus;

export const { reducer } = createSlice({
  name: 'chromecast',
  initialState: {
    status: DEFAULT
  },
  extraReducers: (builder) =>
    builder
      .addCase(initialize.pending, (state) => {
        state.status = PENDING;
      })
      .addCase(initialize.fulfilled, (state) => {
        state.status = AVAILABLE;
      })
      .addDefaultCase((state) => {
        state.status = DEFAULT;
      })
});
