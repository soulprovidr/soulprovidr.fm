import { useSelector } from 'react-redux';
import { useListen, PauseAction } from 'modules/player';
import { RadioUrl } from '../constants';
import { selectRadioMeta } from '../selectors';

/**
 * Returns a function that starts or stops the radio stream.
 */
export const usePlayRadio = () => {
  const meta = useSelector(selectRadioMeta);
  return useListen(RadioUrl, meta, PauseAction.STOP);
};
