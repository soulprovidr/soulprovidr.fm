import React from 'react';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import get from 'lodash.get';

import { pause, play } from '@/player/actions';
import { usePlayerState } from '@/player/hooks';
import { useTrack } from '@/soundcloud';
import PauseIcon from '@/static/images/pause.png';
import PlayIcon from '@/static/images/play.png';

import Card from './Card';
import CardBadge from './CardBadge';
import CardImage from './CardImage';
import CardOverlay from './CardOverlay';
import './card.css';
import { PLAYER_STATUS } from '../player/constants';

function ArticleCard({ article, pause, play }) {
  const { status, streamUrl } = usePlayerState();

  const soundCloudUrl = get(article, 'soundCloudUrl', null);
  const track = useTrack(soundCloudUrl);

  const isSelected = track && streamUrl && (streamUrl.includes(track.stream_url));
  const isPaused = isSelected && status === PLAYER_STATUS.PAUSED;
  const isPlaying = isSelected && status === PLAYER_STATUS.PLAYING;

  const getPlayerIcon = () => {
    return isSelected && !isPaused ? (
      <img
        alt="Paused"
        className="card-image__icon"
        src={PauseIcon}
      />
    ) : (
      <img
        alt="Play"
        className="card-image__icon"
        src={PlayIcon}
      />
    )
  };

  return (
    <Card
      isPlayable={!!track}
      onClick={() => track
        ? isPlaying
          ? pause()
          : play(track.stream_url)
        : null
      }
    >
      <CardBadge category={article.category} />
      <CardImage>
        <Img
          className="card-img-top"
          sizes={article.heroImage.sizes}
        />
        {!!track && (
          <CardOverlay>
            {getPlayerIcon()}
          </CardOverlay>
        )}
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
    </Card>
  );
}

const mapDispatchToProps = { pause, play };

export default connect(
  null,
  mapDispatchToProps
)(ArticleCard);