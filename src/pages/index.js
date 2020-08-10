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
  const articles = get(data, 'allContentfulArticle.edges');
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
          {articles.map(({ node: article }) => (
            <ArticleCard article={article} key={article.slug} sx={{ mb: 4 }} />
          ))}
        </Masonry>
      </Box>
    </Container>
  );
}

export default Home;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulArticle(
      filter: { category: { key: { ne: "github" } } }
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          soundCloudUrl
          category {
            key
            label
            colour
          }
          heroImage {
            sizes(maxWidth: 1180) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
