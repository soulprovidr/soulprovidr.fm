import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-css';
import { Global, css } from '@emotion/core';

import ArticleCard from '@/articles/components/ArticleCard';
import SubscribeWidget from '@/common/components/SubscribeWidget';
import Logo from '@/common/components/Logo';
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

// const radioArticle = {

// };

function Mixtapes({ data }) {
  const posts = get(data, 'allMarkdownRemark.edges');
  return (
    <Container as="main">
      <Helmet title="Mixtapes" />
      <Global styles={globalStyles} />
      <Box width={[1]} my={5}>
        <Heading as="h2" mb={3}>
          MIXTAPES
        </Heading>
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
      </Box>
    </Container>
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
