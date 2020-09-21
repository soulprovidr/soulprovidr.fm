import React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box, Flex } from 'theme';

import LiveIcon from '../components/LiveIcon';

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

const LinkContainer = styled('div')(
  css({
    display: 'inline-block',
    pr: 4,
    '&:last-of-type': {
      pr: 0
    }
  })
);

const StyledLink = styled(Link)({
  fontWeight: 600,
  textTransform: 'uppercase'
});

export const Links = (props) => (
  <Flex {...props}>
    {links.map((link) => (
      <LinkContainer key={link.href}>
        <StyledLink to={link.href}>{link.children}</StyledLink>
      </LinkContainer>
    ))}
  </Flex>
);
