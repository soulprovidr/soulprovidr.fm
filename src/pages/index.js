import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import ArticleCard from '@/cards/ArticleCard';
import RadioCard from '@/cards/RadioCard';

function Home({ data }) {
  const articles = get(data, 'allContentfulArticle.edges')
  return (
    <main className="container">
      <Helmet title="Home" />
      <section className="row pb-4">
        <div className="w-100">
          <RadioCard key="radio" />
        </div>
      </section>
      <section className="row py-5">
        {articles.map(({ node: article }) => (
          <div
            className="d-flex col-lg-4"
            key={article.slug}
          >
            <ArticleCard
              article={article}
            />
          </div>
        ))}
      </section>
    </main>
  );
}

export default Home;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulArticle(
      sort: {
        fields: [publishDate],
        order: DESC
      }
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
`
