import { pause, play, updateStatus } from '../actions';
import { PlayerStatus } from '../constants';

const { PAUSED, PLAYING, STOPPED } = PlayerStatus;

const updatePlaybackState = (playbackState) => {
  if (window && 'mediaSession' in window.navigator) {
    window.navigator.playbackState = playbackState;
  }
};

const handleUpdateStatus = (newStatus) => {
  switch (newStatus) {
    case PAUSED:
      updatePlaybackState('paused');
      break;
    case PLAYING:
      updatePlaybackState('playing');
      break;
    case STOPPED:
      updatePlaybackState('none');
      break;
  }
};

const setActionHandler = (name, handler) => {
  if (window && 'mediaSession' in window.navigator) {
    window.navigator.mediaSession.setActionHandler(name, handler);
  }
};

const setMetadata = (metadata) => {
  if (window && 'mediaSession' in window.navigator) {
    window.navigator.mediaSession.metadata = new window.MediaMetadata(metadata);
  }
};

/**
 * Update the Media Session API when player state changes.
 */
export const mediaSessionMiddleware = ({ dispatch }) => (next) => (action) => {
  switch (action.type) {
    case play.toString(): {
      const { meta = null } = action;
      if (meta) {
        setActionHandler('play', () => dispatch(play()));
        setActionHandler('pause', () => dispatch(pause()));
        setMetadata({
          title: meta.title,
          artist: meta.artist,
          artwork: [{ src: meta.cover }]
        });
      }
      break;
    }
    case updateStatus.toString(): {
      const { payload: newStatus } = action;
      handleUpdateStatus(newStatus);
      break;
    }
  }
  next(action);
};
