import { mergeProps, onCleanup, onMount } from "solid-js";
import { Marquee } from "../lib/marquee";

export const MarqueeText = (props) => {
  let cleanupFn = null;
  let ref = null;

  const local = mergeProps(
    {
      children: null,
      class: "marquee",
    },
    props
  );

  onMount(() => {
    cleanupFn = Marquee(ref);
  });

  onCleanup(cleanupFn);

  return (
    <div class={local.class} ref={ref}>
      <div>{local.children}</div>
    </div>
  );
};
