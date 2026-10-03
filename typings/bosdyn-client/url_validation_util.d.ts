export const MAX_REDIRECTS: 3;
/** Raised when a specified network interface is not present on the system. */
export class InterfaceNameNotFound extends Error {
    constructor(name: any);
}
/** The error of a request (a requests.exceptions.RequestException in Python), with the kind of the error. */
export class RequestError extends Error {
    /**
     * @param {string} kind The name of the exception of requests: SSLError, ConnectTimeout, ReadTimeout, InvalidSchema...
     * @param {string} message
     */
    constructor(kind: string, message: string);
    kind: string;
}
/**
 * The response of a request, like a requests.Response: statusCode, reason, headers, the body, elapsed (seconds).
 */
export class Response {
    constructor(statusCode: any, reason: any, headers: any, body: any, elapsed: any, url: any);
    statusCode: any;
    reason: any;
    headers: any;
    /** @type {Buffer} */
    content: Buffer;
    elapsed: any;
    url: any;
    get text(): string;
    json(): any;
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
export function safeApiCall(method: string, url: string, sniHostname: string | null, timeout: number, isRobot?: boolean, interfaceName?: string | null, requestData?: Object): Promise<[Response | null, string]>;
/**
 * Checks that the host of a URL is an IP address, or resolves to one, like validate_url() in Python.
 * @param {string} url The URL to check.
 * @returns {Promise<[boolean, {parsedUrl: URL, resolvedIp: string}|string]>} Whether the URL is valid: then the
 * parsed URL and the IP address, else the error.
 */
export function validateUrl(url: string): Promise<[boolean, {
    parsedUrl: URL;
    resolvedIp: string;
} | string]>;
import { Buffer } from "buffer";
