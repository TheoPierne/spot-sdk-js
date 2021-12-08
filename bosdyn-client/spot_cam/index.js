const audio = require('./audio');
const compositor = require('./compositor');
const health = require('./health');
const lighting = require('./lighting');
const media_log = require('./media_log');
const network = require('./network');
const power = require('./power');
const ptz = require('./ptz');
const streamquality = require('./streamquality');
const version = require('./version');

const CLIENTS = [
    audio.AudioClient,
    compositor.CompositorClient,
    health.HealthClient,
    lighting.LightingClient,
    media_log.MediaLogClient,
    network.NetworkClient,
    power.PowerClient,
    ptz.PtzClient,
    streamquality.StreamQualityClient,
    version.VersionClient
]

function register_all_service_clients(sdk){
    for(const client of CLIENTS){
        sdk.register_service_client(client);
    }
}

module.exports = {
    register_all_service_clients
};