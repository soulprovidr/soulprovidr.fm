import { combineReducers, configureStore } from '@reduxjs/toolkit';

import playerReducer from '@/player';

const store = configureStore({
  reducer: combineReducers({
    player: playerReducer
  })
});

export default store;