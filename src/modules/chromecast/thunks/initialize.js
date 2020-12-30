import { createAsyncThunk } from '@reduxjs/toolkit';

export const initialize = createAsyncThunk(
  'chromecast/initialize',
  async () =>
    await new Promise((resolve, reject) => {
      window['__onGCastApiAvailable'] = (isAvailable) =>
        isAvailable ? resolve() : reject();
      const script = document.createElement('script');
      script.setAttribute(
        'src',
        'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1'
      );
      document.body.appendChild(script);
    })
);
