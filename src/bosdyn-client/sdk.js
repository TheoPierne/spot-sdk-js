/**
 * @file Sdk is a repository for settings typically common to a single developer and/or robot fleet.
 */

'use strict';

const { Buffer } = require('node:buffer');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const process = require('node:process');

const { ArmSurfaceContactClient } = require('./arm_surface_contact');
const { AudioVisualClient } = require('./audio_visual');
const { AuthClient } = require('./auth');
const { AutoReturnClient } = require('./auto_return');
const { AutowalkClient } = require('./autowalk');
const { DEFAULT_MAX_MESSAGE_LENGTH } = require('./channel');
const { DataAcquisitionClient } = require('./data_acquisition');
const { DataAcquisitionStoreClient } = require('./data_acquisition_store');
const { DataBufferClient } = require('./data_buffer');
const { DataServiceClient } = require('./data_service');
const { DirectoryClient } = require('./directory');
const { DirectoryRegistrationClient } = require('./directory_registration');
const { DockingClient } = require('./docking');
const { DoorClient } = require('./door');
const { EstopClient } = require('./estop');
const { BosdynError } = require('./exceptions');
const { FaultClient } = require('./fault');
const { AggregatorClient } = require('./gps/aggregator_client');
const { RegistrationClient } = require('./gps/registration_client');
const { GraphNavClient } = require('./graph_nav');
const { GripperCameraParamClient } = require('./gripper_camera_param');
const { ImageClient } = require('./image');
const { InverseKinematicsClient } = require('./inverse_kinematics');
const { IREnableDisableServiceClient } = require('./ir_enable_disable');
const { KeepaliveClient } = require('./keepalive');
const { LeaseClient } = require('./lease');
const { LicenseClient } = require('./license');
const { LocalGridClient } = require('./local_grid');
const { LogStatusClient } = require('./log_status');
const { LoggerUtil } = require('./logger_util');
const { ManipulationApiClient } = require('./manipulation_api_client');
const { MapProcessingServiceClient } = require('./map_processing');
const { NetworkComputeBridgeClient } = require('./network_compute_bridge_client');
const { PayloadClient } = require('./payload');
const { PayloadRegistrationClient } = require('./payload_registration');
const { PointCloudClient } = require('./point_cloud');
const { PowerClient } = require('./power');
const { AddRequestHeader } = require('./processors');
const { RayCastClient } = require('./ray_cast');
const { GraphNavRecordingServiceClient } = require('./recording');
const { Robot } = require('./robot');
const { RobotCommandClient } = require('./robot_command');
const { RobotIdClient } = require('./robot_id');
const { RobotStateClient } = require('./robot_state');
const { SpotCheckClient } = require('./spot_check');
const { TimeSyncClient } = require('./time_sync');
const { WorldObjectClient } = require('./world_object');

/** General class of errors to handle non-response non-rpc errors. */
class SdkError extends BosdynError {}

/** Path to app token not set. */
class UnsetAppTokenError extends SdkError {}
/** Cannot load the provided app token path. */
class UnableToLoadAppTokenError extends SdkError {}

// os.homedir() works on every OS, unlike $USERPROFILE which only exists on Windows.
const BOSDYN_RESOURCE_ROOT = process.env.BOSDYN_RESOURCE_ROOT || path.join(os.homedir(), '.bosdyn');

/**
 * Environment variable with the path (or glob) of the certificates to trust instead of the Boston Dynamics robot
 * certificate, e.g. the CA of a mock robot. Used by loadRobotCert() when it gets no path.
 * @type {string}
 */
const BOSDYN_CA_CERT_ENV = 'BOSDYN_CA_CERT';

const _LOGGER = LoggerUtil.getLogger('SDK');

/**
 * Returns a descriptive client name for API clients with an optional prefix.
 */
function generateClientName(prefix = '') {
  const entrypoint = require.main?.filename || process.argv[1] || 'node';
  const processInfo = `${path.basename(entrypoint)}-${process.pid}`;
  const machineName = os.hostname();
  let userName;

  if (!machineName) {
    try {
      userName = os.userInfo().username;
    } catch (err) {
      console.warn('Could not get username');
      userName = '<unknown host>';
    }
  }

  const hostName = machineName || userName;
  return `${prefix}${hostName}:${processInfo}`;
}

