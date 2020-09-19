import React from 'react';

import { Box } from './Box';

export const Text = (props) => (
  <Box as="p" color="textPrimary" mb={2} {...props} />
);
