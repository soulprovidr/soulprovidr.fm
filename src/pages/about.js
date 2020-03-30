import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';

function About(props) {
  const post = get(props, 'data.contentfulPage');
  return (
    <div className="container">
      <Helmet title={post.title} />
      <div className="row">
        <div className="col-md-4">
          <Img
            className="card-img-top"
            alt={post.title}
            sizes={post.heroImage.sizes}
          />
        </div>
        <div className="col-md-8">
          <p className="h2 font-weight-bold pb-3">{post.title}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;

export const pageQuery = graphql`
  query AboutPage {
    contentfulPage(contentful_id: { eq: "149QFhRCtFVBlvQYxMslYz" }) {
      title
      heroImage {
        sizes(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
