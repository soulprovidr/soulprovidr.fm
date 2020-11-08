import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { selectIsSubscribed } from 'modules/subscribe/selectors';
import { ListenLiveCTA } from './ListenLiveCTA';
import { SubscribeCTA } from './SubscribeCTA';

const SubscribeBannerContainer = styled('div')(
  css({
    mb: 5,
    position: ['relative', 'sticky'],
    top: '-1px',
    zIndex: [0, 2]
  })
);

const SubscribeBannerContent = styled('div')(
  css({
    bg: 'bg',
    border: 'container',
    borderLeft: 'none',
    borderRight: 'none',
    display: 'flex',
    flexDirection: ['column', null, 'row'],
    justifyContent: 'space-between',
    p: 3
  })
);

export const SubscribeBanner = (props) => {
  const isSubscribed = useSelector(selectIsSubscribed);
  const [showListenLive, setShowListenLive] = useState(isSubscribed);

  useEffect(() => {
    if (isSubscribed) {
      setTimeout(() => {
        setShowListenLive(true);
      }, 2000);
    }
  }, [isSubscribed]);

  return (
    <SubscribeBannerContainer {...props}>
      <SubscribeBannerContent>
        {showListenLive ? <ListenLiveCTA /> : <SubscribeCTA />}
      </SubscribeBannerContent>
    </SubscribeBannerContainer>
  );
};
