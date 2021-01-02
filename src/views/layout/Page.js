import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';

import { Box, Container, Heading } from 'theme';
import { Layout, SEO } from './';

const PageContainer = styled(Container)(
  css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    my: [5, 0],
    px: 3,
    py: 5
  })
);

const PageTitle = styled(Heading)(css({ textTransform: 'uppercase' }));

const PageContent = styled(Box)(
  css({
    pb: 5,
    pt: 3
  })
);

const PageMeta = styled('div')(css({ py: 3 }));

const Page = ({
  children,
  title = null,
  description = null,
  image = null,
  slug = '',
  type = null,
  ...props
}) => (
  <Layout>
    <PageContainer {...props}>
      <SEO
        title={title}
        description={description}
        image={image}
        slug={slug}
        type={type}
      />
      {children}
    </PageContainer>
  </Layout>
);

Page.Container = PageContainer;
Page.Title = PageTitle;
Page.Content = PageContent;
Page.Meta = PageMeta;

export { Page };
