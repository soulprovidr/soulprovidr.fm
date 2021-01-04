import axios from 'axios';

export default async function fetchJson(url, params = {}) {
  try {
    const { data } = await axios.get(url, { params });
    return data;
  } catch (e) {
    return null;
  }
}
