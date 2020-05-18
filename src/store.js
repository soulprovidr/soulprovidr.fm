import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import player from '@/player/reducer';
import radio from '@/radio/reducer';

import playerMiddleware from '@/player/middleware';
import radioMiddleware from '@/radio/middleware';

const reducer = combineReducers({
  player,
  radio
});

const middleware = applyMiddleware(
  thunk,
  ...playerMiddleware,
  ...radioMiddleware
);

let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  /* eslint-disable no-underscore-dangle */
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */
}

const store = createStore(reducer, composeEnhancers(middleware));

export default store;
