import '@babel/polyfill';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import playerMiddleware from '@/player/middleware';
import playerReducer from '@/player/reducer';

const rootReducer = combineReducers({
  player: playerReducer  
});

export default createStore(
  rootReducer,
  {},
  composeWithDevTools(
    applyMiddleware(
      playerMiddleware
    )
  )
);