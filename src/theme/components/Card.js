import React from 'react';

import { Badge } from './Badge';
import { Box } from './Box';

const transitionTimingFn = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';

const cardStyles = {
  position: 'relative',
  cursor: 'pointer',
  transition: `transform 200ms ${transitionTimingFn}`,
  '&:hover': {
    transform: 'translate3d(0, -2px, 0)'
  }
};

const badgeStyles = {
  position: 'absolute',
  top: 10,
  right: 10,
  zIndex: 1
};

const CardOverlay = ({ force = false, ...props }) => (
  <Box
    sx={{
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
    }}
    {...props}
  />
);

const CardImage = ({ children, ...props }) => (
  <Box position="relative">
    <Box
      as="img"
      borderRadius={0}
      verticalAlign="bottom"
      width={1}
      {...props}
    />
    {children}
  </Box>
);

const CardContainer = ({
  badgeColour,
  badgeText,
  children,
  image,
  onClick,
  overlayContent,
  sx = {},
  ...props
}) => {
  const customCardStyles = { ...cardStyles, ...sx };
  return (
    <Box onClick={onClick} sx={customCardStyles} {...props}>
      <Badge bg={badgeColour} sx={badgeStyles}>
        {badgeText}
      </Badge>
      <Box position="relative">
        {overlayContent && <CardOverlay>{overlayContent}</CardOverlay>}
        {image}
      </Box>
      {children && <Box py={2}>{children}</Box>}
    </Box>
  );
};

export const Card = {
  Container: CardContainer,
  Image: CardImage,
  Overlay: CardOverlay
};
