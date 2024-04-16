import { Video } from "@lib/api/tv";
import { useMediaRemote, useMediaStore } from "@vidstack/react";
import {
  NextIcon,
  PauseIcon,
  PlayIcon,
  PreviousIcon,
} from "@vidstack/react/icons";
import cx from "classnames";
import { HTMLAttributes } from "react";
import css from "./Controls.module.scss";
import { VideoProgress } from "./VideoProgress";

interface ControlsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
  currentVideo: Video;
  isVisible: boolean;
  onNextClick: () => void;
  onPreviousClick: () => void;
}

export const Controls = ({
  currentVideo,
  isVisible,
  onNextClick,
  onPreviousClick,
  ...rest
}: ControlsProps) => {
  const remote = useMediaRemote();
  const { playing } = useMediaStore();

  const renderNextButton = () => (
    <button className={css.button} onClick={onNextClick}>
      <NextIcon />
    </button>
  );

  const renderPlayButton = () => (
    <button
      className={`${css.button} ${css.play}`}
      onClick={() => (playing ? remote.pause() : remote.play())}
    >
      {playing ? <PauseIcon /> : <PlayIcon />}
    </button>
  );

  const renderPreviousButton = () => (
    <button className={css.button} onClick={onPreviousClick}>
      <PreviousIcon />
    </button>
  );

  return (
    <div className={cx(css.controls, { [css.visible]: isVisible })} {...rest}>
      <div className={css.progressBar}>
        <VideoProgress />
      </div>
      <div className={css.buttons}>
        {renderPreviousButton()}
        {renderPlayButton()}
        {renderNextButton()}
      </div>
      <a
        className={css.nowPlaying}
        href={currentVideo.videoUrl}
        target="_blank"
      >
        <span className={css.title}>{currentVideo.title}</span>
        <div className={css.button}>
          <img src="/yt_icon_rgb.png" width="auto" height="20" />
        </div>
      </a>
    </div>
  );
};
