import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import playbackMiddleware from './middleware/playback';
import reducer from './reducer';

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(
    playbackMiddleware
  ))
);
  
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('main')
)