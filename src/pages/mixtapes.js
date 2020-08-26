import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-css';
import { Global, css } from '@emotion/core';

import ArticleCard from '@/articles/components/ArticleCard';
import SubscribeWidget from '@/common/components/SubscribeWidget';
import { Page } from '@/layout';
import { Container, Box } from '@/ui';
import { Heading } from '../ui';

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
    <Page title="Mixtapes">
      <Helmet title="Mixtapes" />
      <Global styles={globalStyles} />
      <SubscribeWidget />
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
