import React from 'react';

const Player = () => {
  return (
    <div className="player">
      <div className="player__left">
        <span className="player__play">
          &#x25b6;&nbsp;
        </span>
        <span>
          Whitney Houston - How Will I Know?
        </span>
      </div>
      <div className="player__right">
        <span className="player__status player__status--live">
          &#9210; Live
        </span>
      </div>
    </div>
  );
};

export default Player;