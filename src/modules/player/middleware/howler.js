import flyd from 'flyd';
import skip from 'flyd-skip';
import { Howl } from 'howler';
import {
  pause,
  play,
  reset,
  resume,
  seek,
  setProgress,
  stop,
  updateProgress,
  updateStatus
} from '../actions';
import { PlayerStatus } from '../constants';

const { STOPPED, BUFFERING, PAUSED, PLAYING } = PlayerStatus;

const PROGRESS_INTERVAL = 100;

const PAUSE = pause.toString();
const PLAY = play.toString();
const RESUME = resume.toString();
const SEEK = seek.toString();
const STOP = stop.toString();

export const howlerMiddleware = ({ dispatch }) => {
  let sound = null;
  let timer = null;

  const status = flyd.stream(STOPPED);

  const stopTimer = () => clearInterval(timer);
  const startTimer = () => {
    timer = setInterval(() => {
      dispatch(updateProgress(PROGRESS_INTERVAL));
    }, PROGRESS_INTERVAL);
  };

  const _reset = () => {
    stopTimer();
    if (sound) {
      sound.off();
      sound.unload();
      sound = null;
    }
    dispatch(reset());
  };

  /**
   * Start playing the media source specified in the action payload.
   * @param {Object} action
   */
  const play = (action) => {
    const { payload: src, meta } = action;
    const { callback = () => false, progress = 0 } = meta;

    // Clear any previous sound/state/timers.
    _reset();
    sound = new Howl({
      src,
      format: 'mp3',
      html5: true,
      // Update `status` -- below we react to the update.
      onpause: () => status(PAUSED),
      onplay: () => {
        callback();
        status(PLAYING);
      },
      onstop: () => status(STOPPED),
      onend: () => status(STOPPED)
    });

    // Do we need to seek?
    if (progress) {
      dispatch(setProgress(progress));
      sound.seek(progress);
    }

    // Set BUFFERING status while sound is loading.
    status(BUFFERING);

    // Attempt to play the sound.
    sound?.play();
  };

  // Handle changes to Howler player status.
  flyd.on((status) => {
    // Update module `status` when player status changes.
    dispatch(updateStatus(status));
    switch (status) {
      // Reset module state when sound is unloaded.
      case STOPPED:
        _reset();
        break;
      // Stop timer when stream is paused.
      case PAUSED:
        stopTimer();
        break;
      case PLAYING:
        startTimer();
        break;
      default:
        break;
    }
  }, skip(1, status));

  // Handle user interactions with the player.
  return (next) => (action) => {
    switch (action.type) {
      // Load or resume audio when PLAY action is dispatched.
      case PLAY:
        play(action);
        break;
      case PAUSE:
        sound?.pause();
        break;
      case RESUME:
        sound?.play();
        break;
      case SEEK: {
        const { progress } = action.payload;
        sound?.seek(progress);
        break;
      }
      case STOP:
        sound?.stop();
        break;
      default:
        break;
    }
    next(action);
  };
};
