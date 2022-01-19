import { createSignal, mergeProps, splitProps } from "solid-js";
import { noop } from "../lib/util";

const defaultProps = {
  onload: noop,
};

export const LazyImage = (props) => {
  const [local, others] = splitProps(mergeProps(defaultProps, props), [
    "onload",
  ]);

  const [isLoaded, setIsLoaded] = createSignal(false);

  return (
    <img
      classList={{
        lazyImage: true,
        isVisible: isLoaded(),
      }}
      onload={() => {
        setIsLoaded(true);
        local.onload();
      }}
      {...others}
    />
  );
};
