import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectPlayerSrc } from '../selectors';

export default (src) => {
  const [isActive, setIsActive] = useState(false);
  const playerSrc = useSelector(selectPlayerSrc);
  useEffect(() => {
    if (playerSrc && src === playerSrc) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [playerSrc]);
  return isActive;
};
