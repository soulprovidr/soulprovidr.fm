import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import get from 'lodash.get'

import fetchJson from '@/common/util/fetchJson';
import Streamable, { StreamableStatus } from '@/streamable';
import useInterval from '@/common/hooks/useInterval';
import { usePlayerStore } from '@/player';

import Card from './Card';
import CardBadge from './CardBadge';
import CardImage from './CardImage';
import CardOverlay from './CardOverlay';
import './card.css';

import DefaultCover from '@/static/images/default.png';
import PauseIcon from '@/common/components/PauseIcon';
import PlayIcon from '@/common/components/PlayIcon';

const { BUFFERING, PLAYING, UNSTARTED } = StreamableStatus;

// For now, live posts will be hard-coded.
const liveCategory = {
  key: 'live',
  label: 'Live',
  colour: 'red'
};

const STREAM_META_URL = 'https://www.radioking.com/widgets/api/v1/radio/210013/track/current';
const STREAM_URL = 'https://www.radioking.com/play/soul-provider-fm';

const RadioCard = observer(() => {
  const { play, stop, streamable } = usePlayerStore();
  
  const status = get(streamable, 'status', -1);
  const uid = get(streamable, 'uid', null);
  const isActive = uid === 'live';
  
  const [meta, setMeta] = useState(null);
  const pollFn = async () => {
    setMeta(await fetchJson(STREAM_META_URL));
  };
  useEffect(() => {
    pollFn();
  }, []);
  useInterval(pollFn, 5 * 1000);

  const onClick = e => {
    if (isActive) {
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
      play(
        new Streamable({
          uid: 'radio',
          src: STREAM_URL,
          duration: null,
          progress: 0
        })
      );
    }
  };

  return (
    <Card
      isPlayable
      onClick={onClick}
    >
      <CardBadge category={liveCategory} />
      <div className="row">
        <div className="col-md-4">
          <CardImage isPlaying={false}>
            <CardOverlay>
              {isActive && status === PLAYING ? (
                <PauseIcon
                  className="card__control"
                  color="#FFFFFF"
                  onClick={onClick}
                  size={60}
                />
              ) : (
                <PlayIcon
                  className="card__control"
                  color="#FFFFFF"
                  onClick={onClick}
                  size={60}
                />
              )}
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
});

export default RadioCard;