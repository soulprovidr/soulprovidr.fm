import React, { Component } from 'react';
import { Howl, Howler } from 'howler';

class Player extends Component {
  stream = null;
  fetchInterval = null;

  state = {
    playing: false,
    title: 'Fetching stream information...'
  };

  componentDidMount() {
    this.fetchStatus();
    this.fetchInterval = setInterval(this.fetchStatus, 30000);
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
        },
        onpause: () => {
          this.stream.fade(1, 0, 1000);
        }
      });
    }
    if (playing) {
      this.stream.pause();
    } else {
      this.stream.play();
    }
    this.setState({ playing: !playing });
  };

  render() {
    const { playing, title } = this.state;
    return (
      <div className="player">
        <div className="player__left">
          <span
            className="player__play"
            onClick={this.play}
            dangerouslySetInnerHTML={{
              __html: playing ? '&#9208;&nbsp;' : '&#x25b6;&nbsp;' 
            }}
          />
          <span>
            {title}
          </span>
        </div>
        <div className="player__right">
          <span className="player__status player__status--live">
            &#9210; Live
          </span>
        </div>
      </div>
    );
  }
};

export default Player;