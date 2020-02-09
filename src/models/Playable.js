export default class Playable {
  duration = 0;
  streamUrl = null;

  constructor({
    duration = 0,
    streamUrl = null
  }) {
    if (!duration || !streamUrl) {
      throw new Error('Invalid params');
    }
    else {
      this.duration = duration;
      this.streamUrl = streamUrl;
    }
  }
}