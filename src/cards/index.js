import React from 'react';
import css from '@styled-system/css';

import { Badge, Box } from '@/ui';

export const Card = ({ children, ...props }) => (
  <Box
    border={0}
    borderColor="border"
    borderRadius={0}
    // boxShadow={0}
    position="relative"
    css={css({
      transition:
        'transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      '&:hover': {
        boxShadow: 0,
        transform: 'translate3d(0, -2px, 0)'
      }
    })}
    {...props}
  >
    {children}
  </Box>
);

export const CardBadge = ({ children, ...props }) => (
  <Badge position="absolute" top={10} right={10} zIndex={1} {...props}>
    {children}
  </Badge>
);
