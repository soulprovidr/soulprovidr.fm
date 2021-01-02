import { variant } from 'styled-system';
import css from '@styled-system/css';
import styled from '@emotion/styled';

const getStylesForSize = (size) => {
  switch (size) {
    case 'sm':
      return {
        height: 35,
        fontSize: '0.8em',
        px: 2
      };
    default:
      return {
        height: 40,
        fontSize: 3,
        px: 3
      };
  }
};

export const Button = styled('button')(
  ({ size = 'md' }) =>
    css({
      border: 'none',
      borderRadius: 1,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: 1,
      '&:disabled': {
        opacity: 0.4
      },
      ...getStylesForSize(size)
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
