/**
 * @file Validates the URLs of API calls (their host must be an IP address or resolve to one), and makes the calls while
 * checking their redirects.
 */

'use strict';

/**
 * The URL validation and the HTTP(S) calls of the access control systems (access_controlled_door_util.js), like
 * bosdyn.client.url_validation_util in Python: the requests go to the resolved IP address of the URL, with its host
 * name (or an SNI host name) for the Host header, the SNI and the check of the certificate, and follow at most
 * MAX_REDIRECTS redirections themselves.
 */

const { Buffer } = require('node:buffer');
const dns = require('node:dns/promises');
const { readFileSync } = require('node:fs');
const http = require('node:http');
const https = require('node:https');
const net = require('node:net');
const os = require('node:os');
const process = require('node:process');
const tls = require('node:tls');

const { LoggerUtil } = require('./logger_util');

const MAX_REDIRECTS = 3;

const _LOGGER = LoggerUtil.getLogger('url_validation_util');

// The codes of the TLS errors of Node (an SSLError of requests in Python).
const _SSL_ERROR = /CERT|SSL|TLS|SELF_SIGNED|UNABLE_TO_VERIFY|ERR_TLS|EPROTO|HOSTNAME|ALTNAME/;
// The errors of connection (a ConnectionError of requests).
const _CONNECTION_ERROR = new Set(['ECONNREFUSED', 'ECONNRESET', 'EHOSTUNREACH', 'ENETUNREACH', 'ENOTFOUND', 'EPIPE']);

/** Raised when a specified network interface is not present on the system. */
class InterfaceNameNotFound extends Error {
  constructor(name) {
    super(`Interface '${name}' is not found on system.`);
    this.name = 'InterfaceNameNotFound';
  }
}

/** The error of a request (a requests.exceptions.RequestException in Python), with the kind of the error. */
class RequestError extends Error {
  /**
   * @param {string} kind The name of the exception of requests: SSLError, ConnectTimeout, ReadTimeout, InvalidSchema...
   * @param {string} message
   */
  constructor(kind, message) {
    super(message);
    this.name = 'RequestError';
    this.kind = kind;
  }
}

/**
 * The response of a request, like a requests.Response: statusCode, reason, headers, the body, elapsed (seconds).
 */
class Response {
  constructor(statusCode, reason, headers, body, elapsed, url) {
    this.statusCode = statusCode;
    this.reason = reason;
    this.headers = headers;
    /** @type {Buffer} */
    this.content = body;
    this.elapsed = elapsed;
    this.url = url;
  }

  get text() {
    return this.content.toString('utf8');
  }

  json() {
    return JSON.parse(this.text);
  }
}

/**
 * Checks that the host of a URL is an IP address, or resolves to one, like validate_url() in Python.
 * @param {string} url The URL to check.
 * @returns {Promise<[boolean, {parsedUrl: URL, resolvedIp: string}|string]>} Whether the URL is valid: then the
 * parsed URL and the IP address, else the error.
 */
async function validateUrl(url) {
  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch {
    return [false, `Invalid URL format: ${url}`];
  }
  // The URL can be a vanity name or an IP address (IPv4 or IPv6, in brackets), with or without a port.
  const hostname = parsedUrl.hostname.replace(/^\[(.*)\]$/, '$1');
  if (net.isIP(hostname)) return [true, { parsedUrl, resolvedIp: hostname }];
  try {
    const { address } = await dns.lookup(hostname);
    return [true, { parsedUrl, resolvedIp: address }];
  } catch (e) {
    const status = `No IP addresses resolved for URL: ${url}`;
    _LOGGER.error(`validate_url exception: ${e}\nstatus: ${status}`);
    return [false, status];
  }
}

/**
 * The local address of a network interface, for the family of an IP address (Node cannot bind a socket to a device
 * like SO_BINDTODEVICE: it binds to the address of the interface).
 * @param {string} name
 * @param {string} ip
 * @returns {string}
 * @throws {InterfaceNameNotFound}
 */
function _interfaceAddress(name, ip) {
  const family = net.isIPv6(ip) ? 'IPv6' : 'IPv4';
  // The family is a number in some versions of Node 18.
  const numeric = family === 'IPv6' ? 6 : 4;
  const address = os.networkInterfaces()[name]?.find(entry => entry.family === family || entry.family === numeric);
  if (!address) throw new InterfaceNameNotFound(name);
  return address.address;
}

