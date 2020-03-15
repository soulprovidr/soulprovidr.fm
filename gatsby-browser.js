import React from 'react';

import { PlayerStoreProvider } from '@/player';
import Layout from '@/templates/Layout';

import 'bootstrap/dist/css/bootstrap.css';

export const registerServiceWorker = () => true;

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  );
};

export const wrapRootElement = ({ element }) => (
  <PlayerStoreProvider>
    {element}
  </PlayerStoreProvider>
);