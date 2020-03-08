import { observable, action, reaction } from 'mobx';
import { Howl, Howler } from 'howler';
import { PLAYER_STATUS } from './constants';

class Streamable {
  uid = null;
  duration = 0;
  progress = 0;
  url = null;

  constructor(uid, { duration, progress, url }) {

  }
}

class PlayerRepository {
  @observable progress = 0;
  @observable status = PLAYER_STATUS.UNSTARTED;
  @observable streamable = null;

  @action play(streamable) {
    if (streamable.uid !== this.streamable.uid)
      this.streamable = streamable;
  }

  @action pause() {
    this.status = PLAYER_STATUS.PAUSED;
  }

  @action stop() {
    this.status = PLAYER_STATUS.UNSTARTED;
  }

  @action seek(progress) {

  }
}

class StreamablePlayer {
  engine = null;

  play(streamable) {

  }
}

const repository = new PlayerRepository();
const player = new StreamablePlayer();

reaction(
  () => repository.streamable,
  streamable => {

  }
);