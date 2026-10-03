/**
 * @file Utility functions for the Orbit client.
 */

'use strict';

const { Buffer } = require('node:buffer');
const { createHmac, timingSafeEqual } = require('node:crypto');
const { createWriteStream } = require('node:fs');
const { mkdir } = require('node:fs/promises');
const path = require('node:path');
const process = require('node:process');
const readline = require('node:readline');
const { pipeline } = require('node:stream/promises');

const { WebhookSignatureVerificationError } = require('./exceptions');

// No require of ./client: client.js requires this module, and getApiToken could be undefined in it.
/**
 * @typedef {import('./client').OrbitClient} OrbitClient
 */

const API_TOKEN_ENV_VAR = 'BOSDYN_ORBIT_CLIENT_API_TOKEN';
const DEFAULT_MAX_MESSAGE_AGE_MS = 5 * 60 * 1000;

/**
 * Obtains an API token from an environment variable
 * @returns {Promise<string|null>}
 */
function getApiToken() {
  const apiToken = process.env[API_TOKEN_ENV_VAR];

  if (!apiToken) {
    if (process.stdin.isTTY) {
      return new Promise(resolve => {
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stderr,
          terminal: true,
        });

        rl.question('API Token: ', answer => {
          rl.close();
          resolve(answer.trim());
        });
      });
    } else {
      return Promise.resolve(null);
    }
  }

  return Promise.resolve(apiToken);
}

/**
 * Returns the Date of the iso string representation of time, or null for a string without a timezone.
 * @param {string} datetimeIsostring The iso string representation of time.
 * @returns {?Date}
 */
function datetimeFromIsostring(datetimeIsostring) {
  if (datetimeIsostring.includes('Z') || datetimeIsostring.includes('+')) {
    return new Date(datetimeIsostring);
  }
  return null;
}

/**
 * The system time of the instance.
 * @param {OrbitClient} client The client for the web API.
 * @returns {Promise<Date>}
 */
async function _systemTime(client) {
  const clientTimestampResponse = await client.getSystemTime();
  return new Date(Number(clientTimestampResponse.data.msSinceEpoch));
}

/**
 * Given an object of query params, returns the max created at time for run events
 * @param {OrbitClient} client the client for the web API
 * @param {Object} params the query params associated with the get request
 * @returns {Promise<Date>}
 */
async function getLatestCreatedAtForRunEvents(client, params = {}) {
  const baseParams = { limit: 1, orderBy: '-created_at', ...params };
  const latestResource = (await client.getRunEvents({ params: baseParams })).data;
  if (!latestResource.resources?.length) {
    return _systemTime(client);
  }
  return datetimeFromIsostring(latestResource.resources[0].createdAt);
}

/**
 * Given an object of query params, returns the latest run capture resources.
 * @param {OrbitClient} client the client for the web API
 * @param {Object} params the query params associated with the get request
 * @returns {Promise<Object[]>}
 */
async function getLatestRunCaptureResources(client, params = {}) {
  const baseParams = { orderBy: '-created_at', ...params };
  const runCaptures = (await client.getRunCaptures({ params: baseParams })).data;
  return runCaptures.resources;
}

/**
 * Given an object of query params, returns the max created at time for run captures.
 * @param {OrbitClient} client the client for the web API
 * @param {Object} params the query params associated with the get request
 * @returns {Promise<Date>}
 */
async function getLatestCreatedAtForRunCaptures(client, params = {}) {
  const baseParams = { limit: 1, orderBy: '-created_at', ...params };
  const latestResource = (await client.getRunCaptures({ params: baseParams })).data;
  if (!latestResource.resources?.length) {
    return _systemTime(client);
  }
  return datetimeFromIsostring(latestResource.resources[0].createdAt);
}

/**
 * Given an object of query params, returns the latest run resource.
 * @param {OrbitClient} client the client for the web API
 * @param {Object} params the query params associated with the get request
 * @returns {Promise<?Object>}
 */
async function getLatestRunResource(client, params = {}) {
  const baseParams = { limit: 1, orderBy: 'newest', ...params };
  const latestRunJson = (await client.getRuns({ params: baseParams })).data;
  return latestRunJson.resources?.[0] ?? null;
}

/**
 * Given an object of query params, returns the latest run in progress.
 * @param {OrbitClient} client the client for the web API
 * @param {Object} params the query params associated with the get request
 * @returns {Promise<?Object>}
 */
