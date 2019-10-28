import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Masonry from 'react-masonry-css'
import { graphql } from 'gatsby';

import ArticleCard from '../components/cards/article-card';
import RadioCard from '../components/cards/radio-card';

class RootIndex extends React.Component {
  render() {
    const articles = get(this, 'props.data.allContentfulArticle.edges')
    const children = [
      <RadioCard key="radio" />,
      ...articles.map(({ node: article }) => (
        <ArticleCard
          article={article}
          key={article.slug}
        />
      ))
    ];
    return (
      <div className="container">
        <Helmet title="Home" />
        <div className="row">
          <Masonry
            breakpointCols={{
              default: 3,
              800: 1
            }}
            className="d-flex"
            columnClassName="col-lg-4"
          >
            {children}
          </Masonry>
        </div>
      </div>
    );
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulArticle(sort: { fields: [publishDate], order: DESC }) {
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
