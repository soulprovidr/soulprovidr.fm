import React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box } from 'theme';

import LiveIcon from '../LiveIcon';

const links = [
  {
    to: '/',
    children: (
      <>
        <LiveIcon size={8} color="red" />
        <Box as="span" ml={2}>
          Live
        </Box>
      </>
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

const StyledLinks = styled.nav`
  display: flex;
`;

const StyledLink = styled(Link)`
  align-items: center;
  display: flex;
  font-weight: 500;
  height: 100%;
  text-transform: uppercase;
  ${css({
    mr: [5, 4],
    '&:last-of-type': {
      mr: 0
    }
  })}
  &.active {
    font-weight: 700;
  }
  &:hover {
    text-decoration: none;
  }
`;

export const Links = (props) => (
  <StyledLinks {...props}>
    {links.map((link) => (
      <StyledLink activeClassName="active" key={link.to} {...link} />
    ))}
  </StyledLinks>
);
