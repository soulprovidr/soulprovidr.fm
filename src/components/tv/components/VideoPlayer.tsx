import {
  MediaPlayer,
  MediaPlayerInstance,
  MediaPlayerProps,
  MediaProvider,
<<<<<<< Updated upstream
=======
  MediaProviderAdapter,
  isYouTubeProvider,
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
    return (
      <MediaPlayer
        aspectRatio="16/9"
        autoPlay
        crossOrigin
        playsInline
=======
    const onProviderChange = (provider: MediaProviderAdapter) => {
      console.log("onProviderChange");
      if (isYouTubeProvider(provider)) {
        provider.cookies = true;
      }
    };

    return (
      <MediaPlayer
        aspectRatio="16/9"
        // autoPlay
        crossorigin
        onProviderChange={onProviderChange}
        // playsInline
>>>>>>> Stashed changes
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
