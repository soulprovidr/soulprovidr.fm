import React, { useCallback } from 'react';

import { PlayerStatus } from '@/modules/player/constants';

import Spinner from '@/components/Spinner';
import PlayIcon from '@/components/PlayIcon';
import PauseIcon from '@/components/PauseIcon';

import { Box } from '@/theme';

const { BUFFERING, PLAYING } = PlayerStatus;

export default function StatusIndicator({
  color = 'white',
  onClick,
  size,
  status
}) {
  const renderStatusIcon = () => {
    switch (status) {
      case BUFFERING:
        return <Spinner size={size} />;
      case PLAYING:
        return <PauseIcon color={color} onClick={onClick} size={size} />;
      default:
        return <PlayIcon color={color} onClick={onClick} size={size} />;
    }
  };
  return (
    <Box
      sx={{
        cursor: 'pointer',
        width: size
      }}
    >
      {renderStatusIcon()}
    </Box>
  );
}
