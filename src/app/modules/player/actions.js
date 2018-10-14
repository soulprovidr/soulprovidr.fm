export const ActionTypes = {
  PAUSE: 'player/PAUSE',
  PLAY: 'player/PLAY',
  SET_VOLUME: 'player/SET_VOLUME'
};

export function pause() {
  return { type: ActionTypes.PAUSE };
}

export function play() {
  return { type: ActionTypes.PLAY };
}

export function setVolume(volume) {
  return {
    type: ActionTypes.SET_VOLUME,
    payload: volume
  };
}