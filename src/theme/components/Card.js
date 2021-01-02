import css from '@styled-system/css';
import styled from '@emotion/styled';

const transitionTimingFn = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';

const CardContainer = styled('div')(
  css({
    cursor: 'pointer',
    position: 'relative',
    transition: `transform 200ms ${transitionTimingFn}`,
    '&:hover': {
      transform: 'translate3d(0, -2px, 0)'
    }
  })
);

const CardOverlay = styled('div')(({ force = false }) =>
  css({
    bg: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 0,
    transition: `opacity 200ms ${transitionTimingFn}`,
    opacity: force ? 1 : 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      opacity: 1
    }
  })
);

const CardHeader = styled('div')({ position: 'relative' });

export const Card = {
  Container: CardContainer,
  Header: CardHeader,
  Overlay: CardOverlay
};
