/**
 * @file Client for the payload service.
 *
 * This allows client code to write to the robot payload registry.
 */

'use strict';

const { BaseClient, errorFactory, handleCommonHeaderErrors, handleUnsetStatusError } = require('./common');
const { ErrorCallbackResult } = require('./error_callback_result');
const { ResponseError, RetryableUnavailableError, TimedOutError, TooManyRequestsError } = require('./exceptions');
const { LoggerUtil } = require('./logger_util');
const { DefaultDict } = require('./util');

const payloadRegistrationProtos = require('../bosdyn/api/payload_registration_pb');
const { PayloadRegistrationServiceClient } = require('../bosdyn/api/payload_registration_service_grpc_pb');
const { Event } = require('../bosdyn-core/event');
const { nowSec } = require('../bosdyn-core/util');

/**
 * @typedef {import('./exceptions').RpcError} RpcError
 * @typedef {import('./logger_util').Logger} Logger
 */

/** General class of errors for PayloadRegistration service. */
class PayloadRegistrationResponseError extends ResponseError {}
/** The payload credentials do not match any payload registered to the robot. */
class InvalidPayloadCredentialsError extends PayloadRegistrationResponseError {}
/** The payload is not authorized. */
class PayloadNotAuthorizedError extends PayloadRegistrationResponseError {}
/** A payload with this GUID is already registered on the robot. */
class PayloadAlreadyExistsError extends PayloadRegistrationResponseError {}
/** A payload with this GUID is not registered on the robot. */
class PayloadDoesNotExistError extends PayloadRegistrationResponseError {}

function _getToken(response) {
  return response.getToken();
}

/**
 * @typedef {import('../bosdyn/api/payload_pb').Payload} Payload
 */

/**
 * A client registering payload configs onto the robot.
 * @extends {BaseClient<PayloadRegistrationServiceClient>}
 */
class PayloadRegistrationClient extends BaseClient {
  static defaultServiceName = 'payload-registration';
  static serviceType = 'bosdyn.api.PayloadRegistrationService';

  constructor() {
    super(PayloadRegistrationServiceClient);
  }

  /**
   * Register a payload to the robot.
   * @param {Payload} payload The payload protobuf message to register.
   * @param {string} secret Unique string to verify payload.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<payloadRegistrationProtos.RegisterPayloadResponse>}
   */
  registerPayload(payload, secret, args) {
    const req = new payloadRegistrationProtos.RegisterPayloadRequest().setPayload(payload);
    if (secret) req.setPayloadSecret(secret);
    return this.call(this._stub.registerPayload, req, null, _payloadRegistrationError, false, args);
  }

  /**
   * Update an existing payload's version on the robot.
   * @param {string} guid The GUID of the payload to update.
   * @param {string} secret Secret of the payload to update.
   * @param {*} updatedVersion The new version to set this payload to.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<payloadRegistrationProtos.UpdatePayloadVersionResponse>}
   */
  updatePayloadVersion(guid, secret, updatedVersion, args) {
    // The deprecated credential fields, and the ones of the 2.4+ robots, like Python (they were missing).
    const req = new payloadRegistrationProtos.UpdatePayloadVersionRequest()
      .setPayloadGuid(guid)
      .setPayloadSecret(secret)
      .setPayloadCredentials(new payloadRegistrationProtos.PayloadCredentials().setGuid(guid).setSecret(secret))
      .setUpdatedVersion(updatedVersion);
    return this.call(this._stub.updatePayloadVersion, req, null, _updatePayloadVersionError, false, args);
  }

  /**
   * Request a limited-access auth token for a payload.
   * Getting the auth token requires payload to be authorized via the web console.
   * @param {string} guid The GUID of the registered payload requesting the token.
   * @param {string} secret The secret of the registered payload requesting the token.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<string>}
   */
  getPayloadAuthToken(guid, secret, args) {
    const payloadCredentials = new payloadRegistrationProtos.PayloadCredentials().setGuid(guid).setSecret(secret);
    const req = new payloadRegistrationProtos.GetPayloadAuthTokenRequest()
      .setPayloadGuid(guid)
      .setPayloadSecret(secret)
      .setPayloadCredentials(payloadCredentials);
    return this.call(this._stub.getPayloadAuthToken, req, _getToken, _getPayloadAuthTokenError, false, args);
  }

