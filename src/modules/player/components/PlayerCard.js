import React from 'react';
import { useSelector } from 'react-redux';
import get from 'lodash.get';

import LiveIcon from '@/pages/common/LiveIcon';
import PauseIcon from '@/pages/common/PauseIcon';
import PlayIcon from '@/pages/common/PlayIcon';
import ProgressBar from '@/modules/player/components/ProgressBar';
import DefaultCover from '@/modules/static/images/default.png';
import { RadioUrl, getMeta as getRadioMeta } from '@/modules/radio';
import { Box, Card, Flex, Heading, Text } from '@/theme';

import { PlayerStatus } from '../constants';
import { useClickAction } from '../hooks';
import { getMeta, getProgress, getStatus } from '../selectors';
import StatusIndicator from './StatusIndicator';

const { BUFFERING, PLAYING } = PlayerStatus;

const PlayerCard = (props) => {
  const meta = useSelector(getRadioMeta);
  console.log(meta);
  // const progress = useSelector(getProgress);
  // const status = useSelector(getStatus);

  const getMetaProperty = (property) => get(meta, property, null);
  const artist = getMetaProperty('artist');
  const cover = getMetaProperty('cover');
  // const duration = getMetaProperty('duration');
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
    width: '100%',
    mr: 4
  };
  const image = (
    <Box as="img" src={cover ?? DefaultCover} alt={imageAlt} sx={imageStyles} />
  );

  return (
    <Flex onClick={onClick} sx={{ cursor: 'pointer' }}>
      <Box width={1 / 3}>{image}</Box>
      <Flex
        flexDirection="column"
        justifyContent="center"
        overflow="hidden"
        ml={5}
        mt={3}
        width={2 / 3}
      >
        <Box>
          <Heading as="h2" sx={titleStyles}>
            {title ?? 'Loading...'}
          </Heading>
          <Text fontSize={5} m={0}>
            {artist}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default PlayerCard;