const _DEFAULT_SERVICE_CLIENTS = [
  AggregatorClient,
  ArmSurfaceContactClient,
  AudioVisualClient,
  AuthClient,
  AutowalkClient,
  AutoReturnClient,
  DataAcquisitionClient,
  DataAcquisitionStoreClient,
  DataBufferClient,
  DataServiceClient,
  DirectoryClient,
  DirectoryRegistrationClient,
  DockingClient,
  DoorClient,
  EstopClient,
  FaultClient,
  GraphNavClient,
  GripperCameraParamClient,
  GraphNavRecordingServiceClient,
  ImageClient,
  IREnableDisableServiceClient,
  InverseKinematicsClient,
  KeepaliveClient,
  LeaseClient,
  LicenseClient,
  LogStatusClient,
  LocalGridClient,
  ManipulationApiClient,
  MapProcessingServiceClient,
  NetworkComputeBridgeClient,
  PayloadClient,
  PayloadRegistrationClient,
  PointCloudClient,
  PowerClient,
  RegistrationClient,
  RayCastClient,
  RobotCommandClient,
  RobotIdClient,
  RobotStateClient,
  SpotCheckClient,
  TimeSyncClient,
  WorldObjectClient,
];

/**
 * Return an Sdk with the most common configuration.
 *
 * @param {string} clientNamePrefix Prefix to pass to generate_client_name()
 * @param {any[]|null} [serviceClients=null] List of service client classes to register in addition to the defaults.
 * @param {?string} [certResourceGlob=null] Glob expression matching robot certificate(s). Default null to
 * use distributed certificate.
 * @returns {Sdk}
 * @throws {RangeError} Robot cert could not be loaded.
 */
function createStandardSdk(clientNamePrefix, serviceClients = null, certResourceGlob = null) {
  _LOGGER.debug(`[SDK] Creating standard Sdk, cert glob: "${certResourceGlob}"`);
  const sdk = new Sdk(clientNamePrefix);
  const clientName = generateClientName(clientNamePrefix);
  sdk.loadRobotCert(certResourceGlob);
  sdk.requestProcessors.push(new AddRequestHeader(() => clientName));

  let allServiceClients = [..._DEFAULT_SERVICE_CLIENTS];
  if (serviceClients !== null) {
    if (Array.isArray(serviceClients)) {
      allServiceClients = allServiceClients.concat(serviceClients);
    } else {
      allServiceClients.push(serviceClients);
    }
  }

  for (const client of allServiceClients) {
    sdk.registerServiceClient(client);
  }

  return sdk;
}

/**
 * Repository for settings typically common to a single developer and/or robot fleet.
 * See also Robot for robot-specific settings.
 */
class Sdk {
  /**
   * @param {string} [name=null] Name to identify the client when communicating with the robot.
   */
  constructor(name = null) {
    this.cert = null;
    this.clientName = name;
    this.logger = LoggerUtil.getLogger(name || 'bosdyn.Sdk');

    /** @type {Function[]} */
    this.requestProcessors = [];

    /** @type {Function[]} */
    this.responseProcessors = [];
    this.serviceClientFactoriesByType = {};
    this.serviceTypeByName = {};

    /**
     * Robots created by this Sdk, keyed by address.
     * @type {Object<string, Robot>}
     */
    this.robots = {};

    /**
     * Set default max message length for sending.
     * @type {number}
     */
    this.maxSendMessageLength = DEFAULT_MAX_MESSAGE_LENGTH;

    /**
     * Set default max message length for receiving.
     * @type {number}
     */
    this.maxReceiveMessageLength = DEFAULT_MAX_MESSAGE_LENGTH;
    this.executor = null;
  }

  /**
   * Get a Robot initialized with this Sdk, creating it if it does not yet exist.
   * @param {string} address Network-resolvable address of the robot, e.g. '192.168.80.3'
   * @param {string} [name=null] A unique identifier for the robot, e.g. 'My First Robot'.
   * Default null to use the address as the name.
   * @returns {Robot} robot A Robot initialized with the current Sdk settings.
   */
  createRobot(address, name = null) {
    if (address in this.robots) {
      return this.robots[address];
    }
    const robot = new Robot(name || address);
    robot.address = address;

    robot.updateFrom(this);
    this.robots[address] = robot;

    return robot;
  }

