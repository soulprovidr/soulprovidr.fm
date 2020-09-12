import React from 'react';

import { PlayerStatus } from '@/modules/player/constants';
import msToTime from '@/modules/player/helpers/msToTime';
import { Flex, Text } from '@/theme';

const { BUFFERING } = PlayerStatus;

const ProgressText = ({ children, ...props }) => (
  <Text color="#6c757d" width="90px" fontSize={2} {...props}>
    {children}
  </Text>
);

export default function ProgressBar({ duration, progress, status }) {
  const widthPercent = duration
    ? Math.min(100, (progress / duration) * 100)
    : status <= BUFFERING
    ? 0
    : 100;
  return (
    <Flex alignItems="center" flexGrow={1}>
      <ProgressText mr={3} textAlign="left">
        {msToTime(progress)}
      </ProgressText>
      <Flex bg="#ddd" height="5px" width={1}>
        <Flex
          className="progress-bar progress-bar-striped progress-bar-animated"
          height="100%"
          width={`${widthPercent}%`}
          sx={{
            transitionDuration: '0.3s !important'
          }}
        />
      </Flex>
      <ProgressText ml={3} textAlign="right">
        {msToTime(duration)}
      </ProgressText>
    </Flex>
  );
}
