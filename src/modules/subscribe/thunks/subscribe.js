import { createAsyncThunk } from '@reduxjs/toolkit';
import superagent from 'superagent';
import { MAILCHIMP_API_KEY, MAILCHIMP_LIST_API_URL } from '../constants';

export const subscribe = createAsyncThunk(
  'subscribe/SUBSCRIBE',
  async (email) => {
    console.log('subscribe', email);
    const request = superagent
      // .auth('soulprovidr', MAILCHIMP_API_KEY)
      .post(MAILCHIMP_LIST_API_URL)
      .send({
        email_address: email,
        status: 'subscribed'
      })
      .set('accept', 'json');
    const { body } = await request;
    console.log(body);
    return body;
  },
  { condition: (email) => !!email }
);
