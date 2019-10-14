import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import ArticlePreview from '../components/article-preview'
import Player from '../components/PlayerView';

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
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <div className="container">
        <Helmet title={siteTitle} />
        <div className="row">
          <Player />
          {posts.map(({ node }) => {
            return (
              <ArticlePreview article={node} />
            )
          })}
          {posts.map(({ node }) => {
            return (
              <ArticlePreview article={node} />
            )
          })}
          {posts.map(({ node }) => {
            return (
              <ArticlePreview article={node} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
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
