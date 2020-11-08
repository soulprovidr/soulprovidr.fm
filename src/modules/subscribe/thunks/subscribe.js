import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const subscribe = createAsyncThunk(
  'subscribe/SUBSCRIBE',
  async (email, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/.netlify/functions/subscribe', {
        email
      });
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data ?? null);
    }
  },
  { condition: (email) => !!email }
);
