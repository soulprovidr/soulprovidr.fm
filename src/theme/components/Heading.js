import React from 'react';

import { Text } from './Text';

export const Heading = (props) => (
  <Text as={props.as} lineHeight="1.25" pb={3} {...props} />
);

Heading.defaultProps = {
  as: 'h1'
};
