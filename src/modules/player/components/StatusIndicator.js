import React, { useCallback } from 'react';
import { Box } from 'theme';
import Spinner from 'ui/components/Spinner';
import PlayIcon from 'ui/components/PlayIcon';
import PauseIcon from 'ui/components/PauseIcon';

import { PlayerStatus } from '../constants';

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
