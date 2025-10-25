'use strict';

const { BaseClient, errorFactory, handleCommonHeaderErrors, handleUnsetStatusError } = require('./common');
const { ResponseError } = require('./exceptions');
const { DefaultDict } = require('./util');
const { GetAuthTokenRequest, GetAuthTokenResponse } = require('../bosdyn/api/auth_pb');
const { AuthServiceClient } = require('../bosdyn/api/auth_service_grpc_pb');

class AuthResponseError extends ResponseError {}
class InvalidLoginError extends AuthResponseError {}
class InvalidTokenError extends AuthResponseError {}
class TemporarilyLockedOutError extends AuthResponseError {}

const _STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_STATUS_TO_ERROR.set(GetAuthTokenResponse.Status.STATUS_OK, [null, null]);
_STATUS_TO_ERROR.set(GetAuthTokenResponse.Status.STATUS_INVALID_LOGIN, [
  InvalidLoginError,
  'Provided username/password is invalid.',
]);
_STATUS_TO_ERROR.set(GetAuthTokenResponse.Status.STATUS_INVALID_TOKEN, [
  InvalidTokenError,
  'Provided user token is invalid or cannot be re-minted.',
]);
_STATUS_TO_ERROR.set(GetAuthTokenResponse.Status.STATUS_TEMPORARILY_LOCKED_OUT, [
  TemporarilyLockedOutError,
  'User is temporarily locked out of authentication.',
]);

const _errorFromResponse = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(response, response.getStatus(), Object.keys(GetAuthTokenResponse.Status), _STATUS_TO_ERROR),
  ),
);

function _tokenFromResponse(response) {
  return response.getToken();
}

function _buildAuthRequest(username, password) {
  return new GetAuthTokenRequest().setUsername(username).setPassword(password);
}

function _buildAuthTokenRequest(token) {
  return new GetAuthTokenRequest().setToken(token);
}

/**
 * Client to authenticate to the robot.
 * @extends {BaseClient<AuthServiceClient>}
 */
class AuthClient extends BaseClient {
  static defaultServiceName = 'auth';
  static serviceType = 'bosdyn.api.AuthService';

  /**
   * Create an instance of AuthClient's class.
   * @param {?string} name Name of the BaseClient
   */
  constructor(name = null) {
    super(AuthServiceClient, name);
  }

  /**
   * Authenticate to the robot with a username/password combo.
   * @param {string} username Username on the robot.
   * @param {string} password Password for the username on the robot.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<string>} User token from the server as a string.
   * @throws {InvalidLoginError} If username and/or password are not valid.
   */
  auth(username, password, args) {
    const req = _buildAuthRequest(username, password);
    return this.call(this._stub.getAuthToken, req, _tokenFromResponse, _errorFromResponse, false, args);
  }

  /**
   * Authenticate to the robot using a previously created user token.
   * @param {string} token A user token previously issued by the robot.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<string>} A new user token from the server. The new token will generally be valid further in
   * the future than the passed in token. A client can use auth_with_token to regularly
   * re-authenticate without needing to ask for username/password credentials.
   * @throws {InvalidTokenError} If the token was incorrectly formed, for the wrong robot, or expired.
   */
  authWithToken(token, args) {
    const req = _buildAuthTokenRequest(token);
    return this.call(this._stub.getAuthToken, req, _tokenFromResponse, _errorFromResponse, false, args);
  }
}

module.exports = {
  AuthClient,
  AuthResponseError,
  InvalidLoginError,
  InvalidTokenError,
  TemporarilyLockedOutError,
};
