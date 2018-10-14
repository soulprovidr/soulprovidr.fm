import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from 'redux';
import thunk from 'redux-thunk';

import playerReducer from '@/player/reducer';

const reducers = {
  playerReducer
};

let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  /* eslint-disable no-underscore-dangle */
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */
}

export default createStore(
  combineReducers(reducers),
  composeEnhancers(
    applyMiddleware(thunk)
  )
);