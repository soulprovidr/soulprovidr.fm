import React from 'react';
import { connect } from 'react-redux';

import Actions from '../actions';

import PauseIcon from '../../static/images/pause.png';
import PlayIcon from '../../static/images/play.png';

const Player = ({
  isPlaying,
  pause,
  play,
  track
}) => {
  return track ? (
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
      <button
        className="player__play mt-4 rounded-circle"
        onClick={isPlaying ? pause: play}
      >
        <img
          src={isPlaying ? PauseIcon : PlayIcon}
          width="75%"
        />
      </button>
    </div>
  ) : null;
}

const mapStateToProps = state => ({
  isPlaying: state.player.isPlaying
});

const mapDispatchToProps = {
  pause: Actions.pause,
  play: Actions.play
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);