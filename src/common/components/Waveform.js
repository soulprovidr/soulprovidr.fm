import React, { useEffect, useState } from 'react';
import chunk from 'lodash.chunk';

import { useWaveform } from '@/soundcloud';

/**
 * Take the average of an array of numbers.
 *
 * @param {Array<Number>} array
 * @returns
 */
function average(array) {
  return array.reduce((total, value) => total + value, 0) / array.length;
}

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
  const sampleWidthPercent = 100 / numSamples;

  const waveform = useWaveform(waveformUrl);

  useEffect(() => {
    async function getSamples() {
      try {
        const heightScale = height / waveform.height;
        setSamples(
          chunk(waveform.samples, waveform.samples.length / numSamples)
            .map(average)
            .map(sample => sample * heightScale)
        );
      } catch (e) {
        // TODO: Error state.
        console.error(e);
      }
    }
    if (waveform) getSamples();
  }, [height, numSamples, waveform]);

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
            background: ((index + 1) * sampleWidthPercent) > percentProgress
              ? inactiveColor
              : activeColor,
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
  activeColor: '#257AD7',
  inactiveColor: '#AFAFAF',
  width: '100%',
  height: 75,
  numSamples: 150,
  percentProgress: 50
};

export default Waveform;