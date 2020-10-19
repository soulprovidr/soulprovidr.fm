import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import get from 'lodash.get';
import Image from 'gatsby-image';
import { Badge } from 'theme';

import { PlayerIcon } from '../player';

const transitionTimingFn = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';

const StyledCoverImage = styled('div')({
  cursor: 'pointer',
  position: 'relative'
});

const StyledBadge = styled(Badge)(
  css({
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1
  })
);

const Overlay = styled('div')(({ force = false }) =>
  css({
    bg: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 0,
    transition: `opacity 200ms ${transitionTimingFn}`,
    opacity: force ? 1 : 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      opacity: 1
    }
  })
);

export const CoverImage = ({
  category = null,
  forceOverlay,
  image,
  src,
  onClick,
  ...props
}) => {
  const imageFluid = get(image, 'childImageSharp.fluid', null);
  return (
    <StyledCoverImage {...props}>
      {category && (
        <StyledBadge bg={category.colour} colour="white">
          {category.label}
        </StyledBadge>
      )}
      {imageFluid ? <Image fluid={imageFluid} /> : null}
      <Overlay force={forceOverlay} onClick={onClick}>
        <PlayerIcon color="white" size={45} src={src} />
      </Overlay>
    </StyledCoverImage>
  );
};
