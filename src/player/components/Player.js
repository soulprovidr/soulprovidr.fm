import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';

import { PlayerStatus } from '@/player/constants';
import { useClickAction } from '@/player/hooks';
import { getMeta, getProgress, getSrc, getStatus } from '@/player/selectors';
import { Box, Flex } from '@/ui';

import StatusIndicator from './StatusIndicator';
import Meta from './Meta';
import ProgressBar from './ProgressBar';

const { BUFFERING } = PlayerStatus;

const playerStyles = {
  position: 'fixed',
  right: 0,
  bottom: 0,
  left: 0,
  px: 4,
  py: 2,
  bg: 'white',
  zIndex: 3,
  transition: 'transform 150ms ease-out, opacity 150ms ease-out'
};

const containerStyles = {
  flexDirection: ['row-reverse', 'row'],
  justifyContent: 'space-between',
  alignItems: 'center',
  mx: 'auto',
  width: [1, null, 960, 1140]
};

function Player({ meta, progress, src, status }) {
  const duration = get(meta, 'duration', 0);
  const onClickAction = useClickAction(src, meta);
  const isVisible = status >= BUFFERING;

  return (
    <Box
      sx={playerStyles}
      css={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)'
      }}
    >
      <Flex sx={containerStyles}>
        <StatusIndicator
          color="black"
          onClick={onClickAction}
          size={20}
          status={status}
        />
        <ProgressBar duration={duration} progress={progress} status={status} />
        <Meta meta={meta} />
      </Flex>
    </Box>
  );
}

const mapState = (state) => ({
  meta: getMeta(state),
  progress: getProgress(state),
  src: getSrc(state),
  status: getStatus(state)
});

export default connect(mapState)(Player);
