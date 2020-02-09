import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { Provider } from 'react-redux';

import store from '@/store';
import Layout from '@/templates/Layout';

export const registerServiceWorker = () => true;

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