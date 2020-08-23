import React from 'react';
import Link from 'gatsby-link';

// https://www.iconfinder.com/iconsets/picons-social
import LiveIcon from '@/common/components/LiveIcon';
import GithubIcon from '@/static/images/github.svg';
import InstagramIcon from '@/static/images/instagram.svg';
import RedditIcon from '@/static/images/reddit.svg';
import SpotifyIcon from '@/static/images/spotify.svg';

import Logo from '@/common/components/Logo';
import { Box, Container, Flex, Text } from '@/ui';
import Navigation from './Navigation';

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
    text: (
      <Flex alignItems="center">
        <LiveIcon size={8} color="red" mr={2} />
        <Text ml={2}>Live</Text>
      </Flex>
    )
  },
  {
    href: '/mixtapes',
    text: 'Mixtapes'
  },
  {
    href: '/about',
    text: 'About'
  }
];

export default function Header() {
  return (
    <Box
      as="header"
      bg="white"
      fontFamily="heading"
      position={['fixed', 'relative']}
      top={0}
      right={0}
      left={0}
      zIndex={2}
    >
      <Box borderBottom={['1px solid #eee']} px={5} py={[2, 4]}>
        <Flex alignItems="center" justifyContent="space-between" px={2}>
          <Flex alignItems="center">
            <Link to="/">
              <Logo className="d-inline-block align-middle mr-3" size={45} />
            </Link>
            <div>
              <p className="h5 font-weight-bold m-0">
                <Link to="/" className="text-dark">
                  SOUL PROVIDER
                </Link>
              </p>
            </div>
          </Flex>
          <Navigation icons={icons} links={links} />
        </Flex>
      </Box>
    </Box>
  );
}
