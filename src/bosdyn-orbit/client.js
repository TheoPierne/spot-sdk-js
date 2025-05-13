'use strict';

const https = require('node:https');
const axios = require('axios');

const { UnauthenticatedClientError } = require('./exceptions');

const DEFAULT_HEADERS = { Accept: 'application/json' };
const OCTET_HEADER = { 'Content-type': 'application/octet-stream', Accept: 'application/octet-stream' };

/**
 * Client for the Orbit web API
 */
class OrbitClient {
  /**
   * @param {string} hostname the IP address associated with the instance
   * @param {boolean} verify controls whether we verify the server’s TLS certificate
   * Note that verify=false makes your application vulnerable to man-in-the-middle (MitM) attacks
   * Defaults to true
   * @param {{ cert: string, key: string }} cert a local cert to use as client side certificate
   * Note that the private key to your local certificate must be unencrypted because Requests does
   * not support using encrypted keys.
   * Defaults to null.
   */
  constructor(hostname, verify = true, { key = '', cert = '' } = cert) {
    /**
     * The hostname of the instance
     * @type {string}
     * @private
     */
    this._hostname = hostname;

    this._session = axios.create({
      baseURL: `https://${this._hostname}`,
      httpsAgent: new https.Agent({
        rejectUnauthorized: verify,
        cert: cert,
        key: key,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    this._isAuthenticated = false;

    this._initSession();
  }

  async _initSession() {
    try {
      // Perform an initial GET request to initialize session and cookies
      const response = await this._session.get('/');

      // Set default headers for future requests
      this._session.defaults.headers.common = { ...this._session.defaults.headers.common, ...DEFAULT_HEADERS };

      // Set the CSRF token in the headers (assuming it's in cookies)
      const csrfToken = response.headers['set-cookie'].find(cookie => cookie.includes('x-csrf-token'));
      if (csrfToken) {
        const tokenValue = csrfToken.split(';')[0].split('=')[1];
        this._session.defaults.headers.common['x-csrf-token'] = tokenValue;
      }

      console.log('Session initialized successfully.');
    } catch (error) {
      console.error('Error initializing session:', error);
    }
  }

  /**
   * Authorizes the client using the provided API token obtained from the instance.
   * Must call before using other client functions.
   * @param {string} apiToken The API token obtained from the instance
   * @returns {Promise<axios.AxiosResponse>}
   */
  async authenticateWithApiToken(apiToken) {
    if (!apiToken) {
      apiToken = utils.getApiToken();
    }

    this._session.defaults.headers.common = {
      ...this._session.defaults.headers.common,
      Authorization: `Bearer ${apiToken}`,
    };

    const authenticateResponse = await this._session.get('/api/v0/api_token/authenticate');

    if (authenticateResponse.statusText === 'OK') {
      this._isAuthenticated = true;
    } else {
      console.error(
        `Client: Login failed: ${authenticateResponse.data} Please, obtain a valid API token from the instance!`,
      );
      delete this._session.defaults.headers.common.Authorization;
    }

    return authenticateResponse;
  }

  /**
   * Base function for getting a resource in /api/v0/
   * @param {string} path the path appended to /api/v0/
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getResource(path, config) {
    if (!this._isAuthenticated) {
      throw new UnauthenticatedClientError();
    }
    return this._session.get(`/api/v0/${path}`, config);
  }

  /**
   * Base function for posting a resource in /api/v0/
   * @param {string} path the path appended to /api/v0/
   * @param {Object} data data to post
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the post request
   * @returns {Promise<axios.AxiosResponse>}
   */
  postResource(path, data, config) {
    if (!this._isAuthenticated && path !== 'login') {
      throw new UnauthenticatedClientError();
    }
    return this._session.post(`/api/v0/${path}`, data, config);
  }

  /**
   * Base function for deleting a resource in /api/v0/
   * @param {string} path the path appended to /api/v0/
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the delete request
   * @returns {Promise<axios.AxiosResponse>}
   */
  deleteResource(path, config) {
    if (!this._isAuthenticated) {
      throw new UnauthenticatedClientError();
    }
    return this._session.delete(`/api/v0/${path}`, config);
  }

  /**
   * Retrieves version info.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getVersion(config) {
    return this.getResource('version', config);
  }

  /**
   * Returns the current system time.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getSystemTime(config) {
    return this.getResource('settings/system-time', config);
  }

  /**
   * Returns robots on the specified instance.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getRobots(config) {
    return this.getResource('robots', config);
  }

  /**
   * Returns a robot on given a hostname of a specific robot.
   * @param {string} hostname the IP address associated with the desired robot on the instance
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getRobotByHostname(hostname, config) {
    return this.getResource(`robots/${hostname}`, config);
  }

  /**
   * Returns site walks on the specified instance
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getSiteWalks(config) {
    return this.getResource('site_walks', config);
  }

  /**
   * Given a site walk uuid, returns a site walk on the specified instance
   * @param {string} uuid the ID associated with the site walk
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getSiteWalkById(uuid, config) {
    return this.getResource(`site_walks/${uuid}`, config);
  }

  /**
   * Returns site elements on the specified instance
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getSiteElements(config) {
    return this.getResource('site_elements', config);
  }

  /**
   * Given a site element uuid, returns a site element on the specified instance
   * @param {string} uuid the ID associated with the site element
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getSiteElementById(uuid, config) {
    return this.getResource(`site_elements/${uuid}`, config);
  }

  getSiteDocks(config) {

  }
}

/**
 * Creates an orbit client object.
 * @param {{ hostname: string, verify: boolean, cert: {cert: string, key: string }}} options The options from argparse
 * @returns {Promise<OrbitClient>}
 */
async function createClient(options) {
  const client = new OrbitClient(options.hostname, options.verify, { cert: options.cert, key: options.key });

  await client.authenticateWithApiToken();

  return client;
}

module.exports = {
  OrbitClient,
  createClient,
};
