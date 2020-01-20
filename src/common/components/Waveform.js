import React, { useEffect, useState } from 'react';
import chunk from 'lodash.chunk';
import styled from 'styled-components';

import { average } from '@/helpers';
import { useWaveform } from '@/soundcloud';

import Spinner from './Spinner';

const WaveformTop = styled.div`
  align-items: flex-end;
  display: flex;
  height: ${props => props.height - props.reflectionHeight}px;
`;

const WaveformBottom = styled.div`
  align-items: flex-start;
  display: flex;
  height: ${props => props.reflectionHeight}px;
  position: relative;
`;

const ReflectionGradient = styled.div`
  background: linear-gradient(180deg, rgba(255,255,255,.7) 0%, rgba(255,255,255,.4) 70%);
  height: 100%;
  position: absolute;
  width: 100%;
`;

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
  }, [height, numChunks, reflectionHeight, waveform]);

  function renderWaveform() {
    return (
      <>
        <WaveformTop>
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
        </WaveformTop>
        <WaveformBottom>
          <ReflectionGradient />
          {chunks.map((s, index) => (
            <div
              key={index}
              style={{
                background: ((index + 1) * chunkPercentWidth) > percentProgress
                  ? inactiveColor
                  : activeColor,
                height: s * (reflectionHeight / height),
                marginRight: 1,
                width: `calc(${chunkPercentWidth}% - 1px)`
              }}
            />
          ))}
        </WaveformBottom>
      </>
    );
  }

  function renderLoading() {
    return (
      <div className="d-flex h-100 w-100 justify-content-center">
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
  numChunks: 150,
  percentProgress: 25,
  reflectionHeight: 50
};

export default Waveform;