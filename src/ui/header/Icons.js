import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box } from 'theme';

// https://www.iconfinder.com/iconsets/picons-social
import GithubIcon from '../static/images/github.svg';
import InstagramIcon from '../static/images/instagram.svg';
import RedditIcon from '../static/images/reddit.svg';
import SpotifyIcon from '../static/images/spotify.svg';

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

const IconAnchor = styled('a')({
  display: 'flex',
  alignItems: 'center'
});

const Icon = styled('img')(
  css({
    width: 20,
    height: 20,
    mr: 3,
    transition: 'transform 100ms ease-in-out',
    '&:hover': { transform: 'scale(1.1)' }
  })
);

export const Icons = (props) => (
  <div {...props}>
    {icons.map((icon) => (
      <IconAnchor
        key={icon.href}
        href={icon.href}
        rel="noopen noreferrer"
        target="_blank"
      >
        <Icon src={icon.src} />
      </IconAnchor>
    ))}
  </div>
);