async function getLatestRunInProgress(client, params = {}) {
  const baseParams = { orderBy: 'newest', ...params };
  const latestResources = (await client.getRuns({ params: baseParams })).data.resources;
  const finished = ['SUCCESS', 'FAILURE', 'ERROR', 'STOPPED', 'NONE', 'UNKNOWN'];
  return latestResources.find(resource => !finished.includes(resource.missionStatus)) ?? null;
}

/**
 * Given an object of query params, returns the max end time for runs.
 * @param {OrbitClient} client the client for the web API
 * @param {Object} params the query params associated with the get request
 * @returns {Promise<Date>}
 */
async function getLatestEndTimeForRuns(client, params = {}) {
  const baseParams = { limit: 1, orderBy: 'newest', ...params };
  const latestResource = (await client.getRuns({ params: baseParams })).data;
  const latestEndTime = latestResource.resources?.[0]?.endTime;
  if (latestEndTime) {
    return datetimeFromIsostring(latestEndTime);
  }
  return _systemTime(client);
}

/**
 * Given a raw image and a desired output file, writes the image to the file.
 * @param {import('node:stream').Readable} imgRaw The raw image, e.g. from client.getImage().
 * @param {string} imageFp The output filepath for the image.
 * @returns {Promise<void>}
 */
async function writeImage(imgRaw, imageFp) {
  await mkdir(path.dirname(imageFp), { recursive: true });
  await pipeline(imgRaw, createWriteStream(imageFp));
}

/**
 * The urls of the data captures of the channels (all of them if null), from resources.
 * @param {OrbitClient} client
 * @param {Object[]} dataCaptures
 * @param {?string[]} listOfChannelNames
 * @returns {string[]}
 */
function _dataUrls(client, dataCaptures, listOfChannelNames) {
  return dataCaptures
    .filter(dataCapture => listOfChannelNames === null || listOfChannelNames.includes(dataCapture.channelName))
    .map(dataCapture => `https://${client._hostname}${dataCapture.dataUrl}`);
}

/**
 * Given run events and list of desired channel names, returns the list of data capture urls.
 * @param {OrbitClient} client the client for the web API
 * @param {Object} runEvents run events obtained from a RESTful endpoint
 * @param {?string[]} [listOfChannelNames=null] the channel names of the desired data captures, null for all of them
 * @returns {string[]}
 */
function dataCaptureUrlsFromRunEvents(client, runEvents, listOfChannelNames = null) {
  return runEvents.resources.flatMap(resource => _dataUrls(client, resource.dataCaptures, listOfChannelNames));
}

/**
 * Given run capture resources and list of desired channel names, returns the list of data capture urls.
 * @param {OrbitClient} client the client for the web API
 * @param {Object[]} runCaptureResources resources obtained from a RESTful endpoint
 * @param {?string[]} [listOfChannelNames=null] the channel names of the desired data captures, null for all of them
 * @returns {string[]}
 */
function dataCaptureUrlFromRunCaptureResources(client, runCaptureResources, listOfChannelNames = null) {
  return _dataUrls(client, runCaptureResources, listOfChannelNames);
}

/**
 * Given run events, returns a list of action names.
 * @param {Object} runEvents run events obtained from a RESTful endpoint
 * @returns {string[]}
 */
function getActionNamesFromRunEvents(runEvents) {
  return runEvents.resources.map(resource => resource.actionName);
}

/**
 * JSON of a value like Python's json.dumps(value, separators=(',', ':')): compact, with the characters out of the
 * printable ASCII escaped (ensure_ascii, the regex ESCAPE_ASCII of Python; JSON.stringify() escaped the controls).
 * @param {*} value
 * @returns {string}
 */
function _pythonJsonDumps(value) {
  return JSON.stringify(value).replace(/[^ -~]/g, char => `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`);
}

/**
 * Verifies that the webhook payload came from the Orbit instance, like validate_webhook_payload in Python (it was
 * missing: WebhookSignatureVerificationError was never thrown).
 * @param {Object|string} payload The JSON body of the webhook request: the parsed object, serialized like Python, or
 * the raw body.
 * @param {string} signatureHeader The value of the signature header.
 * @param {string} secret The configured secret value for this webhook, in hexadecimal.
 * @param {number} [maxAgeMs=DEFAULT_MAX_MESSAGE_AGE_MS] The maximum age of the message before it's considered
 * invalid (default is 5 minutes).
 * @throws {WebhookSignatureVerificationError} The webhook signature is invalid.
 */
