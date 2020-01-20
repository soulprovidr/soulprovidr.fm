import { updateProgress, updateStatus } from './actions';
import Player from './howler';

export default ({ dispatch }) => next => {
  // Listen for player events.
  Player.on('progress', progress => {
    console.log(progress);
    dispatch(updateProgress(progress));
  });
  Player.on('status', status => {
    console.log(status);
    dispatch(updateStatus(status));
  });

  // Handle player commands.
  return action => {
    const { type, payload } = action;
    switch (type) {
      case 'PLAY':
        const { streamUrl } = payload;
        Player.play(streamUrl);
        break;
      case 'PAUSE':
        Player.pause();
        break;
      default:
        break;
    }
    next(action);
  };
}