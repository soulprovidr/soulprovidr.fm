import React, { useMemo, useState } from 'react';
import chunk from 'lodash.chunk';

import Spinner from '@/common/components/Spinner';
import average from '@/common/util/average';
import { useWaveform } from '@/soundcloud';

import './waveform.css';

function Waveform({
  activeColor,
  inactiveColor,
  duration,
  progress,
  width,
  height,
  numSamples,
  reflectionHeight,
  waveformUrl
}) {
  const [samples, setSamples] = useState([]);
  const [selectedSampleIndex, setSelectedSampleIndex] = useState(-1);
  const waveform = useWaveform(waveformUrl);
  
  const samplePercentWidth = 100 / numSamples;
  const percentProgress = ((progress * 1000) / duration) * 100;

  // How long does it take to play a sample (in seconds)?
  const transitionDuration = Math.round((duration / numSamples) / 1000);

  // Chunk samples and average their amplitudes.
  useMemo(() => {
    if (!waveform) return false;
    const heightScale = (height - reflectionHeight) / waveform.height;
    setSamples(
      chunk(waveform.samples, waveform.samples.length / numSamples)
        .map(average)
        .map(sample => sample * heightScale)
    );
  }, [height, numSamples, reflectionHeight, waveform]);

  const clearSelectedSampleIndex = () => setSelectedSampleIndex(-1);

  const renderSample = (sampleHeight, index) => {
    const previousSamplesWidth = index * samplePercentWidth;
    const isActive = (previousSamplesWidth < percentProgress)
      || (selectedSampleIndex >= index);
    return (
      <div
        className="waveform__sample"
        key={index}
        onMouseOver={() => setSelectedSampleIndex(index)}
        style={{
          background: isActive ? activeColor : inactiveColor,
          height: sampleHeight,
          marginRight: 1,
          transition: `background ${transitionDuration} s linear`,
          width: `calc(${samplePercentWidth}% - 1px)`
        }}
      />
    )
  }

  const renderWaveform = () => {
    return (
      <div
        className="waveform"
        onMouseOut={clearSelectedSampleIndex}
      >
        <div
          className="waveform__top"
          style={{ height: height - reflectionHeight }}
        >
          {samples.map(renderSample)}
        </div>
        <div className="waveform__bottom">
          <div className="waveform__gradient" />
          {samples
            .map(sample => sample * (reflectionHeight / height))
            .map(renderSample)
          }
        </div>
      </div>
    );;
  };

  const renderLoading = () => {
    return (
      <div className="waveform__loading">
        <Spinner />
      </div>
    );
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
  height: 90,
  numSamples: 150,
  percentProgress: 25,
  reflectionHeight: 50
};

export default Waveform;