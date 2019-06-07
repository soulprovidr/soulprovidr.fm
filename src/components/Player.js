import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import BuyIcon from '../static/images/buy.png';
import DefaultCover from '../static/images/default.png';
import HeartIcon from '../static/images/heart.png';
import HeartOutlineIcon from '../static/images/heart_outline.png';
import HeartRedIcon from '../static/images/heart_red.png';

import Icon from './Icon';
import PlayButton from './PlayButton';

const Player = ({ like }) => {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    let timeout = null;
    (function fetchMeta() {
      fetch('https://www.radioking.com/widgets/api/v1/radio/210013/track/current')
        .then(response => response.json())
        .then(data => {
          setTrack({
            id: data.id,
            artist: data.artist,
            album: data.album,
            buy_link: data.buy_link,
            image: data.cover,
            title: data.title
          })
        });
      timeout = setTimeout(fetchMeta, 5000);
    })();
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  function onBuyClick() {
    if (track.buy_link) {
      window.open(track.buy_link, '_blank');
    }
  }

  function onLikeClick() {

  }

  return (
    <div className="h-100 w-100 d-flex align-items-center justify-content-center py-5">
      {track ? (
        <div className="player h-100 w-100 d-flex flex-column justify-content-center">
          <style jsx>{`
            .player {
              max-width: 400px;
            }

            .player__artwork {
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
            }

            .player__title {
              font-size: 1.25em;
            }
          `}</style>

          <div
            className="player__artwork text-center flex-grow-1"
            style={{ backgroundImage: `url(${track.image || DefaultCover})` }}
          />
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
              onClick={onLikeClick}
              src={false ? HeartRedIcon : HeartOutlineIcon}
            />
            <PlayButton />
            <Icon
              disabled={!track.buy_link}
              onClick={onBuyClick}
              src={BuyIcon}
            />
          </div>
        </div>
      ) : (
        <p className="h6 font-weight-bold align-self-center">
          Loading...
        </p>
      )}
    </div>
  );
}

export default Player;