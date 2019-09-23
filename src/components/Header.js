import React from 'react';
import styled from 'styled-components';

import LogoImage from '../static/images/logo.svg';

const StyledHeader = styled.header`
  border-bottom: 1px solid #ddd;
  height: 75px;
  top: 0; left: 0; right: 0;
  z-index: 1;
`;

const Subtitle = styled.p`
  font-size: 0.8em;

  @media (max-width: 368px) {
    font-size: 0.6em;
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export default function Header() {
  return (
    <StyledHeader className="bg-white position-fixed">
      <div className="d-flex align-items-center py-3 px-4">
        <Logo
          className="d-inline-block align-middle rounded-circle mr-3"
          src={LogoImage}
        />
        <div>
          <p className="h5 font-weight-bold m-0">
            SOUL PROVIDER
          </p>
          <Subtitle className="header__subtitle m-0 text-muted">
            Internet radio for those who like to groove.
          </Subtitle>
        </div>
      </div>
    </StyledHeader>
  );
}