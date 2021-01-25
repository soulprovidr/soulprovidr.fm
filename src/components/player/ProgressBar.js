import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';

const ProgressBarContainer = styled('div')(
  css({
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  })
);

const ProgressBarWrapper = styled('div')(
  css({
    bg: ['bg', '#ddd'],
    cursor: 'pointer',
    height: [2, 5],
    width: '100%'
  })
);

const StyledProgressBar = styled('div')(
  css({
    bg: 'accent',
    height: '100%',
    transition: 'width 150ms linear'
  })
);

export const ProgressBar = ({ widthPercent, ...props }) => (
  <ProgressBarContainer {...props}>
    <ProgressBarWrapper>
      <StyledProgressBar style={{ width: `${widthPercent}%` }} />
    </ProgressBarWrapper>
  </ProgressBarContainer>
);
