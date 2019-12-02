import '@babel/polyfill';

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import initialState from './initialState';
import metaMiddleware from './middleware/meta';
import reducer from './reducer';

export default createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(
    metaMiddleware
  ))
);