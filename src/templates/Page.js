import React from 'react';
import Helmet from 'react-helmet';

import { Box, Container, Heading } from '@/theme';

const PageContainer = ({ children, title }) => (
  <Container as="main">
    <Helmet title={title} />
    <Box py={5}>{children}</Box>
  </Container>
);

const PageTitle = ({ children }) => (
  <Box pb={3}>
    <Heading as="h2" sx={{ textTransform: 'uppercase' }}>
      {children}
    </Heading>
  </Box>
);

const PageContent = ({ children }) => (
  <Box pt={3} pb={5}>
    {children}
  </Box>
);

const PageMeta = ({ children }) => <Box py={3}>{children}</Box>;

export const Page = {
  Container: PageContainer,
  Title: PageTitle,
  Content: PageContent,
  Meta: PageMeta
};
