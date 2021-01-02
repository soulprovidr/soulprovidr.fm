import { useSelector } from 'react-redux';
import { selectRadioMeta } from '../selectors';

export const useRadioMeta = () => useSelector(selectRadioMeta);
