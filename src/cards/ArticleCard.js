import React from 'react';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import get from 'lodash.get';

import { pause, play } from '@/player/actions';
import { usePlayerState } from '@/player/hooks';
import { useTrack } from '@/soundcloud';

import CardBadge from './CardBadge';
import CardImage from './CardImage';
import './card.css';

function ArticleCard({ article, pause, play }) {
  const { status, streamUrl } = usePlayerState();

  const soundCloudUrl = get(article, 'soundCloudUrl', null);
  const track = useTrack(soundCloudUrl);

  const isSelected = track && (streamUrl.includes(track.stream_url));
  return (
    <div className="pb-4">
      <div
        className="card"
        onClick={() => track
          ? isSelected
            ? pause()
            : play(track.stream_url)
          : null
        }
      >
        <CardBadge category={article.category} />
        <CardImage mediaStatus={isSelected ? status : null}>
          <Img
            className="card-img-top"
            sizes={article.heroImage.sizes}
          />
        </CardImage>
        <div className="card-body">
          <h5 className="card-title">
            <span
              className="cursor-pointer text-dark font-weight-bold"
              onClick={e => {
                e.stopPropagation();
                navigate(`/${article.slug}`);
              }}
            >
              {article.title}
            </span>
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

const mapDispatchToProps = { pause, play };

export default connect(
  null,
  mapDispatchToProps
)(ArticleCard);