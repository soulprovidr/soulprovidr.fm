import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { Provider } from 'react-redux';

import initializeSoundCloud from './src/soundcloud/initialize';
import Layout from '@/templates/layout';
import store from './src/store';

export const onClientEntry = () => {
  initializeSoundCloud();
};

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