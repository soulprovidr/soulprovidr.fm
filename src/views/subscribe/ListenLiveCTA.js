import React from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import css from '@styled-system/css';
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
  const dispatch = useDispatch();

  const onClick = async () => {
    console.log('Listen Live');
  };

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
        <CTAButton onClick={onClick}>
          <StyledPlayIcon color="white" size={13} /> Listen Live
        </CTAButton>
      </CTAFields>
    </>
  );
};
