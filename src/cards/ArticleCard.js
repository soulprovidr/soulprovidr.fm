import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import get from 'lodash.get';

import {
  PlayerStatus,
  load,
  play,
  pause,
  stop
} from '@/player';
import { useTrack } from '@/soundcloud';

import Card from './Card';
import CardBadge from './CardBadge';
import CardImage from './CardImage';
import CardOverlay from './CardOverlay';
import './card.css';

import PauseIcon from '@/common/components/PauseIcon';
import PlayIcon from '@/common/components/PlayIcon';

const { BUFFERING, PLAYING } = PlayerStatus;

const ArticleCard = props => {
  const {
    article,
    load,
    play,
    pause,
    src,
    status,
    stop
  } = props;

  const linkRef = useRef(null);
  const soundCloudUrl = get(article, 'soundCloudUrl', null);
  const track = useTrack(soundCloudUrl);

  // Is the track associated with this card active?
  const isTrackActive = track && (src === track.stream_url);

  const onClick = e => {
    // Ignore clicks on card title.
    if (linkRef.current && e.target === linkRef.current)  {
      return false;
    }
    // Ignore clicks when track has not yet loaded.
    if (!track) {
      return false;
    }

    if (isTrackActive) {
      switch (status) {
        case BUFFERING:
          stop();
          break;
        case PLAYING:
          pause();
          break;
        default:
          play();
          break;
      }
    } else {
      load(track.stream_url, {
        artist: track.user.username,
        cover: article.heroImage.sizes.src,
        duration: track.duration,
        slug: article.slug,
        title: article.title,
      });
    }
  };

  const renderOverlay = () => {
    return track && (
      <CardOverlay>
        {isTrackActive && [BUFFERING, PLAYING].includes(status) ? (
          <PauseIcon
            className="card__control"
            color="#FFFFFF"
            size={60}
          />
        ) : (
            <PlayIcon
              className="card__control"
              color="#FFFFFF"
              size={60}
            />
          )}
      </CardOverlay>
    );
  };

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
        {renderOverlay()}
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
};

const mapState = state => ({
  src: state.player.src,
  status: state.player.status
});

const mapDispatch = { load, play, pause, stop };

export default connect(mapState, mapDispatch)(ArticleCard);