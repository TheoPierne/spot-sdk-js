/**
 * @file Some commonly used classes and functions of the client library, exported together.
 */

'use strict';

/**
 * The client library package, like bosdyn.client of Python: the convenience imports of the commonly used classes.
 * Run as a program, it is the command line (`python -m bosdyn.client` in Python).
 *
 * Requiring it no longer changes console.log(), console.warn(), console.error() and console.debug() of the process
 * (they appended the location of the call to every message, the output of the command line too).
 */

const process = require('node:process');

const { AuthClient, InvalidLoginError, InvalidTokenError } = require('./auth');
const { main } = require('./command_line');
const { BaseClient } = require('./common');
const {
  BosdynError,
  ClientCancelledOperationError,
  CustomParamError,
  InternalServerError,
  InvalidClientCertificateError,
  InvalidRequestError,
  LeaseUseError,
  LicenseError,
  NonexistentAuthorityError,
  NotFoundError,
  PersistentRpcError,
  ProxyConnectionError,
  ResponseError,
  RetryableRpcError,
  RetryableUnavailableError,
  RpcError,
  ServerError,
  ServiceFailedDuringExecutionError,
  ServiceUnavailableError,
  TimedOutError,
  TooManyRequestsError,
  UnableToConnectToRobotError,
  UnauthenticatedError,
  UnimplementedError,
  UnknownDnsNameError,
  UnsetStatusError,
} = require('./exceptions');
const { Robot } = require('./robot');
const { BOSDYN_RESOURCE_ROOT, Sdk, createStandardSdk } = require('./sdk');

module.exports = {
  // Auth.js
  AuthClient,
  InvalidLoginError,
  InvalidTokenError,

  // Common.js
  BaseClient,

  // Exceptions.js (BosdynError is Error in Python)
  BosdynError,
  ClientCancelledOperationError,
  CustomParamError,
  InternalServerError,
  InvalidClientCertificateError,
  InvalidRequestError,
  LeaseUseError,
  LicenseError,
  NonexistentAuthorityError,
  NotFoundError,
  PersistentRpcError,
  ProxyConnectionError,
  ResponseError,
  RetryableRpcError,
  RetryableUnavailableError,
  RpcError,
  ServerError,
  ServiceFailedDuringExecutionError,
  ServiceUnavailableError,
  TimedOutError,
  TooManyRequestsError,
  UnableToConnectToRobotError,
  UnauthenticatedError,
  UnimplementedError,
  UnknownDnsNameError,
  UnsetStatusError,

  // Robot.js
  Robot,

  // Sdk.js (create_standard_sdk was exported, undefined: sdk.js has createStandardSdk)
  BOSDYN_RESOURCE_ROOT,
  Sdk,
  createStandardSdk,

  // Command_line.js
  CommandHandler: main,
};

if (require.main === module) {
  // Like `if not main(): sys.exit(1)` in the __main__ of Python (main() returns a promise: it never exited with 1).
  main().then(ok => {
    if (!ok) process.exitCode = 1;
  });
}
