import { useLayoutEffect } from 'react';

import { Marquee } from './marquee';

export const useMarquee = (ref, params) => {
  useLayoutEffect(() => {
    const $node = ref.current;
    if ($node && $node instanceof HTMLElement && $node.children.length === 1) {
      try {
        return new Marquee($node, params);
      } catch (e) {
        console.error(e);
      }
    }
  }, [ref.current, params]);
};
