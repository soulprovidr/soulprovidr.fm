import EventEmitter from 'events';
import { Howl, Howler } from 'howler';

import { PLAYER_STATUS } from './constants';

const PROGRESS_INTERVAL = 100;

class HowlerPlayer extends EventEmitter {
  _progress = 0;
  _soundId = null;
  _timer = null;
  _status = -1;

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
  
  onPause = () => {
    this.status = PLAYER_STATUS.PAUSED;
    this.stopProgressTimer();
  };

  onPlay = (seekProgress = 0) => {
    this.status = PLAYER_STATUS.PLAYING;
    this.startProgressTimer();
    this._howler.fade(0, 1, 150);
    this.seek(seekProgress);
  };

  onSeek = () => {
    this.status = PLAYER_STATUS.PLAYING;
  };

  pause = () => {
    if (this._howler) {
      this._howler.pause();
    }
  };

  play = (streamUrl, seekProgress = 0) => {
    const isCurrentStream = this._howler && this._howler._src === streamUrl;
    const isPaused = this.status === PLAYER_STATUS.PAUSED;
    // Resume playing paused stream.
    if (isCurrentStream) {
      if (isPaused) {
        this._howler.play();
      }
      this.seek(seekProgress);
    }
    // New `streamUrl`, stop what's playing and create a new sound.
    else {
      this.stop();
      this._howler = new Howl({
        src: streamUrl,
        format: 'mp3',
        html5: true,
        volume: 0,
        onend: this.stop,
        onpause: this.onPause,
        onplay: () => this.onPlay(seekProgress),
        onseek: this.onSeek
      });
      this._soundId = this._howler.play();
    }
  };

  seek = seekProgress => {
    if (this._howler) { 
      this._howler.seek(seekProgress / 1000);
      this.progress = seekProgress;
    }
  };

  stop = () => {
    if (this._howler) {
      this.progress = 0;
      this.state = PLAYER_STATUS.UNSTARTED;
      this.stopProgressTimer();
      this._howler.stop();
      this._howler.unload();
    }
  };

  startProgressTimer = () => {
    this._timer = setInterval(
      () => this.progress += PROGRESS_INTERVAL,
      PROGRESS_INTERVAL
    );
  };

  stopProgressTimer = () => {
    if (this._timer) clearInterval(this._timer);
  };
}

export default new HowlerPlayer();