const axios = require('axios');

const getReleases = async (artist, album) => {
  const { data } = await axios.get(`
    https://musicbrainz.org/ws/2/release/?query=artist:${artist}%20AND%20release:${album}&fmt=json
  `);
  return data.releases;
}

const getRelease = async(releaseId) => {
  const { data } = await axios.get(`
    https://coverartarchive.org/release/${releaseId}
  `);
  return data;
};

const fetch = async (artist, album) => {
  try {
    const releases = await getReleases(artist, album);
    const release = await getRelease(releases[0].id);
    return release.images[0];
  } catch (e) {
    return null;
  }
};

module.exports = {
  fetch
};