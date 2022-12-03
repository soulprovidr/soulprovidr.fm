import isMobile from "ismobilejs";
import { prettyPrintMilliseconds } from "../../lib/util";
import { MarqueeText } from "../MarqueeText";
import { ProgressBar } from "../ProgressBar";
import { useRadioContext } from "./context";
import { ListenButton } from "./ListenButton";
import { RadioCover } from "./RadioCover";
import css from "./RadioWidget.module.scss";
import { VolumeControl } from "./VolumeControl";

export const RadioWidget = () => {
  const { elapsedTime, metadata, progress, status } = useRadioContext();

  const isPlaying = status === "playing";

  // Hide the volume control on mobile (since volume is controlled by the device.)
  const isVolumeControlHidden =
    typeof window !== "undefined" ? isMobile(window.navigator).any : true;

  return (
    <div className={css.radioWidget}>
      <RadioCover size={300} />
      <div className={css.nowPlaying}>
        {metadata && (
          <>
            <div>
              <MarqueeText className={css.title}>
                {metadata.title} {metadata.title} {metadata.title}
              </MarqueeText>
              <MarqueeText className={css.artist}>
                {metadata.artist}
              </MarqueeText>
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
              {!isVolumeControlHidden && <VolumeControl />}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
