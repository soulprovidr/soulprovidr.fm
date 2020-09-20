import React from 'react';
import css from '@styled-system/css';
import styled from '@emotion/styled';

import { Badge } from './Badge';
import { Box } from './Box';

const transitionTimingFn = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';

const CardBadge = styled(Badge)(
  css({
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1
  })
);

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
    zIndex: 1,
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

const CardImage = ({ children, ...props }) => (
  <CardHeader>
    <Box
      as="img"
      borderRadius={0}
      verticalAlign="bottom"
      width={1}
      {...props}
    />
    {children}
  </CardHeader>
);

const CardOld = ({
  badgeColour,
  badgeText,
  children,
  image,
  onClick,
  overlayContent
}) => {
  return (
    <CardContainer onClick={onClick}>
      <CardBadge bg={badgeColour}>{badgeText}</CardBadge>
      <Box position="relative">
        {overlayContent && <CardOverlay>{overlayContent}</CardOverlay>}
        {image}
      </Box>
      {children && <Box py={2}>{children}</Box>}
    </CardContainer>
  );
};

export const Card = {
  Old: CardOld,
  Container: CardContainer,
  Header: CardHeader,
  Image: CardImage,
  Overlay: CardOverlay
};
