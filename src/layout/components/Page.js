import React from 'react';
import Helmet from 'react-helmet';

import { Box, Container, Heading } from '@/ui';

export const Page = ({ children, image, title, titleContent }) => (
  <Container as="main">
    <Helmet title={title} />
    <Box width={[1]} my={5}>
      {titleContent || (
        <Heading as="h2" sx={{ mb: 5, textTransform: 'uppercase' }}>
          {title}
        </Heading>
      )}
      {children}
    </Box>
  </Container>
);
