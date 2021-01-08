import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box } from 'theme';

// https://www.iconfinder.com/iconsets/picons-social
import GithubIcon from 'static/images/github.svg';
import InstagramIcon from 'static/images/instagram.svg';
import RedditIcon from 'static/images/reddit.svg';
import SpotifyIcon from 'static/images/spotify.svg';

const icons = [
  {
    href: 'https://instagram.com/soulprovidr',
    component: InstagramIcon
  },
  {
    href: 'https://reddit.com/u/soulprovidr',
    component: RedditIcon
  },
  {
    href: 'https://open.spotify.com/user/soulprovidr',
    component: SpotifyIcon
  },
  {
    href: 'https://github.com/soulprovidr',
    component: GithubIcon
  }
];

const IconAnchor = styled('a')({
  display: 'flex',
  alignItems: 'center'
});

const IconWrapper = styled('div')(
  css({
    mr: 3,
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    svg: {
      width: '100%',
      fill: 'text.primary',
      transition: 'transform 100ms ease-in-out',
      '&:hover': { transform: 'scale(1.1)' }
    }
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
        <IconWrapper>
          <icon.component />
        </IconWrapper>
      </IconAnchor>
    ))}
  </div>
);
