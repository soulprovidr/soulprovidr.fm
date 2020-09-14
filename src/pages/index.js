import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-css';
import { Global, css } from '@emotion/core';

import ArticleCard from './common/ArticleCard';
import LiveIcon from './common/LiveIcon';
import SubscribeWidget from './common/SubscribeWidget';
import { Page } from './templates';
import PlayerCard from '@/modules/player/components/PlayerCard';
import { Box, Heading, Flex } from '@/theme';

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

const Title = () => (
  <Page.Title>
    <Flex alignItems="center">
      <LiveIcon size={12} color="red" />
      <Box as="span" ml={2}>
        LIVE
      </Box>
    </Flex>
  </Page.Title>
);

function Home({ data }) {
  const posts = get(data, 'allMarkdownRemark.edges');
  return (
    <Page.Container title="Live">
      <Global styles={globalStyles} />
      <Title />
      <Page.Content>
        <PlayerCard />
      </Page.Content>
      <Page.Meta>
        <SubscribeWidget />
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
      </Page.Meta>
    </Page.Container>
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
