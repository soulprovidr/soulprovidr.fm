import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import {
  selectIsPending,
  selectIsSubscribed,
  subscribe
} from 'modules/subscribe';
import { Input, Spinner, Text } from 'theme';
import { CTA } from './CTA';

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

const SubscribeFields = styled('div')(
  css({
    display: ['block', null, 'flex'],
    alignItems: 'center',
    justifyContent: 'flex-end',
    pt: [3, null, 0]
  })
);

const SubscribeInput = styled(Input)(
  css({
    mr: [0, null, 2],
    width: ['100%', null, '250px']
  })
);

export const SubscribeCTA = () => {
  const dispatch = useDispatch();
  const isPending = useSelector(selectIsPending);
  const isSubscribed = useSelector(selectIsSubscribed);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!email.length) {
      setError(false);
    }
  }, [email]);

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
  return (
    <>
      {renderOverlay()}
      <CTA
        text="Get a free mixtape delivered to your inbox every month."
        title="In the mood to groove?"
      >
        <SubscribeFields>
          <SubscribeInput
            error={error}
            placeholder="shola@soulprovidr.fm"
            onChange={onChange}
          />
          <CTA.Button onClick={onSubmit}>Subscribe</CTA.Button>
        </SubscribeFields>
      </CTA>
    </>
  );
};
