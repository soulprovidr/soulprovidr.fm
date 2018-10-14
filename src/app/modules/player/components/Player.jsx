import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';

import AlbumArt from '~/images/best-hugs.jpg';
import PlayIcon from '~/images/play.png';

class Player extends Component {
  sound = null;

  onButtonClick = () => {

  };

  render() {
    return (
      <div className="col-md-5">
        <div className="player text-center p-3 bg-white position-sticky d-flex flex-column align-items-center">
          <img
            className="player__artwork"
            src={AlbumArt}
            width="100%"
          />
          <p className="player__title font-weight-bold m-0 mt-3">
            DRAM - Best Hugs 
          </p>
          <input
            className="player__volume mt-3"
            type="range"
          />
          <button className="player__play mt-4 rounded-circle">
            <img
              src={PlayIcon}
              width="75%"
            />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  isPlaying: player.isPlaying,
  volume: player.volume
});

export default connect(mapStateToProps)(Player);