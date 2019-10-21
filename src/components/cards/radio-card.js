import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import Actions from '../../actions';
import DefaultCover from '../../static/images/default.png';
import useFetchMeta from '../../hooks/useFetchMeta';

import CardBadge from './common/card-badge';
import CardImage from './common/card-image';
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
    <div className="pb-4">
      <div
        className="card"
        onClick={play}
      >
        <CardBadge category={liveCategory} />
        <CardImage>
          <img
            className="card-img-top"
            src={meta ? meta.cover || DefaultCover : DefaultCover}
          />
        </CardImage>
        <div className="card-body">
          <p className="h5 font-weight-bold m-0">
            {meta ? meta.title : 'Loading...'}
          </p>
          <p className="h6 m-0">
            {meta ? meta.artist : null}
          </p>
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