import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePersistedState } from "../../lib/usePersistedState";
import { noop } from "../../lib/util";
import { useRadioMetadata } from "./hooks";
import { IRadioMetadata, RadioStatus } from "./types";

const ELAPSED_FUDGE_TIME = 10000;

export interface IRadioContext {
  elapsedTime: number;
  error: boolean;
  isMuted: boolean;
  listen: () => void;
  mute: () => void;
  metadata: IRadioMetadata;
  progress: number;
  setVolume: (volume: number) => void;
  status: RadioStatus;
  stop: () => void;
  volume: number;
}

export const RadioContext = createContext<IRadioContext>({
  elapsedTime: 0,
  error: false,
  isMuted: false,
  listen: noop,
  mute: noop,
  metadata: null,
  progress: 0,
  setVolume: noop,
  status: "stopped",
  stop: noop,
  volume: 1,
});

export const useRadioContext = () => useContext(RadioContext);

export const RadioProvider = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>();

  const [elapsedTime, setElapsedTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<RadioStatus>("stopped");
  const [volume, persistVolume] = usePersistedState<number>("volume", 1);
  const { error, metadata, mutate } = useRadioMetadata();

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

  const update = useCallback(() => {
    if (metadata) {
      const durationTime = metadata.duration * 1000;
      const newElapsed = Math.max(
        Math.min(
          new Date().getTime() -
            new Date(metadata.startedAt).getTime() -
            ELAPSED_FUDGE_TIME,
          durationTime
        ),
        0
      );
      setElapsedTime(newElapsed);
      setProgress(Math.max(0, newElapsed / durationTime));
    }
  }, [metadata]);

  useEffect(() => {
    window.addEventListener("focus", mutate);
    window.addEventListener("offline", stop);
    setVolume(volume);
  }, []);

  useEffect(() => {
    update();
    const interval = setInterval(update, 100);
    return () => clearInterval(interval);
  }, [update]);

  return (
    <RadioContext.Provider
      value={{
        elapsedTime,
        error,
        isMuted,
        listen,
        metadata,
        mute,
        progress,
        setVolume,
        status,
        stop,
        volume,
      }}
    >
      {children}
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
