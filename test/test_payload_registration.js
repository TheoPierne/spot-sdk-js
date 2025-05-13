'use strict';

const assert = require('node:assert');
const test = require('node:test');

const headerPb = require('../src/bosdyn/api/header_pb');
const payloadRegistrationPb = require('../src/bosdyn/api/payload_registration_pb');

const { UnsetStatusError, InternalServerError } = require('../src/bosdyn-client/exceptions');
const { _payloadRegistrationError, PayloadAlreadyExistsError } = require('../src/bosdyn-client/payload_registration');

test('test_payload_registration_error', () => {
  // Test unset header error
  const response = new payloadRegistrationPb.RegisterPayloadResponse();
  assert.ok(_payloadRegistrationError(response) instanceof UnsetStatusError);

  // Test header error
  response.setHeader(
    new headerPb.ResponseHeader().setError(
      new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR),
    ),
  );
  assert.ok(_payloadRegistrationError(response) instanceof InternalServerError);
  response.setHeader(
    new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_OK)),
  );

  // Test unset status error
  assert.ok(_payloadRegistrationError(response) instanceof UnsetStatusError);

  // Test status error
  response.setStatus(payloadRegistrationPb.RegisterPayloadResponse.Status.STATUS_ALREADY_EXISTS);
  assert.ok(_payloadRegistrationError(response) instanceof PayloadAlreadyExistsError);

  // Test OK
  response.setStatus(payloadRegistrationPb.RegisterPayloadResponse.Status.STATUS_OK);
  assert.ok(_payloadRegistrationError(response) === null);
});
