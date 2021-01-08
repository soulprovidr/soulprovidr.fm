import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import isEqual from 'lodash.isequal';
import { useMarquee } from './useMarquee';

const StyledMarquee = styled.div`
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  width: 100%;
  &::after {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      ${themeGet('colors.bg')} 20%,
      ${themeGet('colors.bg')} 100%
    );
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: ${(props) => props.offset}px;
  }
`;

export const MarqueeContainer = ({
  children,
  duration = 20,
  offset = 30,
  ...props
}) => {
  const ref = useRef(null);
  const [params, setParams] = useState({
    duration,
    offset
  });

  useEffect(() => {
    const nextParams = { duration, offset };
    if (!isEqual(params, nextParams)) {
      setParams({
        duration,
        offset
      });
    }
  }, [duration, offset]);

  // Re-create Marquee when children or params change.
  const memoizedComponent = useMemo(
    () => (
      <StyledMarquee ref={ref} key={Date.now()} offset={offset} {...props}>
        {children}
      </StyledMarquee>
    ),
    [children, params]
  );

  // Create marquee using current ref.
  useMarquee(ref, params);

  return memoizedComponent;
};