/**
 * The body and the headers of the options of requests: json, data (an object is form-encoded), headers, auth.
 * @returns {[?Buffer, Object<string, string>]}
 */
function _body(requestData) {
  const headers = { ...(requestData.headers ?? {}) };
  const hasHeader = name => Object.keys(headers).some(key => key.toLowerCase() === name);
  let body = null;
  if (requestData.json !== undefined && requestData.json !== null) {
    body = Buffer.from(JSON.stringify(requestData.json));
    if (!hasHeader('content-type')) headers['Content-Type'] = 'application/json';
  } else if (requestData.data !== undefined && requestData.data !== null) {
    if (typeof requestData.data === 'object' && !(requestData.data instanceof Uint8Array)) {
      body = Buffer.from(new URLSearchParams(requestData.data).toString());
      if (!hasHeader('content-type')) headers['Content-Type'] = 'application/x-www-form-urlencoded';
    } else {
      body = Buffer.from(requestData.data);
    }
  }
  if (Array.isArray(requestData.auth)) {
    headers.Authorization = `Basic ${Buffer.from(requestData.auth.join(':')).toString('base64')}`;
  }
  if (body !== null) headers['Content-Length'] = String(body.length);
  return [body, headers];
}

/**
 * One request without redirection, to the resolved IP address, like the BindAdapter of Python.
 * @returns {Promise<Response>}
 * @throws {RequestError}
 */
function _request(method, parsedUrl, resolvedIp, sniHostname, timeoutMs, localAddress, requestData) {
  const isHttps = parsedUrl.protocol === 'https:';
  if (!isHttps && parsedUrl.protocol !== 'http:') {
    return Promise.reject(new RequestError('InvalidSchema', `No connection adapters were found for '${parsedUrl}'`));
  }
  const url = new URL(parsedUrl);
  for (const [key, value] of Object.entries(requestData.params ?? {})) url.searchParams.append(key, value);
  const [body, headers] = _body(requestData);
  const hostname = parsedUrl.hostname.replace(/^\[(.*)\]$/, '$1');
  // The Host header of the SNI host name (force_host), else the one of the URL.
  if (sniHostname) headers.Host = sniHostname;
  const vanity = sniHostname || hostname;

  const options = {
    host: resolvedIp,
    port: url.port || (isHttps ? 443 : 80),
    path: `${url.pathname}${url.search}`,
    method,
    headers,
    localAddress: localAddress ?? undefined,
  };
  if (isHttps) {
    // The SNI and the host name of the certificate are the vanity name (an IP address has no SNI).
    if (!net.isIP(vanity)) options.servername = vanity;
    options.checkServerIdentity = (_, cert) => tls.checkServerIdentity(vanity, cert);
    const verify = requestData.verify ?? true;
    options.rejectUnauthorized = verify !== false;
    if (typeof verify === 'string') options.ca = readFileSync(verify);
    const cert = requestData.cert;
    if (typeof cert === 'string') [options.cert, options.key] = [readFileSync(cert), readFileSync(cert)];
    else if (Array.isArray(cert)) [options.cert, options.key] = cert.map(file => readFileSync(file));
  }

  return new Promise((resolve, reject) => {
    const start = process.hrtime.bigint();
    const request = (isHttps ? https : http).request(options, response => {
      const chunks = [];
      response.on('data', chunk => chunks.push(chunk));
      response.on('error', reject);
      response.on('end', () => {
        const elapsed = Number(process.hrtime.bigint() - start) / 1e9;
        resolve(
          new Response(
            response.statusCode,
            response.statusMessage,
            response.headers,
            Buffer.concat(chunks),
            elapsed,
            url,
          ),
        );
      });
    });
    request.setTimeout(timeoutMs, () => {
      // Connected or not: a ReadTimeout or a ConnectTimeout of requests.
      const kind = request.socket && !request.socket.connecting ? 'ReadTimeout' : 'ConnectTimeout';
      request.destroy(new RequestError(kind, `${kind} after ${timeoutMs} ms: ${url}`));
    });
    request.on('error', error => {
      if (error instanceof RequestError) {
        reject(error);
      } else if (_SSL_ERROR.test(error.code ?? '') || _SSL_ERROR.test(error.message)) {
        reject(Object.assign(new RequestError('SSLError', error.message), { cause: error }));
      } else if (_CONNECTION_ERROR.has(error.code)) {
        reject(Object.assign(new RequestError('ConnectionError', error.message), { cause: error }));
      } else {
        reject(error);
      }
    });
    request.end(body ?? undefined);
  });
}

