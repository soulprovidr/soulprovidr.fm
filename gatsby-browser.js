import React from 'react';
import { Provider } from 'react-redux';
import store from '@/store';
import { Layout } from 'ui/layout';

export const registerServiceWorker = () => true;

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>{element}</Provider>
);
