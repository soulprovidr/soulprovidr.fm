import React from 'react';
import { Box, Spinner } from 'theme';
import PlayIcon from 'ui/components/PlayIcon';
import PauseIcon from 'ui/components/PauseIcon';

import { PlayerStatus } from '../constants';

const { BUFFERING, PLAYING } = PlayerStatus;

export default function StatusIndicator({
  color = 'white',
  onClick,
  size,
  status,
  ...props
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
      {...props}
    >
      {renderStatusIcon()}
    </Box>
  );
}
