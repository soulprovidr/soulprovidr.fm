import styled from '@emotion/styled';
import { space } from 'styled-system';
import css from '@styled-system/css';

export const Text = styled('p')(
  ({
    bg = 'transparent',
    color = 'var(--color-text-primary)',
    fontSize = '1em',
    lineHeight = '1.5'
  }) =>
    css({
      bg,
      color,
      fontSize,
      lineHeight,
      m: 0,
      pb: 3
    }),
  space
);
