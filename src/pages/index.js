import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-css';
import { Global, css } from '@emotion/core';

import ArticleCard from '@/articles/components/ArticleCard';
import LiveIcon from '@/common/components/LiveIcon';
import SubscribeWidget from '@/common/components/SubscribeWidget';
import { Page } from '@/layout';
import PlayerCard from '@/player/components/PlayerCard';
import { Box, Heading, Flex } from '@/ui';

const globalStyles = css`
  .masonry-container {
    display: flex;
    margin-left: -30px;
  }

  .masonry-column {
    padding-left: 30px;
    background-clip: padding-box;
  }
`;

const titleContent = (
  <Flex as="h2" alignItems="center">
    <LiveIcon size={12} color="red" />
    <Box as="span" ml={2}>
      LIVE
    </Box>
  </Flex>
);

function Home({ data }) {
  const posts = get(data, 'allMarkdownRemark.edges');
  return (
    <Page title="Live" titleContent={titleContent}>
      <Global styles={globalStyles} />
      <Box py={3}>
        <PlayerCard />
      </Box>
      <SubscribeWidget my={3} />
      <Box py={3}>
        <Heading as="h5" pb={3}>
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
      </Box>
    </Page>
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
