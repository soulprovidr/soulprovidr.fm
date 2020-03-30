import React, { useMemo, useRef, useState } from 'react';
import chunk from 'lodash.chunk';

import Spinner from '@/common/components/Spinner';
import average from '@/common/util/average';
import useIsMouseOver from '@/common/hooks/useIsMouseOver';
import { useWaveform } from '../';

import './waveform.css';

function Waveform({
  activeColor,
  inactiveColor,
  duration,
  progress,
  width,
  height,
  numSamples,
  onSeek,
  reflectionHeight,
  waveformUrl
}) {
  const waveformRef = useRef(null);

  const [selectedSampleIndex, setSelectedSampleIndex] = useState(-1);
  const isMouseOver = useIsMouseOver(waveformRef);
  const waveform = useWaveform(waveformUrl);

  const samplePercentWidth = 100 / numSamples;
  const percentProgress = (progress / duration) * 100;
  // How long does it take to play a sample (in seconds)?
  const transitionDuration = Math.round(duration / numSamples / 1000);

  // Chunk samples and average their amplitudes.
  const samples = useMemo(() => {
    if (!waveform) return [];
    const heightScale = (height - reflectionHeight) / waveform.height;
    return chunk(waveform.samples, waveform.samples.length / numSamples)
      .map(average)
      .map((sample) => sample * heightScale);
  }, [height, numSamples, reflectionHeight, waveform]);

  const onMouseOut = () => {
    setSelectedSampleIndex(-1);
  };

  const renderLoading = () => {
    return (
      <div className="waveform__loading">
        <Spinner />
      </div>
    );
  };

  const renderSample = (sampleHeight, index) => {
    const previousSamplesWidth = index * samplePercentWidth;
    const isActive =
      previousSamplesWidth < percentProgress || selectedSampleIndex >= index;
    const onClick = () =>
      onSeek(Math.round((previousSamplesWidth / 100) * duration));
    const onMouseOver = () => setSelectedSampleIndex(index);
    return (
      <div
        className="waveform__sample"
        key={index}
        onClick={onClick}
        onMouseOver={onMouseOver}
        style={{
          background: isActive ? activeColor : inactiveColor,
          height: sampleHeight,
          marginRight: 1,
          transition: `background ${transitionDuration}s linear`,
          width: `calc(${samplePercentWidth}% - 1px)`
        }}
      />
    );
  };

  const renderWaveform = () => {
    return (
      <div
        className={`
          waveform
          ${isMouseOver ? 'waveform--hover' : ''}
        `}
        onMouseOut={onMouseOut}
        ref={waveformRef}
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
            .map((sample) => sample * (reflectionHeight / height))
            .map(renderSample)}
        </div>
      </div>
    );
  };

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
  onSeek: () => null,
  percentProgress: 25,
  reflectionHeight: 50
};

export default Waveform;
