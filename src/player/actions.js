import { getQualifiedStreamUrl } from '@/soundcloud';

export function play(streamUrl, seekProgress = 0) {
  if (streamUrl.includes('soundcloud')) {
    streamUrl = getQualifiedStreamUrl(streamUrl);
  }
  return { type: 'PLAY', payload: { streamUrl, seekProgress } };
}

export function pause() {
  return { type: 'PAUSE' };
}

export function stop() {
  return { type: 'STOP' };
}

export function updateMeta(meta) {
  return { type: 'UPDATE_META', payload: { meta } };
}

export function updateProgress(progress) {
  return { type: 'UPDATE_PROGRESS', payload: { progress } };
}

export function updateStatus(status) {
  return { type: 'UPDATE_STATUS', payload: { status } };
}