  /**
   * Attach a payload to the robot.
   * @param {string} guid The GUID of the payload to attach.
   * @param {string} secret Secret of the payload to attach.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<payloadRegistrationProtos.UpdatePayloadAttachedResponse>}
   */
  attachPayload(guid, secret, args) {
    const payloadCredentials = new payloadRegistrationProtos.PayloadCredentials().setGuid(guid).setSecret(secret);
    const request = new payloadRegistrationProtos.UpdatePayloadAttachedRequest()
      .setPayloadCredentials(payloadCredentials)
      .setRequest(payloadRegistrationProtos.UpdatePayloadAttachedRequest.Request.REQUEST_ATTACH);
    return this.call(this._stub.updatePayloadAttached, request, null, _updatePayloadAttachedError, false, args);
  }

  /**
   * Detach a payload from the robot.
   * @param {string} guid The GUID of the payload to detach.
   * @param {string} secret Secret of the payload to detach.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<payloadRegistrationProtos.UpdatePayloadAttachedResponse>}
   */
  detachPayload(guid, secret, args) {
    const payloadCredentials = new payloadRegistrationProtos.PayloadCredentials().setGuid(guid).setSecret(secret);
    const request = new payloadRegistrationProtos.UpdatePayloadAttachedRequest()
      .setPayloadCredentials(payloadCredentials)
      .setRequest(payloadRegistrationProtos.UpdatePayloadAttachedRequest.Request.REQUEST_DETACH);
    return this.call(this._stub.updatePayloadAttached, request, null, _updatePayloadAttachedError, false, args);
  }
}

const _REGISTER_PAYLOAD_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_REGISTER_PAYLOAD_STATUS_TO_ERROR.set(payloadRegistrationProtos.RegisterPayloadResponse.Status.STATUS_OK, [null, null]);
_REGISTER_PAYLOAD_STATUS_TO_ERROR.set(payloadRegistrationProtos.RegisterPayloadResponse.Status.STATUS_ALREADY_EXISTS, [
  PayloadAlreadyExistsError,
  'A payload with this GUID is already registered on the robot.',
]);

const _UPDATE_PAYLOAD_VERSION_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_UPDATE_PAYLOAD_VERSION_STATUS_TO_ERROR.set(payloadRegistrationProtos.UpdatePayloadVersionResponse.Status.STATUS_OK, [
  null,
  null,
]);
_UPDATE_PAYLOAD_VERSION_STATUS_TO_ERROR.set(
  payloadRegistrationProtos.UpdatePayloadVersionResponse.Status.STATUS_DOES_NOT_EXIST,
  [PayloadDoesNotExistError, 'A payload with this GUID is not registered on the robot.'],
);
_UPDATE_PAYLOAD_VERSION_STATUS_TO_ERROR.set(
  payloadRegistrationProtos.UpdatePayloadVersionResponse.Status.STATUS_INVALID_CREDENTIALS,
  [InvalidPayloadCredentialsError, 'The payload credentials do not match any payload registered to the robot.'],
);

const _GET_PAYLOAD_AUTH_TOKEN_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_GET_PAYLOAD_AUTH_TOKEN_STATUS_TO_ERROR.set(payloadRegistrationProtos.GetPayloadAuthTokenResponse.Status.STATUS_OK, [
  null,
  null,
]);
_GET_PAYLOAD_AUTH_TOKEN_STATUS_TO_ERROR.set(
  payloadRegistrationProtos.GetPayloadAuthTokenResponse.Status.STATUS_INVALID_CREDENTIALS,
  [InvalidPayloadCredentialsError, 'The payload credentials do not match any payload registered to the robot.'],
);
_GET_PAYLOAD_AUTH_TOKEN_STATUS_TO_ERROR.set(
  payloadRegistrationProtos.GetPayloadAuthTokenResponse.Status.STATUS_PAYLOAD_NOT_AUTHORIZED,
  [PayloadNotAuthorizedError, 'The payload is not authorized.'],
);

const _UPDATE_PAYLOAD_ATTACHED_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_UPDATE_PAYLOAD_ATTACHED_STATUS_TO_ERROR.set(payloadRegistrationProtos.UpdatePayloadAttachedResponse.Status.STATUS_OK, [
  null,
  null,
]);
_UPDATE_PAYLOAD_ATTACHED_STATUS_TO_ERROR.set(
  payloadRegistrationProtos.UpdatePayloadAttachedResponse.Status.STATUS_DOES_NOT_EXIST,
  [PayloadDoesNotExistError, 'A payload with this GUID is not registered on the robot.'],
);
_UPDATE_PAYLOAD_ATTACHED_STATUS_TO_ERROR.set(
  payloadRegistrationProtos.UpdatePayloadAttachedResponse.Status.STATUS_INVALID_CREDENTIALS,
  [InvalidPayloadCredentialsError, 'The payload credentials do not match any payload registered to the robot.'],
);
_UPDATE_PAYLOAD_ATTACHED_STATUS_TO_ERROR.set(
  payloadRegistrationProtos.UpdatePayloadAttachedResponse.Status.STATUS_PAYLOAD_NOT_AUTHORIZED,
  [PayloadNotAuthorizedError, 'The payload is not authorized.'],
);

