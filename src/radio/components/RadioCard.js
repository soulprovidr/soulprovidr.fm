import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';

import { FeatureCard } from '@/ui/cards';
import LiveIcon from '@/common/components/LiveIcon';
import PauseIcon from '@/common/components/PauseIcon';
import PlayIcon from '@/common/components/PlayIcon';
import { useClickAction, useIsPlaying } from '@/player/hooks';
import DefaultCover from '@/static/images/default.png';
import { Box, Flex, Heading, Text } from '@/ui';

import { RadioUrl } from '../constants';
import { getMeta } from '../selectors';

const LiveBadgeContent = (
  <>
    <LiveIcon size={8} /> Live
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

  const iconProps = { color: 'white', size: 60 };
  const overlayContent = (
    <Flex>
      {isPlaying ? <PauseIcon {...iconProps} /> : <PlayIcon {...iconProps} />}
      <Box>
        <Heading as="h2" color="white" mt={3}>
          {title ?? 'Loading...'}
        </Heading>
        <Text fontSize={4} color="white">
          {artist}
        </Text>
      </Box>
    </Flex>
  );

  const image = (
    <Box
      as="img"
      width={1}
      borderRadius={0}
      src={cover ?? DefaultCover}
      alt={imageAlt}
    />
  );

  return (
    <FeatureCard
      badgeColour="red"
      badgeContent={LiveBadgeContent}
      image={image}
      onClick={onClick}
      overlayContent={overlayContent}
      mr={4}
      {...props}
    />
  );
};

const mapState = (state) => ({
  meta: getMeta(state)
});

export default connect(mapState)(RadioCard);
