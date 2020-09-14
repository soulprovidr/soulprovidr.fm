import React from 'react';
import { useSelector } from 'react-redux';
import get from 'lodash.get';

import DefaultCover from '@/static/images/default.png';
import { RadioUrl, getMeta as getRadioMeta } from '@/modules/radio';
import { Box, Flex, Heading, Text } from '@/theme';

import { PlayerStatus } from '@/modules/player/constants';
import { useClickAction } from '@/modules/player/hooks';
import StatusIndicator from '@/modules/player/components/StatusIndicator';

const { BUFFERING, PLAYING } = PlayerStatus;

const StyledPlayerCard = (props) => (
  <Flex
    sx={{
      cursor: 'pointer',
      flexDirection: ['column', 'row']
    }}
    {...props}
  />
);

const PlayerCard = (props) => {
  const meta = useSelector(getRadioMeta);
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
    mr: [0, 4]
  };
  const image = (
    <Box as="img" src={cover ?? DefaultCover} alt={imageAlt} sx={imageStyles} />
  );

  return (
    <StyledPlayerCard onClick={onClick}>
      <Box width={[1, 1 / 3]}>{image}</Box>
      <Flex
        flexDirection="column"
        justifyContent="center"
        overflow="hidden"
        ml={[0, 5]}
        mt={3}
        width={[1, 2 / 3]}
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
    </StyledPlayerCard>
  );
};

export default PlayerCard;
