import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import useInterval from '@/common/hooks/useInterval';
import fetchJson from '@/common/util/fetchJson';
import { play, stop } from '@/player/actions';
import { PLAYER_STATUS } from '@/player/constants';
import { usePlayerState } from '@/player/hooks';
import DefaultCover from '@/static/images/default.png';

import Card from './Card';
import CardBadge from './CardBadge';
import CardImage from './CardImage';
import CardOverlay from './CardOverlay';
import './card.css';
import CardControls from './CardControls';

// For now, live posts will be hard-coded.
const liveCategory = {
  key: 'live',
  label: 'Live',
  colour: 'red'
};

const STREAM_META_URL = 'https://www.radioking.com/widgets/api/v1/radio/210013/track/current';
const STREAM_URL = 'https://www.radioking.com/play/soul-provider-fm';

function RadioCard({ play, stop }) {
  const [meta, setMeta] = useState(null);
  const { status, streamUrl } = usePlayerState();

  const isSelected = streamUrl === STREAM_URL;
  const isPaused = isSelected && status === PLAYER_STATUS.PAUSED;
  const isPlaying = isSelected && status === PLAYER_STATUS.PLAYING;

  const pollFn = async () => setMeta(await fetchJson(STREAM_META_URL));

  useEffect(() => {
    pollFn();
  }, []);
  useInterval(pollFn, 30 * 1000);

  return (
    <Card
      isPlayable
      onClick={() =>
        isPlaying
          ? stop()
          : play(STREAM_URL)
      }
    >
      <CardBadge category={liveCategory} />
      <div className="row">
        <div className="col-md-4">
          <CardImage isPlaying={isSelected && !isPaused}>
            <CardOverlay>
              <CardControls isPlaying={isSelected && !isPaused} />
            </CardOverlay>
            <img
              alt={meta ? `${meta.artist} - ${meta.title}` : 'Loading...'}
              className="card-img-top"
              src={meta ? meta.cover || DefaultCover : DefaultCover}
            />
          </CardImage>
        </div>
        <div className="col-md-8 d-flex align-items-center">
          <div className="card-body">
            <p className="font-weight-bold text-uppercase mb-3">
              Now Playing:
            </p>
            <p className="h1 font-weight-bold">
              {meta ? meta.title : 'Loading...'}
            </p>
            <p className="h4">
              {meta ? meta.artist : null}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

const mapDispatchToProps = { play, stop };

export default connect(
  null,
  mapDispatchToProps
)(RadioCard);