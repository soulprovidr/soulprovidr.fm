import { createEffect, createSignal, mergeProps } from "solid-js";
import { noop } from "../lib/util";

export const LazyImage = (props) => {
  const defaultProps = {
    alt: "",
    class: undefined,
    height: 0,
    onload: noop,
    ref: null,
    src: null,
  };
  const local = mergeProps(defaultProps, props);

  const [isLoaded, setIsLoaded] = createSignal(false);

  createEffect(() => {
    if (local.src) {
      const img = new Image();
      img.onload = () => {
        setIsLoaded(true);
        local.onload();
      };
      img.src = local.src;
    }
  });

  return (
    <img
      alt={local.alt}
      class={local.class}
      classList={{
        visible: isLoaded(),
      }}
      ref={local.ref}
      src={local.src}
    />
  );
};
