import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import CardBadge from './CardBadge';
import CardImage from './CardImage';
import Waveform from '@/common/components/Waveform';
import './card.css';

export default function ArticleCard({ article }) {
  return (
    <div className="pb-4">
      <div className="card">
        <CardBadge category={article.category} />
        <CardImage>
          <Img
            className="card-img-top"
            sizes={article.heroImage.sizes}
          />
        </CardImage>
        <div className="card-body">
          <h5 className="card-title">
            <Link
              className="text-dark font-weight-bold"
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
        {/* <div className="card-footer">
          <button className="btn btn-muted">Play</button>
        </div> */}
      </div>
    </div>
  );
}