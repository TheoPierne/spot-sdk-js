/**
 * @file Helpers to open and close access controlled doors: the API calls of the access control system of a door,
 * described by a JSON configuration.
 */

'use strict';

const { readFileSync } = require('node:fs');

const { safeApiCall } = require('./url_validation_util');

// Seconds, like Python (safeApiCall() takes seconds: 30_000 was milliseconds).
const API_TIMEOUT_DEFAULT = 30;

/**
 * Helper to read and parse JSON files.
 * @param {string} filePath
 * @returns {object}
 */
function fileToJson(filePath) {
  const fileContent = readFileSync(filePath, { encoding: 'utf-8' });
  return JSON.parse(fileContent);
}

/**
 * Replaces the $variable and ${variable} of a template, like string.Template(template).safe_substitute(vars) in
 * Python: $$ is a $, and the unknown or invalid placeholders are kept (only ${variable} was replaced).
 * @param {string} template
 * @param {Object<string, *>} vars
 * @returns {string}
 */
function safeSubstitute(template, vars) {
  return template.replace(/\$(?:(\$)|([_a-z][_a-z0-9]*)|\{([_a-z][_a-z0-9]*)\})/gi, (match, escaped, named, braced) => {
    if (escaped) return '$';
    const key = named ?? braced;
    return Object.hasOwn(vars, key) ? String(vars[key]) : match;
  });
}

/**
 * Executes a sequence of API calls required to perform an action (e.g., open or close) on a specified door,
 * handling data substitutions and certificate verification as needed.
 * @param {{
 * method: string,
 * url: string,
 * action: string,
 * sni_hostname: string,
 * route: string,
 * request_data: Object,
 * responses: Object
 * }[]} apiCalls Array of API call specifications,
 * where each object contains information such as 'method', 'url', 'action', 'sni_hostname', 'route', 'request_data',
 * and 'responses'.
 * @param {string} doorId Identifier of the door to perform the action on.
 * @param {string[]} action The action(s) to perform (e.g., "open", "close"). Only calls matching the specified
 * action(s) will be executed.
 * @param {string|null} [pathToCrt=null] Path to a certificate file for SSL verification. If null, no certificate is
 * used.
 * @param {boolean} [isRobot=true] Indicates if the API calls are being made on behalf of a robot. Defaults to true.
 * @returns {Promise<{action?: string, apiError?: *, extraMessage?: string}>} The details of the error of the calls,
 * empty if all the calls succeeded.
 */
async function doorAction(apiCalls, doorId, action, pathToCrt = null, isRobot = true) {
  const errorMsg = {};
  const crossCallSubstitutions = { door_id: doorId };

  for (const callData of apiCalls) {
    if (!action.includes(callData?.action)) {
      continue;
    }

    // snake case because these variable come from generated files
    const { method, sni_hostname, route, request_data, responses, action: callAction = '' } = callData;
    let { url } = callData;

    if (!method || !url) {
      errorMsg.extraMessage = 'API call error: missing method or url';
      break;
    }

    // The substitutions of the URL and of the request data: a nested object (e.g. the headers) has its strings
    // substituted.
    const templatedRequestData = {};
    try {
      url = safeSubstitute(url, crossCallSubstitutions);
      for (const [k, v] of Object.entries(request_data || {})) {
        if (v !== null && typeof v === 'object' && !Array.isArray(v)) {
          templatedRequestData[k] = Object.fromEntries(
            Object.entries(v).map(([k2, v2]) => [
              k2,
              typeof v2 === 'string' ? safeSubstitute(v2, crossCallSubstitutions) : v2,
            ]),
          );
        } else if (typeof v === 'string') {
          templatedRequestData[k] = safeSubstitute(v, crossCallSubstitutions);
        } else {
          templatedRequestData[k] = v;
        }
      }
      // Check if cert file was included at the configuration, if yes use it.
      if (pathToCrt) {
        templatedRequestData.verify = pathToCrt;
      }
    } catch (e) {
      console.error(`${e} has no value, couldn't make substitution`);
    }

    const [resultOfCall, apiErrorMsg] = await makeAccessControlSystemApiCall(
      method,
      url,
      templatedRequestData,
      responses,
      sni_hostname,
      isRobot,
      route,
    );

    if (apiErrorMsg) {
      errorMsg.action = callAction;
      errorMsg.apiError = apiErrorMsg;
      break;
    }

    // If the call returned data, store it for subsequent calls.
    if (resultOfCall) {
      Object.assign(crossCallSubstitutions, resultOfCall);
    }
  }

  return errorMsg;
}

