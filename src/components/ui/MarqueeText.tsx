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

function generateIdentifier() {
  return Math.random().toString(36).substring(7);
}

interface IUseMarqueeParams {
  duration: number;
  gradientColor: string;
  gradientWidth: number;
}

export const useMarquee = (
  node: HTMLElement,
  children: ReactNode,
  params?: IUseMarqueeParams
) => {
  const containerRef = useRef<HTMLDivElement>();
  const stylesheetRef = useRef<HTMLStyleElement>();

  const {
    duration = 20,
    gradientColor = "white",
    gradientWidth = 30,
  } = params || {};

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
    const scrollDistance = node.scrollWidth - containerRef.current.clientWidth;
    if (scrollDistance <= 0) {
      return;
    }
    const className = containerRef.current.className;
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
        .${className} {
          position: relative;
        }
        .${className}::after {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: ${gradientWidth}px;
          transition: background 200ms ease-in-out;
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, ${gradientColor} 20%, ${gradientColor} 100%);
          content: ' ';
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
      const parentElement = containerRef.current.parentElement;
      parentElement.removeChild(containerRef.current);
      parentElement.appendChild(node);
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
