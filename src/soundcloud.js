import React, { useEffect, useState } from 'react';
import qs from 'qs';

const API_URL = 'https://api.soundcloud.com';

function getQueryString(params) {
  return qs.stringify({
    client_id: process.env.GATSBY_SOUNDCLOUD_CLIENT_ID,
    ...params
  });
}

async function request(path, params = {}) {
  try {
    const queryString = getQueryString(params);
    const response = await fetch(`${API_URL}${path}?${queryString}`);
    return await response.json();
  } catch (e) {
    return null;
  }
};

function resolve(url) {
  return request('/resolve', { url });
}

export const useSoundCloudData = soundCloudUrl => {
  const [data, setData] = useState(null); 
  useEffect(() => {
    (async () => soundCloudUrl
      ? setData(await resolve(soundCloudUrl))
      : false
    )();
  }, [soundCloudUrl]);
  return data;
};