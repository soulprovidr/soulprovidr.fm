import { prettyPrintMilliseconds } from "../../lib/util";
import { ProgressBar } from "../ProgressBar";
import { useRadioContext } from "./context";
import { ListenButton } from "./ListenButton";
import { RadioCover } from "./RadioCover";
import css from "./RadioWidget.module.scss";
import { VolumeControl } from "./VolumeControl";

export const RadioWidget = () => {
  const { elapsedTime, metadata, progress, status } = useRadioContext();

  const isPlaying = status === "playing";

  return (
    <div className={css.radioWidget}>
      <RadioCover size={300} />
      {metadata && (
        <div className={css.nowPlaying}>
          <div>
            <div className={css.title}>{metadata.title}</div>
            <div className={css.artist}>{metadata.artist}</div>
          </div>
          <div>
            <ProgressBar isActive={isPlaying} value={progress} />
            <div className={css.progressLabels}>
              <span>{prettyPrintMilliseconds(elapsedTime)}</span>
              <span>{prettyPrintMilliseconds(metadata.duration * 1000)}</span>
            </div>
          </div>
          <div className={css.controls}>
            <ListenButton />
            <VolumeControl />
          </div>
        </div>
      )}
    </div>
  );
};
