import React from 'react';
import Link from 'gatsby-link';
import c from 'classnames';

// https://www.iconfinder.com/iconsets/picons-social
import GithubIcon from '@/static/images/github.svg';
import InstagramIcon from '@/static/images/instagram.svg';
import RedditIcon from '@/static/images/reddit.svg';
import SpotifyIcon from '@/static/images/spotify.svg';

import Logo from '@/common/components/Logo';
import { Box, Container, Flex } from '@/ui';
import Navigation from './Navigation';

import styles from './Header.module.css';

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
    href: '/subscribe',
    text: 'Subscribe'
  }
];

function MobileHeader() {
  return (
    <Box
      as="header"
      className={c(
        styles.header,
        styles.mobile,
        'd-sm-block d-md-none bg-white py-2 mb-4 position-fixed'
      )}
    >
      <div className="d-flex align-items-center justify-content-between py-2 container">
        <div className="d-flex align-items-center">
          <Link to="/">
            <Logo className="d-inline-block align-middle mr-3" size={30} />
          </Link>
          <div>
            <p className="h5 font-weight-bold m-0">
              <Link to="/" className="text-dark">
                SOUL PROVIDER
              </Link>
            </p>
          </div>
        </div>
        {/* <Navigation icons={icons} links={links} /> */}
      </div>
    </Box>
  );
}

export default function Header() {
  return (
    <Box
      as="header"
      bg="white"
      fontFamily="heading"
      position={['fixed', 'relative']}
      py={[2, 5]}
      top={0}
      right={0}
      left={0}
    >
      <Container p={0}>
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
      </Container>
    </Box>
  );
}
