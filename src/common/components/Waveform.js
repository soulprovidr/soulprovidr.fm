import React, { useEffect, useState } from 'react';
import chunk from 'lodash.chunk';

import { average } from '@/helpers';
import { useWaveform } from '@/soundcloud';

function Waveform({
  activeColor,
  inactiveColor,
  width,
  height,
  numChunks,
  percentProgress,
  reflectionHeight,
  waveformUrl
}) {
  const [chunks, setChunks] = useState([]);  
  const waveform = useWaveform(waveformUrl);
  
  const chunkPercentWidth = 100 / numChunks;

  useEffect(() => {
    async function getChunks() {
      try {
        const heightScale = (height - reflectionHeight) / waveform.height;
        setChunks(
          chunk(waveform.samples, waveform.samples.length / numChunks)
            .map(average)
            .map(chunk => chunk * heightScale)
        );
      } catch (e) {
        // TODO: Error state.
        console.error(e);
      }
    }
    if (waveform) getChunks();
  }, [height, numChunks, waveform]);

  function renderWaveform() {
    return (
      <>
        <div style={{
          alignItems: 'flex-end',
          display: 'flex',
          height: height - reflectionHeight
        }}>
          {chunks.map((s, index) => (
            <div
              key={index}
              style={{
                background: ((index + 1) * chunkPercentWidth) > percentProgress
                  ? inactiveColor
                  : activeColor,
                height: s,
                marginRight: 1,
                width: `calc(${chunkPercentWidth}% - 1px)`
              }}
            />
          ))}
        </div>
        <div style={{
          alignItems: 'flex-start',
          display: 'flex',
          height: reflectionHeight,
          position: 'relative'
        }}>
          <div style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,.7) 0%, rgba(255,255,255,.4) 70%)',
            height: '100%',
            position: 'absolute',
            width: '100%'
          }} />
          {chunks.map((s, index) => (
            <div
              key={index}
              style={{
                background: ((index + 1) * chunkPercentWidth) > percentProgress
                  ? inactiveColor
                  : activeColor,
                height: s * ((reflectionHeight / height) * 1.25),
                marginRight: 1,
                width: `calc(${chunkPercentWidth}% - 1px)`
              }}
            />
          ))}
        </div>
      </>
    );
  }

  function renderLoading() {
    return 'Loading...';
  }

  return (
    <div style={{ height, width }}>
      {waveform ? renderWaveform() : renderLoading()}
    </div>
  );
}

Waveform.defaultProps = {
  activeColor: '#257AD7',
  inactiveColor: '#AFAFAF',
  width: '100%',
  height: 75,
  numChunks: 150,
  percentProgress: 50,
  reflectionHeight: 50
};

export default Waveform;