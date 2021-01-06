import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDarkMode } from '../slice';

export const useToggleDarkMode = () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(toggleDarkMode()));
};
