'use strict';

const { AudioClient } = require('./audio');
const { CompositorClient } = require('./compositor');
const { HealthClient } = require('./health');
const { LightingClient } = require('./lighting');
const { MediaLogClient } = require('./media_log');
const { NetworkClient } = require('./network');
const { PowerClient } = require('./power');
const { PtzClient } = require('./ptz');
const { StreamQualityClient } = require('./streamquality');
const { VersionClient } = require('./version');

const CLIENTS = [
  AudioClient,
  CompositorClient,
  HealthClient,
  LightingClient,
  MediaLogClient,
  NetworkClient,
  PowerClient,
  PtzClient,
  StreamQualityClient,
  VersionClient,
];

function registerAllServiceClients(sdk) {
  for (const client of CLIENTS) {
    sdk.registerServiceClient(client);
  }
}

module.exports = {
  registerAllServiceClients,
};
