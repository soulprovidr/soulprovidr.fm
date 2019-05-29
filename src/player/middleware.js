import { Howl } from 'howler';

const STREAM_URL = 'https://www.radioking.com/play/soul-provider-fm';

function createSound() {
  return new Howl({
    src: [STREAM_URL],
    format: ['mp3'],
    html5: true,
    preload: true,
    volume: 0,
    onplay: function () {
      this.fade(0, 1, 1000);
    }
  });
}

let _sound = createSound();

export default store => next => action => {
  switch (action.type) {
    case 'PLAY':
      const { player } = store.getState();
      if (!_sound) {
        _sound = createSound();
      }
      if (!player.isPlaying) {
        _sound.play();
      }
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