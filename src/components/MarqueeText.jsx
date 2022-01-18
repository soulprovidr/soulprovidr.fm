import {
  children,
  createEffect,
  mergeProps,
  onCleanup,
  onMount,
} from "solid-js";
import { Marquee } from "../lib/marquee";

export const MarqueeText = (props) => {
  let cleanup = null;
  let ref = null;

  const local = mergeProps({ class: "marquee" }, props);

  const text = children(() => props.children);

  const initMarquee = () => {
    if (cleanup) {
      cleanup();
    }
    cleanup = Marquee(ref);
  };

  onMount(() => {
    initMarquee();
  });

  createEffect((prev) => {
    if (text() !== prev) {
      initMarquee();
    }
    return text();
  });

  onCleanup(cleanup);

  return (
    <div class={local.class} ref={ref}>
      <div>{text()}</div>
    </div>
  );
};
