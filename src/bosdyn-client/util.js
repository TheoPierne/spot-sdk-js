/**
 * @file Helper functions and classes for creating client applications.
 */

'use strict';

const { randomBytes } = require('node:crypto');
const { readFileSync, writeFileSync } = require('node:fs');
const https = require('node:https');
const path = require('node:path');
const process = require('node:process');

const jspb = require('google-protobuf');
const prompt = require('prompt');
const { v4: uuid4 } = require('uuid');

const { BosdynError } = require('./exceptions');
const { LoggerUtil } = require('./logger_util');

/**
 * @typedef {import('./robot').Robot} Robot
 */

const _LOGGER = LoggerUtil.getLogger(path.basename(__filename).replace('.js', ''));

/**
 * Ask a question on the command line (on stderr, like Python).
 * @param {string} description
 * @param {{hidden?: boolean, required?: boolean}} [options] hidden: do not echo the answer (a password).
 * @returns {Promise<string>}
 * @private
 */
async function _input(description, { hidden = false, required = false } = {}) {
  prompt.message = '';
  prompt.delimiter = '';
  // noHandleSIGINT: prompt installed a SIGINT handler calling process.exit(1), which skipped the shutdown handlers
  // of the application (lease return, E-Stop, sit...) for the rest of the process.
  prompt.start({ noHandleSIGINT: true, stdout: process.stderr, allowEmpty: !required });
  try {
    const { question } = await prompt.get([{ description, type: 'string', hidden, replace: '', required }]);
    return question ?? '';
  } finally {
    // Paused, not stopped: prompt.stop() destroys process.stdin.
    prompt.pause();
  }
}

/**
 * Interactive CLI for scripting conveniences, like cli_login_prompt() in Python: the username is asked if unknown
 * (or confirmed if the password is unknown), and the password is always asked.
 * @param {?string} [username=null]
 * @param {?string} [password=null]
 * @returns {Promise<[string, string]>}
 */
async function cliLoginPrompt(username = null, password = null) {
  if (username === null) {
    username = await _input('Username: ', { required: true });
  } else if (password === null) {
    const name = await _input(`Username for robot [${username}]: `);
    if (name) {
      username = name;
    }
  }
  password = await _input(`[${username}] Password: `, { hidden: true });
  return [username, password];
}

/**
 * Interactive CLI for authenticating with the robot, like cli_auth() in Python: the credentials are asked again
 * until the authentication succeeds (a failure threw, and the credentials were only asked if both were missing).
 * @param {Robot} robot
 * @param {?string} [username=null]
 * @param {?string} [password=null]
 * @returns {Promise<void>}
 */
async function cliAuth(robot, username = null, password = null) {
  // Lazy: auth.js requires this module.
  const { InvalidLoginError } = require('./auth');
  let successful = false;

  while (!successful) {
    [username, password] = await cliLoginPrompt(username, password);
    try {
      await robot.authenticate(username, password);
      successful = true;
    } catch (e) {
      if (!(e instanceof InvalidLoginError || e instanceof BosdynError)) throw e;
      _LOGGER.error(`${e?.message ?? e}`);
    }
  }
}

/**
 * Generic function for authenticating with the robot, like Python. Tries to authenticate using the following
 * methods, in order:
 * - An existing auth token
 * - Username/Password supplied in the environment (BOSDYN_CLIENT_USERNAME, BOSDYN_CLIENT_PASSWORD)
 * - With a specified callback function, returning a username and password.
 * - A command line prompt, if possible (stdin is a tty).
 * @param {Robot} robot
 * @param {?function(): ([string, string]|Promise<[string, string]>)} [askpass=null] A function that retrieves
 * authentication credentials if none are specified via environment variables.
 * @returns {Promise<void>}
 * @throws {Error} Stdin is not a tty and no askpass specified.
 */
async function authenticate(robot, askpass = null) {
  // Lazy: auth.js requires this module.
  const { InvalidTokenError } = require('./auth');
  // Try to re-authenticate with token. Continue if token expired or invalid (a success went on to the credentials,
  // and every other error was ignored).
  if (robot.userToken) {
    try {
      await robot.authenticateWithToken(robot.userToken);
      return;
    } catch (e) {
      if (!(e instanceof InvalidTokenError)) throw e;
    }
  }

  // Try to authenticate with credentials specified in environment.
  let username = process.env.BOSDYN_CLIENT_USERNAME;
  let password = process.env.BOSDYN_CLIENT_PASSWORD;

  if (username && password) {
    await robot.authenticate(username, password);
    return;
  }

  // Fail if no way to ask for credentials (the test was inverted).
  if (!process.stdin.isTTY && askpass === null) {
    throw new Error('Stdin is not a tty and no askpass specified.');
  }

  // Get credentials and try to authenticate.
  if (askpass === null) {
    [username, password] = await cliLoginPrompt();
  } else {
    [username, password] = await askpass();
  }

  await robot.authenticate(username, password);
}

