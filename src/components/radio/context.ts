import { noop } from "@lib/util";
import { createContext, useContext } from "react";
import { IRadioMetadata, RadioStatus } from "./types";

interface IRadioContext {
  /** The elapsed time in milliseconds. */
  elapsed: number;

  /** Whether there was an error fetching the metadata. */
  error: boolean;

  /** Whether the radio is muted. */
  isMuted: boolean;

  /** Start listening to the radio. */
  listen: () => void;

  /** Mute the radio. */
  mute: () => void;

  /** The current metadata. */
  metadata: IRadioMetadata;

  /** A value between 0 and 1 representing the progress of the current track. */
  progress: number;

  /** Set the volume of the radio. */
  setVolume: (volume: number) => void;

  /** The current status of the radio. */
  status: RadioStatus;

  /** Stop listening to the radio. */
  stop: () => void;

  /** The volume of the radio. */
  volume: number;
}

export const RadioContext = createContext<IRadioContext>({
  elapsed: 0,
  error: false,
  isMuted: false,
  listen: noop,
  mute: noop,
  metadata: null,
  progress: 0,
  setVolume: noop,
  status: RadioStatus.STOPPED,
  stop: noop,
  volume: 1,
});

export const useRadioContext = () => useContext(RadioContext);
