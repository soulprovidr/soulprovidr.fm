import React from 'react';
import Link from 'gatsby-link';

import { Box, Flex, Logo, Text } from '@/theme';

import { Links } from './Links';
import { Icons } from './Icons';

const StyledHeader = (props) => (
  <Box
    as="header"
    fontFamily="heading"
    position={['fixed', 'relative']}
    top={0}
    right={0}
    left={0}
    zIndex={2}
    borderBottom={['1px solid #eee']}
    sx={{
      'a, a:active, a:visited': {
        color: 'textPrimary'
      }
    }}
    {...props}
  />
);

const Title = () => (
  <Flex alignItems="center">
    <Link to="/">
      <Logo mr={3} />
    </Link>
    <Text as="h5" m={0} fontWeight="bold">
      <Box as={Link} to="/" color="textPrimary">
        SOUL PROVIDER
      </Box>
    </Text>
  </Flex>
);

const Header = () => (
  <StyledHeader>
    <Box px={[2, 5]} py={[2, 4]}>
      <Flex alignItems="center" justifyContent="space-between" px={2}>
        <Title />
        <Box display={['none', 'flex']}>
          <Box display={['none', null, 'flex']}>
            <Icons />
          </Box>
          <Flex ml={4}>
            <Links />
          </Flex>
        </Box>
      </Flex>
    </Box>
  </StyledHeader>
);

export default Header;
