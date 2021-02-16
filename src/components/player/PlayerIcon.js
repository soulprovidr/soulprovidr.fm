import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box, Spinner } from 'theme';
import { PlayerStatus, useIsListening, usePlayerStatus } from 'modules/player';
import PlayIcon from 'components/PlayIcon';
import PauseIcon from 'components/PauseIcon';

const { BUFFERING, PLAYING } = PlayerStatus;

const StyledPlayerIcon = styled(Box)(
  css({
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })
);

function PlayerIcon({ color = 'white', onClick, size, src = null, ...props }) {
  const isSelected = useIsListening(src);
  const playerStatus = usePlayerStatus();
  const renderIcon = () => {
    if (isSelected || !src) {
      switch (playerStatus) {
        case BUFFERING:
          return <Spinner color={color} size={size} />;
        case PLAYING:
          return <PauseIcon color={color} onClick={onClick} size={size} />;
      }
    }
    return <PlayIcon color={color} onClick={onClick} size={size} />;
  };
  return <StyledPlayerIcon {...props}>{renderIcon()}</StyledPlayerIcon>;
}

export default PlayerIcon;
