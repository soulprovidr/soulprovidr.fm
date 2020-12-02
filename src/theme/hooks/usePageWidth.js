import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

export const usePageWidth = (delay = 200) => {
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
