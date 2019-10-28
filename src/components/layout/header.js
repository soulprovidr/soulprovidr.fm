import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

// https://www.iconfinder.com/iconsets/picons-social
import GithubIcon from '../../static/images/github.svg';
import InstagramIcon from '../../static/images/instagram.svg';
import SpotifyIcon from '../../static/images/spotify.svg';
import LogoImage from '../../static/images/logo.svg';

const StyledHeader = styled.header`
  top: 0; left: 0; right: 0;
  z-index: 1;
`;

const Logo = styled.img`
  width: 35px;
  height: 35px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const NavItem = styled.li`
  font-weight: 600;
`;

export default function Header() {
  return (
    <StyledHeader className="bg-white py-4">
      <div className="d-flex align-items-center justify-content-between py-2 px-4 container">
        <div className="d-flex align-items-center">
          <Link to="/">
            <Logo
              className="d-inline-block align-middle rounded-circle mr-3"
              src={LogoImage}
            />
          </Link>
          <p className="h5 font-weight-bold m-0">
            <Link
              to="/"
              className="text-dark"
            >
              SOUL PROVIDER
            </Link>
          </p>
        </div>
        <nav>
          <div className="d-flex align-items-center">
            <a
              href="https://instagram.com/soulprovidr"
              target="_blank"
            >
              <Icon
                className="mr-3 align-text-bottom"
                src={InstagramIcon}
              />
            </a>
            <a
              href="https://open.spotify.com/user/soulprovidr"
              target="_blank"
            >
              <Icon
                className="mr-3 align-text-bottom"
                src={SpotifyIcon}
              />
            </a>
            <a
              href="https://github.com/soulprovidr"
              target="_blank"
            >
              <Icon
                className="mr-3 align-text-bottom"
                src={GithubIcon}
              />
            </a>
            <ul className="m-0">
              <NavItem className="h7 d-inline-block text-uppercase pr-4">
                Newsletter
              </NavItem>
              <NavItem className="h7 d-inline-block text-uppercase pr-4">
                <a
                  className="text-dark"
                  href="https://reddit.com/r/rnb"
                  target="_blank"
                >
                  Community
                </a>
              </NavItem>
              <NavItem className="h7 d-inline-block text-uppercase">
                Contact
              </NavItem>
            </ul>
          </div>
        </nav>
      </div>
    </StyledHeader>
  );
}