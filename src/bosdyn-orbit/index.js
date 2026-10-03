/**
 * @file Orbit: the client of its web API, its errors and its helpers, like the package bosdyn.orbit of Python.
 */

'use strict';

const { OrbitClient, createClient } = require('./client');
const { OrbitError, UnauthenticatedClientError, WebhookSignatureVerificationError } = require('./exceptions');
const {
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
} = require('./utils');

module.exports = {
  OrbitClient,
  createClient,
  OrbitError,
  UnauthenticatedClientError,
  WebhookSignatureVerificationError,
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
