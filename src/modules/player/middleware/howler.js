import flyd from 'flyd';
import skip from 'flyd-skip';
import isEqual from 'lodash.isequal';
import { Howl } from 'howler';
import {
  pause,
  play,
  reset,
  setProgress,
  stop,
  updateProgress,
  updateStatus
} from '../actions';
import { PauseAction, PlayerStatus } from '../constants';
import {
  selectIsPlaying,
  selectPauseAction,
  selectPlayerSrc
} from '../selectors';

const { STOPPED, BUFFERING, PAUSED, PLAYING } = PlayerStatus;

const PROGRESS_INTERVAL = 100;

const PAUSE = pause.toString();
const PLAY = play.toString();
const STOP = stop.toString();

export const howlerMiddleware = ({ dispatch, getState }) => {
  let sound = null;
  let timer = null;

  // Player status observable.
  const status = flyd.stream(STOPPED);

  /**
   * Create a new Howl instance for the specified audio src.
   * @param {String} src Audio URL
   */
  const createSound = (src) =>
    new Howl({
      src,
      format: 'mp3',
      html5: true,
      onpause: () => status(PAUSED),
      onplay: () => status(PLAYING),
      onstop: () => status(STOPPED),
      onend: () => status(STOPPED)
    });

  /**
   * Update progress every PROGRESS_INTERVAL milliseconds.
   */
  const startTimer = () => {
    if (!timer) {
      timer = setInterval(() => {
        dispatch(updateProgress(PROGRESS_INTERVAL));
      }, PROGRESS_INTERVAL);
    }
  };

  /**
   * Stop updating the progress.
   */
  const stopTimer = () => {
    clearInterval(timer);
    timer = null;
  };

  const handleSeek = (progress) => {
    dispatch(setProgress(progress));
    sound?.seek(progress / 1000);
  };

  /**
   * Stop publishing progress, destroy the current sound, and reset module state.
   */
  const handleStop = () => {
    stopTimer();
    if (sound) {
      sound?.off();
      sound?.unload();
      sound = null;
    }
    dispatch(reset());
  };

  /**
   * Pause or stop the currently-selected sound, depending on the pauseAction.
   */
  const handlePause = () => {
    const pauseAction = selectPauseAction(getState());
    switch (pauseAction) {
      case PauseAction.STOP:
        handleStop();
        break;
      default:
        sound?.pause();
        break;
    }
  };

  /**
   * Start playing the media source specified in the action payload.
   * @param {Object} action
   */
  const handlePlay = (action) => {
    const {
      payload: { src, progress = null }
    } = action;

    // Handle seek for current sound (`progress`, without any other parameters).
    if (sound && !src && progress !== null) {
      handleSeek(progress);
      status(BUFFERING);
      sound?.play();
      return;
    }

    const state = getState();
    const isPlaying = selectIsPlaying(state);
    const currentSrc = selectPlayerSrc(state);

    if (isEqual(currentSrc, src)) {
      // If sound is not playing, start playing (i.e. resume).
      return isPlaying ? false : sound?.play();
    }

    // Clear any previous sound/state/timers and load a new one.
    if (sound) handleStop();
    sound = createSound(src);

    // Set BUFFERING status while sound is loading.
    status(BUFFERING);
    sound?.play();

    // Do we need to seek?
    if (progress !== null) handleSeek(progress);
  };

  const handleStatus = (status) => {
    // Update module `status` when player status changes.
    dispatch(updateStatus(status));
    switch (status) {
      // Reset module state when sound is unloaded.
      case STOPPED:
        handleStop();
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
  };

  // React to Howler player status changes.
  flyd.on(handleStatus, skip(1, status));

  // Handle user interactions with the player.
  return (next) => (action) => {
    switch (action.type) {
      // Load or resume audio when PLAY action is dispatched.
      case PLAY:
        handlePlay(action);
        break;
      case PAUSE:
        handlePause();
        break;
      case STOP:
        handleStop();
        break;
      default:
        break;
    }
    next(action);
  };
};
