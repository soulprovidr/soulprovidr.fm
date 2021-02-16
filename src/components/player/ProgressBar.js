import React, { useEffect, useRef, useState } from 'react';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { useIsMouseOver } from 'modules/common/hooks';

const ProgressBarContainer = styled('div')`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  ${css({ py: [0, 3] })}
`;

const ProgressBarWrapper = styled('div')`
  position: relative;
  width: 100%;
  ${css({
    bg: ['bg', '#ddd'],
    height: [2, 5],
    display: ['block', 'flex'],
    alignItems: 'center'
  })}
`;

const ProgressBar = styled('div')`
  height: 100%;
  pointer-events: none;
  ${css({
    bg: 'accent'
  })}
`;

const scaleIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const ProgressHandle = styled.div`
  ${css({ bg: 'accent', display: ['none', 'block'] })}
  border-radius: 50%;
  margin-left: -6px;
  width: 12px;
  height: 12px;
  pointer-events: none;
  position: absolute;
  animation: ${scaleIn} 100ms ease-in-out;
  animation-fill-mode: backwards;
`;

export default ({
  maxValue = 1,
  onProgressChange = () => null,
  value = 1,
  ...props
}) => {
  const containerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const isMouseOver = useIsMouseOver(containerRef);
  const progressWidth = `${(value / maxValue) * 100}%`;

  /**
   * Update progress value based on mouse position.
   * @param {SyntheticEvent} e
   */
  const handleProgressChange = (e) => {
    if (containerRef.current && onProgressChange) {
      const { left, width } = containerRef.current.getBoundingClientRect();
      let progressValue = (e.pageX - left) / width;
      if (progressValue > maxValue) {
        progressValue = maxValue;
      } else if (progressValue < 0) {
        progressValue = 0;
      }
      onProgressChange(progressValue);
    }
  };

  const onMouseMove = (e) => {
    if (isMouseDown) handleProgressChange(e);
  };

  const onMouseDown = (e) => {
    setIsMouseDown(true);
    handleProgressChange(e);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
  };

  const onMouseUp = (e) => {
    setIsMouseDown(false);
    handleProgressChange(e);
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  };

  useEffect(() => {
    containerRef.current.addEventListener('mousedown', onMouseDown);
  }, [containerRef.current]);

  return (
    <ProgressBarContainer
      {...props}
      onMouseDown={onMouseDown}
      ref={containerRef}
    >
      <ProgressBarWrapper>
        <ProgressBar
          style={{
            width: progressWidth
          }}
        />
        {(isMouseOver || isMouseDown) && (
          <ProgressHandle style={{ left: progressWidth }} />
        )}
      </ProgressBarWrapper>
    </ProgressBarContainer>
  );
};
