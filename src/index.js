import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import initialState from './initialState';
import likeMiddleware from './middleware/like';
import metaMiddleware from './middleware/meta';
import playbackMiddleware from './middleware/playback';
import reducer from './reducer';

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(
    likeMiddleware,
    metaMiddleware,
    playbackMiddleware
  ))
);
  
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('main')
)