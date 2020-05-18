import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';

import { FeatureCard } from '@/cards';
import LiveIcon from '@/common/components/LiveIcon';
import PauseIcon from '@/common/components/PauseIcon';
import PlayIcon from '@/common/components/PlayIcon';
import { useClickAction, useIsPlaying } from '@/player/hooks';
import DefaultCover from '@/static/images/default.png';
import { Box, Heading, Text } from '@/ui';

import { RadioUrl } from '../constants';
import { getMeta } from '../selectors';

const LiveBadgeContent = (
  <>
    <LiveIcon size={8} /> Live
  </>
);

const RadioCard = (props) => {
  const { meta } = props;

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
  const overlayContent = isPlaying ? (
    <PauseIcon {...iconProps} />
  ) : (
    <PlayIcon {...iconProps} />
  );

  const image = (
    <Box as="img" width={1} src={cover ?? DefaultCover} alt={imageAlt} />
  );

  return (
    <FeatureCard
      badgeColour="red"
      badgeContent={LiveBadgeContent}
      image={image}
      imageAlt={imageAlt}
      onClick={onClick}
      overlayContent={overlayContent}
    >
      <Heading as="h2">{title ?? 'Loading...'}</Heading>
      <Text fontSize={4}>{artist}</Text>
    </FeatureCard>
  );
};

const mapState = (state) => ({
  meta: getMeta(state)
});

export default connect(mapState)(RadioCard);
