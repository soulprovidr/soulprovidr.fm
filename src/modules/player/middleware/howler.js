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

  // Player status observable.
  const status = flyd.stream(STOPPED);

  /**
   * Create a new Howl instance for the specified audio src.
   * @param {String} src Audio URL
   * @param {Function} callback Function to run once the sound begins playing.
   */
  const createSound = (src, callback = () => false) =>
    new Howl({
      src,
      format: 'mp3',
      html5: true,
      onpause: () => status(PAUSED),
      onplay: () => {
        callback();
        status(PLAYING);
      },
      onstop: () => status(STOPPED),
      onend: () => status(STOPPED)
    });

  /**
   * Stop publishing progress, destroy the current sound, and reset module state.
   */
  const resetSound = () => {
    stopTimer();
    if (sound) {
      sound.off();
      sound.unload();
      sound = null;
    }
    dispatch(reset());
  };

  /**
   * Stop updating the progress.
   */
  const stopTimer = () => clearInterval(timer);

  /**
   * Update progress every PROGRESS_INTERVAL milliseconds.
   */
  const startTimer = () => {
    timer = setInterval(() => {
      dispatch(updateProgress(PROGRESS_INTERVAL));
    }, PROGRESS_INTERVAL);
  };

  /**
   * Start playing the media source specified in the action payload.
   * @param {Object} action
   */
  const play = (action) => {
    const { payload: src, meta } = action;
    const { callback = () => false, progress = 0 } = meta;

    // Clear any previous sound/state/timers.
    resetSound();
    sound = createSound(src, callback);

    // Do we need to seek?
    if (progress) {
      dispatch(setProgress(progress));
      sound.seek(progress);
    }

    // Set BUFFERING status while sound is loading.
    status(BUFFERING);
    sound?.play();
  };

  // Handle changes to Howler player status.
  flyd.on((status) => {
    // Update module `status` when player status changes.
    dispatch(updateStatus(status));
    switch (status) {
      // Reset module state when sound is unloaded.
      case STOPPED:
        resetSound();
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
        resetSound();
        break;
      default:
        break;
    }
    next(action);
  };
};
