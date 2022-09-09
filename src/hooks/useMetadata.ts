import { useEffect, useRef, useState } from "react";
import { IRadioMetadata } from "../types";

const fetchMetadata = async () =>
  (
    await fetch(
      "https://api.radioking.io/widget/radio/soulprovidr/track/current"
    )
  ).json();

export const useMetadata = () => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const [error, setError] = useState<Error>(null);
  const [metadata, setMetadata] = useState<IRadioMetadata>(null);

  const mutate = async () => {
    if (error) {
      setError(null);
    }
    try {
      setMetadata(await fetchMetadata());
    } catch {
      setError(new Error("Problem fetching metadata."));
    }
  };

  useEffect(() => {
    mutate();
  }, []);

  useEffect(() => {
    if (metadata) {
      const ms =
        new Date(metadata.next_track).getTime() - new Date().getTime() + 10000;
      timeoutRef.current = setTimeout(mutate, ms);
      return () => {
        clearTimeout(timeoutRef.current);
      };
    }
  }, [metadata]);

  return { error, metadata, mutate };
};
