import { handleActions } from 'redux-actions';
import Actions from './actions';
import initialState from './initialState';

export default handleActions({
  [Actions.likeSuccess]: (state, { payload: { id } }) => ({
    ...state,
    likes: [...state.likes, id]
  }),
  [Actions.pause]: state => ({
    ...state,
    isPlaying: false
  }),
  [Actions.play]: state => ({
    ...state,
    isBuffering: true
  }),
  [Actions.playFailure]: state => ({
    ...state,
    isBuffering: false,
    isPlaying: false
  }),
  [Actions.playSuccess]: state => ({
    ...state,
    isBuffering: false, 
    isPlaying: true
  })
}, initialState);