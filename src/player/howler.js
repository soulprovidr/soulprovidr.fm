import EventEmitter from 'events';
import { Howl, Howler } from 'howler';

import { PLAYER_STATUS } from './constants';

class HowlerPlayer extends EventEmitter {
  progress = 0;
  sound = null;
  timer = null;

  set status(status) {
    this.emit('status', status);
  }

  emitProgress = () => {
    this.emit('progress', ++this.progress);
    this.timer = setTimeout(this.emitProgress, 1000);
  };

  isPlaying = src => {
    if (this.sound) {
      return this.sound._src.includes(src);
    }
    return false;
  };

  onEnd = () => {
    this.stop();
  };
  
  onLoad = () => {
    this.status = PLAYER_STATUS.PLAYING;
    this.emitProgress();
    this.sound.fade(0, 1, 100);
  };

  onPause = () => {
    this.status = PLAYER_STATUS.PAUSED;
  };
  
  onProgress = () => {
    this.emit('progress', ++this.progress);

  };

  onStop = () => {
    this.status = PLAYER_STATUS.ENDED;
  };

  pause = () => {
    if (this.sound) {
      this.sound.pause();
      this.status = PLAYER_STATUS.PAUSED;
    }
  };

  play = src => {
    if (!src || this.isPlaying(src)) {
      return false;
    }
    if (this.sound) {
      this.stop();
    }
    this.sound = new Howl({
      src,
      format: 'mp3',
      html5: true,
      autoplay: true,
      onload: this.onLoad,
      onpause: this.onPause,
      onstop: this.onStop
    });
  };

  stop = () => {
    if (this.sound) {
      this.sound.unload();
    }
    if (this.timer) {
      clearTimeout(this.timer);
      this.progress = 0;
    }
  };
}

export default new HowlerPlayer()