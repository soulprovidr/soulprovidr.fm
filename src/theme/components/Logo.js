import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { flexbox, layout, space } from 'styled-system';

import LogoImage from 'static/images/logo.svg';
import LogoDarkImage from 'static/images/logo-dark.svg';

const LogoWrapper = styled('div')(
  ({ dark = false, size = 45 }) =>
    css({
      backgroundImage: `url(${dark ? LogoDarkImage : LogoImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      borderRadius: '50%',
      height: size,
      width: size,
      verticalAlign: 'middle'
    }),
  flexbox,
  layout,
  space,
  `
    svg {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  `
);

export const Logo = ({ dark = false, size = 45, ...props }) => (
  <LogoWrapper size={size} {...props}>
    {dark ? <LogoDarkImage /> : <LogoImage />}
  </LogoWrapper>
);
