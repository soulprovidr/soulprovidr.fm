import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import get from 'lodash.get';
import { PlayerStatus } from 'modules/player/constants';
import {
  useClickAction,
  useIsPlaying,
  usePlayerStatus
} from 'modules/player/hooks';
import StatusIndicator from 'modules/player/components/StatusIndicator';
import { RadioUrl, getMeta as getRadioMeta } from 'modules/radio';
import { Box, Card, Flex, Heading, Text } from 'theme';
import PauseIcon from 'ui/components/PauseIcon';
import PlayIcon from 'ui/components/PlayIcon';
import DefaultCover from 'ui/static/images/default.png';
import useIsMouseOver from '../../common/hooks/useIsMouseOver';

const { BUFFERING, PLAYING } = PlayerStatus;

const transitionStyles = {
  transition: 'transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  '&:hover': {
    transform: 'translate3d(0, -2px, 0)'
  }
};

const StyledRadioCard = React.forwardRef((props, ref) => (
  <Flex
    flexDirection={['column', 'row']}
    sx={{
      cursor: 'pointer',
      ...transitionStyles
    }}
    ref={ref}
    {...props}
  />
));

const StyledRadioCardImage = ({ alt, src, ...props }) => (
  <Box mr={[0, 5]} width={[1, 1 / 3]}>
    <Card.Image alt={alt} src={src} {...props} />
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
  const containerRef = useRef(null);

  const meta = useSelector(getRadioMeta);
  const isMouseOver = useIsMouseOver(containerRef);
  const isPlaying = useIsPlaying(RadioUrl);
  const playerStatus = usePlayerStatus();

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

  const renderOverlayContent = () => {
    switch (playerStatus) {
      case PLAYING:
      case BUFFERING:
        return <PauseIcon color="white" size="50" />;
      default:
        return <PlayIcon color="white" size="50" />;
    }
  };

  return (
    <StyledRadioCard onClick={onClick} ref={containerRef}>
      <StyledRadioCardImage src={cover ?? DefaultCover} alt={imageAlt}>
        <Card.Overlay force={!isPlaying || isMouseOver}>
          {renderOverlayContent()}
        </Card.Overlay>
      </StyledRadioCardImage>
      <StyledRadioCardContent>
        <StyledRadioCardTitle>{title ?? 'Loading...'}</StyledRadioCardTitle>
        <Text fontSize={5}>{artist}</Text>
      </StyledRadioCardContent>
    </StyledRadioCard>
  );
};

export default RadioCard;
