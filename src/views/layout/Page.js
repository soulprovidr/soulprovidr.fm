import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';

import { Container, Heading } from 'theme';
import { Layout, Meta } from './';

const PageContainer = styled(Container)(
  css({ pb: ['61px', 5], pt: ['53px', 5] })
);

const PageTitle = styled(Heading)(css({ textTransform: 'uppercase' }));

const PageContent = styled('div')(
  css({
    pb: [2, 5],
    pt: [2, 3],
    'a, a:active, a:visited': {
      color: 'accent'
    }
  })
);

const PageMeta = styled('div')(css({ py: 3 }));

const Page = ({ children, title, description, ...props }) => (
  <Layout>
    <PageContainer {...props}>
      <Meta title={title} description={description} />
      {children}
    </PageContainer>
  </Layout>
);

Page.Container = PageContainer;
Page.Title = PageTitle;
Page.Content = PageContent;
Page.Meta = PageMeta;

export { Page };
