import qs from 'qs';
import { Howl, Howler } from 'howler';

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
}

class SoundCloud {
  sound = null;

  resolve = async (url) => await request('/resolve', { url });

  play = src => {
    this.stop();
    this.sound = new Howl({ src });
  };

  stop = () => {
    if (this.sound) {
      this.sound.unload();
    }
  };
}

export default new SoundCloud();