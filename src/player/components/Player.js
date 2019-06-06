import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import BuyIcon from '../../static/images/buy.png';
import DefaultCover from '../../static/images/default.png';
import HeartIcon from '../../static/images/heart.png';

import fetchCurrentTrack from '../effects/fetchCurrentTrack';

import Icon from './Icon';
import PlayButton from './PlayButton';

const styles = (
  <style jsx>{`
    .player {
      max-width: 400px;
    }

    .player__artwork {
      height: calc(100vw - 30px);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }

    .player__artwork img {
      border: 1px solid #dddddd9c;
      border-radius: 4px;
      object-fit: contain;
    }

    .player__title {
      font-size: 1.25em;
    }
  `}</style>
);

const Player = ({ like }) => {
  const [track, setTrack] = useState(null);
  useEffect(fetchCurrentTrack(setTrack), []);

  return (
    <div className="h-100 w-100 d-flex align-items-center justify-content-center py-5">
      {track ? (
        <div className="player h-100 w-100 d-flex flex-column justify-content-center">
          {styles}
          <div
            className="player__artwork text-center"
            style={{ backgroundImage: `url(${track.image || DefaultCover})` }}
          >
          </div>
          <div className="player__text text-center mt-3 px-1">
            <p className="player__title font-weight-bold m-0">
              {track.title}
            </p>
            <p className="h7 text-black-50 m-0">
            {track.artist}
            </p>
          </div>
          <div className="player__controls d-flex align-items-center justify-content-between w-100 mt-4 px-4">
            <Icon
              disabled={!track}
              onClick={like}
              src={HeartIcon}
            />
            <PlayButton />
            <Icon
              disabled={!track.buy_link}
              onClick={() => window.location(track.buy_link, '_blank')}
              src={BuyIcon}
            />
          </div>
        </div>
      ) : (
        <p className="h6 font-weight-bold align-self-center">
          No track currently playing.
        </p>
      )}
    </div>
  );
}

export default Player;