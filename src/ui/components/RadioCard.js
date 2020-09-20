import React from 'react';
import { useSelector } from 'react-redux';
import get from 'lodash.get';
import { PlayerStatus } from 'modules/player/constants';
import { useClickAction } from 'modules/player/hooks';
import StatusIndicator from 'modules/player/components/StatusIndicator';
import { RadioUrl, getMeta as getRadioMeta } from 'modules/radio';
import { Box, Flex, Heading, Text } from 'theme';
import DefaultCover from 'ui/static/images/default.png';

const { BUFFERING, PLAYING } = PlayerStatus;

const transitionStyles = {
  transition: 'transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  '&:hover': {
    transform: 'translate3d(0, -2px, 0)'
  }
};

const StyledRadioCard = (props) => (
  <Flex
    flexDirection={['column', 'row']}
    sx={{
      cursor: 'pointer',
      ...transitionStyles
    }}
    {...props}
  />
);

const StyledRadioCardImage = (props) => (
  <Box mr={[0, 5]} width={[1, 1 / 3]}>
    <Box as="img" borderRadius={0} width={1} {...props} />
  </Box>
);

const StyledRadioCardContent = (props) => (
  <Flex
    flexDirection="column"
    justifyContent="center"
    overflow="hidden"
    mt={3}
    width={[1, 2 / 3]}
    {...props}
  />
);

const StyledRadioCardTitle = (props) => (
  <Heading
    as="h1"
    pb={1}
    sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
    {...props}
  />
);

const RadioCard = () => {
  const meta = useSelector(getRadioMeta);

  const getMetaProperty = (property) => get(meta, property, null);
  const artist = getMetaProperty('artist');
  const cover = getMetaProperty('cover');
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

  return (
    <StyledRadioCard onClick={onClick}>
      <StyledRadioCardImage src={cover ?? DefaultCover} alt={imageAlt} />
      <StyledRadioCardContent>
        <StyledRadioCardTitle>{title ?? 'Loading...'}</StyledRadioCardTitle>
        <Text fontSize={5}>{artist}</Text>
      </StyledRadioCardContent>
    </StyledRadioCard>
  );
};

export default RadioCard;
