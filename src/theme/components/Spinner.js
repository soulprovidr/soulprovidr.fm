import React from 'react';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import css from '@styled-system/css';

const spin = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`;

const StyledSpinner = styled('div')(({ color = 'textSecondary', size = 45 }) =>
  css({
    animation: `${spin} .75s linear infinite`,
    borderSize: size < 45 ? '2px' : '4px',
    borderStyle: 'solid',
    borderColor: color,
    borderRightColor: 'transparent',
    borderRadius: '50%',
    height: size,
    width: size
  })
);

export const Spinner = (props) => <StyledSpinner role="status" {...props} />;
