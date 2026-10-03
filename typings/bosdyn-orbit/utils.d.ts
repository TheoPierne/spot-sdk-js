export type OrbitClient = import("./client").OrbitClient;
/**
 * @typedef {import('./client').OrbitClient} OrbitClient
 */
export const API_TOKEN_ENV_VAR: "BOSDYN_ORBIT_CLIENT_API_TOKEN";
export const DEFAULT_MAX_MESSAGE_AGE_MS: number;
/**
 * Adds the most common arguments to the parser, like Python: the hostname, verify, and cert arguments.
 * @param {import('argparse').ArgumentParser} parser the argument parser
 */
export function addBaseArguments(parser: import("argparse").ArgumentParser): void;
/**
 * Given run capture resources and list of desired channel names, returns the list of data capture urls.
 * @param {OrbitClient} client the client for the web API
 * @param {Object[]} runCaptureResources resources obtained from a RESTful endpoint
 * @param {?string[]} [listOfChannelNames=null] the channel names of the desired data captures, null for all of them
 * @returns {string[]}
 */
export function dataCaptureUrlFromRunCaptureResources(client: OrbitClient, runCaptureResources: Object[], listOfChannelNames?: string[] | null): string[];
/**
 * Given run events and list of desired channel names, returns the list of data capture urls.
 * @param {OrbitClient} client the client for the web API
 * @param {Object} runEvents run events obtained from a RESTful endpoint
 * @param {?string[]} [listOfChannelNames=null] the channel names of the desired data captures, null for all of them
 * @returns {string[]}
 */
export function dataCaptureUrlsFromRunEvents(client: OrbitClient, runEvents: Object, listOfChannelNames?: string[] | null): string[];
/**
 * Returns the Date of the iso string representation of time, or null for a string without a timezone.
 * @param {string} datetimeIsostring The iso string representation of time.
 * @returns {?Date}
 */
export function datetimeFromIsostring(datetimeIsostring: string): Date | null;
/**
 * Given run events, returns a list of action names.
 * @param {Object} runEvents run events obtained from a RESTful endpoint
 * @returns {string[]}
 */
export function getActionNamesFromRunEvents(runEvents: Object): string[];
/**
 * Obtains an API token from an environment variable
 * @returns {Promise<string|null>}
 */
export function getApiToken(): Promise<string | null>;
/**
 * Given an object of query params, returns the max created at time for run captures.
 * @param {OrbitClient} client the client for the web API
 * @param {Object} params the query params associated with the get request
 * @returns {Promise<Date>}
 */
export function getLatestCreatedAtForRunCaptures(client: OrbitClient, params?: Object): Promise<Date>;
/**
 * Given an object of query params, returns the max created at time for run events
 * @param {OrbitClient} client the client for the web API
 * @param {Object} params the query params associated with the get request
 * @returns {Promise<Date>}
 */
export function getLatestCreatedAtForRunEvents(client: OrbitClient, params?: Object): Promise<Date>;
/**
 * Given an object of query params, returns the max end time for runs.
 * @param {OrbitClient} client the client for the web API
 * @param {Object} params the query params associated with the get request
 * @returns {Promise<Date>}
 */
export function getLatestEndTimeForRuns(client: OrbitClient, params?: Object): Promise<Date>;
/**
 * Given an object of query params, returns the latest run capture resources.
 * @param {OrbitClient} client the client for the web API
 * @param {Object} params the query params associated with the get request
 * @returns {Promise<Object[]>}
 */
export function getLatestRunCaptureResources(client: OrbitClient, params?: Object): Promise<Object[]>;
/**
 * Given an object of query params, returns the latest run in progress.
 * @param {OrbitClient} client the client for the web API
 * @param {Object} params the query params associated with the get request
 * @returns {Promise<?Object>}
 */
export function getLatestRunInProgress(client: OrbitClient, params?: Object): Promise<Object | null>;
/**
 * Given an object of query params, returns the latest run resource.
 * @param {OrbitClient} client the client for the web API
 * @param {Object} params the query params associated with the get request
 * @returns {Promise<?Object>}
 */
export function getLatestRunResource(client: OrbitClient, params?: Object): Promise<Object | null>;
/**
 * A helper function to print the json response.
 * @param {import('axios').AxiosResponse} response
 * @returns {boolean} Whether the response is ok and in JSON.
 */
export function printJsonResponse(response: import("axios").AxiosResponse): boolean;
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
export function validateWebhookPayload(payload: Object | string, signatureHeader: string, secret: string, maxAgeMs?: number): void;
/**
 * Given a raw image and a desired output file, writes the image to the file.
 * @param {import('node:stream').Readable} imgRaw The raw image, e.g. from client.getImage().
 * @param {string} imageFp The output filepath for the image.
 * @returns {Promise<void>}
 */
export function writeImage(imgRaw: import("node:stream").Readable, imageFp: string): Promise<void>;
