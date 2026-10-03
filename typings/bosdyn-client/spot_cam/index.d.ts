import audio = require("./audio");
import compositor = require("./compositor");
import health = require("./health");
import lighting = require("./lighting");
import lightsHelper = require("./lights_helper");
import mediaLog = require("./media_log");
import network = require("./network");
import power = require("./power");
import ptz = require("./ptz");
import streamquality = require("./streamquality");
import version = require("./version");
export const AudioClient: typeof audio.AudioClient;
export const CompositorClient: typeof compositor.CompositorClient;
export const HealthClient: typeof health.HealthClient;
export const LightingClient: typeof lighting.LightingClient;
export const LightsHelper: typeof lightsHelper.LightsHelper;
export const MediaLogClient: typeof mediaLog.MediaLogClient;
export const NetworkClient: typeof network.NetworkClient;
export const PowerClient: typeof power.PowerClient;
export const PtzClient: typeof ptz.PtzClient;
export const createFocusState: typeof ptz.createFocusState;
export const shiftPanAngle: typeof ptz.shiftPanAngle;
export const StreamQualityClient: typeof streamquality.StreamQualityClient;
export const VersionClient: typeof version.VersionClient;
/** The name of the image service of the Spot CAM. */
export const IMAGE_SERVICE_NAME: "spot-cam-image";
export const CLIENTS: (typeof audio.AudioClient | typeof compositor.CompositorClient | typeof health.HealthClient | typeof lighting.LightingClient | typeof mediaLog.MediaLogClient | typeof network.NetworkClient | typeof power.PowerClient | typeof ptz.PtzClient | typeof streamquality.StreamQualityClient | typeof version.VersionClient)[];
/**
 * Registers the clients of the Spot CAM services in an Sdk, so that robot.ensureClient() can create them.
 * @param {import('../sdk').Sdk} sdk
 */
export function registerAllServiceClients(sdk: import("../sdk").Sdk): void;
export { audio, compositor, health, lighting, lightsHelper as lights_helper, mediaLog as media_log, network, power, ptz, streamquality, version };
