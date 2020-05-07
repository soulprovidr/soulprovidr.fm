import React from 'react';

import Flex from '../layout/Flex';

const Badge = ({ children, ...props }) => (
  <Flex
    alignItems="center"
    bg="grey"
    borderRadius={0}
    color="white"
    fontWeight={600}
    fontSize={1}
    px={2}
    py={1}
    css={{
      textTransform: 'uppercase'
    }}
    {...props}
  >
    {children}
  </Flex>
);

export default Badge;
