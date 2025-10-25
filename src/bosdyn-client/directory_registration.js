'use strict';

const { setInterval, clearInterval } = require('node:timers');

const { BaseClient, errorFactory, handleCommonHeaderErrors, handleUnsetStatusError } = require('./common');
const { ResponseError, TimedOutError, RetryableUnavailableError } = require('./exceptions');
const { LoggerUtil } = require('./loggerUtil');
const { DefaultDict } = require('./util');

const directoryPb = require('../bosdyn/api/directory_pb');
const directoryRegistrationPb = require('../bosdyn/api/directory_registration_pb');
const { DirectoryRegistrationServiceClient } = require('../bosdyn/api/directory_registration_service_grpc_pb');

class DirectoryRegistrationResponseError extends ResponseError {}
class ServiceAlreadyExistsError extends DirectoryRegistrationResponseError {}
class ServiceDoesNotExistError extends DirectoryRegistrationResponseError {}

/**
 * Write off-robot services and modify their information.
 * @extends {BaseClient<DirectoryRegistrationServiceClient>}
 */
class DirectoryRegistrationClient extends BaseClient {
  static defaultServiceName = 'directory-registration';
  static serviceType = 'bosdyn.api.DirectoryRegistrationService';

  constructor() {
    super(DirectoryRegistrationServiceClient);
  }

  /**
   * Register a service routing with the robot.
   *
   * If service name already registered, no change will be applied and will throw ServiceAlreadyExistsError.
   * Every request received by the robot will serve as a heartbeat and update the service last_update field.
   * @param {string} name The name of the service. Must be unique.
   * @param {string} serviceType The GRPC service definition defining the calls to/from this service.
   * (authority, service_type) must be unique in the directory.
   * @param {string} authority The authority used to direct calls to this service.
   * (authority, service_type) must be unique in the directory.
   * @param {string} hostIp The ip address of the system that the service is being hosted on.
   * @param {number} port The port number the service can be accessed through on the host system.
   * @param {boolean} userTokenRequired If a user token should be verified to access the service.
   * @param {number} livenessTimeoutSecs Number of seconds without directory heartbeat before timeout fault.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<directoryRegistrationPb.RegisterServiceResponse>}
   */
  register(name, serviceType, authority, hostIp, port, userTokenRequired = true, livenessTimeoutSecs = 0, args) {
    const serviceEntry = new directoryPb.ServiceEntry()
      .setName(name)
      .setType(serviceType)
      .setAuthority(authority)
      .setUserTokenRequired(userTokenRequired)
      .setLivenessTimeoutSecs(livenessTimeoutSecs);

    const endpoint = new directoryPb.Endpoint().setHostIp(hostIp).setPort(port);

    const req = new directoryRegistrationPb.RegisterServiceRequest()
      .setEndpoint(endpoint)
      .setServiceEntry(serviceEntry);

    return this.call(this._stub.registerService, req, null, _directoryRegisterError, false, args);
  }

  /**
   * Update a service definition of an existing service that matches the service name.
   *
   * If service name is not registered, will throw ServiceDoesNotExistError.
   * Every request received by the robot will serve as a heartbeat and update the service last_update field.
   * @param {string} name The name of the service to be updated.
   * @param {string} serviceType The GRPC service definition defining the calls to/from this service.
   * (authority, service_type) must be unique in the directory.
   * @param {string} authority The authority used to direct calls to this service.
   * (authority, service_type) must be unique in the directory.
   * @param {string} hostIp The ip address of the system that the service is being hosted on.
   * @param {number} port The port number the service can be accessed through on the host system.
   * @param {boolean} userTokenRequired If a user token should be verified to access the service.
   * @param {number} livenessTimeoutSecs Number of seconds without directory heartbeat before timeout fault.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<directoryRegistrationPb.UpdateServiceResponse>}
   */
  update(name, serviceType, authority, hostIp, port, userTokenRequired = true, livenessTimeoutSecs = 0, args) {
    const serviceEntry = new directoryPb.ServiceEntry()
      .setName(name)
      .setType(serviceType)
      .setAuthority(authority)
      .setUserTokenRequired(userTokenRequired)
      .setLivenessTimeoutSecs(livenessTimeoutSecs);

    const endpoint = new directoryPb.Endpoint().setHostIp(hostIp).setPort(port);

    const req = new directoryRegistrationPb.UpdateServiceRequest().setEndpoint(endpoint).setServiceEntry(serviceEntry);

    return this.call(this._stub.updateService, req, null, _directoryUpdateError, false, args);
  }

