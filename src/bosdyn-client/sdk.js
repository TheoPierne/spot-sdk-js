'use strict';

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const process = require('node:process');

require('dotenv').config({ path: path.resolve(`${__dirname}/../.env`) });

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const expandenv = require('expandenv');

const { ArmSurfaceContactClient } = require('./arm_surface_contact');
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
const { FaultClient } = require('./fault');
const { AggregatorClient } = require('./gps/aggregator_client');
const { RegistrationClient } = require('./gps/registration_client');
const { GraphNavClient } = require('./graph_nav');
const { GripperCameraParamClient } = require('./gripper_camera_param');
const { ImageClient } = require('./image');
const { InverseKinematicsClient } = require('./inverse_kinematics');
const { IREnableDisableServiceClient } = require('./ir_enable_disable');
const { LeaseClient } = require('./lease');
const { LicenseClient } = require('./license');
const { LocalGridClient } = require('./local_grid');
const { LoggerUtil } = require('./loggerUtil');
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

class SdkError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}

class UnsetAppTokenError extends SdkError {}
class UnableToLoadAppTokenError extends SdkError {}

const BOSDYN_RESOURCE_ROOT = process.env.BOSDYN_RESOURCE_ROOT || path.resolve(expandenv('$USERPROFILE'), '.bosdyn');

const _LOGGER = LoggerUtil.getLogger('SDK');

function generateClientName(prefix = '') {
  const processInfo = `${path.basename(require.main.filename)}-${process.pid}`;
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
  LeaseClient,
  LicenseClient,
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

  let allServiceClients = _DEFAULT_SERVICE_CLIENTS;
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
   * @param {BaseClient} creationFunc Callable that returns a client. Typically just the class.
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
    * @param {string} [resourcePathGlob = null] Optional path to certificate resource(s).
    If null, will load the certificate in the 'resources' package.
    Otherwise, should be a glob expression to match certificates.
    Defaults to null.
    * @returns {void}
    * @throws {RangeError}
    */
  loadRobotCert(resourcePathGlob = null) {
    this.cert = null;
    if (resourcePathGlob === null) {
      const cert = process.env.NODE_ENV !== 'production' ? 'ca.crt' : 'robot.pem';
      const pathToResource = path.join(__dirname, 'resources', cert);
      this.cert = fs.readFileSync(pathToResource);
    } else {
      const certPaths = [];
      fs.readdirSync(resourcePathGlob).forEach(file => {
        const link = `${resourcePathGlob}${resourcePathGlob.endsWith('/') ? '' : '/'}${file}`;
        file = fs.statSync(link);
        if (file.isFile()) {
          certPaths.push(link);
        }
      });
      if (certPaths.length === 0) throw RangeError(`No files matched ${resourcePathGlob}`);
      this.cert = '';
      for (const certPath of certPaths) {
        this.cert += fs.readFileSync(certPaths[certPath]);
      }
    }
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
  Sdk,
  SdkError,
  UnsetAppTokenError,
  UnableToLoadAppTokenError,
};
