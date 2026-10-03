/**
 * @file The clients of the Spot CAM services, and registerAllServiceClients() to register them in a Robot.
 */

'use strict';

/**
 * The Spot CAM clients, like the package bosdyn.client.spot_cam of Python: its modules, IMAGE_SERVICE_NAME, CLIENTS
 * and registerAllServiceClients() (only the last one was exported).
 */

const audio = require('./audio');
const compositor = require('./compositor');
const health = require('./health');
const lighting = require('./lighting');
const lightsHelper = require('./lights_helper');
const mediaLog = require('./media_log');
const network = require('./network');
const power = require('./power');
const ptz = require('./ptz');
const streamquality = require('./streamquality');
const version = require('./version');

// The classes and functions of the modules, also exported directly: require('spot-sdk-js').spotCam.PtzClient.
const { AudioClient } = audio;
const { CompositorClient } = compositor;
const { HealthClient } = health;
const { LightingClient } = lighting;
const { LightsHelper } = lightsHelper;
const { MediaLogClient } = mediaLog;
const { NetworkClient } = network;
const { PowerClient } = power;
const { PtzClient, createFocusState, shiftPanAngle } = ptz;
const { StreamQualityClient } = streamquality;
const { VersionClient } = version;

/** The name of the image service of the Spot CAM. */
const IMAGE_SERVICE_NAME = 'spot-cam-image';

const CLIENTS = [
  audio.AudioClient,
  compositor.CompositorClient,
  health.HealthClient,
  lighting.LightingClient,
  mediaLog.MediaLogClient,
  network.NetworkClient,
  power.PowerClient,
  ptz.PtzClient,
  streamquality.StreamQualityClient,
  version.VersionClient,
];

/**
 * Registers the clients of the Spot CAM services in an Sdk, so that robot.ensureClient() can create them.
 * @param {import('../sdk').Sdk} sdk
 */
function registerAllServiceClients(sdk) {
  for (const client of CLIENTS) {
    sdk.registerServiceClient(client);
  }
}

module.exports = {
  // The modules, by their names in Python.
  audio,
  compositor,
  health,
  lighting,
  lights_helper: lightsHelper,
  media_log: mediaLog,
  network,
  power,
  ptz,
  streamquality,
  version,
  AudioClient,
  CompositorClient,
  HealthClient,
  LightingClient,
  LightsHelper,
  MediaLogClient,
  NetworkClient,
  PowerClient,
  PtzClient,
  createFocusState,
  shiftPanAngle,
  StreamQualityClient,
  VersionClient,
  IMAGE_SERVICE_NAME,
  CLIENTS,
  registerAllServiceClients,
};
