import isEqual from "lodash.isequal";
import {
  ComponentPropsWithoutRef,
  createElement,
  ElementType,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import css from "./MarqueeText.module.scss";

function generateIdentifier() {
  return Math.random().toString(36).substring(7);
}

interface IUseMarqueeParams {
  duration: number;
  gradientWidth: number;
}

export const useMarquee = (
  node: HTMLElement,
  children: ReactNode,
  params?: IUseMarqueeParams
) => {
  const containerRef = useRef<HTMLDivElement>();
  const stylesheetRef = useRef<HTMLStyleElement>();

  const { duration = 20, gradientWidth = 30 } = params || {};

  const createContainer = () => {
    const container = document.createElement("div");
    container.className = `marquee-${generateIdentifier()}`;
    container.style.overflow = "hidden";
    container.style.whiteSpace = "nowrap";
    node.parentElement.insertBefore(container, node);
    container.appendChild(node);
    containerRef.current = container;
  };

  const createStylesheet = () => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    const scrollDistance = node.scrollWidth - container.clientWidth;
    if (scrollDistance <= 0) {
      return;
    }
    const className = container.className;
    container.classList.add(css.overflowing);
    container.style.setProperty(
      "--marquee-gradient-width",
      `${gradientWidth}px`
    );
    const keyframes = `keyframes-${generateIdentifier()}`;
    const stylesheet = document.createElement("style");
    stylesheet.textContent = `
        @keyframes ${keyframes} {
          10% {
            transform: translateX(0);
          }
          40%,
          60% {
            transform: translateX(-${scrollDistance + gradientWidth}px);
          }
          90%{
            transform: translateX(0);
          }
        }
        .${className} > * {
          animation: ${keyframes} ${duration}s linear 3s infinite alternate;
        }
      `;
    document.head.appendChild(stylesheet);
    stylesheetRef.current = stylesheet;
  };

  const destroyContainer = () => {
    if (containerRef.current) {
      // Put the node back where the container was, so sibling order is kept.
      containerRef.current.replaceWith(node);
      containerRef.current = null;
    }
  };

  const destroyStylesheet = () => {
    if (stylesheetRef.current) {
      document.head.removeChild(stylesheetRef.current);
      stylesheetRef.current = null;
    }
  };

  useEffect(() => {
    if (node) {
      createContainer();
      createStylesheet();
    }
    return () => {
      destroyContainer();
      destroyStylesheet();
    };
  }, [children, node, params]);
};

interface IMarqueeTextProps<T extends ElementType> {
  as?: T;
  className: string;
}

/**
 * Creates a Spotify-like marquee for a given node.
 * If the provided node has hidden overflow content, scroll the hidden content into view.
 * If the provided node's content fits without overflow, don't do anything.
 */
export const MarqueeText = <T extends ElementType>({
  as,
  children,
  className = "marquee",
  ...rest
}: IMarqueeTextProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof IMarqueeTextProps<T>>) => {
  const ref = useRef<HTMLElement>();
  const [currChildren, setCurrChildren] = useState(children);
  if (!isEqual(currChildren, children)) {
    setCurrChildren(children);
  }
  useMarquee(ref.current, currChildren);
  return createElement(as || "div", { className, ref, ...rest }, currChildren);
};
