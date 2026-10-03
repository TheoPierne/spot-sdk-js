/**
 * @file Client for the directory registration service.
 *
 * A DirectoryRegistrationClient allows a client to modify information about other API services available on a robot.
 */

'use strict';

const { BaseClient, errorFactory, handleCommonHeaderErrors, handleUnsetStatusError } = require('./common');
const { ErrorCallbackResult } = require('./error_callback_result');
const { ResponseError, RetryableUnavailableError, RpcError, TimedOutError } = require('./exceptions');
const { LoggerUtil } = require('./logger_util');
const { DefaultDict } = require('./util');

const directoryPb = require('../bosdyn/api/directory_pb');
const directoryRegistrationPb = require('../bosdyn/api/directory_registration_pb');
const { DirectoryRegistrationServiceClient } = require('../bosdyn/api/directory_registration_service_grpc_pb');
const { Event } = require('../bosdyn-core/event');
const { nowSec } = require('../bosdyn-core/util');

/**
 * @typedef {import('./logger_util').Logger} Logger
 */

/** General class of errors for directory registration responses. */
class DirectoryRegistrationResponseError extends ResponseError {}
/** The service already exists on the robot. */
class ServiceAlreadyExistsError extends DirectoryRegistrationResponseError {}
/** The specified service does not exist on the robot. */
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
   * @param {Object} [args] Extra arguments for controlling RPC details.
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
   * @param {Object} [args] Extra arguments for controlling RPC details.
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
   * @param {Object} [args] Extra arguments for controlling RPC details.
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
      directoryRegistrationPb.RegisterServiceResponse.Status,
      _REGISTER_STATUS_TO_ERROR,
    ),
  ),
);

const _directoryUpdateError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      directoryRegistrationPb.UpdateServiceResponse.Status,
      _UPDATE_STATUS_TO_ERROR,
    ),
  ),
);

const _directoryUnregisterError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      directoryRegistrationPb.UnregisterServiceResponse.Status,
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
    if (!(e instanceof ServiceDoesNotExistError)) throw e;
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

