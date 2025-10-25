'use strict';

const assert = require('node:assert');
const test = require('node:test');

const leasePb = require('../src/bosdyn/api/lease_pb');
const robotCommandPb = require('../src/bosdyn/api/robot_command_pb');

const { Lease } = require('../src/bosdyn-client/lease');
const { ResourceHierarchy } = require('../src/bosdyn-client/lease_resource_hierarchy');
const { LeaseValidator, LeaseValidatorResponseProcessor } = require('../src/bosdyn-client/lease_validator');

function _createLease(resource, epoch, sequence) {
  const leaseProto = new leasePb.Lease().setResource(resource).setEpoch(epoch).setSequenceList(sequence);
  return new Lease(leaseProto);
}

function createBodyResourceTree() {
  const mobilityTree = new leasePb.ResourceTree().setResource('mobility');
  const armTree = new leasePb.ResourceTree().setResource('arm');
  const gripperTree = new leasePb.ResourceTree().setResource('gripper');
  const fullArmTree = new leasePb.ResourceTree().setResource('full-arm').setSubResourcesList([armTree, gripperTree]);
  return new leasePb.ResourceTree().setResource('body').setSubResourcesList([fullArmTree, mobilityTree]);
}

test('test_resource_hierarchy', () => {
  const bodyTree = createBodyResourceTree();
  const resourceHierarchy = new ResourceHierarchy(bodyTree);

  // Check the root resource and that there are sub resources
  assert.ok(resourceHierarchy.getResource() === bodyTree.getResource());
  assert.ok(resourceHierarchy.hasSubResources());

  // Check that the has_resource boolean check works for top level, middle and leaf resources.
  assert.ok(resourceHierarchy.hasResource('body'));
  assert.ok(resourceHierarchy.hasResource('full-arm'));
  assert.ok(resourceHierarchy.hasResource('mobility'));

  // Check that the leaf resources were constructed correctly.
  assert.ok(resourceHierarchy.leafResources().size === 3);
  assert.ok(resourceHierarchy.leafResources().has('arm'));
  assert.ok(resourceHierarchy.leafResources().has('mobility'));
  assert.ok(resourceHierarchy.leafResources().has('gripper'));

  // Check the get hierarchy function.
  assert.ok(resourceHierarchy.getHierarchy('bad-resource') === null);
  assert.ok(resourceHierarchy.getHierarchy('body') === resourceHierarchy);
  const gripperTreeProto = new leasePb.ResourceTree().setResource('gripper');
  const gripperTree = new ResourceHierarchy(gripperTreeProto);
  assert.ok(JSON.stringify(resourceHierarchy.getHierarchy('gripper')) === JSON.stringify(gripperTree));
});

test('test_get_active_lease', async () => {
  const leaseValidator = new LeaseValidator(null);
  await leaseValidator.initialize();

  // Test attempting to get a lease before anything has been set.
  const empty = leaseValidator.getActiveLease('body');
  assert.ok(empty === null);

  // Add a lease and tests to get that lease.
  const bodyLeaseNew = _createLease('body', 'epoch', [1, 2]);
  leaseValidator.activeLeaseMap.body = bodyLeaseNew;

  const bodyLease = leaseValidator.getActiveLease('body');
  assert.ok(bodyLease !== null);
  assert.ok(bodyLease.leaseProto === bodyLeaseNew.leaseProto);

  // Check a resource that isn't yet in the lease map.
  const noResc = leaseValidator.getActiveLease('fake');
  assert.ok(noResc === null);
});

