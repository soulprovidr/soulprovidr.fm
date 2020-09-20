import React from 'react';

import { Box } from './Box';
import styled from '@emotion/styled';
import { space } from 'styled-system';
import css from '@styled-system/css';

export const Text = styled('p')(
  space,
  ({ color = 'textPrimary', lineHeight = '1.5' }) =>
    css({
      color,
      lineHeight,
      m: 0,
      pb: 3
    })
);

// export const Text = (props) => (
//   <Box as="p" color="textPrimary" lineHeight="1.5" pb={3} {...props} />
// );
