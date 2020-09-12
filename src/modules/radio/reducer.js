import { handleActions } from 'redux-actions';
import { updateMeta } from './actions';

const initialState = {
  meta: null
};

export default handleActions(
  {
    [updateMeta]: (_, action) => ({ meta: action.payload })
  },
  initialState,
  { prefix: 'radio' }
);
