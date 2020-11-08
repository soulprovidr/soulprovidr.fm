import { useIsPlaying } from 'modules/player';
import { RadioUrl } from '../constants';

/**
 * Returns `true` if the radio stream is currently playing.
 */
export const useIsRadioPlaying = () => useIsPlaying(RadioUrl);
