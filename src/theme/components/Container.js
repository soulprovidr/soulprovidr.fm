import React from 'react';
import { Box } from './Box';

export const Container = (props) => (
  <Box mx="auto" p={2} maxWidth={[540, 720, 960, 1140]} {...props} />
);
