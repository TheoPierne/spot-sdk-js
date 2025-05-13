'use strict';

const process = require('node:process');
const { OrbitClient } = require('./client');

const API_TOKEN_ENV_VAR = 'BOSDYN_ORBIT_CLIENT_API_TOKEN';
const DEFAULT_MAX_MESSAGE_AGE_MS = 5 * 60 * 1000;

/**
 * Obtains an API token from an environment variable
 * @returns {string}
 */
function getApiToken() {
  const apiToken = process.env[API_TOKEN_ENV_VAR];

  if (!apiToken) {
    throw new Error(
      // eslint-disable-next-line max-len
      `No API token found in environment variables. Please add your token in your environment variables with this key: "${API_TOKEN_ENV_VAR}"`,
    );
  }

  return apiToken;
}

/**
 * Given an object of query params, returns the max created at time for run events
 * @param {OrbitClient} client the client for the web API
 * @param {Object} params the query params associated with the get request
 */
async function getLatestCreatedAtForRunEvents(client, params) {
  const baseParams = { limit: 1, orderBy: '-created_at', ...params };
  const latestSource = await client.getRunEvents(baseParams);
}

module.exports = {
  getApiToken,
};