test('test_test_active_lease', async () => {
  const leaseValidator = new LeaseValidator(null);
  await leaseValidator.initialize();

  // Test an incoming lease when nothing is set in the lease map. An incoming lease
  // with a valid resource that just isn't tracked yet should be ok.
  const incoming = _createLease('body', 'epoch', [1, 2]);
  let res = leaseValidator.testActiveLease(incoming, false);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OK);
  assert.ok(res.getAttemptedLease().getSequenceList().length > 0);
  assert.ok(res.getPreviousLease() === undefined);
  assert.ok(res.getLatestKnownLease() === undefined);

  // Set a lease in the lease map that is older. Incoming should be considered ok
  // since the current is older.
  const bodyLeaseOld = _createLease('body', 'epoch', [0, 2]);
  leaseValidator.activeLeaseMap.body = bodyLeaseOld;
  res = leaseValidator.testActiveLease(incoming, false);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OK);
  assert.ok(res.getAttemptedLease().getSequenceList().length > 0);
  assert.ok(res.getPreviousLease().getSequenceList().length > 0);
  assert.ok(res.getLatestKnownLease().getSequenceList().length > 0);

  // Set a lease in the lease map that is newer. Incoming lease should be considered older.
  const bodyLeaseNew = _createLease('body', 'epoch', [2, 2]);
  leaseValidator.activeLeaseMap.body = bodyLeaseNew;
  res = leaseValidator.testActiveLease(incoming, false);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OLDER);
  assert.ok(res.getAttemptedLease().getSequenceList().length > 0);
  assert.ok(res.getPreviousLease().getSequenceList().length > 0);
  assert.ok(res.getLatestKnownLease().getSequenceList().length > 0);

  // Add a lease to the lease map that is a different epoch.
  const bodyLeaseNewEpoch = _createLease('body', 'epoch_other', [2, 2]);
  leaseValidator.activeLeaseMap.body = bodyLeaseNewEpoch;
  res = leaseValidator.testActiveLease(incoming, false);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_WRONG_EPOCH);
  assert.ok(res.getAttemptedLease().getSequenceList().length > 0);
  assert.ok(res.getPreviousLease().getSequenceList().length > 0);
  assert.ok(res.getLatestKnownLease().getSequenceList().length > 0);

  // Add a lease to the lease map that is a different epoch.
  const bodyLeaseNewEpochOther = _createLease('body', 'epoch_other', [2, 2]);
  leaseValidator.activeLeaseMap.body = bodyLeaseNewEpochOther;
  res = leaseValidator.testActiveLease(incoming, false, true);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OK);
  assert.ok(res.getAttemptedLease().getSequenceList().length > 0);
  assert.ok(res.getPreviousLease().getSequenceList().length > 0);
  assert.ok(res.getLatestKnownLease().getSequenceList().length > 0);

  // An incoming lease with no sequence should be marked invalid.
  const leaseProto = new leasePb.Lease().setResource('body').setEpoch('epoch').setSequenceList([]);
  res = leaseValidator.testActiveLease(leaseProto, false);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_INVALID_LEASE);
  assert.ok(res.getAttemptedLease().getSequenceList().length === 0);
  assert.ok(res.getAttemptedLease().getResource() === 'body');
  assert.ok(res.getPreviousLease() === undefined);
  assert.ok(res.getLatestKnownLease().getSequenceList().length > 0);
});

test('test_test_and_set_active_lease', async () => {
  const leaseValidator = new LeaseValidator(null);
  await leaseValidator.initialize();

  // Test an incoming lease when nothing is set in the lease map. An incoming lease
  // with a valid resource that just isn't tracked yet should be ok and will now become
  // a tracked lease.
  const incoming = _createLease('body', 'epoch', [1, 2]);
  let res = leaseValidator.testAndSetActiveLease(incoming, false);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OK);
  assert.ok(res.getAttemptedLease().getSequenceList().length > 0);
  assert.ok(res.getPreviousLease() === undefined);
  assert.ok(res.getLatestKnownLease().getSequenceList().length > 0);
  assert.ok('body' in leaseValidator.activeLeaseMap);
  assert.deepEqual(leaseValidator.activeLeaseMap.body.leaseProto.getSequenceList(), [1, 2]);

  // Test a lease that is older. Incoming should be considered older and not
  // get set in the map.
  const bodyLeaseOld = _createLease('body', 'epoch', [0, 2]);
  res = leaseValidator.testAndSetActiveLease(bodyLeaseOld, false);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OLDER);
  assert.ok(res.getAttemptedLease().getSequenceList().length > 0);
  assert.ok(res.getPreviousLease().getSequenceList().length > 0);
  assert.ok(res.getLatestKnownLease().getSequenceList().length > 0);
  assert.ok('body' in leaseValidator.activeLeaseMap);
  assert.deepEqual(leaseValidator.activeLeaseMap.body.leaseProto.getSequenceList(), [1, 2]);

  // Test a lease that matches the current one. Incoming should be considered same/ok.
  res = leaseValidator.testAndSetActiveLease(incoming, false);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OK);
  assert.ok(res.getAttemptedLease().getSequenceList().length > 0);
  assert.ok(res.getPreviousLease().getSequenceList().length > 0);
  assert.ok(res.getLatestKnownLease().getSequenceList().length > 0);
  assert.ok('body' in leaseValidator.activeLeaseMap);
  assert.deepEqual(leaseValidator.activeLeaseMap.body.leaseProto.getSequenceList(), [1, 2]);

  // Test a lease that is newer. Incoming should be considered newer and will
  // get set in the map.
  const bodyLeaseNew = _createLease('body', ' epoch', [2, 2]);
  leaseValidator.activeLeaseMap.body = bodyLeaseNew;
  res = leaseValidator.testAndSetActiveLease(bodyLeaseNew, false);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OK);
  assert.ok(res.getAttemptedLease().getSequenceList().length > 0);
  assert.ok(res.getPreviousLease().getSequenceList().length > 0);
  assert.ok(res.getLatestKnownLease().getSequenceList().length > 0);
  assert.ok('body' in leaseValidator.activeLeaseMap);
  assert.deepEqual(leaseValidator.activeLeaseMap.body.leaseProto.getSequenceList(), [2, 2]);

  // Add a lease to the lease map that is a different epoch.
  const bodyLeaseNewEpoch = _createLease('body', 'epoch_other', [2, 2]);
  res = leaseValidator.testAndSetActiveLease(bodyLeaseNewEpoch, false);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_WRONG_EPOCH);
  assert.ok(res.getAttemptedLease().getSequenceList().length > 0);
  assert.ok(res.getPreviousLease().getSequenceList().length > 0);
  assert.ok(res.getLatestKnownLease().getSequenceList().length > 0);
  assert.deepEqual(leaseValidator.activeLeaseMap.body.leaseProto.getSequenceList(), [2, 2]);

  // An incoming lease with no sequence should be marked invalid.
  const leaseProto = new leasePb.Lease().setResource('body').setEpoch('epoch').setSequenceList([]);
  res = leaseValidator.testAndSetActiveLease(leaseProto, false);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_INVALID_LEASE);
  assert.ok(res.getAttemptedLease().getSequenceList().length === 0);
  assert.ok(res.getAttemptedLease().getResource() === 'body');
  assert.ok(res.getPreviousLease() === undefined);
  assert.ok(res.getLatestKnownLease().getSequenceList().length > 0);
  assert.ok('body' in leaseValidator.activeLeaseMap);
  assert.deepEqual(leaseValidator.activeLeaseMap.body.leaseProto.getSequenceList(), [2, 2]);

  // Add a lease to the lease map that is a different epoch.
  const bodyLeaseNewEpochOther = _createLease('body', 'epoch_other', [0, 2]);
  res = leaseValidator.testAndSetActiveLease(bodyLeaseNewEpochOther, false, true);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OK);
  assert.ok(res.getAttemptedLease().getSequenceList().length > 0);
  assert.ok(res.getPreviousLease().getSequenceList().length > 0);
  assert.ok(res.getLatestKnownLease().getSequenceList().length > 0);
  assert.deepEqual(leaseValidator.activeLeaseMap.body.leaseProto.getSequenceList(), [0, 2]);
});

