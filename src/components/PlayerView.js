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

const Hero = styled.section`
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(https://unsplash.it/1920/1080/?random);
  background-size: cover;
  filter: brightness(40%) grayscale(80%);
`;

// const TrackCover = React.memo(
//   styled(ProgressiveImage)`
//     width: 100%;
//     height: auto;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
// `);

const PlayerView = ({ like, likes, meta }) => {
  useFetchMeta(5000);
  return (
    <div className="col-md-4 pb-4">
      {meta ? (
        <div className="card">
          <img
            className="card-img-top"
            src={meta.cover || DefaultCover}
            placeholder={DefaultCover}
          />
          <div className="card-body">
            <p className="h5 font-weight-bold m-0">
              {meta.title}
            </p>
            <p className="h6 m-0">
            {meta.artist}
            </p>
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