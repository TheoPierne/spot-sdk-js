export const API_TIMEOUT_DEFAULT: 30;
/**
 * Helper to read and parse JSON files.
 * @param {string} filePath
 * @returns {object}
 */
export function fileToJson(filePath: string): object;
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
export function doorAction(apiCalls: {
    method: string;
    url: string;
    action: string;
    sni_hostname: string;
    route: string;
    request_data: Object;
    responses: Object;
}[], doorId: string, action: string[], pathToCrt?: string | null, isRobot?: boolean): Promise<{
    action?: string;
    apiError?: any;
    extraMessage?: string;
}>;
/**
 * The value at a dotted path of a JSON object, or undefined.
 * @param {Object} obj
 * @param {string} path e.g. 'data.token'.
 * @returns {*}
 */
export function getValueByPath(obj: Object, path: string): any;
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
export function makeAccessControlSystemApiCall(method: string, url: string, requestData: Object, storeResponses?: Record<string, string> | null, sniHostname?: string | null, isRobot?: boolean, route?: string | null): Promise<[Record<string, any> | null, string | {
    statusCode: number | null;
    reason: string;
    elapsed: number | null;
} | null]>;
/**
 * Replaces the $variable and ${variable} of a template, like string.Template(template).safe_substitute(vars) in
 * Python: $$ is a $, and the unknown or invalid placeholders are kept (only ${variable} was replaced).
 * @param {string} template
 * @param {Object<string, *>} vars
 * @returns {string}
 */
export function safeSubstitute(template: string, vars: {
    [x: string]: any;
}): string;
