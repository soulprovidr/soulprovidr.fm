import { pause, play, setPlayerMeta, updateStatus } from '../slice';
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
  next(action);
  if (play.match(action)) {
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
  }
  if (setPlayerMeta.match(action)) {
    const { payload: meta } = action;
    setMetadata({
      title: meta?.title ?? 'For those who like to groove.',
      artist: meta?.artist ?? 'Soul Provider',
      artwork: [{ src: meta?.cover ?? null }]
    });
  }
  if (updateStatus.match(action)) {
    const { payload: newStatus } = action;
    handleUpdateStatus(newStatus);
  }
};
