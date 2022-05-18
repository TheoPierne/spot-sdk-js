'use strict';

/* eslint-disable */
['log', 'warn', 'error', 'debug'].forEach(method => {
  let old = console[method];
  console[method] = function () {
    let stack = new Error().stack.split(/\n/);
    // Chrome includes a single "Error" line, FF doesn't.
    if (stack[0].indexOf('Error') === 0) {
      stack = stack.slice(1);
    }
    let args = [].slice.apply(arguments).concat([stack[1].trim()]);
    return old.apply(console, args);
  };
});
/* eslint-enable */

const process = require('node:process');
const { main } = require('./command_line');

if (require.main === module) {
  if (!main()) {
    process.exit(1);
  }
} else {
  const { BaseClient } = require('./common');
  const {
    ResponseError,
    InvalidRequestError,
    LeaseUseError,
    LicenseError,
    ServerError,
    InternalServerError,
    UnsetStatusError,
    RpcError,
    ClientCancelledOperationError,
    InvalidAppTokenError,
    InvalidClientCertificateError,
    NonexistentAuthorityError,
    NotFoundError,
    ProxyConnectionError,
    ServiceUnavailableError,
    ServiceFailedDuringExecutionError,
    TimedOutError,
    UnableToConnectToRobotError,
    UnauthenticatedError,
    UnknownDnsNameError,
    UnimplementedError,
  } = require('./exceptions');

  const {
    AuthClient,
    ExpiredApplicationTokenError,
    InvalidLoginError,
    InvalidApplicationTokenError,
    InvalidTokenError,
  } = require('./auth');

  const { Robot } = require('./robot');

  const { Sdk, create_standard_sdk, BOSDYN_RESOURCE_ROOT } = require('./sdk');

  module.exports = {
    // Common.js
    BaseClient,

    // Exceptions.js
    ResponseError,
    InvalidRequestError,
    LeaseUseError,
    LicenseError,
    ServerError,
    InternalServerError,
    UnsetStatusError,
    RpcError,
    ClientCancelledOperationError,
    InvalidAppTokenError,
    InvalidClientCertificateError,
    NonexistentAuthorityError,
    NotFoundError,
    ProxyConnectionError,
    ServiceUnavailableError,
    ServiceFailedDuringExecutionError,
    TimedOutError,
    UnableToConnectToRobotError,
    UnauthenticatedError,
    UnknownDnsNameError,
    UnimplementedError,

    // Auth.js
    AuthClient,
    ExpiredApplicationTokenError,
    InvalidLoginError,
    InvalidApplicationTokenError,
    InvalidTokenError,

    // Robot.js
    Robot,

    // Sdk.js
    Sdk,
    create_standard_sdk,
    BOSDYN_RESOURCE_ROOT,

    // Command_line.js
    CommandHandler: main,
  };
}
