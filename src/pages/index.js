import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Masonry from 'react-masonry-css'

import ArticlePreview from '../components/article-preview'
import Player from '../components/player';

const Hero = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(https://unsplash.it/1920/1080/?random);
  background-size: cover;
  // filter: brightness(40%) grayscale(80%);
`;

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulArticle.edges')
    const children = [
      <Player />,
      ...posts.map(({ node }) => {
        return <ArticlePreview article={node} />
      }),
      ...posts.map(({ node }) => {
        return <ArticlePreview article={node} />
      }),
      ...posts.map(({ node }) => {
        return <ArticlePreview article={node} />
      })
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
