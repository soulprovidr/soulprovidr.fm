import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Actions from '../actions';

import PauseIcon from '../static/images/pause.png';
import PlayIcon from '../static/images/play.png';

const Button = styled.button`
  flex-shrink: 0;
  &, &:active, &:focus {
    width: 45px;
    height: 45px;
    background: black;
    border: none;
    top: 125px;
    outline: none;
    line-height: 1em;
  }
`;

const ButtonImage = styled.img`
  width: 30%;
`;

function PlayButton({
  isBuffering,
  isPlaying,
  pause,
  play
}) {
  return (
    <Button
      className="rounded-circle mr-2"
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
        <ButtonImage
          src={isPlaying ? PauseIcon : PlayIcon}
          width="50%"
        />
      )}
    </Button>
  );
}

const mapStateToProps = state => ({
  isBuffering: state.isBuffering,
  isPlaying: state.isPlaying
});

const mapDispatchToProps = {
  pause: Actions.pause,
  play: Actions.play
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);