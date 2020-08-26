import React from 'react';
import Link from 'gatsby-link';

// https://www.iconfinder.com/iconsets/picons-social
import LiveIcon from '@/common/components/LiveIcon';
import GithubIcon from '@/static/images/github.svg';
import InstagramIcon from '@/static/images/instagram.svg';
import RedditIcon from '@/static/images/reddit.svg';
import SpotifyIcon from '@/static/images/spotify.svg';

import Logo from '@/common/components/Logo';
import { Box, Flex, Text } from '@/ui';

const icons = [
  {
    href: 'https://instagram.com/soulprovidr',
    src: InstagramIcon
  },
  {
    href: 'https://reddit.com/u/soulprovidr',
    src: RedditIcon
  },
  {
    href: 'https://open.spotify.com/user/soulprovidr',
    src: SpotifyIcon
  },
  {
    href: 'https://github.com/soulprovidr',
    src: GithubIcon
  }
];

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
    href: '/about',
    children: 'About'
  }
];

const SocialIcon = ({ src, href }) => (
  <Box
    as="a"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    sx={{
      display: 'flex',
      alignItems: 'center'
    }}
  >
    <Box
      as="img"
      src={src}
      sx={{
        width: 20,
        height: 20,
        mr: 3,
        transition: 'transform 100ms ease-in-out',
        '&:hover': { transform: 'scale(1.1)' }
      }}
    />
  </Box>
);

const NavLink = ({ children, href }) => (
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
        color: 'textDark',
        fontWeight: 600,
        textTransform: 'uppercase',
        '&:hover': {
          color: 'textDark'
        }
      }}
    >
      {children}
    </Box>
  </Box>
);

const Title = () => (
  <>
    <Link to="/">
      <Box
        as={Logo}
        sx={{ display: 'block', verticalAlign: 'middle', mr: 3 }}
        size={45}
      />
    </Link>
    <Text as="h5" m={0} fontWeight="bold">
      <Box as={Link} to="/" color="textDark">
        SOUL PROVIDER
      </Box>
    </Text>
  </>
);

const Header = () => (
  <Box
    as="header"
    bg="white"
    fontFamily="heading"
    position={['fixed', 'relative']}
    top={0}
    right={0}
    left={0}
    zIndex={2}
    borderBottom={['1px solid #eee']}
  >
    <Box px={5} py={[2, 4]}>
      <Flex alignItems="center" justifyContent="space-between" px={2}>
        <Flex alignItems="center">
          <Title />
        </Flex>
        <Flex display={['none', 'block']}>
          {icons.map((icon) => (
            <SocialIcon key={icon.href} src={icon.src} href={icon.href} />
          ))}
          <Flex ml={4}>
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.children}
              </NavLink>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  </Box>
);

export default Header;
