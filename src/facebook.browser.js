'use strict';

const Lie = require('lie');
const config = require('config');

let promise;

function facebook() {
  if (!promise) {
    promise = new Lie(function(resolve) {
      const facebookConnectPlugin = require('facebookConnectPlugin');

      window.fbAsyncInit = function() {
        facebookConnectPlugin.browserInit(config.facebookAppId, 'v2.4');
        resolve(facebookConnectPlugin);
      };
    });
  }

  return promise;
}

module.exports = facebook;