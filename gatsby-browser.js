import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { Provider } from 'react-redux';
import Layout from './src/components/Layout';
import store from './src/store';

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  );
};

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      {element}
    </Provider>
  );
};