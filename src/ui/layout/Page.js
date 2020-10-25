import React from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import css from '@styled-system/css';

import { Container, Heading } from 'theme';
import { Layout } from '../layout';

const PageContainer = styled(Container)(css({ mt: [5, 0], py: 5 }));

const PageTitle = styled(Heading)(css({ textTransform: 'uppercase' }));

const PageContent = styled('div')(
  css({
    pb: 5,
    pt: 3,
    'a, a:active, a:visited': {
      color: 'accent'
    }
  })
);

const PageMeta = styled('div')(css({ py: 3 }));

const Page = ({ children, title, ...props }) => (
  <Layout>
    <PageContainer {...props}>
      <Helmet title={title} />
      {children}
    </PageContainer>
  </Layout>
);

Page.Container = PageContainer;
Page.Title = PageTitle;
Page.Content = PageContent;
Page.Meta = PageMeta;

export { Page };