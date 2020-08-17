import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';
import c from 'classnames';

import articleStyles from '@/articles/components/Article.module.css';

function About(props) {
  const post = get(props, 'data.contentfulPage');
  return (
    <main className="container">
      <Helmet title={post.title} />
      <div className="col-lg-8 col-md-10 col-sm-12 mx-auto mb-5 pb-5">
        <Img
          className={c(articleStyles.image, 'card-img-top')}
          alt={post.title}
          sizes={post.heroImage.sizes}
        />
        <p className="h3 mt-4 font-weight-bold">{post.title}</p>
        <div
          className="pt-2 pb-3"
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html
          }}
        />
      </div>
    </main>
  );
}

export default About;

// export const pageQuery = graphql`
//   query AboutPage {}
// `;
