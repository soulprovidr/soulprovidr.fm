import React from 'react';
import { css } from '@emotion/core';

import { Badge, Box, Flex, FlexColumn } from '@/ui';
import theme from '@/ui/theme';

const boxShadow = theme.shadows[0];
const transitionTimingFn = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';

export const Card = (props) => (
  <Box
    border={0}
    borderColor="border"
    borderRadius={0}
    position="relative"
    css={css`
      cursor: pointer;
      transition: transform 200ms ${transitionTimingFn},
        box-shadow 200ms ${transitionTimingFn};

      &:hover {
        box-shadow: ${boxShadow};
        transform: translate3d(0, -2px, 0);

        .cardHeaderOverlay {
          opacity: 1;
        }
      }
    `}
    {...props}
  />
);

export const CardBadge = (props) => (
  <Badge position="absolute" top={10} right={10} zIndex={1} {...props} />
);

export const CardHeader = (props) => <Box position="relative" {...props} />;

export const CardHeaderImage = (props) => <Box as="img" width={1} {...props} />;

export const CardHeaderOverlay = (props) => (
  <Flex
    className="cardHeaderOverlay"
    alignItems="center"
    justifyContent="center"
    bg="rgba(0, 0, 0, 0.2)"
    position="absolute"
    top={0}
    right={0}
    bottom={0}
    left={0}
    zIndex={1}
    css={css`
      opacity: 0;
      transition: opacity 250ms ${transitionTimingFn};
      &:hover {
        opacity: 1;
      }
    `}
    {...props}
  />
);

export const ContentCard = ({
  badgeColour,
  badgeContent,
  children,
  image,
  onClick,
  overlayContent,
  ...props
}) => (
  <Card onClick={onClick} {...props}>
    <CardBadge bg={badgeColour}>{badgeContent}</CardBadge>
    <CardHeader>
      {overlayContent && (
        <CardHeaderOverlay>{overlayContent}</CardHeaderOverlay>
      )}
      {image}
    </CardHeader>
    <Flex flexDirection="column" p={3}>
      {children}
    </Flex>
  </Card>
);

export const FeatureCard = ({
  badgeColour,
  badgeContent,
  children,
  image,
  onClick,
  overlayContent,
  ...props
}) => {
  return (
    <Card onClick={onClick} {...props}>
      <CardBadge bg={badgeColour}>{badgeContent}</CardBadge>
      <Flex flexDirection={['column', 'row']}>
        <CardHeader width={[1, 1 / 3.17]}>
          {overlayContent && (
            <CardHeaderOverlay>{overlayContent}</CardHeaderOverlay>
          )}
          {image}
        </CardHeader>
        <FlexColumn width={[1, 2.17 / 3.17]} justifyContent="center" p={[3, 5]}>
          {children}
        </FlexColumn>
      </Flex>
    </Card>
  );
};
