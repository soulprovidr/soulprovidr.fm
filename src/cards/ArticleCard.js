import React, { useRef } from 'react';
import { Link } from 'gatsby';
import { observer } from 'mobx-react-lite';
import Img from 'gatsby-image';
import get from 'lodash.get';

import Streamable, { StreamableStatus } from '@/streamable';
import { usePlayerStore } from '@/player';
import { useTrack } from '@/soundcloud';

import Card from './Card';
import CardBadge from './CardBadge';
import CardImage from './CardImage';
import CardOverlay from './CardOverlay';
import './card.css';

import PauseIcon from '@/common/components/PauseIcon';
import PlayIcon from '@/common/components/PlayIcon';

const { BUFFERING, PLAYING, UNSTARTED } = StreamableStatus;

const ArticleCard = observer(({ article }) => {
  const { pause, play, stop, streamable } = usePlayerStore();
  
  const linkRef = useRef(null);
  const soundCloudUrl = get(article, 'soundCloudUrl', null);
  const status = get(streamable, 'status', -1);
  const track = useTrack(soundCloudUrl);
  const uid = get(streamable, 'uid', null);
  
  const isActive = track && (uid === track.id);
  console.log(isActive, status);
  
  const onClick = e => {
    // Don't play the track if the title was clicked.
    if (linkRef.current && e.target === linkRef.current)  {
      return false;
    }
    if (isActive) {
      switch (status) {
        case BUFFERING:
          stop();
          break;
        case PLAYING:
          pause();
          break;
        default:
          play();
      }
    } else {
      play(
        new Streamable({
          uid: track.id,
          src: track.stream_url,
          duration: track.duration,
          progress: 0
        })
      );
    }
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
        {track && (
          <CardOverlay onClick={onClick}>
            {isActive && status === PLAYING ? (
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
});

export default ArticleCard;