/**
 * Set the log level of every SDK logger: 'info' by default, 'debug' if verbose.
 * Like Python's setup_logging, this applies to all loggers (existing and future), not only this one.
 * @param {boolean} [verbose=false] Show debug-level messages.
 * @param {boolean} [includeDedupFilter=false] Don't log a message repeating the previous one (see
 * DedupLoggingMessages); the second argument was the levels, like Python it is whether to filter.
 * @param {Iterable<string>} [alwaysPrintLoggerLevels=['error']] The levels whose messages are always logged, like
 * CRITICAL and ERROR in Python.
 * @returns {import('winston').Logger}
 */
function setupLogging(verbose = false, includeDedupFilter = false, alwaysPrintLoggerLevels = ['error']) {
  LoggerUtil.setGlobalLevel(verbose ? 'debug' : 'info');
  if (includeDedupFilter && !doesDedupFilterExist(LoggerUtil, alwaysPrintLoggerLevels)) {
    LoggerUtil.filter = new DedupLoggingMessages(alwaysPrintLoggerLevels);
  }
  return getLogger();
}

/**
 * Logger filter to prevent duplicated messages from being logged, like DedupLoggingMessages of Python.
 */
class DedupLoggingMessages {
  /**
   * @param {Iterable<string>} [alwaysPrintLoggerLevels=['error']] The levels whose messages are always logged.
   */
  constructor(alwaysPrintLoggerLevels = ['error']) {
    // The last message logged.
    this.lastErrorMessage = null;
    this.alwaysPrintLoggerLevels = new Set(alwaysPrintLoggerLevels);
  }

  /**
   * @param {Object} record A message of winston: level, message and the arguments to format.
   * @returns {boolean} Whether to log it: not if it repeats the previous one.
   */
  filter(record) {
    // Always allow messages above a certain warning level to be logged.
    if (this.alwaysPrintLoggerLevels.has(record[Symbol.for('level')] ?? record.level)) return true;

    const args = record[Symbol.for('splat')] ?? [];
    const errorMessage = [record.message, ...args].map(value => String(value)).join(' ');
    // Deduplicate logged messages by preventing a message that was just logged to be sent again.
    if (this.lastErrorMessage !== errorMessage) {
      this.lastErrorMessage = errorMessage;
      return true;
    }
    return false;
  }
}

/**
 * Check if the DedupLoggingMessages filter exists for the loggers, with these levels.
 * @param {{filter: ?Object}} logger LoggerUtil (the filter of all the loggers).
 * @param {Iterable<string>} alwaysPrintLoggerLevels
 * @returns {boolean}
 */
function doesDedupFilterExist(logger, alwaysPrintLoggerLevels) {
  const { filter } = logger;
  if (!(filter instanceof DedupLoggingMessages)) return false;
  const levels = new Set(alwaysPrintLoggerLevels);
  const current = filter.alwaysPrintLoggerLevels;
  return current.size === levels.size && [...levels].every(level => current.has(level));
}

/**
 * The name of a value of a protobuf enum, like safe_pb_enum_to_string() in Python: it avoids throwing an exception if
 * the value is unknown by the enum object.
 * @param {number} value The enum value to convert.
 * @param {Object<string, number>} pbEnumObj The protobuf enum object to decode the value.
 * @returns {string}
 */
function safePbEnumToString(value, pbEnumObj) {
  const name = Object.keys(pbEnumObj).find(key => pbEnumObj[key] === value);
  return name ?? `<unknown> (value: ${value})`;
}

function getLogger() {
  return _LOGGER;
}

/**
 * @typedef {import('argparse').ArgumentParser} ArgumentParser
 */

/**
 * Add hostname argument to parser.
 * @param {ArgumentParser} parser
 */
function addBaseArguments(parser) {
  parser.add_argument('hostname', { help: 'Hostname or address of robot, e.g. "beta25-p" or "192.168.80.3"' });
  parser.add_argument('-v', '--verbose', { action: 'store_true', help: 'Print debug-level messages' });
}

