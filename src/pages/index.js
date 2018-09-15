import React, { Component } from 'react';
import { Howl, Howler } from 'howler';

import Album from '../assets/album.jpg';

class Player extends Component {
  stream = null;
  fetchInterval = null;

  state = {
    playing: false,
    title: 'Fetching stream information...'
  };

  componentDidMount() {
    this.fetchStatus();
    this.fetchInterval = setInterval(this.fetchStatus, 5000);
  }

  fetchStatus = () => {
    fetch('https://soulprovidr.fm/status')
      .then(response => response.json())
      .then(json => {
        if (json.icestats && json.icestats.source) {
          const title = json.icestats.source.title || 'Track metadata not available';
          this.setState({ title });
        }
      });
  };

  play = () => {
    const { playing } = this.state;
    if (!this.stream) {
      this.stream = new Howl({
        src: ['https://soulprovidr.fm/stream'],
        format: ['mp3'],
        html5: true,
        volume: 0,
        onplay: () => {
          this.stream.fade(0, 1, 1000);
        }
      });
    }
    if (playing) {
      this.stream.unload();
      this.stream = null;
    } else {
      this.stream.play();
    }
    this.setState({ playing: !playing });
  };

  render() {
    const { playing, title } = this.state;
    return (
      <div className="player">
        <div
          className="player__art"
        >
          <img src={Album} />
          <div
            className="player__play"
            onClick={this.play}
          >
            <span dangerouslySetInnerHTML={{
              __html: playing ? '&#9208;' : '&#x25b6;'
            }} />
          </div>
        </div>
        <div className="player__status player__status--live">
          &#9210; Live
        </div>
        <p className="player__title">
          {title}
        </p>
      </div>
    );
  }
};

export default Player;