'use strict';

class UnauthenticatedClientError extends Error {
  toString() {
    // eslint-disable-next-line max-len
    return 'The client is not authenticated properly. Run the proper authentication before calling other client functions!';
  }
}

class WebhookSignatureVerificationError extends Error {}

module.exports = {
  UnauthenticatedClientError,
  WebhookSignatureVerificationError,
};