/**
 * Makes an HTTP request and optionally extracts specific fields from the JSON response.
 * @param {string} method HTTP method to use (e.g., 'GET', 'POST')
 * @param {string} url The endpoint URL for the API call
 * @param {Object} requestData Request configuration including headers, body, etc. (see safeApiCall()).
 * @param {Record<string, string>|null} [storeResponses=null] Dictionary mapping response field names to JSON paths. For
 * example:
 * {
 *  token: "auth.token",  # Store response's auth.token as "token"
 *  session_id: "data.session"  # Store response's data.session as "session_id"
 * }
 * If undefined or null, no data will be extracted from the response.
 * @param {string|null} [sniHostname=null] If specified, this parameter provides the hostname declared by
 * and expected by the access control server during TLS negotiation. This should only be
 * required if the server's hostname is not resolvable via DNS.
 * @param {boolean} [isRobot=true] Indicates if the API calls are being made on behalf of a robot. Defaults to true.
 * @param {string|null} [route=null] Route type to use ("WIFI", "LTE"). If null, default interface (WIFI) will be used.
 * @returns {Promise<[Record<string, any>|null, string|{statusCode: ?number, reason: string, elapsed: ?number}|null]>}
 * The stored fields (the ones found: Python stores false for the others), and the error: the status of the call if
 * it failed, or the status of a response which is not 200.
 * @example
 * ```js
 * const storeResponses = { auth_token: "data.token" };
 * const [data, error] = await makeAccessControlSystemApiCall(
 *   "POST", "https://api.door/auth", { json: { key: "value" } }, storeResponses);
 * if (data) {
 *  const token = data["auth_token"];
 * }
 * ```
 */
async function makeAccessControlSystemApiCall(
  method,
  url,
  requestData,
  storeResponses = null,
  sniHostname = null,
  isRobot = true,
  route = null,
) {
  try {
    const [response, statusMessage] = await safeApiCall(
      method,
      url,
      sniHostname,
      API_TIMEOUT_DEFAULT,
      isRobot,
      route,
      requestData,
    );

    if (!response) {
      // There was an error during the API call.
      return [null, statusMessage];
    }

    if (response.statusCode === 200) {
      // Only try to parse JSON and extract data if we need to store responses (an empty object is falsy in
      // Python: a body which is not JSON, e.g. empty, failed the call).
      if (storeResponses && Object.keys(storeResponses).length > 0) {
        const dataJson = response.json();
        return [
          Object.fromEntries(
            Object.entries(storeResponses).flatMap(([tag, path]) => {
              const value = getValueByPath(dataJson, path);
              return value !== null && value !== undefined ? [[tag, value]] : [];
            }),
          ),
          null,
        ];
      }
      // If we don't need to store responses, just return success.
      return [null, null];
    }

    // If the status code isn't 200, something went wrong.
    return [null, { statusCode: response.statusCode, reason: response.reason, elapsed: response.elapsed }];
  } catch (e) {
    // A response which is not JSON, like the JSONDecodeError of Python (which has no response: its status is None
    // and its reason the error). The response of the try was out of scope here: a ReferenceError.
    console.error(`API call failed: ${e}`);
    return [null, { statusCode: null, reason: String(e), elapsed: null }];
  }
}

/**
 * The value at a dotted path of a JSON object, or undefined.
 * @param {Object} obj
 * @param {string} path e.g. 'data.token'.
 * @returns {*}
 */
function getValueByPath(obj, path) {
  return path
    .split('.')
    .reduce(
      (acc, key) => (acc !== null && typeof acc === 'object' && acc[key] !== undefined ? acc[key] : undefined),
      obj,
    );
}

module.exports = {
  API_TIMEOUT_DEFAULT,
  fileToJson,
  doorAction,
  getValueByPath,
  makeAccessControlSystemApiCall,
  safeSubstitute,
};
