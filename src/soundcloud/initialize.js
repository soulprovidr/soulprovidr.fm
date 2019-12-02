import SoundCloud from 'soundcloud';

export default () => {
  const clientId = process.env.GATSBY_SOUNDCLOUD_CLIENT_ID;
  if (clientId) {
    SoundCloud.initialize({
      client_id: clientId
    });
  }
};