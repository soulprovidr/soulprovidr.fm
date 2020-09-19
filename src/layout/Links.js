import React from 'react';
import Link from 'gatsby-link';

import LiveIcon from '@/components/LiveIcon';
import { Box, Flex } from '@/theme';

const links = [
  {
    href: '/',
    children: (
      <Flex alignItems="center">
        <LiveIcon size={8} color="red" />
        <Box as="span" ml={2}>
          Live
        </Box>
      </Flex>
    )
  },
  {
    href: '/mixtapes',
    children: 'Mixtapes'
  },
  {
    href: '/faq',
    children: 'FAQ'
  }
];

const StyledLink = ({ children, href }) => (
  <Box
    key={href}
    sx={{
      display: 'inline-block',
      pr: 4,
      '&:last-of-type': {
        pr: 0
      }
    }}
  >
    <Box
      as={Link}
      to={href}
      sx={{
        fontWeight: 600,
        textTransform: 'uppercase'
      }}
    >
      {children}
    </Box>
  </Box>
);

export const Links = () =>
  links.map((link) => (
    <StyledLink key={link.href} href={link.href}>
      {link.children}
    </StyledLink>
  ));
