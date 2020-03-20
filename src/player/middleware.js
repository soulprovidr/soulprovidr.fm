
import { Howl, Howler } from 'howler';
import { action, observable, reaction } from 'mobx';
import {
  load,
  pause,
  play,
  reset,
  seek,
  stop,
  updateProgress,
  updateStatus,
  PlayerStatus
} from './';

const {
  UNSTARTED,
  BUFFERING,
  PAUSED,
  PLAYING,
  STOPPED
} = PlayerStatus;

class AudioPlayer {
  static PROGRESS_INTERVAL = 100; // milliseconds

  @observable progress = 0;       // milliseconds
  @observable status = UNSTARTED;
  src = null;

  _sound = null;
  _timer = {
    interval: null,
    start: action(() => {
      this._timer.interval = setInterval(
        () => this.progress += AudioPlayer.PROGRESS_INTERVAL,
        AudioPlayer.PROGRESS_INTERVAL
      );
    }),
    stop: action(() => {
      clearInterval(this._timer.interval);
    })
  };

  constructor() {
    reaction(
      () => this.status,
      this.handleStatus
    );
  }

  @action destroy = () => {
    if (this._sound) {
      const _sound = this._sound;
      _sound.off();
      _sound.unload();
      this.reset();
    }
  };

  @action handleStatus = status => {
    switch (status) {
      case PAUSED:
        this._timer.stop();
        break;
      case PLAYING:
        this._timer.start();
        break;
      case STOPPED:
        this.destroy();
        break;
      default:
        break;
    }
  }

  @action load = (src, progress = 0) => {
    this.destroy();

    const onpause = () => {
      this.status = PAUSED;
    };

    const onplay = () => {
      if (progress) {
        this.seek(progress);
      }
      this.status = PLAYING;
    };

    const onstop = () => {
      this.status = STOPPED;
    };

    this._sound = new Howl({
      src,
      format: 'mp3',
      html5: true,
      onend: onstop,
      onpause,
      onplay,
      onstop
    });

    this.status = BUFFERING;
    this.play();
  };

  @action pause = () => {
    if (this._sound && this.status === PLAYING) {
      this._sound.pause();
    }
  }

  @action play = () => {
    console.log('play');
    if (this._sound && this.status !== PLAYING) {
      console.log('status not playing');
      this._sound.play();
    }
  };

  @action reset = () => {
    this._timer.stop();
    this._sound = null;
    this.progress = 0;
    this.src = null;
    this.status = UNSTARTED;
  };

  @action stop = () => {
    this.destroy();
  };
}

const audioPlayer = new AudioPlayer();

export default store => {
  // Handle progress updates.
  reaction(
    () => audioPlayer.progress,
    progress => store.dispatch(updateProgress(progress))
  );

  // Handle status updates.
  reaction(
    () => audioPlayer.status,
    status => {
      if (status === UNSTARTED) {
        store.dispatch(reset());
      } else {
        store.dispatch(updateStatus(status));
      }
    }
  );

  // Handle user commands.
  return next => action => {
    switch (action.type) {
      case load.type:
        const { src, meta } = action.payload;
        audioPlayer.load(src, 0);
        break;
      case pause.type:
        audioPlayer.pause();
        break;
      case play.type:
        audioPlayer.play();
        break;
      case seek.type:
        const { progress } = action.payload;
        audioPlayer.seek(progress);
        break;
      case stop.type:
        audioPlayer.stop();
        break;
      default:
        break;
    }
    next(action);
  }
}