/**
 * Add username/password flags to parser, like add_credentials_arguments() in Python (deprecated there too: the
 * credentials are better read from the BOSDYN_CLIENT_USERNAME and BOSDYN_CLIENT_PASSWORD environment variables).
 * @param {ArgumentParser} parser
 * @param {boolean} [credentialsNoWarn=false] Don't log the deprecation warning when the flags are added (they still
 * warn when used).
 */
function addCredentialsArguments(parser, credentialsNoWarn = false) {
  const warnOnUse = arg => {
    console.error(
      'Command line credentials deprecated! ' +
        'Please use BOSDYN_CLIENT_USERNAME and BOSDYN_CLIENT_PASSWORD env vars instead.',
    );
    return arg;
  };
  // Named for the errors of argparse, like Python.
  const deprecatedUsername = arg => warnOnUse(arg);
  const deprecatedPassword = arg => warnOnUse(arg);

  if (!credentialsNoWarn) {
    _LOGGER.warn(
      'Credentials in program options is deprecated. ' +
        'Obtain credentials securely, such as with an environment variable, interactive prompt, etc.',
    );
  }
  parser.add_argument('--username', {
    type: deprecatedUsername,
    help: '[DEPRECATED] Username to use for authentication.',
  });
  parser.add_argument('--password', {
    type: deprecatedPassword,
    help: '[DEPRECATED] Password to use for authentication.',
  });
}

/**
 * Add arguments common to most applications used for authentication, like add_common_arguments() in Python (which
 * deprecates it for addBaseArguments()).
 * @param {ArgumentParser} parser
 * @param {boolean} [credentialsNoWarn=false] See addCredentialsArguments().
 */
function addCommonArguments(parser, credentialsNoWarn = false) {
  addCredentialsArguments(parser, credentialsNoWarn);
  addBaseArguments(parser);
}

/**
 * Add arguments common to most payload related applications, like Python: --guid (with --secret) or
 * --payload-credentials-file (both --guid and --secret were required, even with a credentials file).
 * Use getGuidAndSecret() to get the guid and secret from the resulting parse.
 * @param {ArgumentParser} parser
 * @param {boolean} [required=true] Require either the guid/secret or file arguments to be provided.
 */
function addPayloadCredentialsArguments(parser, required = true) {
  const group = parser.add_mutually_exclusive_group({ required });
  group.add_argument('--guid', { help: 'Unique GUID of the payload.' });
  parser.add_argument('--secret', { help: 'Secret of the payload.' });
  addPayloadCredentialsFileArgument(group);
}

/**
 * Add argument for payload_credentials_file to an ArgumentParser or argument group. This file is where the payload's
 * GUID and secret are stored. The GUID and secret can be securely generated on a per-robot basis and written to this
 * file with readOrCreatePayloadCredentials(filename).
 * @param {ArgumentParser} parser
 */
function addPayloadCredentialsFileArgument(parser) {
  parser.add_argument('--payload-credentials-file', {
    help: 'File from which to read payload guid and secret. Preferred in conjunction with readOrCreatePayloadCredentials for easy management of unique per-robot credentials',
  });
}

/**
 * Add arguments common to most applications hosting a GRPC service.
 * @param {ArgumentParser} parser
 */
function addServiceHostingArguments(parser) {
  parser.add_argument('--port', {
    default: 0,

    help: 'The port number the service can be reached at (Warning: This port cannot be firewalled). Defaults to 0, which will assign an ephemeral port',
    type: 'int',
  });
}

/**
 * Add arguments common to most applications defining a GRPC service endpoint.
 * @param {ArgumentParser} parser
 */
function addServiceEndpointArguments(parser) {
  addServiceHostingArguments(parser);
  parser.add_argument('--host-ip', {
    required: true,
    help: 'Hostname or address the service can be reached at. e.g. "192.168.50.5"',
  });
}

/**
 * Read the guid and secret from a file that already exists.
 * The file should have the guid and secret as the first and second lines in the file.
 * @param {string} filename Name of the file to read.
 * @returns {{guid: string, secret: string}}
 */
function readPayloadCredentials(filename) {
  const data = readFileSync(filename, 'utf8')
    .split('\n')
    .map(line => line.trim());

  const [guid, secret] = data;

  if (!guid || !secret) {
    throw new Error(`Failed to load GUID (${guid}) and/or secret (${secret})`);
  }

  return { guid, secret };
}

