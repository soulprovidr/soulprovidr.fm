import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import playerReducer from '@/player/reducer';
import howlerMiddleware from '@/player/middleware/howler';

const reducer = combineReducers({
  player: playerReducer,
});

const middleware = applyMiddleware(thunk, howlerMiddleware);

let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  /* eslint-disable no-underscore-dangle */
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */
}

const store = createStore(reducer, composeEnhancers(middleware));

export default store;
