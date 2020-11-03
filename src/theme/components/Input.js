import styled from '@emotion/styled';
import css from '@styled-system/css';

export const Input = styled('input')(({ error }) =>
  css({
    border: error ? 'error' : 'input',
    borderRadius: 4,
    fontFamily: 'body',
    fontSize: '1em',
    height: 40,
    px: 3,
    py: [3, 2],
    outline: 'none',
    '&:focus': {
      border: 'focus'
    }
  })
);
