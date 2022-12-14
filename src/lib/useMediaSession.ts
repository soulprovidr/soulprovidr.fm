import { useEffect } from "react";

type MediaSessionActionHandlerMap = {
  [Property in MediaSessionAction]?: MediaSessionActionHandler;
};

export interface IUseMediaSessionParams {
  actionHandlers?: MediaSessionActionHandlerMap;
  metadata?: MediaMetadataInit;
  playbackState?: MediaSessionPlaybackState;
}

export const useMediaSession = ({
  actionHandlers,
  metadata,
  playbackState,
}: IUseMediaSessionParams) => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.navigator.mediaSession) {
      Object.entries(actionHandlers).map(
        ([action, handler]: [
          MediaSessionAction,
          MediaSessionActionHandler
        ]) => {
          window?.navigator.mediaSession.setActionHandler(action, handler);
        }
      );
    }
  }, [actionHandlers]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.navigator.mediaSession) {
      window.navigator.mediaSession.metadata = new window.MediaMetadata(
        metadata
      );
    }
  }, [metadata]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.navigator.mediaSession) {
      window.navigator.mediaSession.playbackState = playbackState;
    }
  }, [playbackState]);
};
