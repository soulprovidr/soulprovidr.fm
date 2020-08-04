import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';

import { Card } from '@/ui';
import LiveIcon from '@/common/components/LiveIcon';
import PauseIcon from '@/common/components/PauseIcon';
import PlayIcon from '@/common/components/PlayIcon';
import { useClickAction, useIsPlaying } from '@/player/hooks';
import ProgressBar from '@/player/components/ProgressBar';
import DefaultCover from '@/static/images/default.png';
import { Box, Flex, Heading, Text } from '@/ui';

import { RadioUrl } from '../constants';
import { getMeta } from '../selectors';

const LivebadgeText = (
  <>
    <LiveIcon size={8} />
    <Text ml={2}>Live</Text>
  </>
);

const RadioCard = ({ meta, ...props }) => {
  const isPlaying = useIsPlaying(RadioUrl);

  const artist = get(meta, 'artist', null);
  const cover = get(meta, 'cover', null);
  const title = get(meta, 'title', null);
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

  const iconProps = { color: 'white', size: 80 };
  const overlayStyles = {
    transform: 'scale(0)',
    transition: ' 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    '&:hover': {
      transform: 'scale(1)'
    }
  };
  const titleStyles = {
    // color: 'white',
    mt: 3,
    // textShadow: '0 1px 0 black',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  };
  const overlayContent = (
    <Flex alignItems="center" justifyContent="center" sx={overlayStyles}>
      {isPlaying ? <PauseIcon {...iconProps} /> : <PlayIcon {...iconProps} />}
    </Flex>
  );

  const imageStyles = {
    borderRadius: 0,
    width: '100%'
  };
  const image = (
    <Box as="img" src={cover ?? DefaultCover} alt={imageAlt} sx={imageStyles} />
  );

  const controlIcon = isPlaying ? (
    <PauseIcon color="black" size={35} />
  ) : (
    <PlayIcon color="black" size={35} />
  );

  const cardStyles = {
    position: 'sticky',
    top: 25
  };
  return (
    <Card
      badgeColour="red"
      badgeText={LivebadgeText}
      image={image}
      onClick={onClick}
      overlayContent={overlayContent}
      sx={cardStyles}
      {...props}
    >
      <Box mt={3}>
        <ProgressBar duration={null} progress={null} status={null} />
      </Box>
      <Flex alignItems="center" overflow="hidden">
        {controlIcon}
        <Box ml={4}>
          <Heading as="h2" sx={titleStyles}>
            {title ?? 'Loading...'}
          </Heading>
          <Text fontSize={4}>{artist}</Text>
        </Box>
      </Flex>
    </Card>
  );
};

const mapState = (state) => ({
  meta: getMeta(state)
});

export default connect(mapState)(RadioCard);
