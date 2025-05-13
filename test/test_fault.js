'use strict';

const assert = require('node:assert');
const test = require('node:test');

const headerPb = require('../src/bosdyn/api/header_pb');
const serviceFaultPb = require('../src/bosdyn/api/service_fault_pb');

const { UnsetStatusError, InternalServerError } = require('../src/bosdyn-client/exceptions');
const {
  _triggerServiceFaultError,
  ServiceFaultAlreadyExistsError,
  _clearServiceFaultError,
  ServiceFaultDoesNotExistError,
} = require('../src/bosdyn-client/fault');

test('test_trigger_service_fault_error', () => {
  // Test unset header error
  let response = new serviceFaultPb.TriggerServiceFaultResponse();
  assert.ok(_triggerServiceFaultError(response) instanceof UnsetStatusError);

  // Test header error
  response.setHeader(
    new headerPb.ResponseHeader().setError(
      new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR),
    ),
  );
  assert.ok(_triggerServiceFaultError(response) instanceof InternalServerError);

  // Test unset status error
  response.getHeader().getError().setCode(headerPb.CommonError.Code.CODE_OK);
  assert.ok(_triggerServiceFaultError(response) instanceof UnsetStatusError);

  // Test status error
  response.setStatus(serviceFaultPb.TriggerServiceFaultResponse.Status.STATUS_FAULT_ALREADY_ACTIVE);
  assert.ok(_triggerServiceFaultError(response) instanceof ServiceFaultAlreadyExistsError);

  // Test OK
  response.setStatus(serviceFaultPb.TriggerServiceFaultResponse.Status.STATUS_OK);
  assert.ok(_triggerServiceFaultError(response) === null);
});

test('test_clear_service_fault_error', () => {
  // Test unset header error
  let response = new serviceFaultPb.ClearServiceFaultResponse();
  assert.ok(_clearServiceFaultError(response) instanceof UnsetStatusError);

  // Test header error
  response.setHeader(
    new headerPb.ResponseHeader().setError(
      new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR),
    ),
  );
  assert.ok(_clearServiceFaultError(response) instanceof InternalServerError);

  // Test unset status error
  response.getHeader().getError().setCode(headerPb.CommonError.Code.CODE_OK);
  assert.ok(_clearServiceFaultError(response) instanceof UnsetStatusError);

  // Test status error
  response.setStatus(serviceFaultPb.ClearServiceFaultResponse.Status.STATUS_FAULT_NOT_ACTIVE);
  assert.ok(_clearServiceFaultError(response) instanceof ServiceFaultDoesNotExistError);

  // Test OK
  response.setStatus(serviceFaultPb.ClearServiceFaultResponse.Status.STATUS_OK);
  assert.ok(_clearServiceFaultError(response) === null);
});
