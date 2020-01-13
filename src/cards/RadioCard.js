import React from 'react';
import { connect } from 'react-redux';

import Actions from '@/actions';
import DefaultCover from '@/static/images/default.png';
import useFetchMeta from '@/hooks/useFetchMeta';

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
    <div className="px-3">
      <div
        className="card"
        onClick={play}
      >
        <CardBadge category={liveCategory} />
        <div className="row">
          <div className="col-md-4">
            <CardImage>
              <img
                alt={meta ? `${meta.artist} - ${meta.title}` : 'Loading...'}
                className="card-img-top"
                src={meta ? meta.cover || DefaultCover : DefaultCover}
              />
            </CardImage>
          </div>
          <div className="col-md-8 d-flex align-items-center">
            <div className="card-body ">
              <p className="font-weight-bold text-uppercase mb-3">
                Now Playing:
              </p>
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