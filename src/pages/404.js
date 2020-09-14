import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-css';
import { Global, css } from '@emotion/core';

import { Page } from '@/templates';
import { Box, Heading, Text } from '@/theme';

import ArticleCard from '@/components/ArticleCard';
import SubscribeWidget from '@/components/SubscribeWidget';

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
    <Page.Container title="Page not found">
      <Global styles={globalStyles} />
      <Page.Title>Page not found</Page.Title>
      <Page.Content>
        <Text>Unfortunately, the page you requested could not be found.</Text>
        <Box textAlign="center" py={3}>
          <Box
            as="img"
            src="https://media3.giphy.com/media/10YK5Hh53nC3dK/giphy-downsized-large.gif"
          />
        </Box>
      </Page.Content>
      <Page.Meta>
        <Box pb={5}>
          <SubscribeWidget />
        </Box>
        <Heading as="h5" pb={4}>
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
      </Page.Meta>
    </Page.Container>
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
