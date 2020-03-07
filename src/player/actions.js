export function play(playerItem = null, seekProgress = 0) {
  if (!playerItem) {
    return null;
  }
  return { type: 'PLAY', payload: { playerItem, seekProgress } };
}

export function pause() {
  return { type: 'PAUSE' };
}

export function stop() {
  return { type: 'STOP' };
}

export function updateProgress(progress) {
  return { type: 'UPDATE_PROGRESS', payload: { progress } };
}

export function updateStatus(status) {
  return { type: 'UPDATE_STATUS', payload: { status } };
}