import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Text } from 'theme';
import { PlayerStatus } from 'modules/player';
import { ProgressBar } from './ProgressBar';

const { BUFFERING } = PlayerStatus;

// https://stackoverflow.com/a/9763769
const msToTime = (ms) => {
  // Pad to 2 or 3 digits, default is 2
  if (!ms) {
    return '--:--:--';
  }
  const pad = (n, z = 2) => ('00' + n).slice(-z);
  return (
    pad((ms / 3.6e6) | 0) +
    ':' +
    pad(((ms % 3.6e6) / 6e4) | 0) +
    ':' +
    pad(((ms % 6e4) / 1000) | 0)
  );
};

const PlayerProgressContainer = styled('div')(
  css({
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    position: ['absolute', 'initial'],
    bottom: 0,
    left: 52,
    right: 0,
    zIndex: 1
  })
);

const PlayerProgressText = styled(Text)(({ orientation = 'left' }) =>
  css({
    color: 'text.secondary',
    display: ['none', 'block'],
    fontSize: 2,
    ml: orientation === 'left' ? 0 : 3,
    mr: orientation === 'right' ? 0 : 3,
    p: 0,
    textAlign: 'center',
    width: 90
  })
);

export function PlayerProgress({ duration, progress, status, ...props }) {
  const widthPercent = duration
    ? Math.min(100, (progress / duration) * 100)
    : status <= BUFFERING
    ? 0
    : 100;
  return (
    <PlayerProgressContainer {...props}>
      <PlayerProgressText orientation="left">
        {msToTime(progress)}
      </PlayerProgressText>
      <ProgressBar widthPercent={widthPercent} />
      <PlayerProgressText orientation="right">
        {msToTime(duration)}
      </PlayerProgressText>
    </PlayerProgressContainer>
  );
}
