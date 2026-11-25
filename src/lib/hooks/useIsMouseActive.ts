import { useEffect, useRef, useState } from "react";

export const useIsMouseActive = (inactiveDuration: number = 3000) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const [isMouseActive, setIsMouseActive] = useState<boolean>(false);

  const onMouseMove = () => {
    clearTimeout(timeoutRef.current);
    setIsMouseActive(true);
    timeoutRef.current = setTimeout(() => {
      setIsMouseActive(false);
    }, inactiveDuration);
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove, false);
    return () => {
      clearTimeout(timeoutRef.current);
      document.removeEventListener("mousemove", onMouseMove, false);
    };
  }, []);

  return isMouseActive;
};
