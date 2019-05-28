'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Track = use('App/Models/Track');

class TrackController {
  /**
   * Show a list of all recently-played tracks.
   * GET tracks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const tracks = await Track
      .query()
      .orderBy('created_at', 'desc')
      .fetch();
    return tracks.toJSON();
  }

  /**
   * Log a track.
   * POST tracks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const {
      album, artist,title, year
    } = request.post();
    try {
      await Track.create(
        { album, artist, title, year }
      );
      return response.status(201);
    } catch (e) {
      console.error(e);
      response.status(500);
      return JSON.stringify(e);
    }
  }
}

module.exports = TrackController;
