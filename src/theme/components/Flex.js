import React from 'react';
import { Box } from './Box';

export const Flex = React.forwardRef((props, ref) => (
  <Box {...props} display="flex" ref={ref} />
));
