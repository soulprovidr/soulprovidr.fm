import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import css from '@styled-system/css';

import {
  mute,
  selectIsMuted,
  selectPlayerVolume,
  setVolume
} from 'modules/player';
import ProgressBar from './ProgressBar';
import MutedIcon from 'static/images/mute.svg';
import VolumeIcon from 'static/images/volume.svg';

const VolumeContainer = styled('div')`
  align-items: center;
  ${css({ display: ['none', 'flex'] })}
`;

const Icon = styled('img')`
  cursor: pointer;
  width: 20px;
  height: 20px;
  transition: 'transform 100ms ease-in-out';
  &:hover {
    transform: scale(1.1);
  }
  ${css({ mr: 3 })}
`;

const StyledProgressBar = styled(ProgressBar)`
  width: 85px;
`;

export const VolumeControl = ({
  isMuted,
  onProgressChange,
  onMute,
  volume,
  ...props
}) => (
  <VolumeContainer {...props}>
    <Icon
      onClick={() => onMute()}
      src={isMuted ? MutedIcon : VolumeIcon}
      style={{ opacity: isMuted ? 0.5 : 1 }}
    />
    <StyledProgressBar
      maxValue={1}
      onProgressChange={onProgressChange}
      value={volume}
    />
  </VolumeContainer>
);

const mapStateToProps = (state) => ({
  isMuted: selectIsMuted(state),
  volume: selectPlayerVolume(state)
});

const mapDispatchToProps = {
  onProgressChange: setVolume,
  onMute: mute
};

export default connect(mapStateToProps, mapDispatchToProps)(VolumeControl);
