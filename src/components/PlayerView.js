import React, { useEffect, useRef, useState } from 'react';
import ProgressiveImage from 'react-progressive-bg-image';
import styled from 'styled-components';

import BuyIcon from '../static/images/buy.png';
import DefaultCover from '../static/images/default.png';
import HeartOutlineIcon from '../static/images/heart_outline.png';
import HeartRedIcon from '../static/images/heart_red.png';

import Icon from './Icon';
import PlayButton from './PlayButton';

const Player = styled.div`
  max-width: 400px;
`;

const TrackCover = styled(ProgressiveImage)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const TrackTitle = styled.p`
  font-size: 1.25em;
`;

const PlayerView = () => {
  const [track, setTrack] = useState(null);
  const trackRef = useRef(track);

  useEffect(() => {
    let timeout = null;
    (function fetchMeta() {
      fetch('https://www.radioking.com/widgets/api/v1/radio/210013/track/current')
        .then(response => response.json())
        .then(data => {
          if (!trackRef.current || trackRef.current.id !== data.id) {
            trackRef.current = data;
            setTrack({
              id: data.id,
              artist: data.artist,
              album: data.album,
              buy_link: data.buy_link,
              image: data.cover,
              title: data.title
            });
          }
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
        <Player className="h-100 w-100 d-flex flex-column justify-content-center">
          <TrackCover
            className="text-center flex-grow-1"
            src={track.image || DefaultCover}
            placeholder={DefaultCover}
          />
          <div className="text-center mt-3 px-1">
            <TrackTitle className="font-weight-bold m-0">
              {track.title}
            </TrackTitle>
            <p className="h7 text-black-50 m-0">
            {track.artist}
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-between w-100 mt-4 px-4">
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
        </Player>
      ) : (
        <p className="h6 font-weight-bold align-self-center">
          Loading...
        </p>
      )}
    </div>
  );
}

export default PlayerView;