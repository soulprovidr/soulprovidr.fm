import isMobile from "ismobilejs";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AsyncImage } from "./AsyncImage";
import { MarqueeText } from "./MarqueeText";
import { ProgressBar } from "./ProgressBar";
import {
  setActionHandler,
  setMetadata,
  setPlaybackState,
} from "../lib/mediaSession";
import { msToTime, noop } from "../lib/util";
import { useMetadata } from "../hooks/useMetadata";
import { usePersistedState } from "../hooks/usePersistedState";
import css from "./RadioPlayer.module.scss";

interface IRadioMetadata {
  artist: string;
  cover: string;
  duration: number;
  id: number;
  next_track: string;
  started_at: string;
  title: string;
}

export type RadioStatus = "stopped" | "buffering" | "playing";

interface IRadioContext {
  isMuted: boolean;
  listen: () => void;
  mute: () => void;
  metadata: IRadioMetadata;
  setVolume: (volume: number) => void;
  status: RadioStatus;
  stop: () => void;
  volume: number;
}

const RadioContext = createContext<IRadioContext>({
  isMuted: false,
  listen: noop,
  mute: noop,
  metadata: null,
  setVolume: noop,
  status: "stopped",
  stop: noop,
  volume: 1,
});

const useRadio = () => useContext(RadioContext);

interface IRadioCoverProps {
  size: number;
}

const RadioCover = ({ size }: IRadioCoverProps) => {
  const { metadata } = useRadio();
  return (
    <div
      className={css.cover}
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      <AsyncImage
        alt={metadata && `Artwork for ${metadata.title} by ${metadata.artist}`}
        height={size}
        src={metadata?.cover}
        width={size}
      />
    </div>
  );
};

// interface IRadioProgressProps {
//   duration: number;
//   status: RadioStatus;
// }

// const RadioProgress = (props) => {
//   const defaultProps = {
//     duration: 0,
//     status: "stopped",
//     startedAt: null,
//   };

//   const local = mergeProps(defaultProps, props);

//   const [elapsed, setElapsed] = createSignal(0);
//   const [progress, setProgress] = createSignal(0);

//   const duration = () => (local.duration ? local.duration * 1000 : 0);

//   // Update progress value.
//   createRenderEffect(() => {
//     const tick = () => {
//       const newElapsed = Math.max(
//         Math.min(
//           new Date().getTime() -
//             new Date(local.startedAt || "").getTime() -
//             10000,
//           duration()
//         ),
//         0
//       );
//       setElapsed(newElapsed);
//       setProgress(Math.min(1, newElapsed / duration()));
//       requestAnimationFrame(tick);
//     };
//     tick();
//   });

//   return (
//     <div class="metadata__progress">
//       <ProgressBar isActive={local.status === "playing"} value={progress()} />
//       <div class="metadata__time">
//         <span>{msToTime(elapsed())}</span>
//         <span>{msToTime(duration())}</span>
//       </div>
//     </div>
//   );
// };

const ListenButton = (props) => {
  const defaultProps = {
    listen: noop,
    status: "stopped",
    stop: noop,
  };

  const local = mergeProps(defaultProps, props);

  const children = createMemo(() => {
    switch (local.status) {
      case "buffering":
        return `
           <svg class="loading" xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" class="bi bi-disc-fill" viewBox="0 0 16 16">
             <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-6 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM4 8a4 4 0 0 1 4-4 .5.5 0 0 0 0-1 5 5 0 0 0-5 5 .5.5 0 0 0 1 0zm9 0a.5.5 0 1 0-1 0 4 4 0 0 1-4 4 .5.5 0 0 0 0 1 5 5 0 0 0 5-5z"/>
           </svg>
           LOADING
         `;
      case "playing":
        return `
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-fill" viewBox="0 0 16 16">
             <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/>
           </svg>
           STOP
         `;
      case "stopped":
        return `
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
             <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
           </svg>
           LISTEN
         `;
    }
  });

  const onclick = () =>
    local.status === "stopped" ? local.listen() : local.stop();

  return (
    <button
      aria-label={local.status === "stopped" ? "listen" : "stop"}
      autoFocus
      className="listenButton"
      disabled={local.disabled}
      onclick={onclick}
      innerHTML={children()}
    />
  );
};

