import React from 'react';

import { Box } from './Box';

export const Heading = (props) => <Box as={props.as} {...props} />;

Heading.defaultProps = {
  as: 'h1'
};
