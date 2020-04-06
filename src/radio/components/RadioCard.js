import React, { useEffect, useState } from 'react';
import c from 'classnames';
import { connect } from 'react-redux';
import get from 'lodash.get';

import fetchJson from '@/common/util/fetchJson';
import useInterval from '@/common/hooks/useInterval';
import { PlayerStatus, load, play, pause, stop, updateMeta } from '@/player';

import { Card, CardBadge, CardImage, CardOverlay, cardStyles } from '@/cards';
import DefaultCover from '@/static/images/default.png';
import LiveIcon from '@/common/components/LiveIcon';
import PauseIcon from '@/common/components/PauseIcon';
import PlayIcon from '@/common/components/PlayIcon';

const { BUFFERING, PLAYING } = PlayerStatus;

// For now, live posts will be hard-coded.
const liveCategory = {
  key: 'live',
  label: (
    <span className={c('d-flex', 'align-items-center')}>
      <LiveIcon className={c('mr-2')} size={8} /> Live
    </span>
  ),
  colour: 'red'
};

const STREAM_META_URL =
  'https://www.radioking.com/widgets/api/v1/radio/210013/track/current';
const STREAM_URL = 'https://www.radioking.com/play/soul-provider-fm';

const RadioCard = (props) => {
  const { load, play, src, status, stop, updateMeta: updatePlayerMeta } = props;

  const [meta, setMeta] = useState(null);

  // Is the stream associated with this card active?
  const isStreamActive = src === STREAM_URL;
  const artist = get(meta, 'artist', null);
  const cover = get(meta, 'cover', null);
  const title = get(meta, 'title', null);

  // Poll for metadata every 5 seconds.
  const pollFn = async () => {
    setMeta(await fetchJson(STREAM_META_URL));
    if (isStreamActive && artist && title) {
      updatePlayerMeta({ artist, cover, title });
    }
  };
  useEffect(() => {
    pollFn();
  }, []);
  useInterval(pollFn, 5 * 1000);

  const onClick = (e) => {
    if (isStreamActive) {
      switch (status) {
        case BUFFERING:
          stop();
          break;
        case PLAYING:
          stop();
          break;
        default:
          play();
      }
    } else {
      load(STREAM_URL, {
        artist,
        cover,
        duration: 0,
        title
      });
    }
  };

  const renderArtist = () => {
    const artist = meta ? meta.artist : null;
    return (
      <>
        <p className="d-none d-md-block h4">{artist}</p>
        <p className="d-block d-md-none h5">{artist}</p>
      </>
    );
  };

  const renderOverlay = () => (
    <CardOverlay>
      {isStreamActive && [BUFFERING, PLAYING].includes(status) ? (
        <PauseIcon className={cardStyles.control} color="#FFFFFF" size={60} />
      ) : (
        <PlayIcon className={cardStyles.control} color="#FFFFFF" size={60} />
      )}
    </CardOverlay>
  );

  const renderTitle = () => {
    const title = meta ? meta.title : 'Loading...';
    return (
      <>
        <p className="d-none d-md-block h1 font-weight-bold">
          {title}
        </p>
        <p className="d-block d-md-none h4 font-weight-bold">
          {title}
        </p>
      </>
    );
  };

  return (
    <Card isActive={isStreamActive} isPlayable onClick={onClick}>
      <CardBadge category={liveCategory} />
      <div className="row">
        <div className="col-md-4">
          <CardImage isPlaying={false}>
            {renderOverlay()}
            <img
              alt={meta ? `${meta.artist} - ${meta.title}` : 'Loading...'}
              className="card-img-top"
              src={meta ? meta.cover || DefaultCover : DefaultCover}
            />
          </CardImage>
        </div>
        <div className="col-md-8 d-flex align-items-center">
          <div className="card-body">
            {renderTitle()}
            {renderArtist()}
          </div>
        </div>
      </div>
    </Card>
  );
};

const mapState = (state) => ({
  src: state.player.src,
  status: state.player.status
});

const mapDispatch = { load, play, pause, stop, updateMeta };

export default connect(mapState, mapDispatch)(RadioCard);
