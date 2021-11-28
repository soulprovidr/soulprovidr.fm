import { noop } from "./helpers.js";

export class Radio {
  #audio = null;
  #metadata = {};
  #onupdate = noop;
  #status = "stopped";

  get metadata() {
    return this.#metadata;
  }

  get isMuted() {
    return this.#audio.muted || false;
  }

  get status() {
    return this.#status;
  }

  set status(value) {
    this.#status = value;
    this.#onupdate();
  }

  get volume() {
    return this.#audio.volume;
  }

  set volume(value) {
    this.#audio.volume = value;
    this.#onupdate();
  }

  init = (audio, { onupdate = noop }) => {
    this.#audio = audio;
    this.#onupdate = onupdate;
    this.#audio.addEventListener("error", () => {
      this.status = "stopped";
    });
    this.#audio.addEventListener("playing", () => {
      this.status = "playing";
    });
    this.#audio.addEventListener("pause", () => {
      this.status = "stopped";
    });
    this.#audio.addEventListener("volumechange", this.#onupdate);
    this.#audio.addEventListener("waiting", () => {
      this.status = "buffering";
    });
  };

  listen = () => {
    this.#audio.load();
    this.#audio.play();
  };

  mute = () => {
    this.#audio.muted = !this.#audio.muted;
  };

  poll = async () => {
    await this.refresh();
    setTimeout(
      this.poll,
      // + 10s accounts for drift between stream and metadata
      new Date(this.#metadata.next_track) - new Date() + 10000
    );
  };

  refresh = async () => {
    const res = await fetch(
      "https://api.radioking.io/widget/radio/soulprovidr/track/current"
    );
    this.#metadata = await res.json();
    this.#onupdate();
  };

  stop = () => {
    this.#audio.pause();
  };
}
