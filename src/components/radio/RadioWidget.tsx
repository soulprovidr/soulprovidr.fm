import { prettyPrintMilliseconds } from "../../lib/util";
import { ProgressBar } from "../ProgressBar";
import { useRadioContext } from "./context";
import { ListenButton } from "./ListenButton";
import { RadioCover } from "./RadioCover";
import css from "./RadioWidget.module.scss";
import { VolumeControl } from "./VolumeControl";

// const MediaSession = (props) => {
//   onMount(() => {
//     setActionHandler("play", props.listen);
//     setActionHandler("pause", props.stop);
//     setActionHandler("stop", props.stop);
//   });

//   createEffect(() => {
//     setMetadata({
//       album: "soulprovidr.fm",
//       artist: props.metadata?.artist,
//       artwork: [
//         { src: props.metadata?.cover, sizes: "400x400", type: "image/jpeg" },
//       ],
//       title: props.metadata?.title,
//     });
//   });

//   createEffect(() => {
//     let playbackState;
//     switch (props.status) {
//       case "buffering":
//       case "playing":
//         playbackState = "playing";
//         break;
//       case "stopped":
//         playbackState = "paused";
//         break;
//     }
//     setPlaybackState(playbackState);
//   });
// };

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
