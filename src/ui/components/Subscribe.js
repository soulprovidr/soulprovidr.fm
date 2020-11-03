import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { subscribe } from 'modules/subscribe';
import { Button, Flex, Heading, Input, Logo, Spinner, Text } from 'theme';
import {
  selectIsPending,
  selectIsSubscribed
} from '../../modules/subscribe/selectors';

const SubscribeContainer = styled('div')(
  css({
    mb: 5,
    position: ['relative', 'sticky'],
    top: '-1px',
    zIndex: [0, 2]
  })
);

const SubscribeOverlay = styled('div')(
  css({
    background: 'rgba(255,255,255,0.8)',
    backdropFilter: 'blur(3px)',
    position: 'absolute',
    top: 1,
    right: 0,
    bottom: 1,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [Text]: {
      fontSize: 5,
      pb: 0
    }
  })
);

const SubscribeContent = styled('div')(
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

const SubscribeFields = styled('d')(
  css({
    display: ['block', null, 'flex'],
    alignItems: 'center',
    justifyContent: ['flex-start', 'flex-end'],
    pt: [3, null, 0]
  })
);

const SubscribeInput = styled(Input)(
  css({
    mr: [0, null, 2],
    width: ['100%', null, '250px']
  })
);

const SubscribeButton = styled(Button)(
  css({
    mt: [3, null, 0],
    width: ['100%', null, '150px']
  })
);

const Subscribe = (props) => {
  const dispatch = useDispatch();
  const isPending = useSelector(selectIsPending);
  const isSubscribed = useSelector(selectIsSubscribed);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [showListenLive, setShowListenLive] = useState(false);

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async () => {
    const action = await dispatch(subscribe(email));
    if (subscribe.rejected.match(action)) {
      // TODO: Handle actual error.
      setError(true);
    }
  };

  const renderOverlay = () => {
    let children = null;
    if (showListenLive) {
      return null;
    }
    if (isPending) {
      children = <Spinner size={30} />;
    }
    if (isSubscribed) {
      children = <Text>You rock! 🤘</Text>;
    }
    if (children) {
      return <SubscribeOverlay>{children}</SubscribeOverlay>;
    }
  };

  useEffect(() => {
    if (!email.length) {
      setError(false);
    }
  }, [email]);

  useEffect(() => {
    if (isSubscribed) {
      setShowListenLive(true);
    }
  }, []);

  let heading, text, buttonText;
  if (showListenLive) {
    heading = 'Still in the mood to groove?';
    text = 'Soul Provider is streaming live for your listening pleasure.';
    buttonText = 'Listen Live';
  } else {
    heading = 'In the mood to groove?';
    text = 'Get a free mixtape delivered to your inbox every month.';
    buttonText = 'Subscribe';
  }

  return (
    <SubscribeContainer {...props}>
      {renderOverlay()}
      <SubscribeContent>
        <Flex alignItems="center">
          <Logo flexShrink={0} mr={3} />
          <div>
            <Heading as="h3" p={0}>
              {heading}
            </Heading>
            <Text p={0}>{text}</Text>
          </div>
        </Flex>
        <SubscribeFields>
          {!showListenLive && (
            <SubscribeInput
              error={error}
              placeholder="shola@soulprovidr.fm"
              onChange={onChange}
            />
          )}
          <SubscribeButton variant="primary" onClick={onSubmit}>
            {buttonText}
          </SubscribeButton>
        </SubscribeFields>
      </SubscribeContent>
    </SubscribeContainer>
  );
};

export default Subscribe;
