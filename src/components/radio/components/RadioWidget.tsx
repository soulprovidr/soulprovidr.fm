import { MarqueeText } from "@components/ui/MarqueeText";
import isMobile from "ismobilejs";
import { useRadioContext } from "../context";
import { ListenButton } from "./ListenButton";
import { RadioCover } from "./RadioCover";
import { RadioProgress } from "./RadioProgress";
import css from "./RadioWidget.module.scss";
import { VolumeControl } from "./VolumeControl";

interface IRadioWidgetProps {
  hideControls?: boolean;
}

export const RadioWidget = ({ hideControls }: IRadioWidgetProps) => {
  const { metadata } = useRadioContext();

  // Hide the volume control on mobile (since volume is controlled by the device.)
  const isVolumeControlHidden =
    typeof window !== "undefined" ? isMobile(window.navigator).any : true;

  return (
    <div className={css.radioWidget}>
      <RadioCover className={css.cover} />
      {metadata && (
        <div className={css.metadata}>
          <div className={css.nowPlaying}>
            <MarqueeText className={css.title}>{metadata.title}</MarqueeText>
            <MarqueeText className={css.artist}>{metadata.artist}</MarqueeText>
          </div>
          {!hideControls && (
            <>
              <RadioProgress />
              <div className={css.controls}>
                <ListenButton />
                {!isVolumeControlHidden && <VolumeControl />}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
