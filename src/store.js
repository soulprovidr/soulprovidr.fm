import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import player from 'modules/player/reducer';
import radio from 'modules/radio/reducer';
import { reducer as subscribe } from 'modules/subscribe';

import { panelBearMiddleware } from 'modules/analytics';
import playerMiddleware from 'modules/player/middleware';
import radioMiddleware from 'modules/radio/middleware';

const subscribePersistConfig = {
  key: 'subscribe',
  storage,
  whitelist: ['isSubscribed']
};

const reducer = combineReducers({
  player,
  radio,
  subscribe: persistReducer(subscribePersistConfig, subscribe)
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
