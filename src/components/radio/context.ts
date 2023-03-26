import { noop } from "@lib/util";
import { createContext, useContext } from "react";
import { IRadioMetadata, RadioStatus } from "./types";

interface IRadioContext {
  elapsedTime: number;
  error: boolean;
  isMuted: boolean;
  listen: () => void;
  mute: () => void;
  metadata: IRadioMetadata;
  progress: number;
  setVolume: (volume: number) => void;
  status: RadioStatus;
  stop: () => void;
  volume: number;
}

export const RadioContext = createContext<IRadioContext>({
  elapsedTime: 0,
  error: false,
  isMuted: false,
  listen: noop,
  mute: noop,
  metadata: null,
  progress: 0,
  setVolume: noop,
  status: "stopped",
  stop: noop,
  volume: 1,
});

export const useRadioContext = () => useContext(RadioContext);