const _payloadRegistrationError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      payloadRegistrationProtos.RegisterPayloadResponse.Status,
      _REGISTER_PAYLOAD_STATUS_TO_ERROR,
    ),
  ),
);

const _updatePayloadVersionError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      payloadRegistrationProtos.UpdatePayloadVersionResponse.Status,
      _UPDATE_PAYLOAD_VERSION_STATUS_TO_ERROR,
    ),
  ),
);

const _getPayloadAuthTokenError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      payloadRegistrationProtos.GetPayloadAuthTokenResponse.Status,
      _GET_PAYLOAD_AUTH_TOKEN_STATUS_TO_ERROR,
    ),
  ),
);

const _updatePayloadAttachedError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      payloadRegistrationProtos.UpdatePayloadAttachedResponse.Status,
      _UPDATE_PAYLOAD_ATTACHED_STATUS_TO_ERROR,
    ),
  ),
);

/**
 * Helper class to keep a payload entry registered.
 *
 * Using a payload keep alive will ensure that a payload automatically re-registers itself with
 * the robot if it is ever forgotten. However, payload registrations on Spot are persistent
 * across power cycles and updates, so in most cases there is no need to send a payload
 * registration request after the first successful payload registration. The use of a payload
 * registration keep alive should only be used when a payload is expected to be regularly
 * reconfigured by forgetting & re-authorizing the payload in the web page.
 */
class PayloadRegistrationKeepAlive {
  /**
   * @param {PayloadRegistrationClient} payRegClient Client to the payload registration service.
   * @param {Payload} payload Object that defines the payload to register.
   * @param {string} secret String secret for the payload.
   * @param {number} registrationInterval Number of milliseconds between payload registration requests.
   * @param {Logger} logger Object to log with. Defaults to null, in which case one with the
   * class name is acquired.
   * @param {number} rpcTimeout Number of milliseconds to wait for a payRegClient RPC. Defaults to null,
   * for the default RPC timeout.
   * @param {number} initialRetry Number of milliseconds to wait before retrying a registration that failed
   * due to unhandled errors including RPC transport issues.
   */
  constructor(
    payRegClient,
    payload,
    secret,
    registrationInterval = 30_000,
    logger = null,
    rpcTimeout = null,
    initialRetry = 1_000,
  ) {
    /**
     * The payload registration client
     * @type {PayloadRegistrationClient}
     */
    this.payRegClient = payRegClient;

    /**
     * Object that defines the payload to register.
     * @type {Payload}
     */
    this.payload = payload;

    /**
     * String secret for the payload.
     * @type {string}
     */
    this.secret = secret;

    /**
     * Number of milliseconds between payload registration requests.
     * @type {number}
     */
    this._registrationInterval = registrationInterval;

    /**
     * Object to log with. Defaults to null, in which case one with the
     * class name is acquired.
     * @type {Logger}
     */
    this.logger = logger || LoggerUtil.getLogger(this.constructor.name);

    /**
     * Number of milliseconds to wait for a payRegClient RPC. Defaults to null,
     * for the default RPC timeout.
     * @type {number}
     */
    this._rpcTimeout = rpcTimeout;

    /**
     * Number of milliseconds to wait before retrying a failed registration.
     * @type {number}
     */
    this._initialRetry = initialRetry;

    /**
     * Optional callback called when an error occurs in the re-registration loop. It returns an
     * ErrorCallbackResult, or a promise of one, telling the loop what to do.
     * @type {?function(Error): (number|Promise<number>)}
     */
    this.reregistrationErrorCallback = null;

    /**
     * End registration signal
     * @type {Event}
     * @private
     */
    this._endReregisterSignal = new Event();

    /**
     * @type {boolean}
     * @private
     */
    this._started = false;

    /**
     * The re-registration loop, while it runs.
     * @type {?Promise<void>}
     * @private
     */
    this._task = null;
  }

