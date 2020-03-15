import { action, observable, reaction } from 'mobx';
import { Howl, Howler } from 'howler';

export const StreamableStatus = {
  UNSTARTED: -1,
  BUFFERING: 0,
  PLAYING: 1,
  PAUSED: 2,
  ENDED: 3,
  STOPPED: 4
};

const {
  UNSTARTED,
  BUFFERING,
  PLAYING,
  PAUSED,
  ENDED,
  STOPPED
} = StreamableStatus;

// Time between ticks when updating stream progress.
const PROGRESS_INTERVAL = 100;

export default class Streamable {
  uid = null;
  duration = 0;   // milliseconds
  @observable progress = 0;   // milliseconds
  @observable status = UNSTARTED;
  src = null;

  #_timer = null;
  #_sound = null;

  constructor({ uid, duration, progress, src }) {
    this.uid = uid;
    this.duration = duration;
    this.progress = progress;
    this.src = src;

    this._sound = new Howl({
      src,
      format: 'mp3',
      html5: true,
      onpause: () => this.setStatus(PAUSED),
      onplay: () => this.setStatus(PLAYING),
      onstop: () => this.setStatus(STOPPED)
    });

    reaction(() => this.status, this.onStatusChange);
  }

  timer = {
    start: () => {
      this._timer = setInterval(
        () => this.progress += PROGRESS_INTERVAL,
        PROGRESS_INTERVAL
      );
    },
    stop: () => {
      clearInterval(this._timer);
    }
  }

  @action dispose = () => {
    this.timer.stop();
    if (this._sound) {
      this._sound.unload();
      this._sound = null;
    }
  };

  @action onStatusChange = status => {
    switch (status) {
      case PAUSED:
        this.timer.stop();
        break;
      case PLAYING:
        if (this.progress !== 0) {
          this.seek(this.progress);
        }
        this.timer.start();
        break;
      case ENDED:
      case STOPPED:
        this.dispose();
        break;
      default:
        return;
    }
  };

  @action pause = () => {
    this._sound.pause();
  };

  @action play = () => {
    console.log('play');
    if (this.status === PLAYING) {
      return false;
    }
    this.status = BUFFERING;
    this._sound.play();
  };

 @action  seek = progress => {
    this.progress = progress;
    if (this.status === PLAYING) {
      this._sound.seek(progress / 1000);  // Convert ms to s.
    }
  };

  @action setStatus = status => {
    this.status = status;
  };

  @action stop = () => {
    this._sound.stop();
  };
}