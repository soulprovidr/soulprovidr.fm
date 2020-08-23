import React from 'react';
import { Box, Flex, Heading, Text } from '@/ui';
import Logo from '@/common/components/Logo';

const SubscribeWidget = () => (
  <Flex
    my={4}
    justifyContent="space-between"
    bg="white"
    border="1px solid #eee"
    borderLeft="none"
    borderRight="none"
    p={3}
    position={['block', 'sticky']}
    top="-1px"
    zIndex="2"
  >
    <Flex alignItems="center">
      <Logo className="d-inline-block align-middle mr-3" size={45} />
      <Box>
        <Heading as="h5">In the mood to groove?</Heading>
        <Text>Get a free mixtape delivered to your inbox every month.</Text>
      </Box>
    </Flex>
    <Flex alignItems="center" justifyContent="center">
      <Box
        as="input"
        type="text"
        placeholder="shola@soulprovidr.fm"
        mr={2}
        p={1}
        px={2}
      />
      <Box as="button" type="submit" className="btn btn-primary">
        Subscribe
      </Box>
    </Flex>
  </Flex>
);

export default SubscribeWidget;