  /**
   * Updates the send and receive max message length values in all the clients/channels created from this point on.
   * @param {number} maxMessageLength Max message length value to use for sending and receiving messages.
   * @returns {void}
   */
  setMaxMessageLength(maxMessageLength) {
    this.maxSendMessageLength = maxMessageLength;
    this.maxReceiveMessageLength = maxMessageLength;
  }

  /**
   * Tell the Sdk how to create a specific type of service client.
   * @param {typeof import('./common').BaseClient} creationFunc Callable that returns a client. Typically just the
   * class.
   * @param {string} [serviceType=null] Type of the service. If null (default), will try to get
   * the name from creation_func.
   * @param {string} [serviceName=null] Name of the service. If null (default), will try to get
   * the name from creation_func.
   * @returns {void}
   */
  registerServiceClient(creationFunc, serviceType = null, serviceName = null) {
    serviceName = serviceName || creationFunc.defaultServiceName;
    serviceType = serviceType || creationFunc.serviceType;

    if (serviceName !== null) {
      this.serviceTypeByName[serviceName] = serviceType;
    }
    this.serviceClientFactoriesByType[serviceType] = creationFunc;
  }

  /**
   * Load the SSL certificate for the robot.
   * @param {?string} [resourcePathGlob=null] Optional path to certificate resource(s): a file, a directory or a glob
   * expression to match certificates. If null, the path in the BOSDYN_CA_CERT environment variable, if set (e.g. the
   * CA of a mock robot), else the robot certificate of the 'resources' package (Boston Dynamics Root CA), like Python.
   * @returns {void}
   * @throws {RangeError} No certificate matches the path.
   */
  loadRobotCert(resourcePathGlob = null) {
    this.cert = null;

    // An explicit choice: NODE_ENV=development replaced the robot certificate with a test CA for any application.
    if (resourcePathGlob === null && process.env[BOSDYN_CA_CERT_ENV]) {
      resourcePathGlob = process.env[BOSDYN_CA_CERT_ENV];
      this.logger.info(`[SDK] Trusting the certificates of ${BOSDYN_CA_CERT_ENV}: "${resourcePathGlob}"`);
    }

    if (resourcePathGlob === null) {
      this.cert = fs.readFileSync(path.join(__dirname, 'resources', 'robot.pem'));
      return;
    }

    const wildcardToRegExp = pattern =>
      new RegExp(
        `^${pattern
          .replace(/[.+^${}()|[\]\\]/g, '\\$&')
          .replace(/\*/g, '.*')
          .replace(/\?/g, '.')}$`,
      );

    let certPaths = [];
    if (fs.existsSync(resourcePathGlob)) {
      const stat = fs.statSync(resourcePathGlob);
      if (stat.isFile()) {
        certPaths = [resourcePathGlob];
      } else if (stat.isDirectory()) {
        certPaths = fs
          .readdirSync(resourcePathGlob)
          .map(file => path.join(resourcePathGlob, file))
          .filter(filePath => fs.statSync(filePath).isFile());
      }
    } else if (/[*?]/.test(resourcePathGlob)) {
      const directory = path.dirname(resourcePathGlob);
      const pattern = wildcardToRegExp(path.basename(resourcePathGlob));
      if (fs.existsSync(directory)) {
        certPaths = fs
          .readdirSync(directory)
          .filter(file => pattern.test(file))
          .map(file => path.join(directory, file))
          .filter(filePath => fs.statSync(filePath).isFile());
      }
    }

    if (certPaths.length === 0) {
      throw new RangeError(`[SDK] No robot certificate found for "${resourcePathGlob}"`);
    }

    this.cert = Buffer.concat(certPaths.map(certPath => fs.readFileSync(certPath)));
  }

  /**
   * Remove all cached Robot instances.
   * Subsequent calls to createRobot() will return newly created Robots.
   * Existing robot instances will continue to work, but their time sync and token refresh
   * threads will be stopped.
   */
  clearRobots() {
    for (const robot of Object.values(this.robots)) {
      robot._shutdown();
    }
    this.robots = {};
  }
}

module.exports = {
  generateClientName,
  createStandardSdk,
  BOSDYN_RESOURCE_ROOT,
  BOSDYN_CA_CERT_ENV,
  Sdk,
  SdkError,
  UnsetAppTokenError,
  UnableToLoadAppTokenError,
};
