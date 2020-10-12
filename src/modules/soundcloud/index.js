import { useEffect, useState } from 'react';
import superagent from 'superagent';
import qs from 'qs';

const API_URL = 'https://api.soundcloud.com';

function getQueryString(params) {
  return qs.stringify({
    client_id: process.env.GATSBY_SOUNDCLOUD_CLIENT_ID,
    ...params
  });
}

function getQualifiedStreamUrl(streamUrl) {
  return streamUrl ? `${streamUrl}?${getQueryString()}` : null;
}

async function request(path, params = {}) {
  try {
    const queryString = getQueryString(params);
    const { body } = await superagent.get(`${API_URL}${path}?${queryString}`);
    return body;
  } catch (e) {
    return null;
  }
}

async function resolve(url) {
  try {
    return await request('/resolve', { url });
  } catch (e) {
    return null;
  }
}

export function useTrack(soundCloudUrl) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function resolveSoundCloudUrl() {
      if (soundCloudUrl) {
        const trackData = await resolve(soundCloudUrl);
        if (!trackData) {
          setData(null);
          return;
        }
        setData({
          ...trackData,
          stream_url: getQualifiedStreamUrl(trackData.stream_url)
        });
      }
    }
    resolveSoundCloudUrl();
  }, [soundCloudUrl]);
  return data;
}

export function useWaveform(waveformUrl) {
  const [waveform, setWaveform] = useState(null);
  useEffect(() => {
    if (!waveformUrl) return;
    (async () => {
      const url = waveformUrl.replace('.png', '.json');
      try {
        const response = await fetch(url);
        setWaveform(await response.json());
      } catch (e) {
        return;
      }
    })();
  }, [waveformUrl]);
  return waveform;
}

export * from './components/Waveform';
