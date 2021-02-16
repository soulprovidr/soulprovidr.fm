import { useListen, PauseAction } from 'modules/player';
import { RadioUrl } from '../constants';
import { useRadioMeta } from './useRadioMeta';

/**
 * Returns a function that starts or stops the radio stream.
 */
export const usePlayRadio = () => {
  const radioMeta = useRadioMeta();
  const radioMetaWithHref = { ...radioMeta, href: '/' };
  return useListen(RadioUrl, radioMetaWithHref, PauseAction.STOP);
};
