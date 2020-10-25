import { createActions } from 'redux-actions';

export const { setMeta: setRadioMeta } = createActions('SET_META', {
  prefix: 'radio'
});
