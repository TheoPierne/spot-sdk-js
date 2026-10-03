'use strict';

const assert = require('node:assert');
const test = require('node:test');

const graphNavPb = require('../src/bosdyn/api/graph_nav/graph_nav_pb');
const leasePb = require('../src/bosdyn/api/lease_pb');
const robotCommandPb = require('../src/bosdyn/api/robot_command_pb');

const { LeaseWalletRequestProcessor, LeaseWallet, Lease, NoSuchLease } = require('../src/bosdyn-client/lease');

test('test_get_lease_state', () => {
  const singleLeaseUnsetRequest = new robotCommandPb.RobotCommandRequest();
  const singleLeaseSetRequest = new robotCommandPb.RobotCommandRequest().setLease(new leasePb.Lease());
  const noLeaseRequest = new robotCommandPb.RobotCommandFeedbackRequest();

  let { skipMutation, multipleLeases } = LeaseWalletRequestProcessor.getLeaseState(singleLeaseUnsetRequest);
  assert.ok(!multipleLeases);
  assert.ok(!skipMutation);

  ({ skipMutation, multipleLeases } = LeaseWalletRequestProcessor.getLeaseState(singleLeaseSetRequest));
  assert.ok(!multipleLeases);
  assert.ok(skipMutation);

  ({ skipMutation, multipleLeases } = LeaseWalletRequestProcessor.getLeaseState(noLeaseRequest));
  assert.ok(multipleLeases === null);
  assert.ok(skipMutation);
});

test('test_resource_list', () => {
  const resourceName = 'test_resoure';

  const wallet = new LeaseWallet();
  wallet.setClientName('test');

  const leaseProto = new leasePb.Lease();
  leaseProto.setResource(resourceName).addSequence(1).addClientNames('root');

  const lease = new Lease(leaseProto);

  wallet.add(lease);

  const proc = new LeaseWalletRequestProcessor(wallet, [resourceName]);

  // Processor defaults to using our lease resource.
  let request = new graphNavPb.NavigateToRequest();
  proc.mutate(request);

  assert.ok(request.getLeasesList().length === 1);
  assert.ok(request.getLeasesList()[0].getResource() === resourceName);
  assert.deepEqual(request.getLeasesList()[0].getSequenceList(), [1, 1]);

  // Intentionally tell it that we *don't* want leases set.
  request = new graphNavPb.NavigateToRequest();
  proc.mutate(request, []);

  assert.ok(request.getLeasesList().length === 0);

  // Request a lease we don't have in the wallet.
  request = new graphNavPb.NavigateToRequest();

  assert.throws(() => {
    proc.mutate(request, ['body']);
  }, NoSuchLease);

  // Explicit lease overrides resourceList
  request = new graphNavPb.NavigateToRequest();

  request.addLeases(leaseProto);
  proc.mutate(request, ['body']);

  assert.ok(request.getLeasesList().length === 1);
  assert.ok(request.getLeasesList()[0] === leaseProto);
});
