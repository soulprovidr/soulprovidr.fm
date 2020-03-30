import qs from 'qs';

export default async function fetchJson(url, params = {}) {
  try {
    const queryString = qs.stringify(params);
    const response = await fetch(`
      ${url}${queryString && `?${queryString}`}
    `);
    return await response.json();
  } catch (e) {
    return null;
  }
}
