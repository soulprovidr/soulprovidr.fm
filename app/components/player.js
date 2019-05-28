import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

class Player extends Component {
  static propTypes = {
    isPlaying: PropTypes.bool,
    setVolume: PropTypes.func,
    track: PropTypes.object,
  };

  static defaultProps = {
    isPlaying: false,
    setVolume: () => null,
    track: null,
    volume: 100
  }

  sound = null;

  onButtonClick = () => {
    const { isPlaying } = this.props;
  };

  onVolumeChange = (value) => {
    const { setVolume } = this.props;
    setVolume(value);
  };

  render() {
    const { isPlaying, track, volume } = this.props;
    if (!track) {
      return null;
    }
    return (
      <div className="player text-center position-relative d-flex flex-column align-items-center">
        <img
          className="player__artwork"
          src={track.image || '/static/images/lady-lady.jpg'}
          width="100%"
        />
        <p className="player__title font-weight-bold m-0 mt-3">
          {track.artist} - {track.title}
        </p>
        <p className="h7 text-black-50 m-0">
          {track.album} ({track.year})
        </p>
        <button className="player__play mt-4 rounded-circle">
          <img
            src="/static/images/play.png"
            width="75%"
          />
        </button>
      </div>
    );
  }
}

export default Player;