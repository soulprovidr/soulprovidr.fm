import { useIsPlaying } from 'modules/player';
import { RadioUrl } from '../constants';

export const useIsRadioPlaying = () => {
  return useIsPlaying(RadioUrl);
};
