import { createEffect, createSignal } from "solid-js";

export const LazyImage = (props) => {
  const [isLoaded, setIsLoaded] = createSignal(false);
  createEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = props.src;
  });
  return (
    <img
      alt={props.alt}
      class={props.class}
      classList={{
        hidden: !isLoaded(),
        visible: isLoaded(),
      }}
      src={props.src}
      height={props.height}
    />
  );
};
