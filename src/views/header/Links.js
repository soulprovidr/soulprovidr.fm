import React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box, Flex } from 'theme';

import LiveIcon from '../components/LiveIcon';

const links = [
  {
    to: '/',
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
    to: '/mixtapes',
    children: 'Mixtapes',
    partiallyActive: true
  },
  {
    to: '/about',
    children: 'About'
  }
];

const StyledLinks = styled('nav')({
  display: 'flex'
});

const LinkContainer = styled('div')(
  css({
    display: 'inline-block',
    pr: [5, 4],
    '&:last-of-type': {
      pr: 0
    }
  })
);

const StyledLink = styled(Link)({
  fontWeight: 500,
  textTransform: 'uppercase',
  '&.active': {
    fontWeight: 700
  },
  '&:hover': {
    textDecoration: 'none'
  }
});

export const Links = (props) => (
  <StyledLinks {...props}>
    {links.map((link) => (
      <LinkContainer key={link.to}>
        <StyledLink activeClassName="active" {...link} />
      </LinkContainer>
    ))}
  </StyledLinks>
);
