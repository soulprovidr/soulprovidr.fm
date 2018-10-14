import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from '@/core/components/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app')
);

if (module.hot) {
  module.hot.accept();
}