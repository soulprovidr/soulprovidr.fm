import React from 'react';
import styled from 'styled-components';

// import PauseIcon from '../static/images/pause.png';
import PlayIcon from '@/static/images/play.png';

export default function CardImage({ children, onClick }) {
  return (
    <div
      className="card-image card-img-top position-relative"
      onClick={onClick}
    >
      <div className="card-image__overlay position-absolute d-flex justify-content-center align-items-center">
        <img
          className="card-image__play"
          src={PlayIcon}
        />
      </div>
      {children}
    </div>
  );
}