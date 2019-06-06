import React from 'react';
import { connect } from 'react-redux';

import Actions from '../actions';

import PauseIcon from '../../static/images/pause.png';
import PlayIcon from '../../static/images/play.png';

const styles = (
  <style jsx>{`
    .player__btn,
    .player__btn:active,
    .player__btn:focus {
      width: 65px;
      height: 65px;
      background: black;
      border: none;
      top: 125px;
      outline: none;
      line-height: 1em;
    }

    .player__btn.play img {
      margin-left: 4px;
    }
  `}</style>
)

function PlayButton({
  isBuffering,
  isPlaying,
  pause,
  play
}) {
  return (
    <button
      className={`
        player__btn rounded-circle
        ${isPlaying ? 'pause' : 'play'}
      `}
      onClick={
        !isBuffering
          ? isPlaying ? pause : play
          : null}
    >
      {styles}
      {isBuffering ? (
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <img
          src={isPlaying ? PauseIcon : PlayIcon}
          width="50%"
        />
      )}
    </button>
  );
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
)(PlayButton);