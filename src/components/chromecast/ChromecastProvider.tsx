import { RadioStatus } from "@components/radio";
import { RadioContext } from "@components/radio/context";
import { useMetadata } from "@components/radio/hooks/useMetadata";
import { useProgress } from "@components/radio/hooks/useProgress";
import { createElement, useEffect, useState } from "react";

declare global {
  interface Window {
    cast: any;
  }
}

export const ChromecastProvider = ({ children }) => {
  const { error, data: metadata } = useMetadata();
  const { elapsed, progress } = useProgress();

  const [status, setStatus] = useState<RadioStatus>(RadioStatus.STOPPED);

  useEffect(() => {
    const context = window.cast.framework.CastReceiverContext.getInstance();
    const playerManager = context.getPlayerManager();

    playerManager.addEventListener(
      window.cast.framework.events.EventType.MEDIA_STATUS,
      (event) => {
        switch (event.mediaStatus.playerState) {
          case window.cast.framework.messages.PlayerState.IDLE:
          case window.cast.framework.messages.PlayerState.PAUSED:
            setStatus(RadioStatus.STOPPED);
            break;
          case window.cast.framework.messages.PlayerState.PLAYING:
            setStatus(RadioStatus.PLAYING);
            break;
          case window.cast.framework.messages.PlayerState.BUFFERING:
            setStatus(RadioStatus.BUFFERING);
            break;
        }
      }
    );

    /*
     * Configure the CastReceiverOptions.
     */
    const castReceiverOptions = new window.cast.framework.CastReceiverOptions();

    /*
     * Set the player configuration.
     */
    const playbackConfig = new window.cast.framework.PlaybackConfig();
    playbackConfig.autoResumeDuration = 5;
    castReceiverOptions.playbackConfig = playbackConfig;

    /*
     * Set the SupportedMediaCommands.
     */
    castReceiverOptions.supportedCommands =
      window.cast.framework.messages.Command.STREAM_VOLUME |
      window.cast.framework.messages.Command.STREAM_MUTE;

    context.start(castReceiverOptions);
  }, []);

  return (
    <RadioContext.Provider
      value={{
        elapsed,
        error: !!error,
        isMuted: false,
        listen: () => {},
        metadata,
        mute: () => {},
        progress,
        setVolume: () => {},
        status,
        stop: () => {},
        volume: 1,
      }}
    >
      {children}
      {createElement("cast-media-player", { style: { display: "none" } })}
    </RadioContext.Provider>
  );
};
