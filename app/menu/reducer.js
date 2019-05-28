import { createAction, handleActions } from 'redux-actions';

const initialState = {
  isMenuOpen: false
};

const toggleMenu = createAction('TOGGLE_MENU');

export default handleActions({
  [toggleMenu]: state => ({ ...state, isMenuOpen: !state.isMenuOpen })
}, initialState);
