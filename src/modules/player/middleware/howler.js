import flyd from 'flyd';
import skip from 'flyd-skip';
import { Howl } from 'howler';
import {
  incrementProgress,
  pause,
  play,
  reset,
  setProgress,
  stop,
  setStatus,
  mute,
  setVolume
} from '../slice';
import { PauseAction, PlayerStatus, PROGRESS_INTERVAL } from '../constants';
import {
  selectIsListening,
  selectIsMuted,
  selectPauseAction,
  selectPlayerSrc
} from '../selectors';

const { STOPPED, BUFFERING, PAUSED, PLAYING } = PlayerStatus;

export const howlerMiddleware = ({ dispatch, getState }) => {
  let sound = null;
  let timer = null;

  // Player status observable.
  const status = flyd.stream(STOPPED);

  /**
   * Create a new Howl instance for the specified audio src.
   * @param {String} src Audio URL
   */
  function createSound(src) {
    return new Howl({
      src,
      format: 'mp3',
      html5: true,
      onpause: () => status(PAUSED),
      onplay: () => status(PLAYING),
      onstop: () => status(STOPPED),
      onend: () => status(STOPPED)
    });
  }

  /**
   * Update progress every PROGRESS_INTERVAL milliseconds.
   */
  function startTimer() {
    if (!timer) {
      timer = setInterval(() => {
        dispatch(incrementProgress(PROGRESS_INTERVAL));
      }, PROGRESS_INTERVAL);
    }
  }

  /**
   * Stop updating the progress.
   */
  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }

  function handleMute() {
    const isMuted = selectIsMuted(getState());
    sound?.mute(!isMuted);
  }

  /**
   * Pause or stop the currently-selected sound, depending on the pauseAction.
   */
  function handlePause() {
    const pauseAction = selectPauseAction(getState());
    switch (pauseAction) {
      case PauseAction.STOP:
        handleStop();
        break;
      default:
        sound?.pause();
        break;
    }
  }

  /**
   * Start playing the media source specified in the action payload.
   * @param {Object} action
   */
  function handlePlay(action) {
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
    const isPlaying = selectIsListening(state);
    const currentSrc = selectPlayerSrc(state);

    if (currentSrc === src) {
      // If sound is not playing, start playing (i.e. resume).
      if (!isPlaying) {
        sound?.play();
      }
      return;
    }

    // Clear any previous sound/state/timers and load a new one.
    if (sound) handleStop();
    sound = createSound(src);

    // Set BUFFERING status while sound is loading.
    status(BUFFERING);
    sound?.play();

    // Do we need to seek?
    if (progress !== null) handleSeek(progress);
  }

  function handleSeek(progress) {
    dispatch(setProgress(progress));
    sound?.seek(progress / 1000);
  }

  function handleSetVolume(action) {
    const isMuted = selectIsMuted(getState());
    const { payload: volume } = action;
    sound?.volume(volume / 100);
    if (isMuted) {
      sound?.mute(false);
    }
  }

  function handleStop() {
    stopTimer();
    if (sound) {
      sound?.off();
      sound?.unload();
      sound = null;
    }
    dispatch(reset());
  }

  function handleStatus(status) {
    // Update module `status` when player status changes.
    dispatch(setStatus(status));
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
  }

  // React to Howler player status changes.
  flyd.on(handleStatus, skip(1, status));

  // Handle user interactions with the player.
  return (next) => (action) => {
    if (mute.match(action)) {
      handleMute();
    }
    if (play.match(action)) {
      handlePlay(action);
    }
    if (pause.match(action)) {
      handlePause();
    }
    if (setVolume.match(action)) {
      handleSetVolume(action);
    }
    if (stop.match(action)) {
      handleStop();
    }
    next(action);
  };
};
