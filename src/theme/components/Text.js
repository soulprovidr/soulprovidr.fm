import React from 'react';

import { Box } from './Box';

export const Text = (props) => (
  <Box as="p" color="textPrimary" lineHeight="1.5" pb={3} {...props} />
);
