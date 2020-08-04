import React from 'react';

import { Flex } from './Flex';

export const Badge = ({ children, sx = {}, ...props }) => (
  <Flex
    sx={{
      alignItems: 'center',
      bg: 'grey',
      borderRadius: 0,
      color: 'white',
      fontWeight: 600,
      fontSize: 1,
      px: 2,
      py: 1,
      textTransform: 'uppercase',
      ...sx
    }}
    {...props}
  >
    {children}
  </Flex>
);
