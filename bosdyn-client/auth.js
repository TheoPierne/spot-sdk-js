'use strict';

const { BaseClient, error_factory } = require('./common');
const { ResponseError } = require('./exceptions');
const auth_pb = require('../bosdyn/api/auth_pb');
const auth_service_pb = require('../bosdyn/api/auth_service_grpc_pb');

class AuthResponseError extends ResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'AuthResponseError';
  }
}

class InvalidLoginError extends AuthResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'InvalidLoginError';
  }
}

class InvalidTokenError extends AuthResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'InvalidTokenError';
  }
}

class TemporarilyLockedOutError extends AuthResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'TemporarilyLockedOutError';
  }
}

class ExpiredApplicationTokenError extends AuthResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'ExpiredApplicationTokenError';
  }
}

class InvalidApplicationTokenError extends AuthResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'InvalidApplicationTokenError';
  }
}

const _STATUS_TO_ERROR = {
  [auth_pb.GetAuthTokenResponse.Status.STATUS_OK]: [null, null],
  [auth_pb.GetAuthTokenResponse.Status.STATUS_INVALID_LOGIN]: [
    InvalidLoginError,
    'Provided username/password is invalid.',
  ],
  [auth_pb.GetAuthTokenResponse.Status.STATUS_INVALID_TOKEN]: [
    InvalidTokenError,
    'Provided user token is invalid or cannot be re-minted.',
  ],
  [auth_pb.GetAuthTokenResponse.Status.STATUS_TEMPORARILY_LOCKED_OUT]: [
    TemporarilyLockedOutError,
    'User is temporarily locked out of authentication.',
  ],
  [auth_pb.GetAuthTokenResponse.Status.STATUS_INVALID_APPLICATION_TOKEN]: [
    InvalidApplicationTokenError,
    'Application token has expired. Please contact support@bostondynamics.com to receive a new one.',
  ],
  [auth_pb.GetAuthTokenResponse.Status.STATUS_EXPIRED_APPLICATION_TOKEN]: [
    ExpiredApplicationTokenError,
    'The Application Token is invalid.',
  ],
};

function _error_from_response(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(auth_pb.GetAuthTokenResponse.Status),
    _STATUS_TO_ERROR,
  );
}

function _token_from_response(response) {
  return response.getToken();
}

function _build_auth_request(username, password, app_token = null) {
  const req = new auth_pb.GetAuthTokenRequest()
    .setUsername(username)
    .setPassword(password)
    .setApplicationToken(app_token);
  return req;
}

function _build_auth_token_request(token, app_token = null) {
  const req = new auth_pb.GetAuthTokenRequest().setToken(token).setApplicationToken(app_token);
  return req;
}

/**
 * Client to authenticate to the robot.
 * @class {AuthClient}
 * @extends {BaseClient}
 */
class AuthClient extends BaseClient {
  static default_service_name = 'auth';
  static service_type = 'bosdyn.api.AuthService';

  /**
   * Create an instance of AuthClient's class.
   * @param {?string} name Name of the BaseClient
   */
  constructor(name = null) {
    super(auth_service_pb.AuthServiceClient, name);
  }

  /**
   * Authenticate to the robot with a username/password combo.
   * @param {string} username Username on the robot.
   * @param {string} password Password for the username on the robot.
   * @param {?string} [app_token=null] Deprecated. Only include for robots with old software.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<string>} User token from the server as a string.
   * @throws {InvalidLoginError} If username and/or password are not valid.
   */
  auth(username, password, app_token = null, args) {
    const req = _build_auth_request(username, password, app_token);
    return this.call(this._stub.getAuthToken, req, _token_from_response, _error_from_response, args);
  }

  /**
    * Authenticate to the robot using a previously created user token.
    * @param {string} token A user token previously issued by the robot.
    * @param {?string} app_token Deprecated. Only include for robots with old software.
    * @param {Object} [args] Extra arguments for controlling RPC details.
    * @returns {Promise<string>} A new user token from the server. The new token will generally be valid further in
            the future than the passed in token. A client can use auth_with_token to regularly
            re-authenticate without needing to ask for username/password credentials.
    * @throws {InvalidTokenError} If the token was incorrectly formed, for the wrong robot, or expired.
    */
  auth_with_token(token, app_token = null, args) {
    const req = _build_auth_token_request(token, app_token);
    return this.call(this._stub.getAuthToken, req, _token_from_response, _error_from_response, args);
  }
}

module.exports = {
  AuthClient,
  AuthResponseError,
  InvalidLoginError,
  InvalidTokenError,
  TemporarilyLockedOutError,
  ExpiredApplicationTokenError,
  InvalidApplicationTokenError,
};
