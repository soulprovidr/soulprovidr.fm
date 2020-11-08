import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/store';

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>{element}</PersistGate>
  </Provider>
);
