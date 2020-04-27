import React, { useMemo, useRef, useState } from 'react';
import chunk from 'lodash.chunk';
import c from 'classnames';

import Spinner from '@/common/components/Spinner';
import average from '@/common/util/average';
import useIsMouseOver from '@/common/hooks/useIsMouseOver';
import { useWaveform } from '../';

import styles from './Waveform.module.css';

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
  waveformUrl,
}) {
  const waveformRef = useRef(null);

  const [selectedSampleIndex, setSelectedSampleIndex] = useState(-1);
  const isMouseOver = useIsMouseOver(waveformRef);
  const waveform = useWaveform(waveformUrl);

  const sampleWidthPercent = 100 / numSamples;
  const percentProgress = (progress / duration) * 100;
  // How long does it take to play a sample (in seconds)?
  // const transitionDuration = Math.round(duration / numSamples / 1000);

  // Chunk samples and average their amplitudes.
  const samples = useMemo(() => {
    if (!waveform) return [];
    const heightScale = (height - reflectionHeight) / waveform.height;
    return chunk(waveform.samples, waveform.samples.length / numSamples)
      .map(average)
      .map((sample) => sample * heightScale);
  }, [height, numSamples, reflectionHeight, waveform]);

  const onMouseLeave = () => {
    setSelectedSampleIndex(-1);
  };

  const renderLoading = () => {
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );
  };

  const renderSample = (sampleHeight, index) => {
    const progressWidthPercent = index * sampleWidthPercent;
    const isActive =
      progressWidthPercent < percentProgress || selectedSampleIndex >= index;
    const onClick = () =>
      onSeek(Math.round((progressWidthPercent / 100) * duration));
    const onMouseOver = () => setSelectedSampleIndex(index);
    return (
      <div
        className={styles.sample}
        key={index}
        onClick={onClick}
        onMouseOver={onMouseOver}
        style={{
          background: isActive ? activeColor : inactiveColor,
          height: sampleHeight,
          marginRight: 1,
          // transition: `background ${transitionDuration}s linear`,
          width: `calc(${sampleWidthPercent}% - 1px)`,
        }}
      />
    );
  };

  const renderWaveform = () => {
    return (
      <div
        className={c(styles.waveform, { [styles.hover]: isMouseOver })}
        onMouseLeave={onMouseLeave}
        ref={waveformRef}
      >
        <div
          className={styles.top}
          style={{ height: height - reflectionHeight }}
        >
          {samples.map(renderSample)}
        </div>
        <div className={styles.bottom}>
          <div className={styles.gradient} />
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
  reflectionHeight: 50,
};

export default Waveform;
