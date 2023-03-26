import { useMediaSession } from "@lib/useMediaSession";
import { usePersistedState } from "@lib/usePersistedState";
import { useEffect, useMemo, useRef, useState } from "react";
import { RadioContext } from "../context";
import { useMetadata } from "../hooks/useMetadata";
import { useProgress } from "../hooks/useProgress";
import { RadioStatus } from "../types";

const getMediaSessionPlaybackState = (status: RadioStatus) => {
  switch (status) {
    case RadioStatus.BUFFERING:
    case RadioStatus.PLAYING:
      return "playing";
    case RadioStatus.STOPPED:
      return "paused";
  }
};

export const RadioProvider = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>();

  const [isMuted, setIsMuted] = useState(false);
  const [status, setStatus] = useState<RadioStatus>(RadioStatus.STOPPED);
  const [volume, persistVolume] = usePersistedState<number>("volume", 1);

  const { error, data: metadata } = useMetadata();
  const { elapsed, progress } = useProgress();

  const { current: audio } = audioRef;

  const handleAudioError = () => setStatus(RadioStatus.STOPPED);
  const handleAudioPlaying = () => setStatus(RadioStatus.PLAYING);
  const handleAudioPause = () => setStatus(RadioStatus.STOPPED);
  const handleAudioWaiting = () => setStatus(RadioStatus.BUFFERING);

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

  const setVolume = (volume: number) => {
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
    window.addEventListener("offline", stop);
    setVolume(volume);
  }, []);

  const mediaSessionActionHandlers = useMemo(
    () => ({
      play: listen,
      pause: stop,
      stop,
    }),
    []
  );

  const mediaSessionMetadata = useMemo(
    () =>
      metadata && {
        album: "soulprovidr.fm",
        artist: metadata.artist,
        artwork: [
          { src: metadata.cover, sizes: "400x400", type: "image/jpeg" },
        ],
        title: metadata.title,
      },
    [metadata]
  );

  const mediaSessionPlaybackState = useMemo(
    () => getMediaSessionPlaybackState(status),
    [status]
  );

  useMediaSession({
    actionHandlers: mediaSessionActionHandlers,
    metadata: mediaSessionMetadata,
    playbackState: mediaSessionPlaybackState,
  });

  return (
    <RadioContext.Provider
      value={{
        elapsed,
        error: !!error,
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
