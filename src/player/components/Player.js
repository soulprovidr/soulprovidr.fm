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
      max-width: 450px;
    }

    .player__artwork {
      border: 1px solid #dddddd9c;
      border-radius: 4px;
      # height: 300px;
      width: 100%;
      margin: 0 auto;
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
    <div className="h-100 w-100 d-flex align-items-center justify-content-center">
      {track ? (
        <div className="player d-flex flex-column">
          {styles}
          <img
            className="player__artwork flex-shrink-1"
            src={track.image || DefaultCover}
            width="100%"
          />
          <div className="player__text text-left mt-3 px-1">
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