  /**
   * Register and then kick off the re-registration loop.
   * Can not be restarted with this method after a shutdown.
   * @returns {Promise<PayloadRegistrationKeepAlive>}
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {Error} The keep-alive was started more than once.
   */
  async start() {
    if (this._started) throw new Error('PayloadRegistrationKeepAlive can only be started once.');
    this._started = true;
    try {
      await this.payRegClient.registerPayload(this.payload, this.secret, { timeout: this._rpcTimeout });
      this.logger.info('Payload registered.');
    } catch (e) {
      if (!(e instanceof PayloadAlreadyExistsError)) {
        // Like Python, the loop was not started: start() can be called again.
        this._started = false;
        throw e;
      }
      // If the payload exists, log a warning and continue.
      this.logger.warn(`Got a "payload already exists" error: ${e}\nContinuing to start thread.`);
    }

    this._task = this._periodicReregister()
      .catch(e => this.logger.error(`Re-registration stopped by an error: ${e?.stack ?? e}`))
      .finally(() => {
        this._task = null;
      });
    return this;
  }

  [Symbol.dispose]() {
    this.shutdown();
  }

  async [Symbol.asyncDispose]() {
    await this.shutdown();
  }

  /**
   * Are we still periodically re-registering?
   * @returns {boolean}
   */
  isAlive() {
    return this._task !== null;
  }

  /**
   * Stop the background thread.
   * @returns {Promise<void>} Resolves once the loop has ended, like Python's join().
   */
  shutdown() {
    this.logger.debug('Shutting down');
    this._endReregisterSignal.set();
    return this._task ?? Promise.resolve();
  }

  /**
   * Handles a removal of the payload from the robot payload page while still connected.
   * @private
   */
  async _periodicReregister() {
    this.logger.info('Starting registration loop');
    let retryInterval = this._initialRetry;
    // start() just registered the payload: wait before the first re-registration.
    let waitTime = this._registrationInterval;

    // Like the Python daemon thread, the waits do not keep the process alive.
    while (!(await this._endReregisterSignal.wait(waitTime, { ref: false }))) {
      const execStart = nowSec();
      let action = ErrorCallbackResult.RESUME_NORMAL_OPERATION;
      try {
        await this.payRegClient.registerPayload(this.payload, this.secret, { timeout: this._rpcTimeout });
      } catch (e) {
        if (e instanceof PayloadAlreadyExistsError) {
          // Ignore "already exists" errors -- we expect those.
        } else if (e instanceof RetryableUnavailableError) {
          // Ignore transient availability errors and retry.
        } else if (e instanceof TimedOutError) {
          this.logger.warn(`Timed out, timeout set to "${this._rpcTimeout}"`);
        } else if (e instanceof TooManyRequestsError) {
          this.logger.warn('Too many requests error');
        } else if (this.reregistrationErrorCallback !== null) {
          // If the application provided an error handler, give it an opportunity to resolve the issue.
          action = ErrorCallbackResult.DEFAULT_ACTION;
          try {
            action = await this.reregistrationErrorCallback(e);
          } catch (callbackError) {
            this.logger.error(
              `Exception thrown in the provided re-registration error callback: ${callbackError?.stack ?? callbackError}`,
            );
          }
        } else {
          // Log all other exceptions, but continue looping in hopes that it resolves itself.
          this.logger.error(`Caught general exception: ${e?.stack ?? e}`);
        }
      }

      const execMs = (nowSec() - execStart) * 1_000;
      if (action === ErrorCallbackResult.ABORT) {
        this.logger.warn('Callback directed the re-registration loop to exit.');
        break;
      } else if (action === ErrorCallbackResult.RETRY_IMMEDIATELY) {
        waitTime = 0;
      } else if (action === ErrorCallbackResult.RETRY_WITH_EXPONENTIAL_BACK_OFF) {
        waitTime = retryInterval - execMs;
        retryInterval = Math.min(retryInterval * 2, this._registrationInterval);
      } else {
        // Success path, or default action (resume normal operation).
        waitTime = this._registrationInterval - execMs;
        retryInterval = this._initialRetry;
      }
    }

    this.logger.info('Re-registration stopped');
  }
}

module.exports = {
  PayloadRegistrationResponseError,
  InvalidPayloadCredentialsError,
  PayloadNotAuthorizedError,
  PayloadAlreadyExistsError,
  PayloadDoesNotExistError,
  PayloadRegistrationClient,
  PayloadRegistrationKeepAlive,
  _payloadRegistrationError,
};
