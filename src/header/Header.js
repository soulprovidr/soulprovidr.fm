import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

// https://www.iconfinder.com/iconsets/picons-social
import GithubIcon from '@/static/images/github.svg';
import InstagramIcon from '@/static/images/instagram.svg';
import SpotifyIcon from '@/static/images/spotify.svg';

import Logo from '@/common/components/Logo';
import Navigation from './Navigation';

import './header.css';

const icons = [
  {
    href: 'https://instagram.com/soulprovidr',
    src: InstagramIcon
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
    href: '/about',
    text: 'About'
  },
  {
    href: 'https://reddit.com/r/rnb',
    text: 'Community',
    external: true
  }
];

export default function Header() {
  return (
    <header className="container bg-white py-5">
      <div className="d-flex align-items-center justify-content-between py-2 px-4">
        <div className="d-flex align-items-center">
          <Link to="/">
            <Logo
              className="d-inline-block align-middle mr-3"
              size={45}
            />
          </Link>
          <div>
            <p className="h5 font-weight-bold m-0">
              <Link
                to="/"
                className="text-dark"
              >
                SOUL PROVIDER
              </Link>
            </p>
          </div>
        </div>
        <Navigation icons={icons} links={links} />
      </div>
    </header>
  );
}