import { Meta } from "@components/meta";
import { Page } from "@components/page";
import { Video } from "@lib/api/tv";
import { useIsMouseActive } from "@lib/hooks/useIsMouseActive";
import {
  MediaPlayer,
  MediaPlayerInstance,
  MediaProvider,
  useMediaRemote,
  useMediaStore,
} from "@vidstack/react";
import "@vidstack/react/player/styles/base.css";
import cx from "classnames";
import { useRef, useState } from "react";
import { Controls } from "./Controls";
import css from "./VideosView.module.scss";

export interface VideosViewProps {
  videos: Video[];
}

export const VideosView = ({ videos }: VideosViewProps) => {
  const playerRef = useRef<MediaPlayerInstance>();

  const remote = useMediaRemote(playerRef);
  const { paused, playing, started } = useMediaStore(playerRef);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentVideo = videos[currentIndex];

  const isMouseActive = useIsMouseActive();
  const [isMouseOverControls, setIsMouseOverControls] =
    useState<boolean>(false);
  const shouldShowControls =
    (paused && started) || isMouseActive || isMouseOverControls;

  const nextVideo = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % videos.length);
  };

  const previousVideo = () => {
    setCurrentIndex(currentIndex === 0 ? videos.length - 1 : currentIndex - 1);
  };

  const onControlsMouseEnter = () => {
    setIsMouseOverControls(true);
  };

  const onControlsMouseLeave = () => {
    setIsMouseOverControls(false);
  };

  return (
    <Page.Content fixed>
      <Meta title="TV" description="I want my Soul Provider TV" />
      <ol className={css.guide}>
        {videos.map((video, index) => (
          <div>
            <img
              alt={video.title}
              className={css.thumbnail}
              key={video.videoId}
              onClick={() => setCurrentIndex(index)}
              src={video.thumbnailUrl}
            />
            <h3>{video.title}</h3>
          </div>
        ))}
      </ol>
      <div className={css.cinema}>
        <Page.Header
          className={cx(css.header, { [css.visible]: shouldShowControls })}
          onBlurCapture={onControlsMouseLeave}
          onFocusCapture={onControlsMouseEnter}
          onMouseEnter={onControlsMouseEnter}
          onMouseLeave={onControlsMouseLeave}
        />
        <MediaPlayer
          aspectRatio="16/9"
          autoPlay
          className={css.player}
          crossOrigin
          onEnded={nextVideo}
          onError={nextVideo}
          onPlayFail={nextVideo}
          onSuspend={nextVideo}
          playsInline
          ref={playerRef}
          src={`youtube/${currentVideo.videoId}`}
          title={currentVideo.title}
        >
          <MediaProvider>
            {!playing && !started && (
              <img className={css.static} src="/static.gif" alt="" />
            )}
            <Controls
              currentVideo={currentVideo}
              isVisible={shouldShowControls}
              onBlurCapture={onControlsMouseLeave}
              onFocusCapture={onControlsMouseEnter}
              onMouseEnter={onControlsMouseEnter}
              onMouseLeave={onControlsMouseLeave}
              onNextClick={nextVideo}
              onPreviousClick={previousVideo}
            />
          </MediaProvider>
        </MediaPlayer>
      </div>
    </Page.Content>
  );
};
