import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-css';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Global, css as emotionCss } from '@emotion/core';
import { Box, Breakpoints, Heading, Flex, usePageWidth } from 'theme';

import RadioCard from '../components/RadioCard';
import ArticleCard from '../components/ArticleCard';
import LiveIcon from '../components/LiveIcon';
import { CTABanner } from '../subscribe';
import { Page } from '../layout';

const globalStyles = emotionCss`
  .masonry-container {
    display: flex;
    margin-left: -30px;
  }

  .masonry-column {
    padding-left: 30px;
    background-clip: padding-box;
  }
`;

const Title = (props) => (
  <Page.Title {...props}>
    <Flex alignItems="center">
      <LiveIcon size={12} color="red" />
      <Box as="span" ml={2}>
        Live
      </Box>
    </Flex>
  </Page.Title>
);

const StyledPage = styled(Page)(
  css({
    // body has 8px padding right now :(
    height: ['calc(100vh - 16px);', 'auto'],
    display: ['flex', 'block'],
    alignItems: 'center',
    justifyContent: 'center'
  })
);

const StyledPageContent = styled(Page.Content)(
  css({
    pb: [0, 5],
    pt: [0, 3]
  })
);

const StyledTitle = styled(Title)(
  css({
    display: ['none', 'block']
  })
);

function Home({ data }) {
  const posts = get(data, 'allMarkdownRemark.edges');
  const pageWidth = usePageWidth();

  const renderMeta = () => (
    <Page.Meta>
      <CTABanner />
      <Heading as="h3" pb={3}>
        LATEST CONTENT
      </Heading>
      <Masonry
        breakpointCols={{
          default: 3,
          768: 1
        }}
        className="masonry-container"
        columnClassName="masonry-column"
      >
        {posts.map(({ node: post }) => (
          <ArticleCard
            post={post}
            key={post.frontmatter.title}
            sx={{ mb: 4 }}
          />
        ))}
      </Masonry>
    </Page.Meta>
  );
  return (
    <StyledPage title="Live">
      <Global styles={globalStyles} />
      <StyledTitle />
      <StyledPageContent>
        <RadioCard />
      </StyledPageContent>
      {pageWidth >= Breakpoints.SM && renderMeta()}
    </StyledPage>
  );
}

export default Home;

export const pageQuery = graphql`
  query HomeQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 6
    ) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            author {
              id
              name
            }
            category {
              id
              label
              colour
            }
            date
            description
            soundCloudUrl
            image {
              childImageSharp {
                fluid(maxWidth: 768) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;
