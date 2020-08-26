import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-css';
import { Global, css } from '@emotion/core';

import ArticleCard from '@/articles/components/ArticleCard';
import SubscribeWidget from '@/common/components/SubscribeWidget';
import { Page } from '@/layout';
import { Container, Box } from '@/ui';
import { Heading, Flex, Text } from '../ui';

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

function PageNotFound({ data }) {
  const posts = get(data, 'allMarkdownRemark.edges');
  return (
    <Page title="Page not found">
      <Global styles={globalStyles} />
      <Text mb={4}>
        Unfortunately, the page you requested could not be found.
      </Text>
      <Box textAlign="center">
        <Box
          as="img"
          src="https://media3.giphy.com/media/10YK5Hh53nC3dK/giphy-downsized-large.gif"
        />
      </Box>
      <SubscribeWidget mt={5} />
      <Heading as="h5" my={4}>
        OTHER STUFF YOU MIGHT LIKE:
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
    </Page>
  );
}

export default PageNotFound;

export const pageQuery = graphql`
  query PageNotFoundQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
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
