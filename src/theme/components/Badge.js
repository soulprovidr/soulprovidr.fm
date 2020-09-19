import React from 'react';

import { Flex } from './Flex';

export const Badge = ({
  bg = 'grey',
  children,
  color = 'white',
  sx = {},
  ...props
}) => (
  <Flex
    sx={{
      alignItems: 'center',
      bg,
      borderRadius: 0,
      color,
      fontFamily: 'heading',
      fontSize: 1,
      fontWeight: 'bold',
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
