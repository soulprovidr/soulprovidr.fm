import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-css';
import { Global, css } from '@emotion/core';

import ArticleCard from '@/articles/components/ArticleCard';
import PlayerCard from '@/player/components/PlayerCard';
import { Container, Box } from '@/ui';

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

function Home({ data }) {
  const posts = get(data, 'allMarkdownRemark.edges');
  console.log(posts);
  return (
    <Container as="main" display={['block', 'flex']}>
      <Helmet title="Home" />
      <Global styles={globalStyles} />
      <Box width={[1, 9 / 20]} mr={[0, 4]} mb={[5, 0]}>
        <PlayerCard />
      </Box>
      <Box width={[1, 11 / 20]}>
        <Masonry
          breakpointCols={{
            default: 2,
            768: 1
          }}
          className="masonry-container"
          columnClassName="masonry-column"
        >
          {posts.map(({ node: post }) => (
            <ArticleCard post={post} key={post.name} sx={{ mb: 4 }} />
          ))}
        </Masonry>
      </Box>
    </Container>
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
            date
            description
            category {
              id
              label
              colour
            }
          }
        }
      }
    }
  }
`;
