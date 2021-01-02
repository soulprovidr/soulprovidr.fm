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

const StyledSpinner = styled('div')(({ color = 'text.secondary', size = 45 }) =>
  css({
    animation: `${spin} .75s linear infinite`,
    borderStyle: 'solid',
    borderWidth: size < 45 ? '2px' : '4px',
    borderColor: color,
    borderRightColor: 'transparent',
    borderRadius: '50%',
    height: size,
    width: size
  })
);

export const Spinner = (props) => <StyledSpinner role="status" {...props} />;
