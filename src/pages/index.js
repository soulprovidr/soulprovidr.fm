import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-css';
import { Global, css } from '@emotion/core';

import ArticleCard from '@/articles/components/ArticleCard';
import RadioCard from '@/radio/components/RadioCard';
import { Container } from '@/ui';

const masonryStyles = css`
  .masonry-container {
    display: flex;
    margin-left: -30px;
  }

  .masonry-column {
    padding-left: 30px;
    background-clip: padding-box;
  }
`;

function Home({ data }) {
  const articles = get(data, 'allContentfulArticle.edges');
  return (
    <Container as="main" px={[0, 4]}>
      <Helmet title="Home" />
      <RadioCard mb={5} width={1} />
      <Global styles={masonryStyles} />
      <Masonry
        breakpointCols={{
          default: 3,
          990: 2,
          768: 1
        }}
        className="masonry-container"
        columnClassName="masonry-column"
      >
        {articles.map(({ node: article }) => (
          <ArticleCard article={article} key={article.slug} mb={4} width={1} />
        ))}
      </Masonry>
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
