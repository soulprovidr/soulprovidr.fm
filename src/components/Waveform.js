import React, { useEffect, useState } from 'react';
import chunk from 'lodash.chunk';

const averageSamples = samples => samples.reduce((total, value) => total + value, 0) / samples.length;

function Waveform({
  activeColor,
  inactiveColor,
  width,
  height,
  numSamples,
  percentProgress,
  waveformUrl
}) {
  const [samples, setSamples] = useState([]);
  const [sampleWidthPercent, setSampleWidthPercent] = useState(null);

  useEffect(() => {
    async function getSamples() {
      try {
        const url = waveformUrl.replace('.png', '.json');
        const response = await fetch(url);
        const sampleData = await response.json();
        const heightScale = height / sampleData.height;
        setSampleWidthPercent(100 / numSamples);
        setSamples(
          chunk(sampleData.samples, sampleData.samples.length / numSamples)
            .map(averageSamples)
            .map(sample => sample * heightScale)
        );
      } catch (e) {
        // TODO: Error state.
        console.error(e);
      }
    }
    if (waveformUrl) getSamples();
  }, [height, numSamples, waveformUrl]);

  if (!waveformUrl) return null;
  return (
    <div
      className="waveform"
      style={{ height, width, display: 'flex', alignItems: 'center' }}
    >
      {samples.map((s, index) => (
        <div
          className="waveform__sample"
          key={index}
          style={{
            background: inactiveColor,
            height: s,
            marginRight: 1,
            width: `calc(${sampleWidthPercent}% - 1px)`
          }}
        />
      ))}
    </div>
  );
}

Waveform.defaultProps = {
  activeColor: '#000000',
  inactiveColor: '#dddddd',
  width: '100%',
  height: 75,
  numSamples: 150,
  percentProgress: 50
}

export default Waveform;