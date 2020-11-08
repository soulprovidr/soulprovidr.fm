import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { useIsRadioPlaying, usePlayRadio } from 'modules/radio';
import { Flex, Heading, Logo, Text } from 'theme';
import PlayIcon from '../components/PlayIcon';
import { CTAButton } from './CTAButton';
import { CTAFields } from './CTAFields';

const StyledPlayIcon = styled(PlayIcon)(
  css({
    mr: 2
  })
);

export const ListenLiveCTA = () => {
  const isPlaying = useIsRadioPlaying();
  const listenLive = usePlayRadio();
  return (
    <>
      <Flex alignItems="center">
        <Logo flexShrink={0} mr={3} />
        <div>
          <Heading as="h3" p={0}>
            Still in the mood to groove?
          </Heading>
          <Text p={0}>
            Soul Provider is streaming live 24/7 for your listening pleasure.
          </Text>
        </div>
      </Flex>
      <CTAFields>
        <CTAButton onClick={listenLive} disabled={isPlaying}>
          <StyledPlayIcon color="white" size={13} /> Listen Live
        </CTAButton>
      </CTAFields>
    </>
  );
};
