import { Howl } from 'howler';
import Actions from './actions';

const STREAM_URL = 'https://www.radioking.com/play/soul-provider-fm';

function createSound() {
  return new Howl({
    src: [STREAM_URL],
    format: ['mp3'],
    html5: true,
    preload: false,
    volume: 0
  });
}

let _sound = null;

export default ({ dispatch, getState }) => next => action => {
  switch (action.type) {
    case 'PLAY':
      const { player } = getState();
      if (!_sound) {
        _sound = createSound();
      }
      _sound.on('play', () => {
        dispatch(Actions.playSuccess());
        _sound.fade(0, 1, 1000);
      });
      _sound.on('playerror', err => {
        dispatch(Actions.playFailure(err));
      });
      _sound.play();
      break;
    case 'PAUSE':
      if (_sound) {
        _sound.unload();
        _sound = null;
      }
      break;
  }
  next(action);
};