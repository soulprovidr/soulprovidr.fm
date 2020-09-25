import React from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import css from '@styled-system/css';

import { Container, Heading } from 'theme';

const PageContainer = styled('div')(css({ mt: [5, 0], py: 5 }));

const PageTitle = styled(Heading)(css({ textTransform: 'uppercase' }));

const PageContent = styled('div')(
  css({
    pb: 5,
    pt: 3
  })
);

const PageMeta = styled('div')(css({ py: 3 }));

const Page = ({ children, title, ...props }) => (
  <PageContainer {...props}>
    <Container as="main">
      <Helmet title={title} />
      {children}
    </Container>
  </PageContainer>
);

Page.Container = PageContainer;
Page.Title = PageTitle;
Page.Content = PageContent;
Page.Meta = PageMeta;

export { Page };
