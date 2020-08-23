import React from 'react';
import { useSelector } from 'react-redux';
import get from 'lodash.get';

import LiveIcon from '@/common/components/LiveIcon';
import PauseIcon from '@/common/components/PauseIcon';
import PlayIcon from '@/common/components/PlayIcon';
import ProgressBar from '@/player/components/ProgressBar';
import DefaultCover from '@/static/images/default.png';
import { Box, Card, Heading, Text } from '@/ui';

import { PlayerStatus, RadioUrl } from '../constants';
import { useClickAction } from '../hooks';
import { getMeta, getProgress, getStatus } from '../selectors';
import StatusIndicator from './StatusIndicator';

const { BUFFERING, PLAYING } = PlayerStatus;

const LivebadgeText = (
  <>
    <LiveIcon size={8} />
    <Text ml={2}>Live</Text>
  </>
);

const PlayerCard = (props) => {
  const meta = useSelector(getMeta);
  const progress = useSelector(getProgress);
  const status = useSelector(getStatus);

  const getMetaProperty = (property) => get(meta, property, null);
  const artist = getMetaProperty('artist');
  const cover = getMetaProperty('cover');
  const duration = getMetaProperty('duration');
  const title = getMetaProperty('title');
  const imageAlt = meta ? `${artist} - ${title}` : 'Loading...';

  const onClick = useClickAction(
    RadioUrl,
    {
      artist,
      cover,
      title,
      duration: 0
    },
    false
  );

  const titleStyles = {
    // mt: 3,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  };

  const imageStyles = {
    borderRadius: 0,
    width: '100%'
  };
  const image = (
    <Box as="img" src={cover ?? DefaultCover} alt={imageAlt} sx={imageStyles} />
  );

  const cardStyles = {
    // position: 'sticky',
    top: 25
  };
  return (
    <Card
      badgeColour="red"
      badgeText={LivebadgeText}
      image={image}
      onClick={onClick}
      overlayContent={
        <StatusIndicator onClick={onClick} size={80} status={status} />
      }
      forceOverlay={status !== PLAYING}
      sx={cardStyles}
      {...props}
    >
      <Box overflow="hidden" mt={3}>
        <Box>
          <Heading as="h4" sx={titleStyles}>
            {title ?? 'Loading...'}
          </Heading>
          <Text fontSize={3}>{artist}</Text>
        </Box>
      </Box>
      <Box mt={3}>
        <ProgressBar duration={duration} progress={progress} status={status} />
      </Box>
    </Card>
  );
};

export default PlayerCard;
