import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Masonry from 'react-masonry-css'
import { graphql } from 'gatsby';

import ArticleCard from '../components/cards/article-card';
import RadioCard from '../components/cards/radio-card';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const articles = get(this, 'props.data.allContentfulArticle.edges')
    const children = [
      <RadioCard />,
      ...articles.map(({ node: article }) => (
        <ArticleCard article={article} />
      ))
    ];
    return (
      <div className="container">
        <Helmet title={siteTitle} />
        <div className="row">
          <Masonry
            breakpointCols={{
              default: 3,
              700: 2,
              500: 1
            }}
            className="d-flex"
            columnClassName="col-md-4"
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
          publishDate(formatString: "MMMM Do, YYYY")
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
