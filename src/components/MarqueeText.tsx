import { HTMLAttributes, useCallback, useRef } from "react";
import { Marquee } from "../lib/marquee";
import { noop } from "../lib/util";

interface MarqueeTextProps extends HTMLAttributes<HTMLDivElement> {}

export const MarqueeText = ({
  children,
  className = "marquee",
}: MarqueeTextProps) => {
  const cleanupRef = useRef<Function>(noop);

  const marqueeRef = useCallback(
    (node: HTMLElement) => {
      cleanupRef.current();
      cleanupRef.current = Marquee(node, {});
    },
    [children]
  );

  return (
    <div className={className} ref={marqueeRef}>
      <div>{children}</div>
    </div>
  );
};
