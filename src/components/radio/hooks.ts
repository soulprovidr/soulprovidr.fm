import camelCase from "lodash.camelcase";
import { useEffect, useRef, useState } from "react";
import { IRadioMetadata } from "./types";

const fetchRadioMetadata = async () =>
  (
    await fetch(
      "https://api.radioking.io/widget/radio/soulprovidr/track/current"
    )
  ).json();

export const useRadioMetadata = () => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const [error, setError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [radioMetadata, setRadioMetadata] = useState<IRadioMetadata>(null);

  const mutate = async () => {
    setIsFetching(true);
    if (error) {
      setError(false);
    }
    try {
      const rawRadioMetadata = await fetchRadioMetadata();
      const translatedRadioMetadata = Object.keys(
        await fetchRadioMetadata()
      ).reduce(
        (acc, key) =>
          Object.assign(acc, { [camelCase(key)]: rawRadioMetadata[key] }),
        {}
      );
      setRadioMetadata(translatedRadioMetadata as IRadioMetadata);
      setIsFetching(false);
    } catch {
      setError(true);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    mutate();
  }, []);

  useEffect(() => {
    if (radioMetadata) {
      const ms =
        new Date(radioMetadata.nextTrack).getTime() -
        new Date().getTime() +
        10000;
      timeoutRef.current = setTimeout(mutate, ms);
      return () => {
        clearTimeout(timeoutRef.current);
      };
    }
  }, [radioMetadata]);

  return { error, isLoading: isFetching, metadata: radioMetadata, mutate };
};
