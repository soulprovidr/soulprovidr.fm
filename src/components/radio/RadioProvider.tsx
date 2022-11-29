import camelCase from "lodash.camelcase";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useMediaSession } from "../../lib/useMediaSession";
import { usePersistedState } from "../../lib/usePersistedState";
import { RadioContext } from "./context";
import { IRadioMetadata, RadioStatus } from "./types";

const getMediaSessionPlaybackState = (status: RadioStatus) => {
  switch (status) {
    case "buffering":
    case "playing":
      return "playing";
    case "stopped":
      return "paused";
  }
};

const useMetadata = () => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const [error, setError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [metadata, setMetadata] = useState<IRadioMetadata>(null);

  const fetchMetadata = async () =>
    (
      await fetch(
        "https://api.radioking.io/widget/radio/soulprovidr/track/current"
      )
    ).json();

  const mutate = async () => {
    setIsFetching(true);
    if (error) {
      setError(false);
    }
    try {
      const rawMetadata = await fetchMetadata();
      const transformedMetadata = Object.keys(await fetchMetadata()).reduce(
        (acc, key) =>
          Object.assign(acc, { [camelCase(key)]: rawMetadata[key] }),
        {}
      );
      setMetadata(transformedMetadata as IRadioMetadata);
      setIsFetching(false);
    } catch {
      setError(true);
      setIsFetching(false);
    }
  };

  if (!metadata && !isFetching) {
    mutate();
  }

  useEffect(() => {
    if (metadata) {
      const ms =
        new Date(metadata.nextTrack).getTime() - new Date().getTime() + 10000;
      timeoutRef.current = setTimeout(mutate, ms);
      return () => {
        clearTimeout(timeoutRef.current);
      };
    }
  }, [metadata]);

  return { error, isLoading: isFetching, metadata: metadata, mutate };
};

const useProgress = () => {
  const { metadata } = useMetadata();

  // This number accounts for drift between the audio stream + the API.
  const ELAPSED_FUDGE_TIME = 10000;

  const [elapsedTime, setElapsedTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const update = useCallback(() => {
    if (metadata) {
      const durationTime = metadata.duration * 1000;
      const newElapsedTime = Math.max(
        Math.min(
          new Date().getTime() -
            new Date(metadata.startedAt).getTime() -
            ELAPSED_FUDGE_TIME,
          durationTime
        ),
        0
      );
      setElapsedTime(newElapsedTime);
      setProgress(Math.max(0, newElapsedTime / durationTime));
    }
  }, [metadata]);

  useEffect(() => {
    update();
    const updateInterval = setInterval(update, 100);
    return () => clearInterval(updateInterval);
  }, [update]);

  return { elapsedTime, progress };
};

export const RadioProvider = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>();

  const [isMuted, setIsMuted] = useState(false);
  const [status, setStatus] = useState<RadioStatus>("stopped");
  const [volume, persistVolume] = usePersistedState<number>("volume", 1);

  const { error, metadata, mutate } = useMetadata();
  const { elapsedTime, progress } = useProgress();

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
    window.addEventListener("focus", mutate);
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
