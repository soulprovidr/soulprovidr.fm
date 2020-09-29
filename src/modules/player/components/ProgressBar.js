import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Flex, Text } from 'theme';

import { PlayerStatus } from '../constants';
import msToTime from '../helpers/msToTime';

const { BUFFERING } = PlayerStatus;

const ProgressBarContainer = styled('div')(
  css({
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1
  })
);

const ProgressText = styled(Text)(({ orientation = 'left' }) =>
  css({
    color: 'textSecondary',
    fontSize: 2,
    ml: orientation === 'left' ? 0 : 3,
    mr: orientation === 'right' ? 0 : 3,
    p: 0,
    textAlign: 'center',
    width: 90
  })
);

export default function ProgressBar({ duration, progress, status, ...props }) {
  const widthPercent = duration
    ? Math.min(100, (progress / duration) * 100)
    : status <= BUFFERING
    ? 0
    : 100;
  return (
    <ProgressBarContainer {...props}>
      <ProgressText orientation="left">{msToTime(progress)}</ProgressText>
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
      <ProgressText orientation="right">{msToTime(duration)}</ProgressText>
    </ProgressBarContainer>
  );
}
