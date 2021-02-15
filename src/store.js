import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer as player } from 'modules/player';
import radio from 'modules/radio/reducer';
import { reducer as subscribe } from 'modules/subscribe';

import { panelBearMiddleware } from 'modules/analytics';
import playerMiddleware from 'modules/player/middleware';
import radioMiddleware from 'modules/radio/middleware';

const playerReducer = persistReducer(
  {
    key: 'player',
    storage,
    whitelist: ['volume']
  },
  player
);

const subscribeReducer = persistReducer(
  {
    key: 'subscribe',
    storage,
    whitelist: ['isSubscribed']
  },
  subscribe
);

const reducer = combineReducers({
  player: playerReducer,
  radio,
  subscribe: subscribeReducer
});

const middleware = applyMiddleware(
  thunk,
  panelBearMiddleware,
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
const persistor = persistStore(store);

export { store, persistor };
