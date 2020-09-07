import React from 'react';
import { Box, Flex, Heading, Input, Logo, Text } from '@/ui';

const StyledSubscribeWidget = (props) => (
  <Flex
    justifyContent="space-between"
    bg="white"
    border="1px solid #eee"
    borderLeft="none"
    borderRight="none"
    p={3}
    position={['block', 'sticky']}
    top="-1px"
    zIndex="2"
    {...props}
  />
);

const SubscribeWidget = () => (
  <StyledSubscribeWidget>
    <Flex alignItems="center">
      <Logo mr={3} />
      <Box>
        <Heading as="h5">In the mood to groove?</Heading>
        <Text m={0}>
          Get a free mixtape delivered to your inbox every month.
        </Text>
      </Box>
    </Flex>
    <Flex alignItems="center" justifyContent="center">
      <Box mr={2}>
        <Input placeholder="shola@soulprovidr.fm" />
      </Box>
      <Box as="button" type="submit" className="btn btn-primary">
        Subscribe
      </Box>
    </Flex>
  </StyledSubscribeWidget>
);

export default SubscribeWidget;
