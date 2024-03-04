import { useMediaSession } from "@lib/hooks/useMediaSession";
import { usePersistedState } from "@lib/hooks/usePersistedState";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

export const WebRadioProvider = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>();

  const [isMuted, setIsMuted] = useState(false);
  const [status, setStatus] = useState<RadioStatus>(RadioStatus.STOPPED);
  const [volume, persistVolume] = usePersistedState<number>("volume", 1);

  const { error, data: metadata, refetch: refetchMetadata } = useMetadata();
  const { elapsed, progress } = useProgress();

  const { current: audio } = audioRef;

  const handleAudioError = () => setStatus(RadioStatus.STOPPED);
  const handleAudioPlaying = () => setStatus(RadioStatus.PLAYING);
  const handleAudioPause = () => setStatus(RadioStatus.STOPPED);
  const handleAudioWaiting = () => setStatus(RadioStatus.BUFFERING);
  const handleFocus = useCallback(() => {
    // Refresh the metadata when the user returns to the page, if the current track has finished playing.
    if (progress >= 1) {
      refetchMetadata();
    }
  }, [progress]);

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
    // Set initial volume (based on persisted value).
    setVolume(volume);
  }, []);

  useEffect(() => {
    window.addEventListener("offline", stop);
    window.addEventListener("focus", handleFocus);
    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, [handleFocus]);

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
