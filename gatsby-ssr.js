import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import Layout from '@/templates/Layout';
import { PlayerProvider } from '@/player';

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  );
};

export const wrapRootElement = ({ element }) => {
  return (
    <PlayerProvider>
      {element}
    </PlayerProvider>
  );
};