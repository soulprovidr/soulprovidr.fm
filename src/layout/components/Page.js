import React from 'react';
import Helmet from 'react-helmet';

import { Box, Container, Heading } from '@/ui';

const PageTitle = ({ children }) => <Box pb={3}>{children}</Box>;

const PageContent = ({ children }) => <Box pb={3}>{children}</Box>;

export const Page = ({ children, image, title, titleContent }) => (
  <Container as="main">
    <Helmet title={title} />
    <Box my={5}>
      <PageTitle>
        {titleContent || (
          <Heading as="h2" sx={{ textTransform: 'uppercase' }}>
            {title}
          </Heading>
        )}
      </PageTitle>
      <PageContent>{children}</PageContent>
    </Box>
  </Container>
);
