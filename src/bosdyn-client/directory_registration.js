'use strict';

const { BaseClient, errorFactory, handleCommonHeaderErrors, handleUnsetStatusError } = require('./common');
const { ResponseError, TimedOutError, RetryableUnavailableError } = require('./exceptions');
const { ErrorCallbackResult } = require('./error_callback_result');
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
   * @param {number} [options.initialRetrySeconds=1] Initial number of seconds to wait before retrying a failed registration request. Defaults to 1 second.
   */
  constructor(
    dirRegClient,
    { logger = null, rpcTimeoutSeconds = null, rpcIntervalSeconds = 30, initialRetrySeconds = 1 } = {}
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
    this.reregistrationErrorCallback = null;

    this._rpcTimeout = rpcTimeoutSeconds;
    this._reregisterPeriod = rpcIntervalSeconds;
    this._initialRetrySeconds = initialRetrySeconds;

    this._running = false;
    this._loopPromise = null;
    this._abortController = null;
  }

  async [Symbol.asyncDispose]() {
    this.shutdown();
    try {
      await this.unregister();
    } catch (_) { /* ignore */ }
  }

  /**
   * Register (optionally reset) the service, then start the periodic loop.
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
   * @throws {Error} RpcError if communication with the robot fails.
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
    if (this._running) {
      throw new Error('DirectoryRegistrationKeepAlive already started.');
    }

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

    this._running = true;
    this._abortController = new AbortController();
    this._loopPromise = this._periodicReregisterLoop(this._abortController.signal).catch(err => {
      if (this._running) this.logger.error(`Reregistration loop crashed: ${err}`);
      this._running = false;
    });
  }

  /**
   * Whether the periodic loop is still running.
   * @returns {boolean}
   */
  isAlive() {
    return this._running;
  }

  /**
   * Stop the re-registration loop (idempotent).
   * Does NOT automatically call `unregister()`—use it separately if needed.
   * @returns {void}
   */
  shutdown() {
    if (!this._running) return;
    this.logger.info(`Shutting down ${this.directoryName} keep alive`);
    this._running = false;
    if (this._abortController) this._abortController.abort();
  }

  /**
   * Unregister the service from the directory. First awaits the loop to finish cleanly.
   * @returns {Promise<void>}
   */
  async unregister() {
    this.logger.info(`Unregistering ${this.directoryName} from directory`);

    const p = this._loopPromise;
    this.shutdown();

    if (p) {
      try {
        await p;
      } catch (_) { /* ignore */ }
    }

    await this.dirRegClient.unregister(this.directoryName, { timeout: this._rpcTimeout });
  }

  /**
   * Main re-registration loop: handles immediate retry, exponential backoff, and normal cadence.
   * @private
   * @param {AbortSignal} abortSignal Cancellation signal to stop the loop.
   * @returns {Promise<void>}
   */
  async _periodicReregisterLoop(abortSignal) {
    let retryInterval = this._initialRetrySeconds;
    let waitTime = this._reregisterInterval;

    this.logger.info(`Starting directory registration loop for ${this.directoryName}`);

    while (!abortSignal.aborted) {
      if (waitTime > 0) {
        try {
          await this._sleep(waitTime * 1000, abortSignal);
        } catch (_) {
          break;
        }
      }

      const execStart = Date.now();
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
          { timeout: this._rpcTimeout }
        );
      } catch (err) {
        if (err instanceof ServiceAlreadyExistsError) {
          // Ignore already registered errors.
        } else if (err instanceof RetryableUnavailableError) {
          // Ignore transient availability errors.
        } else if (err instanceof TimedOutError) {
          this.logger.warn(`Timed out, timeout set to "${this._rpcTimeout}"`);
        } else {
          this.logger.error(`Reregistration failed: ${err?.stack || err}`);
          if (this.reregistrationErrorCallback) {
            try {
              action = await this.reregistrationErrorCallback(err);
            } catch (cbErr) {
              this.logger.error(`Exception in error callback: ${cbErr?.stack || cbErr}`);
            }
          }
        }
      }
      
      const elapsed = (Date.now() - execStart) / 1000;
      
      if (action === ErrorCallbackResult.RETRY_IMMEDIATELY) {
        waitTime = 0;
      } else if (action === ErrorCallbackResult.ABORT) {
        break;
      } else if (action === ErrorCallbackResult.RETRY_WITH_EXPONENTIAL_BACK_OFF) {
        waitTime = Math.max(0, retryInterval - elapsed);
        retryInterval = Math.min(2 * retryInterval, this._reregisterPeriod);
      } else {
        retryInterval = this._initialRetrySeconds;
        waitTime = Math.max(0, this._reregisterPeriod - elapsed);
      }
    }
  }
  
  /**
   * Abortable sleep.
   * @private
   * @param {number} ms Duration to wait in milliseconds.
   * @param {AbortSignal} signal Cancellation signal.
   * @returns {Promise<void>}
   */
  _sleep(ms, signal) {
    return new Promise((resolve, reject) => {
      if (signal.aborted) return reject(new Error('aboterd'));
      const t = setTimeout(resolve, ms);
      const onAbort = () => {
        clearTimeout(t);
        reject(new Error('aborted'));
      };
      signal.addEventListener('abort', onAbort, { once: true });
    });
  }
}

module.exports = {
  DirectoryRegistrationResponseError,
  ServiceAlreadyExistsError,
  ServiceDoesNotExistError,
  DirectoryRegistrationClient,
  DirectoryRegistrationKeepAlive,
};