// Like the Python daemon thread, the waits of the loop do not keep the process alive.
const _DAEMON = { ref: false };

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
   * @param {DirectoryRegistrationClient} dirRegClient Client to the directory registration service.
   * @param {Object} [options] Optional configuration options.
   * @param {?Logger} [options.logger=null] Object to log with. Defaults to null, in which case one with the
   * class name is acquired.
   * @param {?number} [options.rpcTimeoutSeconds=null] Number of seconds to wait for a dirRegClient RPC. Defaults
   * to null, for the default RPC timeout.
   * @param {number} [options.rpcIntervalSeconds=30] Interval in seconds at which to request service registrations.
   * @param {number} [options.initialRetrySeconds=1] Initial number of seconds to wait before retrying a failed
   * registration request.
   */
  constructor(
    dirRegClient,
    { logger = null, rpcTimeoutSeconds = null, rpcIntervalSeconds = 30, initialRetrySeconds = 1 } = {},
  ) {
    /** @type {string|null} */
    this.authority = null;
    /** @type {string|null} */
    this.directoryName = null;
    /** @type {string|null} */
    this.host = null;
    /** @type {string|null} */
    this.port = null;
    /** @type {string|null} */
    this.serviceType = null;
    this.logger = logger || LoggerUtil.getLogger('DirectoryRegistrationKeepAlive');

    /**
     * Client to the directory registration service.
     * @type {DirectoryRegistrationClient}
     */
    this.dirRegClient = dirRegClient;

    /**
     * Optional callback called when an RPC error occurs in the re-registration loop. It returns an
     * ErrorCallbackResult, or a promise of one, telling the loop what to do.
     * @type {?function(Error): (number|Promise<number>)}
     */
    this.reregistrationErrorCallback = null;

    this._endReregisterSignal = new Event();
    this._rpcTimeout = rpcTimeoutSeconds;
    this._reregisterPeriod = rpcIntervalSeconds;
    this._initialRetrySeconds = initialRetrySeconds;

    this._started = false;
    /**
     * The re-registration loop, while it runs.
     * @type {?Promise<void>}
     * @private
     */
    this._task = null;
  }

  async [Symbol.asyncDispose]() {
    await this.shutdown();
    try {
      await this.unregister();
    } catch (_) {
      /* ignore */
    }
  }

  /**
   * Register, optionally update, and then kick off the re-registration loop.
   * Can not be restarted with this method after a shutdown.
   *
   * @param {string} directoryName Unique name in the directory.
   * @param {string} serviceType Service type.
   * @param {string} authority gRPC authority/scope.
   * @param {string} host Service host (IP or name).
   * @param {number} port Service port.
   * @param {number|null} [livenessTimeoutSecs=null] Directory liveness TTL. Defaults to 2.5 × `rpcIntervalSeconds`.
   * @param {boolean} [userTokenRequired=true] Whether a user token is required for this service.
   * @param {boolean} [resetService=true] Fully reset the registration before starting the loop.
   * @returns {Promise<this>}
   * @throws {Error} If already started.
   * @throws {RpcError} Problem communicating with the robot.
   */
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
    if (this._started) {
      throw new Error('DirectoryRegistrationKeepAlive can only be started once.');
    }
    this._started = true;

    if (livenessTimeoutSecs === null) {
      livenessTimeoutSecs = this._reregisterPeriod * 2.5;
    }

    try {
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
          if (!(e instanceof ServiceAlreadyExistsError)) throw e;
          await this.dirRegClient.update(
            directoryName,
            serviceType,
            authority,
            host,
            port,
            userTokenRequired,
            livenessTimeoutSecs,
          );
        }
      }
    } catch (e) {
      // Like Python, the loop was not started: start() can be called again.
      this._started = false;
      throw e;
    }

    this.logger.info(`${directoryName} service registered/updated.`);

    this.authority = authority;
    this.directoryName = directoryName;
    this.host = host;
    this.port = port;
    this.serviceType = serviceType;
    this.livenessTimeoutSecs = livenessTimeoutSecs;
    this.userTokenRequired = userTokenRequired;

    this._task = this._periodicReregister()
      .catch(err => this.logger.error(`Reregistration loop crashed: ${err?.stack ?? err}`))
      .finally(() => {
        this._task = null;
      });
    return this;
  }

  /**
   * Are we still periodically re-registering?
   * @returns {boolean}
   */
  isAlive() {
    return this._task !== null;
  }

  /**
   * Stop the re-registration loop (idempotent).
   * Does NOT automatically call `unregister()`—use it separately if needed.
   * @returns {Promise<void>} Resolves once the loop has ended, like Python's join().
   */
  shutdown() {
    if (this._task) this.logger.info(`Shutting down ${this.directoryName} keep alive`);
    this._endReregisterSignal.set();
    return this._task ?? Promise.resolve();
  }

  /**
   * Unregister the service from the directory. First stops the loop, which would register it again.
   * @returns {Promise<directoryRegistrationPb.UnregisterServiceResponse>}
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {ServiceDoesNotExistError} The service does not exist.
   */
  async unregister() {
    this.logger.info(`Unregistering ${this.directoryName} from directory`);
    await this.shutdown();
    return this.dirRegClient.unregister(this.directoryName, this._rpcArgs());
  }

  /**
   * Options of the RPCs: rpcTimeoutSeconds is in seconds like in Python, but call() takes milliseconds.
   * @private
   * @returns {{timeout: ?number}}
   */
  _rpcArgs() {
    return { timeout: this._rpcTimeout === null ? null : this._rpcTimeout * 1000 };
  }

  /**
   * Logs an error of a re-registration.
   * @param {Error} err The error.
   * @returns {Promise<ErrorCallbackResult>} What to do next: the result of reregistrationErrorCallback for an RpcError,
   * else resume the normal operation.
   * @private
   */
  async _handleReregistrationError(err) {
    // Ignore already registered errors, and transient availability errors.
    if (err instanceof ServiceAlreadyExistsError || err instanceof RetryableUnavailableError) {
      return ErrorCallbackResult.RESUME_NORMAL_OPERATION;
    }
    if (err instanceof TimedOutError) {
      this.logger.warn(`Timed out, timeout set to "${this._rpcTimeout}"`);
    } else if (err instanceof RpcError) {
      this.logger.error(`Reregistration failed with RpcError: ${err?.stack || err}`);
      if (this.reregistrationErrorCallback) {
        try {
          return await this.reregistrationErrorCallback(err);
        } catch (cbErr) {
          this.logger.error(`Exception in error callback: ${cbErr?.stack || cbErr}`);
        }
      }
    } else {
      // Log all other exceptions, but continue looping in hopes that it resolves itself.
      this.logger.error(`Caught general exception: ${err?.stack || err}`);
    }
    return ErrorCallbackResult.RESUME_NORMAL_OPERATION;
  }

  /**
   * Main re-registration loop: handles an accidental removal of the service from the directory, with
   * immediate retry, exponential backoff, and normal cadence.
   * @private
   * @returns {Promise<void>}
   */
  async _periodicReregister() {
    let retryInterval = this._initialRetrySeconds;
    // start() just registered the service: wait before the first re-registration.
    let waitTime = this._reregisterPeriod;

    this.logger.info(`Starting directory registration loop for ${this.directoryName}`);

    while (!(await this._endReregisterSignal.wait(waitTime * 1000, _DAEMON))) {
      const execStart = nowSec();
      let action = ErrorCallbackResult.RESUME_NORMAL_OPERATION;

      try {
        await this.dirRegClient.register(
          this.directoryName,
          this.serviceType,
          this.authority,
          this.host,
          this.port,
          this.userTokenRequired,
          this.livenessTimeoutSecs,
          this._rpcArgs(),
        );
      } catch (err) {
        action = await this._handleReregistrationError(err);
      }

      const elapsed = nowSec() - execStart;

      if (action === ErrorCallbackResult.RETRY_IMMEDIATELY) {
        waitTime = 0;
      } else if (action === ErrorCallbackResult.ABORT) {
        break;
      } else if (action === ErrorCallbackResult.RETRY_WITH_EXPONENTIAL_BACK_OFF) {
        waitTime = retryInterval - elapsed;
        retryInterval = Math.min(2 * retryInterval, this._reregisterPeriod);
      } else {
        retryInterval = this._initialRetrySeconds;
        waitTime = this._reregisterPeriod - elapsed;
      }
    }
  }
}

module.exports = {
  DirectoryRegistrationResponseError,
  ServiceAlreadyExistsError,
  ServiceDoesNotExistError,
  DirectoryRegistrationClient,
  DirectoryRegistrationKeepAlive,
  resetServiceRegistration,
};
