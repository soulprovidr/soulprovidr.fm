export const setActionHandler = (name, handler) => {
  window.navigator.mediaSession.setActionHandler(name, handler);
};

/**
 * Update the MediaSession metadata.
 * @param {MediaMetadataInit} metadata
 */
export const setMetadata = (metadata) => {
  window.navigator.mediaSession.metadata = new window.MediaMetadata(metadata);
};

export const setPlaybackState = (playbackState) => {
  window.navigator.mediaSession.playbackState = playbackState;
};
