import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';

// Middleware.
import playerMiddleware from './player/middleware';

// Reducers.
import playerReducer from './player/reducer';

const reducer = combineReducers({
  player: playerReducer
});

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(
    playerMiddleware
  ))
);
  
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('main')
)