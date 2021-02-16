import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { PlayerStatus } from 'modules/player/constants';
import { useListen } from 'modules/player/hooks';
import { usePlayerMeta, usePlayerSrc, usePlayerStatus } from 'modules/player';

import PlayerIcon from './PlayerIcon';
import PlayerMeta from './PlayerMeta';
import PlayerProgress from './PlayerProgress';
import VolumeControl from './VolumeControl';

const { BUFFERING } = PlayerStatus;

const PlayerContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 53px;
  position: fixed;
  right: 0;
  left: 0;
  transition: transform 150ms ease-out, opacity 150ms ease-out;
  width: 100%;
  z-index: 2;
  ${({ isVisible = false }) =>
    css({
      bg: 'bg',
      flexDirection: ['row-reverse', 'row'],
      bottom: ['calc(60px + env(safe-area-inset-bottom))', 0],
      px: [0, 4],
      py: [0, 2],
      borderTop: 'container',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(100%)'
    })}
`;

// TODO: Dark mode fix for gradient.
const PlayerIconContainer = styled('div')`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  ${css({
    background: [
      'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%)',
      null
    ],
    px: 4
  })}
`;

const StyledVolumeControl = styled(VolumeControl)`
  ${css({ mx: 3 })}
`;

export const Player = () => {
  const meta = usePlayerMeta();
  const src = usePlayerSrc();
  const status = usePlayerStatus();

  const isVisible = status >= BUFFERING || false;
  const listen = useListen(src, meta);
  const onClick = () => listen();

  return (
    <PlayerContainer isVisible={isVisible}>
      <PlayerIconContainer onClick={onClick} onTouchEnd={onClick}>
        <PlayerIcon color="black" size={20} />
      </PlayerIconContainer>
      <PlayerProgress />
      <StyledVolumeControl />
      <PlayerMeta />
    </PlayerContainer>
  );
};
