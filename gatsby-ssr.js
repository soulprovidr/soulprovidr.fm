import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { ColorMode } from '@/theme';

// Wrap the Gatsby app in the Redux Provider.
export const wrapRootElement = ({ element }) => (
  <Provider store={store}>{element}</Provider>
);

/**
 * Inject the ColorMode component before the app is rendered in order to retrieve
 * user's color mode preference.
 */
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<ColorMode />);
};
