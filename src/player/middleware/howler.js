import { Howl, Howler } from 'howler';
import flyd from 'flyd';
import skip from 'flyd-skip';
import {
  pause,
  play,
  reset,
  seek,
  stop,
  updateProgress,
  updateStatus,
} from '../actions';
import { PlayerStatus } from '../constants';

const { UNSTARTED, BUFFERING, PAUSED, PLAYING, STOPPED } = PlayerStatus;

const PAUSE = pause.toString();
const PLAY = play.toString();
const SEEK = seek.toString();
const STOP = stop.toString();

class ProgressTimer {
  static PROGRESS_INTERVAL = 100;
  _interval = null;

  start(fn) {
    this._interval = setInterval(fn, ProgressTimer.PROGRESS_INTERVAL);
  }

  stop() {
    clearInterval(this._interval);
    this._interval = null;
  }
}

class HowlerPlayer {
  progress = flyd.stream(0); // milliseconds
  status = flyd.stream(UNSTARTED);
  src = null;

  sound = null;
  progressTimer = new ProgressTimer();

  constructor() {
    flyd.on(this.handleStatus, this.status);
  }

  destroy = () => {
    if (this.sound) {
      const sound = this.sound;
      // Unregister event listeners.
      sound.off();
      // Unload sound instance.
      sound.unload();
      // Reset state of HowlerPlayer instance.
      this.reset();
    }
  };

  handleStatus = (status) => {
    switch (status) {
      case PAUSED:
        // Stop progress timer when audio is paused.
        this.progressTimer.stop();
        break;
      case PLAYING:
        // Start progress timer when audio begins playing.
        this.progressTimer.start(this.updateProgress);
        break;
      case STOPPED:
        // Destroy sound instance when audio is stopped.
        this.destroy();
        break;
      default:
        break;
    }
  };

  load = (src, progress = 0) => {
    // Destroy previous instance.
    this.destroy();

    // Define event listeners + create sound instance.
    const onpause = () => this.status(PAUSED);
    const onplay = () => this.status(PLAYING);
    const onstop = () => this.status(STOPPED);
    this.sound = new Howl({
      src,
      format: 'mp3',
      html5: true,
      onend: onstop,
      onpause,
      onplay,
      onstop,
    });

    if (progress) {
      // Seek to desired location, if `progress` is defined.
      this.seek(progress);
    }

    // Attempt to play sound.
    this.status(BUFFERING);
    this.play();
  };

  pause = () => {
    if (this.sound && this.status() === PLAYING) {
      this.sound.pause();
    }
  };

  play = () => {
    if (this.sound && this.status() !== PLAYING) {
      this.sound.play();
    }
  };

  reset = () => {
    this.progressTimer.stop();
    this.sound = null;
    this.progress(0);
    this.src = null;
    this.status(UNSTARTED);
  };

  seek = (progress) => {
    this.sound.seek(progress / 1000);
    this.progress(progress);
  };

  stop = () => {
    this.destroy();
  };

  updateProgress = () => {
    this.progress(this.progress() + ProgressTimer.PROGRESS_INTERVAL);
  };
}

const howlerPlayer = new HowlerPlayer();

export default (store) => {
  // Update module `progress` when player progress changes.
  const progress = skip(1, howlerPlayer.progress);
  flyd.on((progress) => {
    store.dispatch(updateProgress(progress));
  }, progress);

  const status = skip(1, howlerPlayer.status);
  flyd.on((status) => {
    if (status === UNSTARTED) {
      // Reset module state when sound is unloaded.
      store.dispatch(reset());
    } else {
      // Update module `status` when player status changes.
      store.dispatch(updateStatus(status));
    }
  }, status);

  return (next) => (action) => {
    switch (action.type) {
      case PLAY:
        // Load or resume audio when PLAY action is dispatched.
        if (action.payload) {
          const { payload: src, meta } = action;
          howlerPlayer.load(src, meta.progress || 0);
        } else {
          howlerPlayer.play();
        }
        break;
      case PAUSE:
        howlerPlayer.pause();
        break;
      case SEEK:
        const { progress } = action.payload;
        howlerPlayer.seek(progress);
        break;
      case STOP:
        howlerPlayer.stop();
        break;
      default:
        break;
    }
    next(action);
  };
};
