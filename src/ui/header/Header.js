import React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import css from '@styled-system/css';

import { Box, Heading, Logo } from 'theme';

import { Links } from './Links';
import { Icons } from './Icons';

const HeaderContainer = styled('header')(
  css({
    bg: 'bg',
    borderBottom: '1px solid #eee',
    fontFamily: 'heading',
    position: ['fixed', 'relative'],
    top: 0,
    right: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: [2, 5],
    py: [2, 4],
    zIndex: 2,
    'a, a:active, a:visited': {
      color: 'textPrimary'
    }
  })
);

const HeaderTitle = styled('div')({
  display: 'flex',
  alignItems: 'center'
});

const HeaderNavigation = styled('div')(
  css({
    display: ['none', 'flex']
  })
);

const HeaderIcons = styled(Icons)(
  css({
    display: ['none', null, 'flex']
  })
);

const HeaderLinks = styled(Links)(
  css({
    display: 'flex',
    ml: 4
  })
);

export const Header = () => (
  <HeaderContainer>
    <HeaderTitle>
      <Link to="/">
        <Logo mr={3} />
      </Link>
      <Heading as="h3" p={0} fontWeight="bold">
        <Box as={Link} to="/" color="textPrimary">
          SOUL PROVIDER
        </Box>
      </Heading>
    </HeaderTitle>
    <HeaderNavigation>
      <HeaderIcons />
      <HeaderLinks />
    </HeaderNavigation>
  </HeaderContainer>
);
