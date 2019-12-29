import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import ArticleCard from '@/cards/ArticleCard';
import RadioCard from '@/cards/RadioCard';

class RootIndex extends React.Component {
  render() {
    const articles = get(this, 'props.data.allContentfulArticle.edges')
    return (
      <div className="container">
        <Helmet title="Home" />
        <div className="row">
          <div className="w-100">
            <RadioCard key="radio" />
          </div>
          {articles.map(({ node: article }) => (
            <div className="d-flex col-lg-4">
              <ArticleCard
                article={article}
                key={article.slug}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulArticle(
      filter: {
        publish: { ne: false }
      }
      sort: {
        fields: [publishDate],
        order: DESC
      }
    ) {
      edges {
        node {
          title
          slug
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