/**
 * Only for use when attempting to register a payload. If simply trying to authenticate,
 * use getGuidOrSecret or readPayloadCredentials instead.
 * When registering, attempt to read the payload's guid and secret from the specified file.
 * If this file exists, it should have the guid and secret as the first and second lines in the
 * file. If the file does not exist, this function creates a valid credentials file at filename.
 * @param {string} filename Name of the file to read. Its parent directories should already exist and
 * it should have the right permissions to be read by the payload registration
 * service. If running on a CORE I/O, also ensure that this location is mounted
 * as a volume to the CORE I/O's /data or /persist locations.
 * @returns {{guid: string, secret: string}}
 */
function readOrCreatePayloadCredentials(filename) {
  try {
    return readPayloadCredentials(filename);
  } catch (err) {
    const guid = uuid4();
    const secret = randomBytes(16).toString('base64url');
    writeFileSync(filename, `${guid}\n${secret}`);
    return { guid, secret };
  }
}

/**
 * Get the guid and secret for a payload, based on the options that were added
 * via addPayloadCredentialsArguments().
 * @param {Object} parsedOptions Namespace result of parser.parse_args()
 * @returns {{guid: string, secret: string}}
 */
function getGuidAndSecret(parsedOptions) {
  // Like Python, the guid or the secret: a missing one fails the authentication.
  if (parsedOptions.guid || parsedOptions.secret) {
    return { guid: parsedOptions.guid, secret: parsedOptions.secret };
  }
  // argparse stores --payload-credentials-file as payload_credentials_file (payloadCredentialsFile was never set).
  const credentialsFile = parsedOptions.payload_credentials_file ?? parsedOptions.payloadCredentialsFile;
  if (credentialsFile) {
    return readPayloadCredentials(credentialsFile);
  }
  throw new Error(`No payload credentials provided. Use --guid and --secret or --payload-credentials-file.
    The latter in conjunction with readOrCreatePayloadCredentials is recommended for easy management of
    unique per-robot credentials`);
}

/**
 * A Map whose get() returns defaultValueFunc() for a missing key, like the collections.defaultdict of the status
 * tables of Python (the missing keys are not added).
 * @param {function(): *} defaultValueFunc
 * @returns {Map}
 */
function DefaultDict(defaultValueFunc) {
  return new Proxy(new Map(), {
    get(target, name) {
      if (name === 'get') {
        return key => (target.has(key) ? target.get(key) : defaultValueFunc());
      }
      // The methods and the size of the Map, on the Map: with the proxy as receiver, size, entries(), delete(),
      // forEach() and the iteration threw "incompatible receiver".
      const value = Reflect.get(target, name, target);
      return typeof value === 'function' ? value.bind(target) : value;
    },
  });
}

/**
 * Polyfill for `Symbol.dispose` and `Symbol.asyncDispose` which is used as a part of
 * {@link https://github.com/tc39/proposal-explicit-resource-management}. Node versions below 18.x
 * don't have these symbols by default, so we need to polyfill them.
 */
function polyfillDispose() {
  // Polyfill for `Symbol.dispose` and `Symbol.asyncDispose` if not available.
  Symbol.dispose ??= Symbol('Symbol.dispose');
  Symbol.asyncDispose ??= Symbol('Symbol.asyncDispose');
}

/**
 * Build a lookup table that maps google-protobuf message constructors
 * to their fully qualified type name.
 *
 * This is useful because in many builds `constructor.name` is empty
 * for protobuf-generated classes and google-protobuf does not expose
 * descriptors in JavaScript.
 *
 * The index is built once by walking a known protobuf namespace
 * (for example `proto.bosdyn.api`) and can then be used to resolve
 * a message type name in O(1).
 *
 * @param {object|Function} root Root protobuf namespace to scan (e.g. `proto.bosdyn.api`)
 * @param {string} [prefix] Optional prefix added to all resolved names (e.g. "bosdyn.api")
 * @returns {WeakMap<Function, string>}
 */
function buildProtoIndex(root, prefix = '') {
  const map = new WeakMap();
  const seen = new WeakSet();

  function walk(node, name) {
    if (!node || (typeof node !== 'object' && typeof node !== 'function')) return;
    if (seen.has(node)) return;
    seen.add(node);

    if (typeof node === 'function') {
      const p = node.prototype;
      if (p && (p instanceof jspb.Message || p.serializeBinary || p.toObject)) {
        map.set(node, name);
      }
    }

    for (const k of Object.keys(node)) {
      if (k === 'prototype') continue;
      walk(node[k], name ? `${name}.${k}` : k);
    }
  }

  walk(root, prefix);
  return map;
}

