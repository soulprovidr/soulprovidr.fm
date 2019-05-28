import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import menuReducer from './menu/reducer';

const reducer = combineReducers({
  menu: menuReducer
});

export default createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware())
);