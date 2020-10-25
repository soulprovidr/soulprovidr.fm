import { handleActions } from 'redux-actions';
import { setRadioMeta } from './actions';

const initialState = {
  meta: null
};

export default handleActions(
  {
    [setRadioMeta]: (_, action) => ({ meta: action.payload })
  },
  initialState,
  { prefix: 'radio' }
);