/** The status of an exception of safeApiCall(), like safe_api_call() in Python. */
function _statusOf(error) {
  if (error instanceof InterfaceNameNotFound) {
    return 'Check route in config file. Only WIFI, LTE, and ETHERNET are supported.';
  }
  if (!(error instanceof RequestError)) return `Unknown exception of type ${error?.name ?? typeof error} occurred.`;
  switch (error.kind) {
    case 'SSLError':
      return 'SSL error occurred. Please upload server SSL certificate to robot.';
    case 'ConnectTimeout':
      return 'Connection to server timed out. Check firewall, network, route, server, etc.';
    case 'ReadTimeout':
      return 'Connected to server, but server did not respond in time. Check server logs.';
    case 'InvalidSchema':
      return 'URL has invalid schema (http and https are supported).';
    default:
      return `Unknown RequestException of type ${error.kind} occurred.`;
  }
}

/**
 * Make an API call to a URL, validating the URL and checking for redirects, like safe_api_call() in Python.
 *
 * Differences with Python: the interface is bound by its address (Python binds it with SO_BINDTODEVICE, on Linux), a
 * relative redirection is resolved from the URL, and isRobot does not fail (Python reads an unset attribute: an
 * AttributeError for every call).
 * @param {string} method method for HTTP request to use
 * @param {string} url URL to make the request to
 * @param {?string} sniHostname Hostname to assert for the request (TLS and Host header), if the host name of the server
 * is not resolvable.
 * @param {number} timeout Timeout for the request, in seconds.
 * @param {boolean} [isRobot=true] The interface is only bound when not on the robot, like Python.
 * @param {?string} [interfaceName=null] Network interface to bind the HTTP calls to.
 * @param {Object} [requestData={}] The options of requests: headers, json, data, params, auth ([user, password]),
 * verify (false, or the path of a CA bundle), cert (the path of a PEM with the certificate and its key, or
 * [cert, key]).
 * @returns {Promise<[?Response, string]>} The response (or null), and a status message.
 */
async function safeApiCall(method, url, sniHostname, timeout, isRobot = true, interfaceName = null, requestData = {}) {
  let numRedirects = 0;
  let urlToCheck = url;
  let status = '';

  // Allow only 3 redirects per API call (each one waits for the previous one).

  while (numRedirects < MAX_REDIRECTS) {
    const [urlValid, returnValue] = await validateUrl(urlToCheck);
    if (!urlValid) return [null, `${returnValue}`];
    const { parsedUrl, resolvedIp } = returnValue;
    status = `Validation of ${url} successful with resolved_ip: ${resolvedIp}`;
    try {
      const localAddress = !isRobot && interfaceName ? _interfaceAddress(interfaceName, resolvedIp) : null;
      // The redirects are not followed automatically, so that the new host name is validated before the call.
      const response = await _request(
        method,
        parsedUrl,
        resolvedIp,
        sniHostname,
        timeout * 1000,
        localAddress,
        requestData,
      );
      if (response.statusCode >= 300 && response.statusCode < 400) {
        const location = response.headers.location;
        urlToCheck = location === undefined ? '' : new URL(location, parsedUrl).toString();
        numRedirects += 1;
        continue;
      }
      return [response, status];
    } catch (e) {
      status = _statusOf(e);
      _LOGGER.error(`safe_api_call exception: ${e}\nstatus: ${status}`);
    }
    return [null, status];
  }

  // Don't expect to get here, but if it does there was a problem.
  return [null, `Max redirects reached on url ${url}`];
}

module.exports = {
  MAX_REDIRECTS,
  InterfaceNameNotFound,
  RequestError,
  Response,
  safeApiCall,
  validateUrl,
};
