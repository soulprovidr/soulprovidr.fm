import isEqual from "lodash.isequal";
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
  if (typeof window !== "undefined" && window.navigator.mediaSession) {
    if (!isEqual(metadata, window?.navigator.mediaSession.metadata)) {
      window.navigator.mediaSession.metadata = new window.MediaMetadata(
        metadata
      );
    }

    if (playbackState !== window.navigator.mediaSession.playbackState) {
      window.navigator.mediaSession.playbackState = playbackState;
    }
  }

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
};
