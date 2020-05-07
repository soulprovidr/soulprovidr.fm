import React, { useEffect, useState } from 'react';
import c from 'classnames';
import { connect } from 'react-redux';
import get from 'lodash.get';

import fetchJson from '@/common/util/fetchJson';
import useInterval from '@/common/hooks/useInterval';
import { play, pause, stop, updateMeta } from '@/player/actions';
import { PlayerStatus } from '@/player/constants';

import { Card, CardBadge } from '@/cards';
import DefaultCover from '@/static/images/default.png';
import LiveIcon from '@/common/components/LiveIcon';
import PauseIcon from '@/common/components/PauseIcon';
import PlayIcon from '@/common/components/PlayIcon';
import { Box, Flex, FlexColumn, Heading, Text } from '@/ui';

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

const FeatureCard = (props) => {
  const { play, src, status, stop, updateMeta: updatePlayerMeta } = props;

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

  const onClick = () => {
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
      play(STREAM_URL, {
        artist,
        cover,
        duration: 0,
        title
      });
    }
  };

  // const renderOverlay = () => (
  //   <CardOverlay>
  //     {isStreamActive && [BUFFERING, PLAYING].includes(status) ? (
  //       <PauseIcon className={cardStyles.control} color="#FFFFFF" size={60} />
  //     ) : (
  //       <PlayIcon className={cardStyles.control} color="#FFFFFF" size={60} />
  //     )}
  //   </CardOverlay>
  // );

  return (
    <Card>
      <CardBadge bg={liveCategory.colour}>
        <LiveIcon size={8} /> Live
      </CardBadge>
      <Flex>
        <Box width={1 / 3.25}>
          {/* <CardImage isPlaying={false}> */}
          {/* {renderOverlay()} */}
          <Box
            as="img"
            alt={meta ? `${meta.artist} - ${meta.title}` : 'Loading...'}
            src={meta?.cover ?? DefaultCover}
            width={1}
          />
          {/* </CardImage> */}
        </Box>
        <FlexColumn width={2.25 / 3.25} justifyContent="center" p={5}>
          <Heading as="h1">{meta ? meta.title : 'Loading...'}</Heading>
          <Text fontSize={4}>{artist}</Text>
        </FlexColumn>
      </Flex>
    </Card>
  );

  return (
    <Card isActive={isStreamActive} isPlayable onClick={onClick}>
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

const mapDispatch = { play, pause, stop, updateMeta };

export default connect(mapState, mapDispatch)(FeatureCard);
