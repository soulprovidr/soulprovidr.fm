import React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import css from '@styled-system/css';

import { Flex, Heading, Logo } from 'theme';

import { Links } from './Links';
import { Icons } from './Icons';

const HeaderContainer = styled('header')(
  css({
    bg: 'bg',
    borderBottom: [0, null],
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
      color: 'textPrimary'
    }
  })
);

const HeaderNavigation = styled('div')(
  css({
    display: 'flex'
  })
);

const HeaderIcons = styled(Icons)(
  css({
    display: ['none', null, null, 'flex']
  })
);

const HeaderLinks = styled(Links)(
  css({
    bg: 'bg',
    borderTop: [0, 'none'],
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
    '-webkit-transform': 'translate3d(0,0,0)'
  })
);

export const Header = () => (
  <HeaderContainer>
    <Flex alignItems="center">
      <Link to="/">
        <Logo mr={3} size={35} />
      </Link>
      <Heading as="h3" p={0}>
        <Link to="/">SOUL PROVIDER</Link>
      </Heading>
    </Flex>
    <HeaderNavigation>
      <HeaderIcons />
      <HeaderLinks />
    </HeaderNavigation>
  </HeaderContainer>
);
