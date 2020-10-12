import superagent from 'superagent';

export default async function fetchJson(url, params = {}) {
  try {
    console.log(url);
    const request = superagent.get(url).query(params);
    const { body } = await request;
    console.log(body);
    return body;
  } catch (e) {
    return null;
  }
}
