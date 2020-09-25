import styled from '@emotion/styled';
import css from '@styled-system/css';

export const Container = styled('div')(
  css({
    maxWidth: [540, 720, 960, 1140],
    mx: 'auto',
    px: [2, 4]
  })
);
