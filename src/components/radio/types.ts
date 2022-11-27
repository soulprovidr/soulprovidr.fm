export type RadioStatus = "stopped" | "buffering" | "playing";

export interface IRadioMetadata {
  album: string;
  artist: string;
  buyLink: string;
  cover: string;
  defaultCover: boolean;
  duration: number;
  endAt: string;
  forcedTitle: boolean;
  id: number;
  isLive: boolean;
  nextTrack: string;
  startedAt: string;
  title: string;
}