function validateWebhookPayload(payload, signatureHeader, secret, maxAgeMs = DEFAULT_MAX_MESSAGE_AGE_MS) {
  if (!signatureHeader) {
    throw new WebhookSignatureVerificationError('Signature header cannot be empty');
  }

  const headerComponents = Object.fromEntries(
    signatureHeader.split(',').map(entry => {
      const separator = entry.indexOf('=');
      return separator < 0 ? [entry, undefined] : [entry.slice(0, separator), entry.slice(separator + 1)];
    }),
  );
  const sendTime = headerComponents.t;
  const sendTimeMs = sendTime !== undefined && /^\d+$/.test(sendTime) ? Number(sendTime) : null;
  const receivedHmac = headerComponents.v1;
  if (!sendTimeMs || !receivedHmac) {
    throw new WebhookSignatureVerificationError('Missing either send time or HMAC in signature header');
  }

  // Like Python, the current time in seconds.
  const currentTimeMs = Math.round(Date.now() / 1000) * 1000;
  const timeDiffMs = currentTimeMs - sendTimeMs;
  if (timeDiffMs > maxAgeMs) {
    throw new WebhookSignatureVerificationError(
      `The payload is ${timeDiffMs}ms old, which is greater than the maximum age ${maxAgeMs}ms`,
    );
  }

  if (!/^([0-9a-fA-F]{2})*$/.test(secret)) {
    throw new WebhookSignatureVerificationError('The secret is not a hexadecimal string');
  }
  const body = typeof payload === 'string' ? payload : _pythonJsonDumps(payload);
  const calculatedHmac = createHmac('sha256', Buffer.from(secret, 'hex'))
    .update(`${sendTime}.${body}`, 'utf8')
    .digest('hex');

  // Compared in constant time, like secrets.compare_digest().
  const received = Buffer.from(receivedHmac);
  const calculated = Buffer.from(calculatedHmac);
  if (received.length !== calculated.length || !timingSafeEqual(received, calculated)) {
    throw new WebhookSignatureVerificationError('The received HMAC did not match the expected value');
  }
}

/**
 * A helper function to print the json response.
 * @param {import('axios').AxiosResponse} response
 * @returns {boolean} Whether the response is ok and in JSON.
 */
function printJsonResponse(response) {
  if (response.status < 400) {
    let jsonData = response.data;
    if (typeof jsonData === 'string') {
      try {
        jsonData = JSON.parse(jsonData);
      } catch {
        console.log('Response is ok but not in JSON format.');
        return false;
      }
    }
    console.log(`JSON Response: ${JSON.stringify(jsonData)}`);
    return true;
  }
  const text = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
  console.log(`Request failed with status : ${text}`);
  return false;
}

/**
 * Adds the most common arguments to the parser, like Python: the hostname, verify, and cert arguments.
 * @param {import('argparse').ArgumentParser} parser the argument parser
 */
function addBaseArguments(parser) {
  parser.add_argument('--hostname', {
    help: 'IP address associated with the Orbit instance',
    required: true,
    type: 'str',
  });
  parser.add_argument('--verify', {
    help: "verify(path to a CA bundle or Boolean): controls whether we verify the server's TLS certificate",
    default: true,
  });
  parser.add_argument('--cert', {
    help:
      'a client certificate file for authentication (a .pem file containing the certificate and key pair, or two ' +
      'separate files containing the certificate and key respectively and in that order)',
    nargs: '+',
    default: null,
  });
}

module.exports = {
  API_TOKEN_ENV_VAR,
  DEFAULT_MAX_MESSAGE_AGE_MS,
  addBaseArguments,
  dataCaptureUrlFromRunCaptureResources,
  dataCaptureUrlsFromRunEvents,
  datetimeFromIsostring,
  getActionNamesFromRunEvents,
  getApiToken,
  getLatestCreatedAtForRunCaptures,
  getLatestCreatedAtForRunEvents,
  getLatestEndTimeForRuns,
  getLatestRunCaptureResources,
  getLatestRunInProgress,
  getLatestRunResource,
  printJsonResponse,
  validateWebhookPayload,
  writeImage,
};