/**
 * Resolve the protobuf type name of a google-protobuf message instance.
 *
 * @param {object} msg Protobuf message instance
 * @param {WeakMap<Function, string>} typeIndex Index created by `buildProtoIndex`
 * @returns {string|null}
 */
function getProtoTypeName(msg, typeIndex) {
  return msg && msg.constructor ? (typeIndex.get(msg.constructor) ?? null) : null;
}

let _globalProtoIndex = null;
const _unknownProtoTypes = new WeakSet();

/**
 * Resolve the fully qualified protobuf type name (e.g. 'bosdyn.api.RobotCommandResponse') of a
 * google-protobuf message instance or class, the equivalent of Python's `DESCRIPTOR.full_name`.
 *
 * Generated modules register their classes on the global `proto` namespace when they are loaded,
 * so the index is rebuilt when an unknown class is met.
 * @param {object|Function} msgOrClass Protobuf message instance or class.
 * @returns {?string}
 */
function protoTypeName(msgOrClass) {
  const ctor = typeof msgOrClass === 'function' ? msgOrClass : msgOrClass?.constructor;
  if (!ctor || !globalThis.proto) return null;

  let name = _globalProtoIndex?.get(ctor);
  if (name === undefined && !_unknownProtoTypes.has(ctor)) {
    _globalProtoIndex = buildProtoIndex(globalThis.proto);
    name = _globalProtoIndex.get(ctor);
    if (name === undefined) _unknownProtoTypes.add(ctor);
  }
  return name ?? null;
}

/**
 * GET an HTTPS URL of the robot like the REST downloads of the Python SDK: urlopen() with an unverified SSL
 * context, so the certificate of the robot is not checked.
 * @param {string} url The URL, with its query string.
 * @param {Object<string, string>} headers Headers of the request.
 * @param {?number} [timeoutMs=null] Maximum inactivity of the connection in milliseconds, like the timeout of
 * urlopen(); null for none.
 * @returns {Promise<import('node:http').IncomingMessage>} The response, whose body is read as a stream.
 */
function httpsGetUnverified(url, headers, timeoutMs = null) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, { headers, rejectUnauthorized: false }, resolve);
    request.on('error', reject);
    if (timeoutMs !== null) {
      request.setTimeout(timeoutMs, () => request.destroy(new Error(`No activity for ${timeoutMs} ms: ${url}`)));
    }
  });
}

/**
 * Check an options object like the keyword arguments of Python: a positional value (a number, a protobuf message...)
 * or an unknown option (e.g. a snake_case name) was silently ignored.
 * @param {?Object} options The options object (null or undefined: no options).
 * @param {string[]} names The names of the options.
 * @param {string} method The name of the function, for the error messages.
 * @returns {Object} The options, or an empty object.
 * @throws {TypeError} The options are not a plain object, or one of them is unknown.
 */
function checkOptions(options, names, method) {
  if (options === undefined || options === null) return {};
  const prototype = typeof options === 'object' ? Object.getPrototypeOf(options) : undefined;
  if (prototype !== Object.prototype && prototype !== null) {
    const kind =
      typeof options === 'object'
        ? (protoTypeName(options) ?? (options.constructor?.name || 'object'))
        : typeof options;
    throw new TypeError(`${method}() takes its options as an object { ${names.join(', ')} }, not a ${kind}`);
  }
  for (const key of Object.keys(options)) {
    if (!names.includes(key)) {
      throw new TypeError(`${method}() got an unexpected option '${key}' (options: ${names.join(', ')})`);
    }
  }
  return options;
}

module.exports = {
  checkOptions,
  cliLoginPrompt,
  cliAuth,
  authenticate,
  setupLogging,
  DedupLoggingMessages,
  doesDedupFilterExist,
  safePbEnumToString,
  getLogger,
  addCommonArguments,
  addCredentialsArguments,
  addBaseArguments,
  addPayloadCredentialsArguments,
  addPayloadCredentialsFileArgument,
  addServiceHostingArguments,
  addServiceEndpointArguments,
  readPayloadCredentials,
  readOrCreatePayloadCredentials,
  getGuidAndSecret,
  DefaultDict,
  polyfillDispose,
  buildProtoIndex,
  getProtoTypeName,
  protoTypeName,
  httpsGetUnverified,
};
