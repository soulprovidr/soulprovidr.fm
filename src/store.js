import '@babel/polyfill';

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import initialState from './initialState';
import likeMiddleware from './middleware/like';
import metaMiddleware from './middleware/meta';
import playbackMiddleware from './middleware/playback';
import reducer from './reducer';

export default createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(
    likeMiddleware,
    metaMiddleware,
    playbackMiddleware
  ))
);