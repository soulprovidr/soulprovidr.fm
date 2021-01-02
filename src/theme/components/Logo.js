import styled from '@emotion/styled';
import css from '@styled-system/css';
import { flexbox, layout, space } from 'styled-system';

import LogoImage from 'static/images/logo.svg';

export const Logo = styled('div')(
  ({ size = 45 }) =>
    css({
      backgroundImage: `url(${LogoImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      borderRadius: '50%',
      height: size,
      width: size,
      verticalAlign: 'middle'
    }),
  flexbox,
  layout,
  space
);
