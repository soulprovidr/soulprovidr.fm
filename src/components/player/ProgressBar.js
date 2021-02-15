import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';

const ProgressBarContainer = styled('div')`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  ${css({ py: 3 })}
`;

const ProgressBarWrapper = styled('div')`
  width: 100%;
  ${css({
    bg: ['bg', '#ddd'],
    height: [2, 5]
  })}
`;

const ProgressBar = styled('div')`
  height: 100%;
  pointer-events: none;
  transition: width 150ms linear;
  ${css({ bg: 'accent' })}
`;

export default ({
  maxValue = 1,
  onProgressChange = () => null,
  value = 1,
  ...props
}) => {
  return (
    <ProgressBarContainer
      {...props}
      onClick={
        // Pass progress value corresponding to click position.
        (e) => {
          if (onProgressChange) {
            const { target } = e;
            const { left, width } = target.getBoundingClientRect();
            const progressValue = ((e.pageX - left) / width) * 10;
            const roundedProgressValue = Math.round(progressValue) / 10;
            onProgressChange(roundedProgressValue);
          }
        }
      }
    >
      <ProgressBarWrapper>
        <ProgressBar
          style={{
            width: `${(value / maxValue) * 100}%`
          }}
        />
      </ProgressBarWrapper>
    </ProgressBarContainer>
  );
};
