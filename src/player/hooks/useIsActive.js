import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getSrc } from '../selectors';

export default (src) => {
  const [isActive, setIsActive] = useState(false);
  const playerSrc = useSelector(getSrc);
  useEffect(() => {
    if (playerSrc && src === playerSrc) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [playerSrc]);
  return isActive;
};
