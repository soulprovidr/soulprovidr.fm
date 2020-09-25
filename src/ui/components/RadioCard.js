import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import get from 'lodash.get';
import { PlayerStatus } from 'modules/player/constants';
import {
  useClickAction,
  useIsPlaying,
  usePlayerStatus
} from 'modules/player/hooks';
import { RadioUrl, getMeta as getRadioMeta } from 'modules/radio';
import { Card, Heading, Text } from 'theme';
import PauseIcon from 'ui/components/PauseIcon';
import PlayIcon from 'ui/components/PlayIcon';
import DefaultCover from 'ui/static/images/default.png';
import useIsMouseOver from '../../common/hooks/useIsMouseOver';

const { BUFFERING, PLAYING } = PlayerStatus;

const RadioCardContainer = styled(Card.Container)(
  css({
    display: 'flex',
    flexDirection: ['column', 'row']
  })
);

const RadioCardHeader = styled(Card.Header)(
  css({
    mr: [0, 5],
    width: ['100%', '33%']
  })
);

const RadioCardImage = styled('img')(
  css({
    borderRadius: 1,
    verticalAlign: 'bottom',
    width: '100%'
  })
);

const RadioCardContent = styled('div')(
  css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    mt: 3,
    width: ['100%', '66%']
  })
);

const RadioCardTitle = styled(Text)(
  css({
    fontSize: [5, 6],
    fontWeight: 'bold',
    lineHeight: 1.25,
    py: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  })
);

const RadioCardArtist = styled(Text)(
  css({
    fontSize: 4
  })
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
    <RadioCardContainer onClick={onClick} ref={containerRef}>
      <RadioCardHeader>
        <RadioCardImage src={cover ?? DefaultCover} alt={imageAlt} />
        <Card.Overlay force={!isPlaying || isMouseOver}>
          {renderOverlayContent()}
        </Card.Overlay>
      </RadioCardHeader>
      <RadioCardContent>
        <RadioCardTitle>{title ?? 'Loading...'}</RadioCardTitle>
        <RadioCardArtist>{artist}</RadioCardArtist>
      </RadioCardContent>
    </RadioCardContainer>
  );
};

export default RadioCard;
