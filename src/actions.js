import { createActions } from 'redux-actions';

export default createActions({
  FETCH_META: undefined,
  FETCH_META_SUCCESS: (meta = null) => ({ meta }),
  LIKE: (id = null) => ({ id }),
  LIKE_FAILURE: undefined,
  LIKE_SUCCESS: (id = null) => ({ id }),
  PLAY: undefined,
  PLAY_FAILURE: undefined,
  PLAY_SUCCESS: undefined,
  PAUSE: undefined
});