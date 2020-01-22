import React from 'react';

import Spinner from '@/common/components/Spinner';
import { PLAYER_STATUS } from '@/player/constants';
import PauseIcon from '@/static/images/pause.png';
import PlayIcon from '@/static/images/play.png';

export default function CardImage({ children, onClick, mediaStatus }) {
  const getIcon = () => {
    switch (mediaStatus) {
      case PLAYER_STATUS.BUFFERING:
        return (
          <Spinner modifier="light" />
        );
      case PLAYER_STATUS.PLAYING:
        return (
          <img
            alt="Paused"
            className="card-image__icon"
            src={PauseIcon}
          />
        )
      default:
        return (
          <img
            alt="Play"
            className="card-image__icon"
            src={PlayIcon}
          />
        );
    }
  };
  return (
    <div
      className="card-image card-img-top position-relative"
      onClick={onClick}
    >
      <div className="card-image__overlay position-absolute d-flex justify-content-center align-items-center">
        {getIcon()}
      </div>
      {children}
    </div>
  );
}