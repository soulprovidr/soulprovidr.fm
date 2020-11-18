import { createSelector } from 'reselect';

export const selectPauseAction = (state) => state.player.pauseAction;
export const selectPlayerMeta = (state) => state.player.meta;
export const selectPlayerProgress = (state) => state.player.progress;
export const selectPlayerSrc = (state) => state.player.src;
export const selectPlayerStatus = (state) => state.player.status;

export const selectIsPlaying = createSelector(
  selectPlayerSrc,
  (_, url) => url,
  (playerSrc, url) =>
    !!playerSrc && (playerSrc.includes(url) || playerSrc === url)
);
