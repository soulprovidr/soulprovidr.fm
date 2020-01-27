import EventEmitter from 'events';
import { Howl, Howler } from 'howler';

import { PLAYER_STATUS } from './constants';

const PROGRESS_INTERVAL = 100;

class HowlerPlayer extends EventEmitter {
  _id = null;
  _progress = 0;
  _sound = null;
  _timer = null;
  _status = null;

  get progress() {
    return this._progress;
  }

  set progress(progress) {
    this.emit('progress', progress);
    this._progress = progress;
  }

  get status() {
    return this._status;
  }

  set status(status) {
    this.emit('status', status);
    this._status = status;
  }

  isPaused = src => {
    if (this._sound) {
      return this._sound._src === src
        && this.status === PLAYER_STATUS.PAUSED;
    }
    return false;
  };

  onEnd = () => {
    this.stop();
  };
  
  onPlay = () => {
    this.status = PLAYER_STATUS.PLAYING;
    this.startProgressTimer();
    this._sound.fade(0, 1, 100);
  };

  onPause = () => {
    this.status = PLAYER_STATUS.PAUSED;
  };
  
  pause = () => {
    if (this._sound) {
      this._sound.pause();
      clearInterval(this._timer);
    }
  };

  play = src => {
    // No `src` defined.
    if (!src) {
      return false;
    }

    // Resume playing paused stream.
    if (this.isPaused(src)) {
      this._sound.play(this._id);
      return;
    }

    // New `src`, stop what's playing and create a new sound.
    this.stop();

    this._sound = new Howl({
      src,
      format: 'mp3',
      html5: true,
      onpause: this.onPause,
      onplay: this.onPlay
    });
    this._id = this._sound.play();
  };

  startProgressTimer = () => {
    this._timer = setInterval(
      () => this.progress += PROGRESS_INTERVAL,
      PROGRESS_INTERVAL
    );
  };

  stop = () => {
    if (this._sound) {
      this._sound.stop();
      this._sound.unload();
      this._id = null;
      this._sound = null;
    }
    if (this._timer) {
      clearInterval(this._timer);
      this._progress = 0;
    }
  };
}

export default new HowlerPlayer()