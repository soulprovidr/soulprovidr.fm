import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Button, Flex, Heading, Input, Logo, Text } from 'theme';

const SubscribeContainer = styled('div')(
  css({
    pb: 5,
    position: ['relative', 'sticky'],
    top: '-1px',
    zIndex: [0, 2]
  })
);

const SubscribeContent = styled('div')(
  css({
    bg: 'bg',
    border: 0,
    borderLeft: 'none',
    borderRight: 'none',
    display: 'flex',
    flexDirection: ['column', 'row'],
    justifyContent: 'space-between',
    p: 3
  })
);

const SubscribeForm = styled('form')(
  css({
    display: ['block', 'flex'],
    alignItems: 'center',
    justifyContent: ['flex-start', 'center'],
    pt: [3, 0]
  })
);

const SubscribeInput = styled(Input)(
  css({
    mr: [0, 2],
    width: ['100%', '250px']
  })
);

const SubscribeButton = styled(Button)(
  css({
    mt: [3, 0],
    width: ['100%', null]
  })
);

const Subscribe = (props) => (
  <SubscribeContainer {...props}>
    <SubscribeContent>
      <Flex alignItems="center">
        <Logo flexShrink={0} mr={3} />
        <div>
          <Heading as="h3" p={0}>
            In the mood to groove?
          </Heading>
          <Text p={0}>
            Get a free mixtape delivered to your inbox every month.
          </Text>
        </div>
      </Flex>
      <SubscribeForm>
        <SubscribeInput placeholder="shola@soulprovidr.fm" />
        <SubscribeButton variant="primary">Subscribe</SubscribeButton>
      </SubscribeForm>
    </SubscribeContent>
  </SubscribeContainer>
);

export default Subscribe;