test('test_validator_with_hierarchy', async () => {
  const bodyTree = createBodyResourceTree();
  const leaseValidator = new LeaseValidator(null);
  await leaseValidator.initialize();
  leaseValidator.hierarchy = new ResourceHierarchy(bodyTree);

  // An incoming lease with a resource not in the hierarchy should be marked as unmanaged
  const otherRescLease = _createLease('body_other', 'epoch', [2, 2]);
  let res = leaseValidator.testActiveLease(otherRescLease, false);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_UNMANAGED);
  assert.ok(res.getAttemptedLease().getSequenceList().length > 0);
  assert.ok(res.getPreviousLease() === undefined);
  assert.ok(res.getLatestKnownLease() === undefined);

  // Test an incoming lease when nothing is set in the lease map. An incoming lease
  // with a valid resource that just isn't tracked yet should be ok and will now become
  // a tracked lease.
  let incoming = _createLease('body', 'epoch', [1, 2]);
  res = leaseValidator.testAndSetActiveLease(incoming, false);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OK);
  assert.ok(res.getAttemptedLease().getSequenceList().length > 0);
  assert.ok(res.getPreviousLease() === undefined);
  assert.ok(res.getLatestKnownLease().getSequenceList().length > 0);
  assert.ok('body' in leaseValidator.activeLeaseMap);
  assert.deepEqual(leaseValidator.activeLeaseMap.body.leaseProto.getSequenceList(), [1, 2]);
  // leaves should get set in the active lease map.
  assert.ok('gripper' in leaseValidator.activeLeaseMap);
  assert.ok('arm' in leaseValidator.activeLeaseMap);
  assert.ok('mobility' in leaseValidator.activeLeaseMap);
  // The leaf leases added into the active_lease map are copies of the input lease (with resources
  // below/as children to the incoming lease resource in the hierarchy). Make sure that the primary
  // input lease is not mutated at all (aka the leaf leases are deep copies of the incoming lease proto).
  assert.ok(incoming.leaseProto.getResource() === 'body');

  // Test a lease that is a sub resource but the same sequence. Incoming should be considered
  // valid even though it is a sub-resource.
  incoming = _createLease('full-arm', 'epoch', [1, 2]);
  res = leaseValidator.testAndSetActiveLease(incoming, false);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OK);
  assert.ok(res.getAttemptedLease().getSequenceList().length > 0);
  assert.ok(res.getPreviousLease().getSequenceList().length > 0);
  assert.ok(res.getLatestKnownLease().getSequenceList().length > 0);
  assert.ok('body' in leaseValidator.activeLeaseMap);
  assert.deepEqual(leaseValidator.activeLeaseMap.body.leaseProto.getSequenceList(), [1, 2]);

  // Test a lease that is a sub resource and newer than the current sequence. Should also be marked ok
  // and the active lease map should get updated to the latest.
  incoming = _createLease('full-arm', 'epoch', [2, 2]);
  res = leaseValidator.testAndSetActiveLease(incoming, false);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OK);
  assert.ok(res.getAttemptedLease().getSequenceList().length > 0);
  assert.ok(res.getPreviousLease().getSequenceList().length > 0);
  assert.ok(res.getLatestKnownLease().getSequenceList().length > 0);
  assert.ok('body' in leaseValidator.activeLeaseMap);
  assert.deepEqual(leaseValidator.activeLeaseMap.body.leaseProto.getSequenceList(), [1, 2]);
  assert.ok('full-arm' in leaseValidator.activeLeaseMap);
  assert.deepEqual(leaseValidator.activeLeaseMap['full-arm'].leaseProto.getSequenceList(), [2, 2]);

  // Now check a lease with a resource that is above the resource that was last tested/set.
  // We expect this to fail because one of the sub-resources is now considered newer.
  // Test a lease that matches the current one. Incoming should be considered same/ok.
  incoming = _createLease('body', 'epoch', [1, 3]);
  res = leaseValidator.testAndSetActiveLease(incoming, false);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OLDER);
  assert.ok(res.getAttemptedLease().getSequenceList().length > 0);
  assert.ok(res.getPreviousLease().getSequenceList().length > 0);
  assert.ok(res.getLatestKnownLease().getSequenceList().length > 0);
  assert.ok('body' in leaseValidator.activeLeaseMap);
  assert.deepEqual(leaseValidator.activeLeaseMap.body.leaseProto.getSequenceList(), [1, 2]);
  assert.ok('full-arm' in leaseValidator.activeLeaseMap);
  assert.deepEqual(leaseValidator.activeLeaseMap['full-arm'].leaseProto.getSequenceList(), [2, 2]);
});

