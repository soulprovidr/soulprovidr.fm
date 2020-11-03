import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import player from 'modules/player/reducer';
import radio from 'modules/radio/reducer';
import { reducer as subscribe } from 'modules/subscribe';

import playerMiddleware from 'modules/player/middleware';
import radioMiddleware from 'modules/radio/middleware';

const reducer = combineReducers({
  player,
  radio,
  subscribe
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
