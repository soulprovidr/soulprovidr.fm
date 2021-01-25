import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';

import { ProgressBar } from './ProgressBar';
import VolumeIcon from 'static/images/volume.svg';

const VolumeContainer = styled('div')(
  css({
    display: ['none', 'flex'],
    alignItems: 'center'
  })
);

const Icon = styled('img')(
  css({
    cursor: 'pointer',
    width: 20,
    height: 20,
    mr: 3,
    transition: 'transform 100ms ease-in-out',
    '&:hover': { transform: 'scale(1.1)' }
  })
);

const StyledProgressBar = styled(ProgressBar)`
  width: 85px;
`;

export const VolumeControl = ({ ...props }) => (
  <VolumeContainer {...props}>
    <Icon src={VolumeIcon} />
    <StyledProgressBar widthPercent={100} />
  </VolumeContainer>
);
