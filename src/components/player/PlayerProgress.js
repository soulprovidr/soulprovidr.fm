import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Text } from 'theme';
import { PlayerStatus } from 'modules/player';
import ProgressBar from './ProgressBar';
import {
  usePlayerMeta,
  usePlayerProgress,
  usePlayerStatus
} from '@/modules/player';

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

const PlayerProgressContainer = styled('div')`
  display: flex;
  align-items: center;
  flex-grow: 1;
  bottom: 0;
  left: 52px;
  right: 0;
  z-index: 1;
  ${css({ position: ['absolute', 'initial'] })}
`;

const PlayerProgressText = styled(Text)`
  text-align: center;
  width: 90px;
  ${({ orientation = 'left' }) =>
    css({
      color: 'text.secondary',
      display: ['none', 'block'],
      fontSize: 2,
      ml: orientation === 'left' ? 0 : 3,
      mr: orientation === 'right' ? 0 : 3,
      p: 0
    })}
`;

function PlayerProgress({ ...props }) {
  const { duration = 0 } = usePlayerMeta();
  const playerProgress = usePlayerProgress();
  const playerStatus = usePlayerStatus();
  const progressValue = duration
    ? Math.min(1, playerProgress / duration)
    : playerStatus <= BUFFERING
    ? 0
    : 1;
  return (
    <PlayerProgressContainer {...props}>
      <PlayerProgressText orientation="left">
        {msToTime(playerProgress)}
      </PlayerProgressText>
      <ProgressBar maxValue={1} value={progressValue} />
      <PlayerProgressText orientation="right">
        {msToTime(duration)}
      </PlayerProgressText>
    </PlayerProgressContainer>
  );
}

export default PlayerProgress;
