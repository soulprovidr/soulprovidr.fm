import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-css';

import ArticleCard from '@/articles/components/ArticleCard';
import RadioCard from '@/radio/components/RadioCard';

function Home({ data }) {
  const articles = get(data, 'allContentfulArticle.edges');
  return (
    <main className="container">
      <Helmet title="Home" />
      <section className="row pb-4">
        <div className="w-100">
          <div className="px-3">
            <RadioCard key="radio" />
          </div>
        </div>
      </section>
      <Masonry
        breakpointCols={{
          default: 3,
          990: 1
        }}
        className="row py-5"
        columnClassName="col"
      >
        {articles.map(({ node: article }) => (
          <div key={article.slug}>
            <div className="pb-4 w-100">
              <ArticleCard article={article} />
            </div>
          </div>
        ))}
      </Masonry>
    </main>
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
            sizes(maxWidth: 350, resizingBehavior: SCALE) {
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
