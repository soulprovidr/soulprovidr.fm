import {
  MediaPlayer,
  MediaPlayerInstance,
  MediaPlayerProps,
  MediaProvider,
  MediaProviderAdapter,
  isYouTubeProvider,
  useMediaStore,
} from "@vidstack/react";
import "@vidstack/react/player/styles/base.css";
import { forwardRef, useImperativeHandle, useRef } from "react";
import css from "./VideoPlayer.module.scss";

interface VideoPlayerProps extends Omit<MediaPlayerProps, "children"> {
  title?: string;
}

export const VideoPlayer = forwardRef<MediaPlayerInstance, VideoPlayerProps>(
  (props, ref) => {
    const playerRef = useRef<MediaPlayerInstance>();

    const { playing, started } = useMediaStore(playerRef);

    useImperativeHandle(ref, () => playerRef.current as MediaPlayerInstance);

    const onProviderChange = (provider: MediaProviderAdapter) => {
      if (isYouTubeProvider(provider)) {
        provider.cookies = true;
      }
    };

    return (
      <MediaPlayer
        aspectRatio="16/9"
        crossorigin
        onProviderChange={onProviderChange}
        playsInline
        ref={playerRef}
        {...props}
      >
        <MediaProvider>
          {!playing && !started && (
            <img className={css.poster} src="/static.gif" alt="" />
          )}
        </MediaProvider>
      </MediaPlayer>
    );
  },
);
