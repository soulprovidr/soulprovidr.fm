import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  track: PropTypes.shape({
    artist: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    created_at: PropTypes.string
  }).isRequired
};

const Track = ({ track }) => (
  <div className="item p-3 d-flex">
    <img
      className="mr-2"
      height="100%"
      src={track.image || '/static/images/lady-lady.jpg'}
    />
    <div className="item__content">
      <p className="item__title font-weight-bold m-0">
        {track.artist} - {track.title}
      </p>
      <p className="item__date">
        {track.created_at}
      </p>
    </div>
  </div>
);

Track.propTypes = propTypes;

export default Track;