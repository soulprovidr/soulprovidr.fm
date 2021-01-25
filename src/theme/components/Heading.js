import styled from '@emotion/styled';
import css from '@styled-system/css';
import { space } from 'styled-system';

export const Heading = styled('h1')(
  ({
    bg = 'transparent',
    color = 'var(--color-text-primary)',
    lineHeight = '1.5'
  }) =>
    css({
      bg,
      color,
      lineHeight,
      pb: 3,
      m: 0
    }),
  space
);
