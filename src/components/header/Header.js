import React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import css from '@styled-system/css';

import {
  Flex,
  Heading,
  Logo,
  useIsDarkModeEnabled,
  useToggleDarkMode
} from 'theme';

import { Links } from './Links';
import { Icons } from './Icons';

const StyledHeader = styled('header')(
  css({
    bg: '--color-bg',
    borderBottom: ['container', null],
    fontFamily: 'heading',
    position: ['fixed', 'relative'],
    top: 0,
    right: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: [3, 5],
    py: [2, 4],
    zIndex: 3,
    'a, a:active, a:visited': {
      color: 'var(--color-text-primary)'
    },
    'a:hover': {
      textDecoration: 'none'
    }
  })
);

const StyledLogo = styled(Logo)`
  cursor: pointer;
`;

const HeaderNavigation = styled('div')(
  css({
    display: ['none', 'flex']
  })
);

const HeaderIcons = styled(Icons)(
  css({
    display: ['none', null, null, 'flex']
  })
);

export const HeaderLinks = styled(Links)(
  css({
    bg: '--color-bg',
    borderTop: ['container', 'none'],
    alignItems: 'center',
    justifyContent: 'center',
    ml: [0, 4],
    height: ['calc(60px + env(safe-area-inset-bottom))', null],
    position: ['fixed', 'relative'],
    bottom: 0,
    right: 0,
    left: 0,
    pb: ['env(safe-area-inset-bottom)', 0],
    zIndex: [3, null],
    WebkitTransform: 'translate3d(0,0,0)'
  })
);

export const Header = () => {
  const isDarkModeEnabled = useIsDarkModeEnabled();
  const onLogoClick = useToggleDarkMode();
  return (
    <StyledHeader>
      <Flex alignItems="center">
        <StyledLogo
          mr={3}
          size={35}
          dark={isDarkModeEnabled}
          onClick={onLogoClick}
        />
        <Heading as="h3" p={0}>
          <Link to="/">SOUL PROVIDER</Link>
        </Heading>
      </Flex>
      <HeaderNavigation>
        <HeaderIcons />
        <HeaderLinks />
      </HeaderNavigation>
    </StyledHeader>
  );
};
