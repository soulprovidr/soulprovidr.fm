import React from 'react';
import { useSelector } from 'react-redux';
import get from 'lodash.get';
import { useLocation } from '@reach/router';

import { PlayerStatus } from '@/player/constants';
import { useClickAction } from '@/player/hooks';
import { getMeta, getProgress, getSrc, getStatus } from '@/player/selectors';
import { Box, Flex } from '@/ui';

import StatusIndicator from './StatusIndicator';
import Meta from './Meta';
import ProgressBar from './ProgressBar';

const { BUFFERING } = PlayerStatus;

function StaticPlayer() {
  const meta = useSelector(getMeta);
  const progress = useSelector(getProgress);
  const src = useSelector(getSrc);
  const status = useSelector(getStatus);

  const onClickAction = useClickAction(src, meta);
  const location = useLocation();

  const duration = get(meta, 'duration', 0);
  const isVisible = status >= BUFFERING && location.pathname !== '/';

  return (
    <Box
      position="fixed"
      right={0}
      bottom={0}
      left={0}
      px={4}
      py={2}
      bg="white"
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 150ms ease-out, opacity 150ms ease-out',
        zIndex: 3
      }}
    >
      <Flex
        alignItems="center"
        flexDirection={['row-reverse', 'row']}
        justifyContent="space-between"
        mx="auto"
        width={[1, null, 960, 1140]}
      >
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

export default StaticPlayer;