  /**
   * Remove a service routing with the robot.
   * @param {string} name The name of the service to be removed.
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<directoryRegistrationPb.UnregisterServiceResponse>}
   */
  unregister(name, args) {
    const req = new directoryRegistrationPb.UnregisterServiceRequest().setServiceName(name);
    return this.call(this._stub.unregisterService, req, null, _directoryUnregisterError, false, args);
  }
}

const _REGISTER_STATUS_TO_ERROR = DefaultDict(() => [DirectoryRegistrationResponseError, null]);
_REGISTER_STATUS_TO_ERROR.set(directoryRegistrationPb.RegisterServiceResponse.Status.STATUS_OK, [null, null]);
_REGISTER_STATUS_TO_ERROR.set(directoryRegistrationPb.RegisterServiceResponse.Status.STATUS_ALREADY_EXISTS, [
  ServiceAlreadyExistsError,
  'The service already exists on the robot.',
]);

const _UPDATE_STATUS_TO_ERROR = DefaultDict(() => [DirectoryRegistrationResponseError, null]);
_UPDATE_STATUS_TO_ERROR.set(directoryRegistrationPb.UpdateServiceResponse.Status.STATUS_OK, [null, null]);
_UPDATE_STATUS_TO_ERROR.set(directoryRegistrationPb.UpdateServiceResponse.Status.STATUS_NONEXISTENT_SERVICE, [
  ServiceDoesNotExistError,
  'The specified service does not exist on the robot.',
]);

const _UNREGISTER_STATUS_TO_ERROR = DefaultDict(() => [DirectoryRegistrationResponseError, null]);
_UNREGISTER_STATUS_TO_ERROR.set(directoryRegistrationPb.UnregisterServiceResponse.Status.STATUS_OK, [null, null]);
_UNREGISTER_STATUS_TO_ERROR.set(directoryRegistrationPb.UnregisterServiceResponse.Status.STATUS_NONEXISTENT_SERVICE, [
  ServiceDoesNotExistError,
  'The specified service does not exist on the robot.',
]);

const _directoryRegisterError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      Object.keys(directoryRegistrationPb.RegisterServiceResponse.Status),
      _REGISTER_STATUS_TO_ERROR,
    ),
  ),
);

const _directoryUpdateError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      Object.keys(directoryRegistrationPb.UpdateServiceResponse.Status),
      _UPDATE_STATUS_TO_ERROR,
    ),
  ),
);

const _directoryUnregisterError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      Object.keys(directoryRegistrationPb.UnregisterServiceResponse.Status),
      _UNREGISTER_STATUS_TO_ERROR,
    ),
  ),
);

/**
 * Reset a service registration by unregistering the service and then re-registering it.
 *
 * This is useful when a program wants to register a new service but there may be an old entry
 * in the robot directory from a previous instance of the program. If the service
 * does not already exist, the exception will be suppressed and a new registration will
 * still be performed. Unregistering the service has the advantage of clearing all service
 * faults, if any existed.
 * @param {DirectoryRegistrationClient} directoryRegistrationClient A directory registration instance
 * @param {string} name The name of the service to be reset.
 * @param {string} serviceType The GRPC service definition defining the calls to/from this service.
 * (authority, service_type) must be unique in the directory.
 * @param {string} authority The authority used to direct calls to this service.
 * (authority, service_type) must be unique in the directory.
 * @param {string} hostIp The ip address of the system that the service is being hosted on.
 * @param {string|number} port The port number the service can be accessed through on the host system.
 * @param {boolean} userTokenRequired If a user token should be verified to access the service.
 * @param {number} livenessTimeoutSecs Number of seconds without directory heartbeat before timeout fault.
 */
async function resetServiceRegistration(
  directoryRegistrationClient,
  name,
  serviceType,
  authority,
  hostIp,
  port,
  userTokenRequired = true,
  livenessTimeoutSecs = 0,
) {
  try {
    await directoryRegistrationClient.unregister(name);
  } catch (e) {
    // Pass
  }

  await directoryRegistrationClient.register(
    name,
    serviceType,
    authority,
    hostIp,
    port,
    userTokenRequired,
    livenessTimeoutSecs,
  );
}

/**
 * Helper class to keep a directory entry updated.
 *
 * Assuming the directory itself is hosted on the robot, and the service being registered in the
 * directory is on a payload, use of this class streamlines the following cases:
 *
 * 1) The payload, or the payload-hosted service, is restarted.
 * 2) The robot is restarted.
 * 3) On-robot processes clear out the directory. This can happen in rare cases.
 *
 * This class will also maintain liveness status with the robot directory, if enabled for this
 * service, by sending a registration/update request at the specified interval.
 */
