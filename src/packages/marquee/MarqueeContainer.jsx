import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';
import isEqual from 'lodash.isequal';
import { useMarquee } from './useMarquee';

const StyledMarquee = styled('div')({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  width: '100%'
});

export const MarqueeContainer = ({
  children,
  duration = 20,
  gradientColor = 'white',
  gradientSize = 30,
  ...props
}) => {
  const ref = useRef(null);
  const [params, setParams] = useState({
    duration,
    gradientColor,
    gradientSize
  });

  // Create marquee using current ref.
  useMarquee(ref, params);

  useEffect(() => {
    const nextParams = { duration, gradientColor, gradientSize };
    if (!isEqual(params, nextParams)) {
      setParams({ duration, gradientColor, gradientSize });
    }
  }, [duration, gradientColor, gradientSize]);

  // Re-create Marquee when children or params change.
  return useMemo(
    () => (
      <StyledMarquee ref={ref} key={Date.now()} {...props}>
        {children}
      </StyledMarquee>
    ),
    [children, params]
  );
};
