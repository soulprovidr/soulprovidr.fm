import React from 'react';
import { useSelector } from 'react-redux';
import get from 'lodash.get';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { PlayerStatus } from 'modules/player/constants';
import { useListen } from 'modules/player/hooks';
import {
  selectPlayerMeta,
  selectPlayerProgress,
  selectPlayerSrc,
  selectPlayerStatus
} from 'modules/player/selectors';
import { Text } from 'theme';
import DefaultCover from 'static/images/default.png';

import { PlayerIcon } from './PlayerIcon';
import ProgressBar from './ProgressBar';

const { BUFFERING } = PlayerStatus;

const PlayerContainer = styled('div')(({ isVisible = false }) =>
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
    borderTop: 'container',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
    transition: 'transform 150ms ease-out, opacity 150ms ease-out',
    width: '100%',
    zIndex: 2
  })
);

const MetaContainer = styled('div')(
  css({
    display: 'flex',
    height: '100%',
    minWidth: [null, 300],
    ml: [0, 3],
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
    justifyContent: 'center',
    pb: [1, 0]
  })
);

const MetaTitle = styled(Text)(
  css({
    fontWeight: 'bold',
    lineHeight: 1.25,
    p: 0,
    whiteSpace: 'nowrap'
  })
);

const MetaArtist = styled(Text)(
  css({
    p: 0,
    fontSize: 2,
    whiteSpace: 'nowrap'
  })
);

// TODO: Dark mode fix for gradient.
const PlayerIconContainer = styled('div')(
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

export const Player = () => {
  const meta = useSelector(selectPlayerMeta);
  const progress = useSelector(selectPlayerProgress);
  const src = useSelector(selectPlayerSrc);
  const status = useSelector(selectPlayerStatus);

  const onClickAction = useListen(src, meta);

  const { artist, cover, title } = meta;
  const duration = get(meta, 'duration', 0);
  const isVisible = status >= BUFFERING || false;

  return (
    <PlayerContainer isVisible={isVisible}>
      <PlayerIconContainer onClick={onClickAction} onTouchEnd={onClickAction}>
        <PlayerIcon color="black" size={20} />
      </PlayerIconContainer>
      <ProgressBar duration={duration} progress={progress} status={status} />
      <MetaContainer>
        <MetaImage src={cover || DefaultCover} />
        <MetaContent>
          <MetaTitle>{title}</MetaTitle>
          <MetaArtist>{artist}</MetaArtist>
        </MetaContent>
      </MetaContainer>
    </PlayerContainer>
  );
};
