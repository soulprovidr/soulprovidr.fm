import '@babel/polyfill';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import initialState from './initialState';
import metaMiddleware from './middleware/meta';
import playerMiddleware from '@/player/middleware';
import reducer from './reducer';

const rootReducer = combineReducers({
  
})

export default createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(
    metaMiddleware,
    playerMiddleware
  ))
);