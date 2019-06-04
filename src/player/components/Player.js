import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import BuyIcon from '../../static/images/buy.png';
import DefaultCover from '../../static/images/default.png';
import HeartIcon from '../../static/images/heart.png';

import Actions from '../actions';
import fetchCurrentTrack from '../effects/fetchCurrentTrack';

import PlayButton from './PlayButton';

const styles = (
  <style jsx>{`
    .player__artwork {
      border: 1px solid #dddddd9c;
      border-radius: 4px;
    }

    .player__title {
      font-size: 1.25em;
    }

    .player__icon {
      height: 35px;
      width: 35px;
    }

    .player__icon img {
      width: 100%;
      height: 100%;
    }

    .player__icon:hover {
      opacity: 1;
    }
  `}</style>
);

const Player = ({
  isBuffering,
  isPlaying,
  like,
  pause,
  play
}) => {
  const [track, setTrack] = useState(null);
  useEffect(fetchCurrentTrack(setTrack), []);

  function renderBuyLink() {
    return track && track.buy_link ? (
      <a
        className="player__icon"
        href={track.buy_link}
        target="_blank"
      >
        <img src={BuyIcon} />
      </a>
    ) : <span className="player__icon" />
  }

  function renderLikeLink() {
    return track ? (
      <img
        className="player__icon"
        onClick={like}
        src={HeartIcon}
      />
    ) : <span className="player__icon" />;
  }

  return track ? (
    <div className="player text-center position-relative d-flex flex-column align-items-center">
      {styles}
      <img
        className="player__artwork"
        src={track.image || DefaultCover}
        width="100%"
      />
      <p className="player__title font-weight-bold m-0 mt-3">
        {track.title}
      </p>
      <p className="h7 text-black-50 m-0">
      {track.artist}
      </p>
      <div className="player__controls d-flex align-items-center justify-content-between w-100 mt-4 px-4">
        {renderLikeLink()}
        <PlayButton />
        {renderBuyLink()}
      </div>
    </div>
  ) : (
    <p className="h6 font-weight-bold align-self-center">
      No track currently playing.
    </p>
  );
}

export default Player;