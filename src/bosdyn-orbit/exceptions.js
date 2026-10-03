/**
 * @file The errors of the Orbit client.
 */

'use strict';

/** Base exception. */
class OrbitError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

/** The client is not authenticated properly. */
class UnauthenticatedClientError extends OrbitError {
  // The message is given to Error (err.message was '').
  constructor(
    message = 'The client is not authenticated properly. ' +
      'Run the proper authentication before calling other client functions!',
  ) {
    super(message);
  }

  toString() {
    return this.message;
  }
}

/** The webhook signature could not be verified. */
class WebhookSignatureVerificationError extends OrbitError {}

module.exports = {
  OrbitError,
  UnauthenticatedClientError,
  WebhookSignatureVerificationError,
};
