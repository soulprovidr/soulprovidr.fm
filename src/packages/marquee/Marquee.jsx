import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { useMarquee } from './useMarquee';

const StyledMarquee = styled('div')({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  width: '100%'
});

export const Marquee = ({
  children,
  duration = 20,
  gradientColor = 'white',
  gradientSize = 30,
  ...props
}) => {
  const containerRef = useRef(null);
  const [params, setParams] = useState({
    duration,
    gradientColor,
    gradientSize
  });

  // Create marquee.
  useMarquee(containerRef, params);

  // Re-create marquee when one of the marquee params is updated.
  useEffect(() => {
    setParams({ duration, gradientColor, gradientSize });
  }, [duration, gradientColor, gradientSize]);

  return useMemo(
    () => (
      <StyledMarquee ref={containerRef} {...props}>
        {children}
      </StyledMarquee>
    ),
    [children, params]
  );
};
