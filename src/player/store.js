import { action, observable } from 'mobx';

export class PlayerStore {
  @observable meta = {};
  @observable streamable = null;

  @action pause = () => {
    if (this.streamable) {
      this.streamable.pause();
    }
  };

  @action play = (newStreamable = null, meta = {}) => {
    if (!newStreamable && !this.streamable) {
      console.warn('No Streamable available.');
      return false;
    }
    // Just play whatever's on deck if no streamable is provided.
    if (!newStreamable && this.streamable) {
      this.streamable.play();
      return true;
    }
    // Otherwise, stop what's playing and play new streamable.
    if (this.streamable?.uid !== newStreamable.uid) {
      this.stop();
      this.meta = meta;
      this.streamable = newStreamable;
    }
    this.streamable.play()
    return true;
  };

  @action reset = () => {
    this.meta = {};
    this.streamable = null;
  };

  @action seek = progress => {
    if (this.streamable) {
      this.streamable.seek(progress);
    }
  };

  @action stop = () => {
    if (this.streamable) {
      this.streamable.stop();
      this.reset();
    }
  };
}

export default new PlayerStore();