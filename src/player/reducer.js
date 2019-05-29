import { handleActions } from 'redux-actions';

import Actions from './actions';

const initialState = {
  isPlaying: false
};

export default handleActions({
  [Actions.play]: state => ({ ...state, isPlaying: true }),
  [Actions.pause]: state => ({ ...state, isPlaying: false })
}, initialState);