import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import get from 'lodash.get';

import { pause, play } from '@/player/actions';
import { usePlayerState } from '@/player/hooks';
import { useTrack } from '@/soundcloud';

import Card from './Card';
import CardBadge from './CardBadge';
import CardControls from './CardControls';
import CardImage from './CardImage';
import CardOverlay from './CardOverlay';
import './card.css';
import { PLAYER_STATUS } from '../player/constants';

function ArticleCard({ article, pause, play }) {
  const linkRef = useRef(null);

  const { status, streamUrl } = usePlayerState();

  const soundCloudUrl = get(article, 'soundCloudUrl', null);
  const track = useTrack(soundCloudUrl);

  const isSelected = track && streamUrl && (streamUrl.includes(track.stream_url));
  const isPaused = isSelected && status === PLAYER_STATUS.PAUSED;
  const isPlaying = isSelected && status === PLAYER_STATUS.PLAYING;

  const onClick = e => {
    // Don't play the track if the title was clicked.
    if (linkRef.current && e.target === linkRef.current) {
      return;
    }
    return track
      ? isPlaying
        ? pause()
        : play(track.stream_url)
      : null;
  }

  return (
    <Card
      isPlayable={!!track}
      onClick={onClick}
    >
      <CardBadge category={article.category} />
      <CardImage>
        <Img
          className="card-img-top"
          sizes={article.heroImage.sizes}
        />
        {!!track && (
          <CardOverlay>
            <CardControls isPlaying={isSelected && !isPaused} />
          </CardOverlay>
        )}
      </CardImage>
      <div className="card-body">
        <h5 className="card-title">
          <Link
            className="text-dark font-weight-bold"
            ref={linkRef}
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
    </Card>
  );
}

const mapDispatchToProps = { pause, play };

export default connect(
  null,
  mapDispatchToProps
)(ArticleCard);