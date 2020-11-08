import React from 'react';
import { useIsRadioPlaying, usePlayRadio } from 'modules/radio';
import { Flex, Heading, Logo, Text } from 'theme';
import { CTAButton } from './CTAButton';

export const ListenLiveCTA = () => {
  const isPlaying = useIsRadioPlaying();
  const onClick = usePlayRadio();
  const buttonText = isPlaying ? <>Pause</> : <>Listen</>;
  return (
    <>
      <Flex alignItems="center">
        <Logo flexShrink={0} mr={3} />
        <div>
          <Heading as="h3" p={0}>
            Soul Provider is streaming live, 24/7.
          </Heading>
          <Text p={0}>
            Tune in now for the best in R&B, hip hop, soul, disco, and more.
          </Text>
        </div>
      </Flex>
      <CTAButton onClick={onClick}>{buttonText}</CTAButton>
    </>
  );
};
