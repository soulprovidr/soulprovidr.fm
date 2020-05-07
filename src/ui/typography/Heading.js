import React from 'react';

import Box from '../layout/Box';

const Heading = (props) => <Box as={props.as} {...props} />;

Heading.defaultProps = {
  as: 'h1'
};

export default Heading;
