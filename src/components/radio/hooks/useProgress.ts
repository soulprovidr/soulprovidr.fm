import { useCallback, useEffect, useState } from "react";
import { useMetadata } from "./useMetadata";

export const useProgress = () => {
  const { data: metadata } = useMetadata();

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