class DirectoryRegistrationKeepAlive {
  /**
   * Creates an instance of DirectoryRegistrationKeepAlive to maintain a service registration.
   * @param {DirectoryRegistrationClient} dirRegClient - Client for the directory registration service.
   * @param {Object} [options] Optional configuration options.
   * @param {Console} [options.logger=console] Logger object for logging messages. Defaults to `console`.
   * @param {number|null} [options.rpcTimeoutSeconds=null] Timeout in seconds for RPC requests. `null` means no timeout.
   * @param {number} [options.rpcIntervalSeconds=30] Interval in seconds for periodic service registrations.
   */
  constructor(dirRegClient, { logger = null, rpcTimeoutSeconds = null, rpcIntervalSeconds = 30 } = {}) {
    this.authority = null;
    this.directoryName = null;
    this.host = null;
    this.logger = logger || LoggerUtil.getLogger('DirectoryRegistrationKeepAlive');
    this.port = null;
    this.serviceType = null;

    /**
     * Client to the directory registration service.
     * @type {DirectoryRegistrationClient}
     */
    this.dirRegClient = dirRegClient;

    this._rpcTimeout = rpcTimeoutSeconds;
    this._reregisterPeriod = rpcIntervalSeconds;
    this._reregisterInterval = null;

    this.startPeriodicReregister();
  }

  async [Symbol.asyncDispose]() {
    this.shutdown();
    await this.unregister();
  }

  async start(
    directoryName,
    serviceType,
    authority,
    host,
    port,
    livenessTimeoutSecs = null,
    userTokenRequired = true,
    resetService = true,
  ) {
    if (livenessTimeoutSecs === null) {
      livenessTimeoutSecs = this._reregisterPeriod * 2.5;
    }

    if (resetService) {
      await resetServiceRegistration(
        this.dirRegClient,
        directoryName,
        serviceType,
        authority,
        host,
        port,
        userTokenRequired,
        livenessTimeoutSecs,
      );
    } else {
      try {
        await this.dirRegClient.register(
          directoryName,
          serviceType,
          authority,
          host,
          port,
          userTokenRequired,
          livenessTimeoutSecs,
        );
      } catch (e) {
        if (e instanceof ServiceAlreadyExistsError) {
          await this.dirRegClient.update(
            directoryName,
            serviceType,
            authority,
            host,
            port,
            userTokenRequired,
            livenessTimeoutSecs,
          );
        } else {
          throw e;
        }
      }
    }
    this.logger.info(`${directoryName} service registered/updated.`);

    this.authority = authority;
    this.directoryName = directoryName;
    this.host = host;
    this.port = port;
    this.serviceType = serviceType;
    this.livenessTimeoutSecs = livenessTimeoutSecs;
    this.userTokenRequired = userTokenRequired;

    this.startPeriodicReregister();
  }

  isAlive() {
    return this._reregisterInterval !== null;
  }

  shutdown() {
    this.logger.info(`Shutting down ${this.directoryName} keep alive`);
    if (this._reregisterInterval) {
      clearInterval(this._reregisterInterval);
      this._reregisterInterval = null;
    }
  }

  async unregister() {
    this.logger.info(`Unregistering ${this.directoryName} from directory`);
    await this.dirRegClient.unregister(this.directoryName);
  }

  startPeriodicReregister() {
    this.logger.info(`Starting directory registration loop for ${this.directoryName}`);

    this._reregisterInterval = setInterval(async () => {
      try {
        await this.dirRegClient.register(
          this.directoryName,
          this.serviceType,
          this.authority,
          this.host,
          this.port,
          this.userTokenRequired,
          this.livenessTimeoutSecs,
        );
      } catch (error) {
        if (error instanceof ServiceAlreadyExistsError) {
          // Ignore already registered errors.
        } else if (error instanceof RetryableUnavailableError) {
          // Ignore transient availability errors.
        } else if (error instanceof TimedOutError) {
          this.logger.warn(`Timed out, timeout set to "${this.rpcTimeout}"`);
        } else {
          this.logger.error(`Caught general exception: ${error.message}`);
        }
      }
    }, this._reregisterPeriod * 1000).unref();
  }
}

module.exports = {
  DirectoryRegistrationResponseError,
  ServiceAlreadyExistsError,
  ServiceDoesNotExistError,
  DirectoryRegistrationClient,
  DirectoryRegistrationKeepAlive,
};
