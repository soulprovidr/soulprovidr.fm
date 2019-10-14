import React from 'react';
import styled from 'styled-components';

import LogoImage from '../static/images/logo.svg';

const StyledHeader = styled.header`
  top: 0; left: 0; right: 0;
  z-index: 1;
`;

const Logo = styled.img`
  width: 35px;
  height: 35px;
`;

export default function Header() {
  return (
    <>
      <StyledHeader className="bg-white py-4">
        <div className="d-flex align-items-center py-2 px-4 container">
          <Logo
            className="d-inline-block align-middle rounded-circle mr-3"
            src={LogoImage}
          />
          <div>
            <p className="h5 font-weight-bold m-0">
              SOUL PROVIDER
            </p>
          </div>
        </div>
      </StyledHeader>
      {/* <StyledNav className="bg-white position-fixed">
        <div className="d-flex align-items-center py-2 px-4 container">
          <ul>
            <li className="d-inline-block">
              Radio
            </li>
            <li className="d-inline-block">
              Mixtapes
            </li>
            <li className="d-inline-block">
              Articles
            </li>
          </ul>
        </div>
      </StyledNav> */}
    </>
  );
}