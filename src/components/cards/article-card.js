import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import CardHeader from './common/card-header';

export default function ArticleCard({ article }) {
  return (
    <div className="pb-4">
      <div className="card">
        <CardHeader>
          <Img
            className="card-img-top"
            sizes={article.heroImage.sizes}
          />
        </CardHeader>
        <div className="card-body">
          <h5 className="card-title">
            <Link
              className="text-black font-weight-bold"
              to={`/${article.slug}`}
            >
              {article.title}
            </Link>
          </h5>
          <div
            className="card-text"
            dangerouslySetInnerHTML={{
              __html: article.description.childMarkdownRemark.html
            }}
          />
        </div>
      </div>
    </div>
  );
}