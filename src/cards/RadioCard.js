import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import PlayIcon from '@/static/images/play.png';

import Actions from '@/actions';
import DefaultCover from '@/static/images/default.png';
import useFetchMeta from '@/hooks/useFetchMeta';

import PlayButton from '@/common/components/PlayButton';
import CardBadge from './CardBadge';
import CardImage from './CardImage';
import './card.css';

// For now, live posts will be hard-coded.
const liveCategory = {
  key: 'live',
  label: 'Live',
  colour: 'red'
};

function RadioCard({ meta, play }) {
  useFetchMeta(2500);
  return (
    <div className="px-3 pb-5">
      <div
        className="card my-5"
        onClick={play}
      >
        <div className="row w-100">
          <div className="col-md-4">
            <CardBadge category={liveCategory} />
            <CardImage>
              <img
                className="card-img-top"
                src={meta ? meta.cover || DefaultCover : DefaultCover}
              />
            </CardImage>
          </div>
          <div className="col-md-8 d-flex align-items-center">
            <div className="card-body ">
              <p className="h1 font-weight-bold">
                {meta ? meta.title : 'Loading...'}
              </p>
              <p className="h4">
                {meta ? meta.artist : null}
              </p>
              {/* <PlayButton /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  meta: state.meta || null
});

const mapDispatchToProps = {
  play: Actions.play
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioCard);