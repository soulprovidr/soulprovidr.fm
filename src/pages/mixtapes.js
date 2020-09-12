import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-css';
import { Global, css } from '@emotion/core';

import ArticleCard from './common/ArticleCard';
import SubscribeWidget from './common/SubscribeWidget';
import { Page } from './templates';
import { Box } from '@/theme';

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

function Mixtapes({ data }) {
  const posts = get(data, 'allMarkdownRemark.edges');
  return (
    <Page.Container title="Mixtapes">
      <Helmet title="Mixtapes" />
      <Global styles={globalStyles} />
      <Page.Title>Mixtapes</Page.Title>
      <Page.Content>
        <Box pb={5}>
          <SubscribeWidget />
        </Box>
        <Box>
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
      </Page.Content>
    </Page.Container>
  );
}

export default Mixtapes;

export const pageQuery = graphql`
  query MixtapesQuery {
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
