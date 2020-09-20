import styled from '@emotion/styled';
import css from '@styled-system/css';

export const Badge = styled('div')(({ bg = 'grey', color = 'white' }) =>
  css({
    alignItems: 'center',
    bg,
    display: 'flex',
    borderRadius: 0,
    color,
    fontFamily: 'heading',
    fontSize: 1,
    fontWeight: 'bold',
    px: 2,
    py: 1,
    textTransform: 'uppercase'
  })
);
