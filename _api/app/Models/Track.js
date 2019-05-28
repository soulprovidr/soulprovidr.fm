'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const CoverArt = use('CoverArtService');
const Model = use('Model');
const Ws = use('Ws');

/**
 * Broadcast new track 'create' event to subscribers.
 * @param {*} track 
 */
const afterCreate = (track) => {
  const topic = Ws.getChannel('track').topic('track');
  if (topic) {
    topic.broadcast('create', track);
  }
}

const beforeCreate = async (track) => {
  const { album, artist } = track;
  try {
    if (album && artist) {
      const { image } = await CoverArt.fetch(artist, album);
      if (image) {
        track.image = image;
      }
    }
  } catch (e) {
    // 
  }
}

class Track extends Model {
  static boot() {
    super.boot();

    this.addHook('afterCreate', afterCreate);
    this.addHook('beforeCreate', beforeCreate);
  }

}

module.exports = Track;
