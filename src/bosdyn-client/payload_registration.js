'use strict';

const Event = require('node-threading-event');

const { BaseClient, errorFactory, handleCommonHeaderErrors, handleUnsetStatusError } = require('./common');
const { ResponseError, RetryableUnavailableError, TimedOutError, TooManyRequestsError } = require('./exceptions');
const { LoggerUtil } = require('./loggerUtil');
const { DefaultDict } = require('./util');

const payloadRegistrationProtos = require('../bosdyn/api/payload_registration_pb');
const { PayloadRegistrationServiceClient } = require('../bosdyn/api/payload_registration_service_grpc_pb');

class PayloadRegistrationResponseError extends ResponseError {}
class InvalidPayloadCredentialsError extends PayloadRegistrationResponseError {}
class PayloadNotAuthorizedError extends PayloadRegistrationResponseError {}
class PayloadAlreadyExistsError extends PayloadRegistrationResponseError {}
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
   * @param {Object} args Extra arguments for controlling RPC details.
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
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<payloadRegistrationProtos.UpdatePayloadVersionResponse>}
   */
  updatePayloadVersion(guid, secret, updatedVersion, args) {
    const req = new payloadRegistrationProtos.UpdatePayloadVersionRequest()
      .setPayloadGuid(guid)
      .setPayloadSecret(secret)
      .setUpdatedVersion(updatedVersion);
    return this.call(this._stub.updatePayloadVersion, req, null, _updatePayloadVersionError, false, args);
  }

  /**
   * Request a limited-access auth token for a payload.
   * Getting the auth token requires payload to be authorized via the web console.
   * @param {string} guid The GUID of the registered payload requesting the token.
   * @param {string} secret The secret of the registered payload requesting the token.
   * @param {Object} args Extra arguments for controlling RPC details.
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
   * @param {Object} args Extra arguments for controlling RPC details.
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
   * @param {Object} args Extra arguments for controlling RPC details.
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
      Object.keys(payloadRegistrationProtos.RegisterPayloadResponse.Status),
      _REGISTER_PAYLOAD_STATUS_TO_ERROR,
    ),
  ),
);

const _updatePayloadVersionError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      Object.keys(payloadRegistrationProtos.UpdatePayloadVersionResponse.Status),
      _UPDATE_PAYLOAD_VERSION_STATUS_TO_ERROR,
    ),
  ),
);

const _getPayloadAuthTokenError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      Object.keys(payloadRegistrationProtos.GetPayloadAuthTokenResponse.Status),
      _GET_PAYLOAD_AUTH_TOKEN_STATUS_TO_ERROR,
    ),
  ),
);

const _updatePayloadAttachedError = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      Object.keys(payloadRegistrationProtos.UpdatePayloadAttachedResponse.Status),
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
   * @param {payloadPb.Payload} payload Object that defines the payload to register.
   * @param {string} secret String secret for the payload.
   * @param {number} registrationIntervalSecs Number of seconds between payload registration requests.
   * @param {Console} logger Object to log with. Defaults to null, in which case one with the
   * class name is acquired.
   * @param {number} rpcTimeoutSecs Number of seconds to wait for a payRegClient RPC. Defaults to null,
   * for no timeout.
   */
  constructor(payRegClient, payload, secret, registrationIntervalSecs = 30_000, logger = null, rpcTimeoutSecs = null) {
    /**
     * The payload registration client
     * @type {PayloadRegistrationClient}
     */
    this.payRegClient = payRegClient;

    /**
     * Object that defines the payload to register.
     * @type {payloadPb.Payload}
     */
    this.payload = payload;

    /**
     * String secret for the payload.
     * @type {string}
     */
    this.secret = secret;

    /**
     * Number of seconds between payload registration requests.
     * @type {number}
     */
    this._registrationIntervalSecs = registrationIntervalSecs;

    /**
     * Object to log with. Defaults to null, in which case one with the
     * class name is acquired.
     * @type {Console}
     */
    this.logger = logger || LoggerUtil.getLogger(this.constructor.name);

    /**
     * Number of seconds to wait for a payRegClient RPC. Defaults to null,
     * for no timeout.
     * @type {number}
     */
    this._rpcTimeoutSecs = rpcTimeoutSecs;

    /**
     * End registration signal
     * @type {Event}
     * @private
     */
    this._endReregisterSignal = new Event();
  }

  /**
   * Register and then kick off thread.
   */
  async start() {
    try {
      await this.payRegClient.registerPayload(this.payload, this.secret);
    } catch (e) {
      if (e instanceof PayloadAlreadyExistsError) {
        this.logger.warn(`Got a "payload already exists" error: ${e} \nContinuing anyway.`);
      } else {
        throw e;
      }
    }

    this.logger.info('Payload registered.');
    this._periodicReregister();
  }

  [Symbol.dispose]() {
    this.shutdown();
  }

  /**
   * Are we still periodically re-registering?
   * @returns {boolean}
   */
  isAlive() {
    return !this._endReregisterSignal.isSet();
  }

  /**
   * Stop the background thread.
   */
  shutdown() {
    this.logger.debug('Shutting down');
    this._endReregisterSignal.set();
  }

  /**
   * Handles a removal of the payload from the robot payload page while still connected.
   * @private
   */
  async _periodicReregister() {
    this.logger.info('Starting registration loop');
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const execStart = Date.now();
      try {
        // eslint-disable-next-line no-await-in-loop
        await this.payRegClient.registerPayload(this.payload, this.secret);
      } catch (e) {
        if (e instanceof PayloadAlreadyExistsError) {
          // Pass
        } else if (e instanceof RetryableUnavailableError) {
          // Pass
        } else if (e instanceof TimedOutError) {
          this.logger.warn(`Timed out, timeout set to "${this._rpcTimeoutSecs}"`);
        } else if (e instanceof TooManyRequestsError) {
          this.logger.warn('Too many requests error');
        } else {
          this.logger.error('Caught general exception.');
        }
      }
      const execSec = Date.now() - execStart;
      // eslint-disable-next-line no-await-in-loop
      if (await this._endReregisterSignal.wait(this._registrationIntervalSecs - execSec)) {
        break;
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
