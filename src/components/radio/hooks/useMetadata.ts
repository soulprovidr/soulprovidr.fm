import { fetchJSON } from "@lib/fetch";
import camelCase from "lodash.camelcase";
import useSWR, { SWRHook } from "swr";
import { IRadioMetadata } from "../types";

const transformKeysToCamelCase = (obj: any) =>
  Object.keys(obj).reduce(
    (acc, key) => Object.assign(acc, { [camelCase(key)]: obj[key] }),
    {}
  );

const transformKeysToCamelCaseMiddleware =
  (useSWRNext: SWRHook) => (key, fetcher, config) => {
    const newFetcher = (key) => fetcher(key).then(transformKeysToCamelCase);
    return useSWRNext(key, newFetcher, config);
  };

export const useMetadata = () => {
  const res = useSWR<IRadioMetadata>(
    "https://api.radioking.io/widget/radio/soulprovidr/track/current",
    fetchJSON,
    { refreshInterval: 10000, use: [transformKeysToCamelCaseMiddleware] }
  );

  // useEffect(() => {
  //   if (metadata) {
  //     const ms =
  //       new Date(metadata.nextTrack).getTime() - new Date().getTime() + 10000;
  //     timeoutRef.current = setTimeout(mutate, ms);
  //     return () => {
  //       clearTimeout(timeoutRef.current);
  //     };
  //   }
  // }, [metadata]);

  return res;
};