test('test_lease_validator_response_processor', async () => {
  const bodyTree = createBodyResourceTree();
  const leaseValidator = new LeaseValidator(null);
  await leaseValidator.initialize();
  leaseValidator.hierarchy = new ResourceHierarchy(bodyTree);
  // Create a lease processor with this lease validator.
  const leaseValidatorProcessor = new LeaseValidatorResponseProcessor(leaseValidator);

  // Test an incoming lease when nothing is set in the lease map. An incoming lease
  // with a valid resource that just isn't tracked yet should be ok and will now become
  // a tracked lease.
  let incoming = _createLease('body', 'epoch', [1, 2]);
  let res = leaseValidator.testAndSetActiveLease(incoming, false);
  assert.ok(res.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OK);

  // Now make a response proto with lease use results that have a newer, latest lease.
  let response = new robotCommandPb.RobotCommandResponse();
  response.setLeaseUseResult(new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OK));
  const attemptedLeaseProto = _createLease('body', 'epoch', [1, 3]).leaseProto;
  response
    .getLeaseUseResult()
    .setLatestKnownLease(attemptedLeaseProto.clone())
    .setAttemptedLease(attemptedLeaseProto.clone())
    .setOwner(new leasePb.LeaseOwner().setClientName('my_client'));
  leaseValidatorProcessor.mutate(response);
  let activeLease = leaseValidator.getActiveLease('body');
  assert.ok(activeLease.leaseProto.getResource() === 'body');
  assert.ok(activeLease.leaseProto.getEpoch() === 'epoch');
  assert.deepEqual(activeLease.leaseProto.getSequenceList(), attemptedLeaseProto.getSequenceList());

  // Make a response proto with a lease use result that says status older but still returns
  // the systems newer lease. The lease validator should get updated with the overall newest
  // lease from the lease use result even if the lease used for the robot command request
  // was older for the robot.
  response = new robotCommandPb.RobotCommandResponse();
  response.setLeaseUseResult(new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OLDER));
  const attemptedLeaseProto2 = _createLease('body', 'epoch', [1, 4]).leaseProto;
  response
    .getLeaseUseResult()
    .setLatestKnownLease(attemptedLeaseProto2.clone())
    .setAttemptedLease(attemptedLeaseProto.clone())
    .setOwner(new leasePb.LeaseOwner().setClientName('my_client'));
  leaseValidatorProcessor.mutate(response);
  activeLease = leaseValidator.getActiveLease('body');
  assert.ok(activeLease.leaseProto.getResource() === 'body');
  assert.ok(activeLease.leaseProto.getEpoch() === 'epoch');
  assert.deepEqual(activeLease.leaseProto.getSequenceList(), attemptedLeaseProto2.getSequenceList());
});
