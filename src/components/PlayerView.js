import React from 'react';
import { connect } from 'react-redux';
import ProgressiveImage from 'react-progressive-bg-image';
import styled from 'styled-components';

import Actions from '../actions';
import BuyIcon from '../static/images/buy.png';
import DefaultCover from '../static/images/default.png';
import HeartOutlineIcon from '../static/images/heart_outline.png';
import HeartRedIcon from '../static/images/heart_red.png';
import useFetchMeta from '../hooks/useFetchMeta';

import Icon from './Icon';
import PlayButton from './PlayButton';

const Player = styled.div`
  max-width: 400px;
`;

const TrackCover = React.memo(
  styled(ProgressiveImage)`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`);

const TrackTitle = styled.p`
  font-size: 1.25em;
`;

const PlayerView = ({ like, likes, meta }) => {
  useFetchMeta(5000);
  const isLiked = meta ? likes.includes(meta.id) : false;
  const onBuyClick = () => {
    if (meta.buy_link) {
      window.open(meta.buy_link, '_blank');
    }
  };
  const onLikeClick = () => {
    like(meta.id);
  };
  return (
    <div className="h-100 w-100 d-flex align-items-center justify-content-center py-5">
      {meta ? (
        <Player className="h-100 w-100 d-flex flex-column justify-content-center">
          <TrackCover
            className="text-center flex-grow-1"
            src={meta.cover || DefaultCover}
            placeholder={DefaultCover}
          />
          <div className="text-center mt-3 px-1">
            <TrackTitle className="font-weight-bold m-0">
              {meta.title}
            </TrackTitle>
            <p className="h7 text-black-50 m-0">
            {meta.artist}
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-between w-100 mt-4 px-4">
            <Icon
              onClick={!isLiked ? onLikeClick : null}
              src={isLiked ? HeartRedIcon : HeartOutlineIcon}
            />
            <PlayButton />
            <Icon
              disabled={!meta.buy_link}
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

const mapStateToProps = state => ({
  likes: state.likes || [],
  meta: state.meta || null
});

const mapDispatchToProps = {
  like: Actions.like
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerView);