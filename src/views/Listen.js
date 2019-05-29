import React, { useEffect, useState } from 'react';

import Player from '../player/components/Player';
import fetchCurrentTrack from '../player/effects/fetchCurrentTrack';

const Listen = () => {
  const [track, setTrack] = useState(null);
  useEffect(fetchCurrentTrack(setTrack), []);
  return (
    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
      {track ? [
        <Player track={track} />
      ] : (
        <p className="h6 font-weight-bold align-self-center">
          No track currently playing.
        </p>
      )}
    </div>
  );
}

export default Listen;