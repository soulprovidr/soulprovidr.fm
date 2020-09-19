import React from 'react';

// https://www.iconfinder.com/iconsets/picons-social
import GithubIcon from '@/static/images/github.svg';
import InstagramIcon from '@/static/images/instagram.svg';
import RedditIcon from '@/static/images/reddit.svg';
import SpotifyIcon from '@/static/images/spotify.svg';
import { Box } from '@/theme';

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

const Icon = ({ src, href }) => (
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

export const Icons = () =>
  icons.map((icon) => <Icon key={icon.href} src={icon.src} href={icon.href} />);
