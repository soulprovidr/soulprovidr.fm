'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TrackSchema extends Schema {
  up () {
    this.create('tracks', (table) => {
      table.increments();
      table.timestamps();
      table.string('artist');
      table.string('album');
      table.string('title');
      table.string('year');
      table.string('image');
    })
  }

  down () {
    this.drop('tracks');
  }
}

module.exports = TrackSchema;
