import { useEffect, useState } from 'react';

export default function useIsMouseOver(componentRef) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const onMouseOver = () => setIsMouseOver(true);
  const onMouseOut = () => setIsMouseOver(false);
  useEffect(() => {
    if (componentRef.current) {
      const element = componentRef.current;
      element.addEventListener('mouseenter', onMouseOver);
      element.addEventListener('mouseleave', onMouseOut);
      return () => {
        element.removeEventListener('mouseenter', onMouseOver);
        element.removeEventListener('mouseleave', onMouseOut);
      };
    }
  });
  return isMouseOver;
}
