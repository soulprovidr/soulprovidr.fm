import { variant } from 'styled-system';
import css from '@styled-system/css';
import styled from '@emotion/styled';

export const Button = styled('button')(
  css({
    border: 'none',
    borderRadius: 1,
    py: [3, 2],
    px: 3
  }),
  variant({
    variants: {
      primary: {
        bg: '#007bff',
        color: 'white'
      },
      inverted: {
        bg: 'white',
        color: '#007bff'
      }
    }
  })
);
