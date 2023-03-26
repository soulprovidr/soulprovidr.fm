import { useInterval } from "@lib/useInterval";
import { useCallback, useState } from "react";
import { ELAPSED_FUDGE_TIME } from "../constants";
import { useMetadata } from "./useMetadata";

export const useProgress = () => {
  const { data: metadata } = useMetadata();

  const [elapsed, setElapsed] = useState(0);
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    if (metadata) {
      const duration = metadata.duration * 1000;
      const newElapsed = Math.max(
        Math.min(
          new Date().getTime() -
            new Date(metadata.startedAt).getTime() -
            ELAPSED_FUDGE_TIME,
          duration
        ),
        0
      );
      setElapsed(newElapsed);
      setProgress(Math.max(0, newElapsed / duration));
    }
  }, [metadata]);

  useInterval(updateProgress, 100);

  return { elapsed, progress };
};
