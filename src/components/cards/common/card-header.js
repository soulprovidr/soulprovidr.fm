import React from 'react';
import styled from 'styled-components';

// import PauseIcon from '../static/images/pause.png';
import PlayIcon from '../../../static/images/play.png';

const Overlay = styled.div`
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, .2);
  opacity: 0;
  transition: opacity 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 1;
`;

const StyledCardHeader = styled.div`
  :hover {
    div${Overlay} {
      opacity: 1;
    }
  }
`;

const PlayButton = styled.img`
  width: 100px;
`;

export default function CardHeader({ children, onClick }) {
  return (
    <StyledCardHeader
      className="card-img-top position-relative"
      onClick={onClick}
    >
      <Overlay className="position-absolute d-flex justify-content-center align-items-center">
        <PlayButton src={PlayIcon} />
      </Overlay>
      {children}
    </StyledCardHeader>
  );
}