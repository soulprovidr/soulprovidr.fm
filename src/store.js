import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';

import playerReducer, { playerMiddleware } from '@/player';

const store = configureStore({
  reducer: combineReducers({
    player: playerReducer
  }),
  middleware: [...getDefaultMiddleware(), playerMiddleware]
});

export default store;