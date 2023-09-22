import { RadioStatus } from "@components/radio";
import { RadioContext } from "@components/radio/context";
import { useMetadata } from "@components/radio/hooks/useMetadata";
import { useProgress } from "@components/radio/hooks/useProgress";
import { createElement, useEffect } from "react";

declare global {
  interface Window {
    cast: any;
  }
}

export const ChromecastProvider = ({ children }) => {
  const { error, data: metadata } = useMetadata();
  const { elapsed, progress } = useProgress();

  useEffect(() => {
    /*
     * Convenience variables to access the CastReceiverContext and PlayerManager.
     */
    const context = window.cast.framework.CastReceiverContext.getInstance();
    const playerManager = context.getPlayerManager();

    const castDebugLogger = window.cast.debug.CastDebugLogger.getInstance();
    const LOG_RECEIVER_TAG = "Receiver";

    /*
     * Example of how to listen for events on playerManager.
     */
    playerManager.addEventListener(
      window.cast.framework.events.EventType.ERROR,
      (event) => {
        castDebugLogger.error(
          LOG_RECEIVER_TAG,
          "Detailed Error Code - " + event.detailedErrorCode
        );
        if (event && event.detailedErrorCode == 905) {
          castDebugLogger.error(
            LOG_RECEIVER_TAG,
            "LOAD_FAILED: Verify the load request is set up " +
              "properly and the media is able to play."
          );
        }
      }
    );

    /*
     * Intercept the LOAD request to load and set the contentUrl.
     */
    playerManager.setMessageInterceptor(
      window.cast.framework.messages.MessageType.LOAD,
      (loadRequestData) => {
        castDebugLogger.debug(
          LOG_RECEIVER_TAG,
          `loadRequestData: ${JSON.stringify(loadRequestData)}`
        );

        // If the loadRequestData is incomplete, return an error message.
        if (!loadRequestData || !loadRequestData.media) {
          const error = new window.cast.framework.messages.ErrorData(
            window.cast.framework.messages.ErrorType.LOAD_FAILED
          );
          error.reason =
            window.cast.framework.messages.ErrorReason.INVALID_REQUEST;
          return error;
        }

        return loadRequestData;
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
      window.cast.framework.messages.Command.ALL_BASIC_MEDIA |
      window.cast.framework.messages.Command.QUEUE_PREV |
      window.cast.framework.messages.Command.QUEUE_NEXT |
      window.cast.framework.messages.Command.STREAM_TRANSFER;

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
        status: RadioStatus.PLAYING,
        stop: () => {},
        volume: 1,
      }}
    >
      {children}
      {createElement("cast-media-player", { style: { display: "none" } })}
    </RadioContext.Provider>
  );
};
