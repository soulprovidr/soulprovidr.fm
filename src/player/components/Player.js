import React from 'react';
import { connect } from 'react-redux';

import Actions from '../actions';

import PauseIcon from '../../static/images/pause.png';
import PlayIcon from '../../static/images/play.png';

const styles = (
  <style jsx>{`
    .player__title {
      font-size: 1.25em;
    }

    .player__btn {
      width: 65px;
      height: 65px;
      background: pink;
      border: none;
      top: 125px;
      transition: transform 50ms ease; 
    }

    .player__btn:hover {
      transform: scale(1.1);
    }
  `}</style>
);

const Player = ({
  isBuffering,
  isPlaying,
  pause,
  play,
  track
}) => {
  return track ? (
    <div className="player text-center position-relative d-flex flex-column align-items-center">
      {styles}
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
        className="player__btn mt-4 rounded-circle"
        onClick={
          !isBuffering
            ? isPlaying ? pause : play
            : null}
      >
        {isBuffering ? (
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <img
            src={isPlaying ? PauseIcon : PlayIcon}
            width="85%"
          />
        )}
      </button>
    </div>
  ) : null;
}

const mapStateToProps = state => ({
  isBuffering: state.player.isBuffering,
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