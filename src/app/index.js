import React from 'react';
import { render } from 'react-dom';

render(
  <h1>Hello</h1>,
  document.querySelector('.app')
);

if (module.hot) {
  module.hot.accept();
}