const VolumeControl = (props) => {
  const defaultProps = {
    isMuted: false,
    mute: noop,
    setVolume: noop,
    value: 1,
  };

  const local = mergeProps(defaultProps, props);

  const handleIconClick = () => {
    if (local.value === 0) {
      local.setVolume(1);
    } else {
      local.mute();
    }
  };

  const icon = createMemo(() =>
    local.isMuted || local.value === 0
      ? `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
              <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
            </svg>
          `
      : local.value <= 0.5
      ? `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-down-fill" viewBox="0 0 16 16">
              <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>
            </svg>
          `
      : `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
            <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
            <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
          </svg>
        `
  );

  return (
    <div class="volumeControl">
      <button
        aria-label={local.isMuted || local.value === 0 ? "unmute" : "mute"}
        class="volumeControl__icon"
        onclick={handleIconClick}
        innerHTML={icon()}
      />
      <ProgressBar
        aria-label="volume"
        isActive={!local.isMuted}
        onChange={local.setVolume}
        value={local.value}
        width="60px"
      />
    </div>
  );
};

const RadioControls = (props) => {
  const defaultProps = {
    isMuted: false,
    listen: noop,
    mute: noop,
    setVolume: noop,
    status: "stopped",
    stop: noop,
    volume: 1,
  };

  const local = mergeProps(defaultProps, props);

  return (
    <div class="metadata__controls">
      <ListenButton
        listen={local.listen}
        status={local.status}
        stop={local.stop}
      />
      <div>
        {!isMobile(window.navigator).any && (
          <VolumeControl
            isMuted={local.isMuted}
            mute={local.mute}
            setVolume={local.setVolume}
            value={local.volume}
          />
        )}
      </div>
    </div>
  );
};

const MediaSession = (props) => {
  onMount(() => {
    setActionHandler("play", props.listen);
    setActionHandler("pause", props.stop);
    setActionHandler("stop", props.stop);
  });

  createEffect(() => {
    setMetadata({
      album: "soulprovidr.fm",
      artist: props.metadata?.artist,
      artwork: [
        { src: props.metadata?.cover, sizes: "400x400", type: "image/jpeg" },
      ],
      title: props.metadata?.title,
    });
  });

  createEffect(() => {
    let playbackState;
    switch (props.status) {
      case "buffering":
      case "playing":
        playbackState = "playing";
        break;
      case "stopped":
        playbackState = "paused";
        break;
    }
    setPlaybackState(playbackState);
  });
};

export const RadioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>();

  const [isMuted, setIsMuted] = useState(false);
  const [status, setStatus] = useState<RadioStatus>("stopped");
  const [volume, persistVolume] = usePersistedState<number>("volume", 1);
  const { error, metadata, mutate } = useMetadata();

  const { current: audio } = audioRef;

  const handleAudioError = () => setStatus("stopped");
  const handleAudioPlaying = () => setStatus("playing");
  const handleAudioPause = () => setStatus("stopped");
  const handleAudioWaiting = () => setStatus("buffering");

  const listen = () => {
    if (audio) {
      audio.load();
      audio.play();
    }
  };

  const mute = () => {
    if (audio) {
      setIsMuted(!audio.muted);
      audio.muted = !audio.muted;
    }
  };

  const setVolume = (volume) => {
    if (audio) {
      audio.volume = volume;
      persistVolume(volume);
    }
  };

  const stop = () => {
    if (audio) {
      audio.pause();
    }
  };

  useEffect(() => {
    window.addEventListener("focus", mutate);
    window.addEventListener("offline", stop);
    setVolume(volume);
  }, []);

  return (
    <RadioContext.Provider
      value={{
        isMuted,
        listen,
        metadata,
        mute,
        setVolume,
        status,
        stop,
        volume,
      }}
    >
      <div className={css.radioPlayer}>
        <RadioCover size={300} />
        <div className={css.status}>
          <div>
            {/* <MarqueeText className="metadata__title">
              {metadata.title}
            </MarqueeText>
            <MarqueeText className="metadata__artist">
              {metadata.artist}
            </MarqueeText> */}
            {metadata && (
              <>
                <div className={css.title}>{metadata.title}</div>
                <div className={css.artist}>{metadata.artist}</div>
              </>
            )}
          </div>
          {/* <RadioProgress /> */}
          {/* <RadioControls
            isMuted={isMuted}
            listen={listen}
            mute={mute}
            setVolume={setVolume}
            status={status}
            stop={stop}
            volume={volume}
          /> */}
        </div>
      </div>
      {/* <MediaSession
          listen={listen}
          metadata={metadata()}
          status={state.status}
          stop={stop}
        /> */}
      <audio
        preload="none"
        ref={audioRef}
        onError={handleAudioError}
        onPause={handleAudioPause}
        onPlaying={handleAudioPlaying}
        onWaiting={handleAudioWaiting}
        src="https://www.radioking.com/play/soulprovidr"
      />
    </RadioContext.Provider>
  );
};
