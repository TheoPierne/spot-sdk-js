'use strict';

const { randomBytes } = require('node:crypto');
const { readFileSync, writeFileSync } = require('node:fs');
const path = require('node:path');
const process = require('node:process');

const prompt = require('prompt');
const { v4: uuid4 } = require('uuid');

const { LoggerUtil } = require('./loggerUtil');

const _LOGGER = LoggerUtil.getLogger(path.basename(__filename).replace('.js', ''));

async function cliLoginPrompt(username = null, password = null) {
  async function input(description, hidden = false, replace = '*') {
    prompt.message = '';
    prompt.start();
    const { question } = await prompt.get([
      {
        description: description,
        type: 'string',
        hidden: hidden,
        replace: replace,
        required: true,
      },
    ]);
    return Promise.resolve(question);
  }

  if (username === null) {
    username = await input('Username for robot', false, '');
  } else {
    const name = await input(`Username for robot [${username}]`, false, '');
    if (name) {
      username = name;
    }
  }
  if (password === null) {
    password = await input('Password', true, '*');
  }

  return Promise.resolve([username, password]);
}

async function cliAuth(robot, username = null, password = null) {
  let successful = false;
  /* eslint-disable no-await-in-loop */
  while (!successful) {
    if (username === null && password === null) [username, password] = await cliLoginPrompt(username, password);
    await robot.authenticate(username, password);
    successful = true;
  }
  /* eslint-enable no-await-in-loop */
}

async function authenticate(robot, askpass = null) {
  if (robot.userToken) {
    try {
      await robot.authenticateWithToken(robot.user_token);
    } catch (e) {
      console.log(e);
    }
  }

  let username = process.env.BOSDYN_CLIENT_USERNAME;
  let password = process.env.BOSDYN_CLIENT_PASSWORD;

  if (username && password) {
    await robot.authenticate(username, password);
    return;
  }

  if (!process.stdin.isTTY && askpass !== null) {
    throw new Error('Stdin is not a tty and no askpass specified.');
  }

  if (askpass === null) {
    [username, password] = await cliLoginPrompt();
  } else if (typeof askpass === 'function') {
    [username, password] = askpass();
  }

  await robot.authenticate(username, password);
}

// eslint-disable-next-line
function setupLogging(verbose = false, always_print_logger_levels = ['error']) {
  const logger = getLogger();

  let level = 'info';

  if (verbose) level = 'debug';

  LoggerUtil.setLevel(logger, level);

  return logger;
}

function getLogger() {
  return _LOGGER;
}

function addBaseArguments(parser) {
  parser.add_argument('hostname', { help: 'Hostname or address of robot, e.g. "beta25-p" or "192.168.80.3"' });
  parser.add_argument('-v', '--verbose', { action: 'store_true', help: 'Print debug-level messages' });
}

function addCommonArguments(parser) {
  parser.add_argument('--username', { help: 'User name of account to get credentials for.' });
  parser.add_argument('--password', { help: 'Password to get credentials for.' });
  addBaseArguments(parser);
}

function addPayloadCredentialsArguments(parser, required = true) {
  parser.add_argument('--guid', { required: required, help: 'Unique GUID of the payload.' });
  parser.add_argument('--secret', { required: required, help: 'Secret of the payload.' });
  addPayloadCredentialsFileArgument(parser);
}

function addPayloadCredentialsFileArgument(parser) {
  parser.add_argument('--payload-credentials-file', {
    // eslint-disable-next-line max-len
    help: 'File from which to read payload guid and secret. Preferred in conjunction with readOrCreatePayloadCredentials for easy management of unique per-robot credentials',
  });
}

function addServiceHostingArguments(parser) {
  parser.add_argument('--port', {
    default: 0,
    // eslint-disable-next-line
    help: 'The port number the service can be reached at (Warning: This port cannot be firewalled). Defaults to 0, which will assign an ephemeral port',
    type: 'int',
  });
}

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
  if (parsedOptions.guid && parsedOptions.secret) {
    return { guid: parsedOptions.guid, secret: parsedOptions.secret };
  }
  if (parsedOptions.payloadCredentialsFile) {
    return readPayloadCredentials(parsedOptions.payloadCredentialsFile);
  }
  throw new Error(`No payload credentials provided. Use --guid and --secret or --payload-credentials-file.
    The latter in conjunction with readOrCreatePayloadCredentials is recommended for easy management of
    unique per-robot credentials`);
}

function DefaultDict(defaultValueFunc) {
  return new Proxy(new Map(), {
    get(target, name, receiver) {
      if (name === 'get') {
        return key => (target.has(key) ? target.get(key) : defaultValueFunc());
      } else if (['set', 'has'].includes(name)) {
        return (...args) => target[name](...args);
      }
      return Reflect.get(target, name, receiver);
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

module.exports = {
  cliLoginPrompt,
  cliAuth,
  authenticate,
  setupLogging,
  getLogger,
  addCommonArguments,
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
};
