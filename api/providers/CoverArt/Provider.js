'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const CoverArtService = require('./CoverArtService');

class CoverArtProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    this.app.bind('CoverArtService', function (app) {
      return CoverArtService;
    });
  }
}

module.exports = CoverArtProvider
