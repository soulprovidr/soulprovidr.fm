import { RadioStatus } from "@components/radio";
import { RadioContext } from "@components/radio/context";
import { useMetadata } from "@components/radio/hooks/useMetadata";
import { useProgress } from "@components/radio/hooks/useProgress";

export const ChromecastProvider = ({ children }) => {
  const { error, data: metadata } = useMetadata();
  const { elapsed, progress } = useProgress();
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
        status: RadioStatus.STOPPED,
        stop: () => {},
        volume: 1,
      }}
    >
      {children}
    </RadioContext.Provider>
  );
};
