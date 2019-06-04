import { fetch } from 'whatwg-fetch'

/**
 * Fetch the current track information
 */
export default onSuccess => {
  function fetchCurrent() {
    fetch('https://www.radioking.com/widgets/api/v1/radio/210013/track/current')
      .then(response => response.json())
      .then(data => {
        onSuccess({
          artist: data.artist,
          album: data.album,
          buy_link: data.buy_link,
          image: data.cover,
          title: data.title
        })
      });
  }

  return () => {
    fetchCurrent();
    const interval = setInterval(fetchCurrent, 5000);
    return () => {
      clearInterval(interval);
    };
  }
}