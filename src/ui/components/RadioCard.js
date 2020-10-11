import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parseISO from 'date-fns/parseISO';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { setProgress, PlayerStatus } from 'modules/player';
import {
  useOnClick,
  useIsPlaying,
  usePlayerStatus
} from 'modules/player/hooks';
import { RadioUrl, selectRadioMeta } from 'modules/radio';
import { Card, Text } from 'theme';
import PauseIcon from 'ui/components/PauseIcon';
import PlayIcon from 'ui/components/PlayIcon';
import DefaultCover from 'ui/static/images/default.png';
import { useIsMouseOver } from '../../common/hooks/useIsMouseOver';

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
    fontWeight: 600,
    lineHeight: 1.25,
    pb: 0,
    pt: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  })
);

const RadioCardArtist = styled(Text)(
  css({
    fontSize: 4
  })
);

const OverlayPauseIcon = <PauseIcon color="white" size="50" />;

const OverlayPlayIcon = <PlayIcon color="white" size="50" />;

const RadioCard = () => {
  const containerRef = useRef(null);

  const dispatch = useDispatch();
  const meta = useSelector(selectRadioMeta);

  const isMouseOver = useIsMouseOver(containerRef);
  const isPlaying = useIsPlaying(RadioUrl);
  const playerStatus = usePlayerStatus();

  const _setProgress = () => {
    const currentTime = new Date().valueOf();
    const startedAt = parseISO(meta.started_at).valueOf();
    dispatch(setProgress(currentTime - startedAt));
  };
  const imageAlt = meta ? `${meta.artist} - ${meta.title}` : 'Loading...';

  const _onClick = useOnClick(RadioUrl, false);
  const onClick = () =>
    _onClick({
      ...meta,
      callback: _setProgress,
      duration: meta.duration * 1000
    });

  const renderOverlayContent = () => {
    if (!isPlaying) {
      return OverlayPlayIcon;
    }
    switch (playerStatus) {
      case PLAYING:
      case BUFFERING:
        return OverlayPauseIcon;
      default:
        return OverlayPlayIcon;
    }
  };

  return (
    <RadioCardContainer onClick={onClick} ref={containerRef}>
      <RadioCardHeader>
        <RadioCardImage src={meta?.cover ?? DefaultCover} alt={imageAlt} />
        <Card.Overlay force={!isPlaying || isMouseOver}>
          {renderOverlayContent()}
        </Card.Overlay>
      </RadioCardHeader>
      <RadioCardContent>
        <RadioCardTitle>{meta?.title ?? 'Loading...'}</RadioCardTitle>
        <RadioCardArtist>{meta?.artist ?? null}</RadioCardArtist>
      </RadioCardContent>
    </RadioCardContainer>
  );
};

export default RadioCard;
