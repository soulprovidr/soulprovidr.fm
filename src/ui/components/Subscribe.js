import React from 'react';
import { Box, Button, Flex, Heading, Input, Logo, Text } from 'theme';

const SubscribeContainer = ({ children }) => (
  <Box pb={5} position={['block', 'sticky']} top="-1px" zIndex="2">
    <Flex
      bg="bg"
      flexDirection={['column', 'row']}
      justifyContent="space-between"
      border={0}
      borderLeft="none"
      borderRight="none"
      p={3}
    >
      {children}
    </Flex>
  </Box>
);

const Subscribe = () => (
  <SubscribeContainer>
    <Flex alignItems="center">
      <Logo flexShrink={0} mr={3} />
      <Box>
        <Heading as="h3" p={0}>
          In the mood to groove?
        </Heading>
        <Text p={0}>
          Get a free mixtape delivered to your inbox every month.
        </Text>
      </Box>
    </Flex>
    <Flex
      pt={[3, 0]}
      alignItems="center"
      justifyContent={['flex-start', 'center']}
    >
      <Box mr={2}>
        <Input placeholder="shola@soulprovidr.fm" />
      </Box>
      <Button variant="primary">Subscribe</Button>
    </Flex>
  </SubscribeContainer>
);

export default Subscribe;
