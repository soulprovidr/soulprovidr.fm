import React from 'react';
import { useIsRadioPlaying, usePlayRadio } from 'modules/radio';
import { CTA } from './CTA';

export const ListenLiveCTA = () => {
  const isPlaying = useIsRadioPlaying();
  const listenFn = usePlayRadio();
  const buttonText = isPlaying ? <>Pause</> : <>Listen</>;
  return (
    <CTA
      title="Soul Provider is streaming live, 24/7."
      text="Tune in now for the best in R&B, hip hop, soul, disco, and more."
    >
      <CTA.Button onClick={() => listenFn()}>{buttonText}</CTA.Button>
    </CTA>
  );
};
