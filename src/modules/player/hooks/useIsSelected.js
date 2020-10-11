import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectPlayerSrc } from '../selectors';

export const useIsSelected = (src) => {
  const [isSelected, setisSelected] = useState(false);
  const playerSrc = useSelector(selectPlayerSrc);
  useEffect(() => {
    if (playerSrc && src === playerSrc) {
      setisSelected(true);
    } else {
      setisSelected(false);
    }
  }, [playerSrc]);
  return isSelected;
};
