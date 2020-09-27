import React from 'react';
import { useSelector } from 'react-redux';
import get from 'lodash.get';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { PlayerStatus } from 'modules/player/constants';
import { useClickAction } from 'modules/player/hooks';
import {
  getMeta,
  getProgress,
  getSrc,
  getStatus
} from 'modules/player/selectors';
import { Text } from 'theme';
import DefaultCover from 'ui/static/images/default.png';

import StatusIndicator from './StatusIndicator';
import ProgressBar from './ProgressBar';

const { BUFFERING } = PlayerStatus;

const GlobalPlayerContainer = styled('div')(({ isVisible }) =>
  css({
    bg: 'bg',
    display: 'flex',
    alignItems: 'center',
    flexDirection: ['row-reverse', 'row'],
    justifyContent: 'space-between',
    height: 53,
    position: 'fixed',
    right: 0,
    bottom: ['calc(60px + env(safe-area-inset-bottom))', 0],
    left: 0,
    px: [0, 4],
    py: [0, 2],
    borderTop: 0,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
    transition: 'transform 150ms ease-out, opacity 150ms ease-out',
    width: '100%',
    zIndex: 2
  })
);

const StyledProgressBar = styled(ProgressBar)(
  css({
    display: ['none', 'block']
  })
);

const MetaContainer = styled('div')(
  css({
    display: 'flex',
    height: '100%',
    minWidth: [null, 300],
    position: ['absolute', 'relative'],
    left: 0,
    right: 0,
    bottom: 0
  })
);

const MetaImage = styled('img')(
  css({
    height: '100%',
    mr: [2, 3]
  })
);

const MetaContent = styled('div')(
  css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  })
);

const MetaTitle = styled(Text)(
  css({
    fontWeight: 'bold',
    lineHeight: 1,
    p: 0,
    whiteSpace: 'nowrap'
  })
);

const MetaArtist = styled(Text)(
  css({
    p: 0,
    whiteSpace: 'nowrap'
  })
);

// TODO: Dark mode fix for gradient.
const StatusIndicatorContainer = styled('div')(
  css({
    background: [
      'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%)',
      null
    ],
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    px: 4,
    zIndex: 1
  })
);

export function GlobalPlayer() {
  const meta = useSelector(getMeta);
  const progress = useSelector(getProgress);
  const src = useSelector(getSrc);
  const status = useSelector(getStatus);

  const onClickAction = useClickAction(src, meta);

  const { artist, cover, title } = meta;
  const duration = get(meta, 'duration', 0);
  const isVisible = status >= BUFFERING;

  return (
    <GlobalPlayerContainer isVisible={isVisible}>
      <StatusIndicatorContainer
        onClick={onClickAction}
        onTouchEnd={onClickAction}
      >
        <StatusIndicator color="black" size={20} status={status} />
      </StatusIndicatorContainer>
      <StyledProgressBar
        duration={duration}
        progress={progress}
        status={status}
      />
      <MetaContainer>
        <MetaImage src={cover || DefaultCover} />
        <MetaContent>
          <MetaTitle>{title}</MetaTitle>
          <MetaArtist>{artist}</MetaArtist>
        </MetaContent>
      </MetaContainer>
    </GlobalPlayerContainer>
  );
}
