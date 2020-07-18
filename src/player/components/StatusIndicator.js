import React, { useCallback } from 'react';

import { PlayerStatus } from '@/player/constants';

import Spinner from '@/common/components/Spinner';
import PlayIcon from '@/common/components/PlayIcon';
import PauseIcon from '@/common/components/PauseIcon';

import { Box } from '@/ui';

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
