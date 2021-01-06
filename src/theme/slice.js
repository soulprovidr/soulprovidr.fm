import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'theme',
  initialState: {
    isDarkModeEnabled: false
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkModeEnabled = !state.isDarkModeEnabled;
    }
  }
});

export const { toggleDarkMode } = actions;

export { reducer };
