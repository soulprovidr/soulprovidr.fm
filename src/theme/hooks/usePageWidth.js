import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

export const usePageWidth = (delay = 200) => {
  if (typeof window === 'undefined') {
    return 0;
  }
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  const onResize = throttle(() => {
    setPageWidth(window.innerWidth);
  }, delay);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return pageWidth;
};
