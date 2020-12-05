import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-css';
import { Global, css as emotionCSS } from '@emotion/core';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box, Heading, Text } from 'theme';

import ArticleCard from '../components/ArticleCard';
import { CTABanner } from '../subscribe';
import { Page } from '../layout';

const globalStyles = emotionCSS`
  .masonry-container {
    display: flex;
    margin-left: -30px;
  }

  .masonry-column {
    padding-left: 30px;
    background-clip: padding-box;
  }
`;

const StyledCTABanner = styled(CTABanner)(
  css({
    pb: 5
  })
);

function PageNotFound({ data }) {
  const posts = get(data, 'allMarkdownRemark.edges');
  return (
    <Page title="Page not found">
      <Global styles={globalStyles} />
      <Page.Title>Page not found</Page.Title>
      <Page.Content>
        <Text>Unfortunately, the page you requested could not be found.</Text>
        <Box textAlign="center" py={3}>
          <Box
            as="img"
            src="https://media3.giphy.com/media/10YK5Hh53nC3dK/giphy-downsized-large.gif"
            maxWidth="100%"
          />
        </Box>
      </Page.Content>
      <Page.Meta>
        <StyledCTABanner />
        <Heading as="h3" pb={4}>
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
