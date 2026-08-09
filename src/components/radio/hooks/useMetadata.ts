import { fetchJson } from "@lib/util";
import { useQuery } from "@tanstack/react-query";
import { ELAPSED_FUDGE_TIME } from "../constants";
import { IRadioMetadata } from "../types";

const fetchMetadata = (): Promise<IRadioMetadata> =>
  fetchJson<IRadioMetadata>(
    "https://api.radioking.io/widget/radio/soulprovidr/track/current"
  );

const getRefetchInterval = (metadata?: IRadioMetadata) =>
  metadata
    ? new Date(metadata.nextTrack).getTime() -
      new Date().getTime() +
      ELAPSED_FUDGE_TIME
    : 0;

const toCamelCase = (str: string) =>
  str.replace(/_([a-z])/g, (_, c: string) => c.toUpperCase());

const transformKeysToCamelCase = <T>(obj: any) =>
  Object.keys(obj).reduce(
    (acc, key) => Object.assign(acc, { [toCamelCase(key)]: obj[key] }),
    {}
  ) as T;

export const useMetadata = () =>
  useQuery({
    queryKey: ["metadata"],
    queryFn: fetchMetadata,
    refetchInterval: getRefetchInterval,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: false,
    select: (data): IRadioMetadata => transformKeysToCamelCase(data),
  });
