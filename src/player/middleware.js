import { updateProgress, updateStatus } from './actions';
import Player from './howler';

export default ({ dispatch }) => next => {
  // Listen for player events.
  Player.on('progress', progress => {
    dispatch(updateProgress(progress));
  });
  Player.on('status', status => {
    dispatch(updateStatus(status));
  });

  // Handle player commands.
  return action => {
    const { type, payload } = action;
    switch (type) {
      case 'PLAY': {
        const { seekProgress, playerItem: { streamUrl } } = payload;
        Player.play(streamUrl, seekProgress);
        break;
      }
      case 'PAUSE':
        Player.pause();
        break;
      case 'STOP':
        Player.stop();
        break;
      default:
        break;
    }
    next(action);
  };
}