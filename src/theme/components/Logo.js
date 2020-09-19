import React from 'react';

import LogoImage from 'ui/static/images/logo.svg';
import { Box } from './Box';

export const Logo = ({ size = 45, ...props }) => (
  <Box
    as="img"
    src={LogoImage}
    borderRadius="50%"
    display="inline-block"
    verticalAlign="middle"
    width={size}
    height={size}
    {...props}
  />
);
