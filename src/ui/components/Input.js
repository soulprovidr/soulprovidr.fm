import React from 'react';

import { Box } from './Box';

export const Input = (props) => (
  <Box as="input" type="text" py={1} px={2} {...props} />
);
