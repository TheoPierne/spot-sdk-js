'use strict';

const assert = require('node:assert');
const test = require('node:test');
const { setTimeout } = require('node:timers');
const { setTimeout: sleep } = require('node:timers/promises');

const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');

const autoReturnPb = require('../src/bosdyn/api/auto_return/auto_return_pb');
const headerPb = require('../src/bosdyn/api/header_pb');
const keepalivePb = require('../src/bosdyn/api/keepalive/keepalive_pb');
const leasePb = require('../src/bosdyn/api/lease_pb');
const { InvalidRequestError } = require('../src/bosdyn-client/exceptions');
const { KeepaliveClient, Policy, PolicyKeepalive, InvalidLeaseError } = require('../src/bosdyn-client/keepalive');
const { Lease } = require('../src/bosdyn-client/lease');
const { nowNsec, setTimestampFromNsec } = require('../src/bosdyn-core/util');

const MOCK_CHECK_IN_CLIENT_NAME = 'mock-client';
const MOCK_POLICY_ID = 12345;
const MOCK_LAST_CHECK_IN = new Timestamp().setSeconds(1600000000).setNanos(54321);

function defaultPresentPolicy() {
  const policy = new Policy();
  policy.name = 'default policy';

  policy.addAssociatedLease(new leasePb.Lease().setSequenceList([0]).setResource('resource'));
  policy.addImmediateRobotOffAction(1);
  policy.addControlledMotorsOffAction(2);
  return policy;
}

function setCommonResponseHeader(response, code = headerPb.CommonError.Code.CODE_OK) {
  const nownsec = nowNsec();
  const header = new headerPb.ResponseHeader()
    .setResponseTimestamp(new Timestamp())
    .setError(new headerPb.CommonError().setCode(code));
  setTimestampFromNsec(header.getResponseTimestamp(), nownsec);

  response.setHeader(header);
}

function buildMockedStubClient(modifyPolicyRes = null, checkInRes = null, getStatusRes = null) {
  const client = new KeepaliveClient();

  if (modifyPolicyRes === null) {
    modifyPolicyRes = new keepalivePb.ModifyPolicyResponse();
    setCommonResponseHeader(modifyPolicyRes);
    modifyPolicyRes.setStatus(keepalivePb.ModifyPolicyResponse.Status.STATUS_OK);
    modifyPolicyRes.setAddedPolicy(new keepalivePb.LivePolicy().setPolicyId(MOCK_POLICY_ID));
  }
  if (checkInRes === null) {
    checkInRes = new keepalivePb.CheckInResponse();
    setCommonResponseHeader(checkInRes);
    checkInRes.setStatus(keepalivePb.CheckInResponse.Status.STATUS_OK);
  }
  if (getStatusRes === null) {
    getStatusRes = new keepalivePb.GetStatusResponse();
    setCommonResponseHeader(getStatusRes);
    const status = new keepalivePb.LivePolicy();
    status.setPolicyId(MOCK_POLICY_ID);
    status.setPolicy(defaultPresentPolicy().policyProto.clone());
    status.setLastCheckin(MOCK_LAST_CHECK_IN.clone());
    status.setClientName(MOCK_CHECK_IN_CLIENT_NAME);
    getStatusRes.addStatus(status);
  }

  client._stub = {
    modifyPolicy: test.mock.fn(),
    checkIn: test.mock.fn(),
    getStatus: test.mock.fn(),
  };

  client._stub.modifyPolicy.mock.mockImplementation((request, options, callback) => {
    setTimeout(() => callback(null, modifyPolicyRes), 10);
  });
  client._stub.checkIn.mock.mockImplementation((request, options, callback) => {
    setTimeout(() => callback(null, checkInRes), 10);
  });
  client._stub.getStatus.mock.mockImplementation((request, options, callback) => {
    setTimeout(() => callback(null, getStatusRes), 10);
  });

  return client;
}

test('test_policy', () => {
  const policy = new Policy();

  policy.name = 'default policy';
  assert.ok(policy.policyProto.getName() === policy.name);

  const lease = new Lease(new leasePb.Lease().setSequenceList([0]).setResource('resource'));
  policy.addAssociatedLease(lease);
  assert.ok(policy.policyProto.getAssociatedLeasesList()[0].toString() === lease.leaseProto.toString());

  assert.ok(policy.shortestActionDelay() === null);

  policy.addControlledMotorsOffAction(1);
  assert.ok(
    policy.policyProto.getActionsList()[0].getActionCase() === keepalivePb.ActionAfter.ActionCase.CONTROLLED_MOTORS_OFF,
  );
  policy.addImmediateRobotOffAction(2);
  assert.ok(
    policy.policyProto.getActionsList()[0].getActionCase() === keepalivePb.ActionAfter.ActionCase.CONTROLLED_MOTORS_OFF,
  );
  assert.ok(
    policy.policyProto.getActionsList()[1].getActionCase() === keepalivePb.ActionAfter.ActionCase.IMMEDIATE_ROBOT_OFF,
  );

  assert.ok(policy.shortestActionDelay() === 1);

  const autoReturnParams = new autoReturnPb.Params().setMaxDisplacement(10);
  policy.addAutoReturnAction([lease], autoReturnParams, 0.2);
  assert.ok(policy.policyProto.getActionsList()[2].getActionCase() === keepalivePb.ActionAfter.ActionCase.AUTO_RETURN);
  assert.ok(
    policy.policyProto.getActionsList()[2].getAutoReturn().getLeasesList()[0].toString() ===
      lease.leaseProto.toString(),
  );
  assert.ok(
    policy.policyProto.getActionsList()[2].getAutoReturn().getParams().toString() === autoReturnParams.toString(),
  );

  assert.ok(policy.shortestActionDelay() === 0.2);
});

test('test_context_mgr_basic', async () => {
  const client = buildMockedStubClient();
  const policy = defaultPresentPolicy();
  const pka = new PolicyKeepalive(client, policy);

  await pka.start();

  assert.ok(client._stub.modifyPolicy.mock.callCount() === 1);
  assert.ok(pka._policyId === MOCK_POLICY_ID);
  assert.ok(pka._rpcIntervalSeconds < policy.shortestActionDelay());

  while (client._stub.checkIn.mock.callCount() < 0) {
    // eslint-disable-next-line no-await-in-loop
    await sleep(0.05);
  }

  await pka.shutdown();
});

test('test_modify_policy_invalid_lease', async () => {
  const modifyPolicyResp = new keepalivePb.ModifyPolicyResponse().setStatus(
    keepalivePb.ModifyPolicyResponse.Status.STATUS_INVALID_LEASE,
  );
  setCommonResponseHeader(modifyPolicyResp);

  const client = buildMockedStubClient(modifyPolicyResp);

  try {
    await client.modifyPolicy(new keepalivePb.Policy());
  } catch (err) {
    assert.ok(err instanceof InvalidLeaseError);
  }
});

test('test_modify_policy_invalid_request', async () => {
  const modifyPolicyResp = new keepalivePb.ModifyPolicyResponse();
  setCommonResponseHeader(modifyPolicyResp, headerPb.CommonError.Code.CODE_INVALID_REQUEST);

  const client = buildMockedStubClient(modifyPolicyResp);

  try {
    await client.modifyPolicy(new keepalivePb.Policy());
  } catch (err) {
    assert.ok(err instanceof InvalidRequestError);
  }
});
