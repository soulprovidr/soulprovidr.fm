import { noop } from "./helpers.js";

export class Radio {
  #audio = null;
  #metadata = {};
  #onupdate = noop;
  #status = "stopped";

  get metadata() {
    return this.#metadata;
  }

  get status() {
    return this.#status;
  }

  set status(value) {
    this.#status = value;
    this.#onupdate();
  }

  init(audio, { onupdate = noop }) {
    this.#audio = audio;
    this.#audio.addEventListener("error", () => {
      this.status = "stopped";
    });
    this.#audio.addEventListener("playing", () => {
      this.status = "playing";
    });
    this.#audio.addEventListener("pause", () => {
      this.status = "stopped";
    });
    this.#audio.addEventListener("waiting", () => {
      this.status = "buffering";
    });
    this.#onupdate = onupdate;
  }

  listen() {
    this.#audio.load();
    this.#audio.play();
  }

  async poll() {
    const res = await fetch(
      "https://api.radioking.io/widget/radio/soulprovidr/track/current"
    );
    this.#metadata = await res.json();
    this.#onupdate();
    setTimeout(
      this.poll.bind(this),
      // + 10s accounts for drift between stream and metadata
      new Date(this.#metadata.next_track) - new Date() + 10000
    );
  }

  stop() {
    this.#audio.pause();
  }
}
