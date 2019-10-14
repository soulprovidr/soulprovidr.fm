import React from 'react';
import styled from 'styled-components';

import LogoImage from '../static/images/logo.svg';

const StyledHeader = styled.header`
  // border-bottom: 1px solid #ddd;
  height: 50px;
  top: 0; left: 0; right: 0;
  z-index: 1;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

const Title = styled.p`
  letter-spacing: -.5px;
`;

export default function Header() {
  return (
    <StyledHeader className="bg-white position-fixed d-flex align-items-center px-4">
      <div className="d-flex align-items-center">
        <Logo
          className="rounded-circle mr-3"
          src={LogoImage}
        />
        <Title className="h4 font-weight-bold m-0">
          SOUL PROVIDER.
        </Title>
      </div>
    </StyledHeader>
  );
}