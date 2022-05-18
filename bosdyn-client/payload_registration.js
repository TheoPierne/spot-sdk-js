'use strict';

const { setTimeout: sleep } = require('node:timers/promises');

const { BaseClient, error_factory } = require('./common');
const { ResponseError, RetryableUnavailableError, TimedOutError } = require('./exceptions');

const payload_registration_protos = require('../bosdyn/api/payload_registration_pb');
const payload_registration_service = require('../bosdyn/api/payload_registration_service_grpc_pb');

class PayloadRegistrationResponseError extends ResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'PayloadRegistrationResponseError';
  }
}

class InvalidPayloadCredentialsError extends PayloadRegistrationResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'InvalidPayloadCredentialsError';
  }
}

class PayloadNotAuthorizedError extends PayloadRegistrationResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'PayloadNotAuthorizedError';
  }
}

class PayloadAlreadyExistsError extends PayloadRegistrationResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'PayloadAlreadyExistsError';
  }
}

class PayloadDoesNotExistError extends PayloadRegistrationResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'PayloadDoesNotExistError';
  }
}

function _get_token(response) {
  return response.getToken();
}

class PayloadRegistrationClient extends BaseClient {
  static default_service_name = 'payload-registration';
  static service_type = 'bosdyn.api.PayloadRegistrationService';

  constructor() {
    super(payload_registration_service.PayloadRegistrationServiceClient);
  }

  register_payload(payload, secret, args) {
    const req = new payload_registration_protos.RegisterPayloadRequest();
    req.setPayload(payload);
    if (secret) req.setPayloadSecret(secret);
    return this.call(this._stub.registerPayload, req, null, _payload_registration_error, args);
  }

  update_payload_version(guid, secret, updated_version, args) {
    const req = new payload_registration_protos.UpdatePayloadVersionRequest()
      .setPayloadGuid(guid)
      .setPayloadSecret(secret)
      .setUpdatedVersion(updated_version);
    return this.call(this._stub.updatePayloadVersion, req, null, _update_payload_version_error, args);
  }

  get_payload_auth_token(guid, secret, args) {
    const req = new payload_registration_protos.GetPayloadAuthTokenRequest()
      .setPayloadGuid(guid)
      .setPayloadSecret(secret);
    return this.call(this._stub.getPayloadAuthToken, req, _get_token, _get_payload_auth_token_error, args);
  }
}

const _REGISTER_PAYLOAD_STATUS_TO_ERROR = {
  STATUS_OK: [null, null],
  STATUS_ALREADY_EXISTS: [PayloadAlreadyExistsError, 'A payload with this GUID is already registered on the robot.'],
};

const _UPDATE_PAYLOAD_VERSION_STATUS_TO_ERROR = {
  STATUS_OK: [null, null],
  STATUS_DOES_NOT_EXIST: [PayloadDoesNotExistError, 'A payload with this GUID is not registered on the robot.'],
  STATUS_INVALID_CREDENTIALS: [
    InvalidPayloadCredentialsError,
    'The payload credentials do not match any payload registered to the robot.',
  ],
};

const _GET_PAYLOAD_AUTH_TOKEN_STATUS_TO_ERROR = {
  STATUS_OK: [null, null],
  STATUS_INVALID_CREDENTIALS: [
    InvalidPayloadCredentialsError,
    'The payload credentials do not match any payload registered to the robot.',
  ],
  STATUS_PAYLOAD_NOT_AUTHORIZED: [PayloadNotAuthorizedError, 'The payload is not authorized.'],
};

function _payload_registration_error(response) {
  return error_factory(
    response,
    response.status,
    Object.keys(payload_registration_protos.RegisterPayloadResponse.Status),
    _REGISTER_PAYLOAD_STATUS_TO_ERROR,
  );
}

function _update_payload_version_error(response) {
  return error_factory(
    response,
    response.status,
    Object.keys(payload_registration_protos.UpdatePayloadVersionResponse.Status),
    _UPDATE_PAYLOAD_VERSION_STATUS_TO_ERROR,
  );
}

function _get_payload_auth_token_error(response) {
  return error_factory(
    response,
    response.status,
    Object.keys(payload_registration_protos.GetPayloadAuthTokenResponse.Status),
    _GET_PAYLOAD_AUTH_TOKEN_STATUS_TO_ERROR,
  );
}

class PayloadRegistrationKeepAlive {
  constructor(
    pay_reg_client,
    payload,
    secret,
    registration_interval_secs = 30_000,
    logger = null,
    rpc_timeout_secs = null,
  ) {
    console.warn('Ne marche surement pas !!!');
    this.pay_reg_client = pay_reg_client;
    this.payload = payload;
    this.secret = secret;
    this._registration_interval_secs = registration_interval_secs;
    this.logger = logger || console;
    this._rpc_timeout_secs = rpc_timeout_secs;

    /* This._end_reregister_signal = threading.Event()
        this._thread = threading.Thread(target=self._periodic_reregister)
        this._thread.daemon = True*/
  }

  start() {
    let isCatch = false;
    try {
      this.pay_reg_client.register_payload(this.payload, this.secret);
    } catch (e) {
      isCatch = true;
      if (e instanceof PayloadAlreadyExistsError) {
        this.logger.warn(`Got a "payload already exists" error: ${e}`);
      }
    }

    if (!isCatch) {
      this.logger.info('Payload registered.');
    }
  }

  async _periodic_reregister() {
    this.logger.info('Starting registration loop');
    while (true) {
      const exec_start = Date.now();
      try {
        this.pay_reg_client.register_payload(this.payload, this.secret);
      } catch (e) {
        if (e instanceof PayloadAlreadyExistsError) {
          // Pass
        } else if (e instanceof RetryableUnavailableError) {
          // Pass
        } else if (e instanceof TimedOutError) {
          this.logger.warn(`Timed out, timeout set to "${this._rpc_timeout_secs}"`);
        } else {
          this.logger.error('Caught general exception.');
        }
      }
      const exec_sec = Date.now() - exec_start;
      if (await sleep(this._registration_interval_secs - exec_sec)) {
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
};
