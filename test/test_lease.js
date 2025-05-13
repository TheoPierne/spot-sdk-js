'use strict';

const assert = require('node:assert');
const test = require('node:test');

const leasePb = require('../src/bosdyn/api/lease_pb');

const { ValueError } = require('../src/bosdyn-client/exceptions');
const {
  Lease,
  testActiveLease,
  LeaseWallet,
  NoSuchLease,
  LeaseState,
  LeaseNotOwnedByWallet,
  LeaseKeepAlive,
} = require('../src/bosdyn-client/lease');

const LLAMA = 'LLAMA';
const MESO = 'mesozoic';
const SEQ = [500, 20, 9000];

function _checkLease(expectedResource, expectedEpoch, expectedSequence, actualLease) {
  assert.ok(expectedResource === actualLease.leaseProto.getResource());
  assert.ok(expectedEpoch === actualLease.leaseProto.getEpoch());
  assert.deepEqual(expectedSequence, actualLease.leaseProto.getSequenceList());
}

function _createLease(resource, epoch, sequence) {
  const leaseProto = new leasePb.Lease().setResource(resource).setEpoch(epoch).setSequenceList(sequence);
  return new Lease(leaseProto);
}

function _createLeaseUseResult(status, attemptedLease, previousLease = null) {
  const leaseUseResult = new leasePb.LeaseUseResult()
    .setStatus(status)
    .setOwner(new leasePb.LeaseOwner().setClientName('foobar').setUserName('garbanzo'))
    .setAttemptedLease(attemptedLease.leaseProto.clone())
    .setLatestKnownLease(attemptedLease.leaseProto.clone());

  if (previousLease) {
    leaseUseResult.setPreviousLease(previousLease.leaseProto.clone());
    if (previousLease.compare(attemptedLease) === Lease.CompareResult.NEWER) {
      leaseUseResult.setLatestKnownLease(previousLease.leaseProto.clone());
    }
  }

  return leaseUseResult;
}

test('test_bad_lease_constructors', () => {
  assert.throws(() => {
    // eslint-disable-next-line no-unused-vars
    let a = new Lease(null);
  }, ValueError);

  assert.throws(() => {
    const leaseProto = new leasePb.Lease();
    // eslint-disable-next-line no-unused-vars
    let a = new Lease(leaseProto);
  }, ValueError);

  assert.throws(() => {
    const leaseProto = new leasePb.Lease();
    leaseProto.setResource(LLAMA);
    // eslint-disable-next-line no-unused-vars
    let a = new Lease(leaseProto);
  }, ValueError);

  assert.throws(() => {
    const leaseProto = new leasePb.Lease();
    leaseProto.setSequenceList(SEQ);
    // eslint-disable-next-line no-unused-vars
    let a = new Lease(leaseProto);
  }, ValueError);
});

test('test_good_constructor', () => {
  const filledLease = _createLease(LLAMA, MESO, SEQ);
  _checkLease(LLAMA, MESO, SEQ, filledLease);
});

test('test_compare_different_resource', () => {
  const clientName = 'testname';
  const leaseA = _createLease(LLAMA, MESO, SEQ);
  const leaseB = _createLease('koala', MESO, SEQ);
  assert.ok(Lease.CompareResult.DIFFERENT_RESOURCES === leaseA.compare(leaseB));
  assert.ok(Lease.CompareResult.DIFFERENT_RESOURCES === leaseB.compare(leaseA));

  // Test comparison with function that returns a lease use result and sublease of the incoming lease.
  const [leaseUseResult, incomingLeaseSubleased] = testActiveLease(leaseA.leaseProto, leaseB, clientName);
  assert.ok(leaseUseResult.getStatus() === leasePb.LeaseUseResult.Status.STATUS_UNMANAGED);
  assert.deepEqual(leaseUseResult.getAttemptedLease().getSequenceList(), leaseA.leaseProto.getSequenceList());
  // latest known lease is the "active lease":lease_b since incoming lease failed checks.
  assert.deepEqual(leaseUseResult.getLatestKnownLease().getSequenceList(), leaseB.leaseProto.getSequenceList());
  assert.ok(incomingLeaseSubleased.leaseProto.getSequenceList().length > leaseA.leaseProto.getSequenceList().length);
  assert.ok(incomingLeaseSubleased.leaseProto.getResource() === leaseA.leaseProto.getResource());
  assert.ok(incomingLeaseSubleased.leaseProto.getEpoch() === leaseA.leaseProto.getEpoch());
  assert.ok(incomingLeaseSubleased.leaseProto.getClientNamesList().pop() === clientName);
});

test('test_compare_different_epoch', () => {
  const leaseA = _createLease(LLAMA, MESO, SEQ);
  const leaseB = _createLease(LLAMA, 'jurassic', SEQ);
  assert.ok(Lease.CompareResult.DIFFERENT_EPOCHS === leaseA.compare(leaseB));
  assert.ok(Lease.CompareResult.DIFFERENT_EPOCHS === leaseB.compare(leaseA));

  // Test comparison with function that returns a lease use result and sublease of the incoming lease.
  const [leaseUseResult, incomingLeaseSubleased] = testActiveLease(leaseA.leaseProto, leaseB, '');
  assert.ok(leaseUseResult.getStatus() === leasePb.LeaseUseResult.Status.STATUS_WRONG_EPOCH);
  assert.deepEqual(leaseUseResult.getAttemptedLease().getSequenceList(), leaseA.leaseProto.getSequenceList());
  // latest known lease is the "active lease":lease_b since incoming lease failed checks.
  assert.deepEqual(leaseUseResult.getLatestKnownLease().getSequenceList(), leaseB.leaseProto.getSequenceList());
  assert.ok(incomingLeaseSubleased.leaseProto.getSequenceList().length > leaseA.leaseProto.getSequenceList().length);
  assert.ok(incomingLeaseSubleased.leaseProto.getResource() === leaseA.leaseProto.getResource());
  assert.ok(incomingLeaseSubleased.leaseProto.getEpoch() === leaseA.leaseProto.getEpoch());
});

test('test_compare_same', () => {
  const leaseA = _createLease(LLAMA, MESO, SEQ);
  const leaseB = _createLease(LLAMA, MESO, SEQ);
  assert.ok(Lease.CompareResult.SAME === leaseA.compare(leaseB));
  assert.ok(Lease.CompareResult.SAME === leaseB.compare(leaseA));

  // Test comparison with function that returns a lease use result and sublease of the incoming lease.
  const [leaseUseResult, incomingLeaseSubleased] = testActiveLease(leaseA.leaseProto, leaseB, '');
  assert.ok(leaseUseResult.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OK);
  assert.deepEqual(leaseUseResult.getAttemptedLease().getSequenceList(), leaseA.leaseProto.getSequenceList());
  // latest known lease is the sublease of lease_a, make sure the initial part of the sequence matches.
  assert.deepEqual(
    leaseUseResult.getLatestKnownLease().getSequenceList().slice(0, -1),
    leaseA.leaseProto.getSequenceList(),
  );
  assert.ok(incomingLeaseSubleased.leaseProto.getSequenceList().length > leaseA.leaseProto.getSequenceList().length);
  assert.ok(incomingLeaseSubleased.leaseProto.getResource() === leaseA.leaseProto.getResource());
  assert.ok(incomingLeaseSubleased.leaseProto.getEpoch() === leaseA.leaseProto.getEpoch());
});

test('test_compare_different_first_element', () => {
  const leaseA = _createLease(LLAMA, MESO, SEQ);
  const seqB = [...SEQ];
  seqB[0] += 1;
  const leaseB = _createLease(LLAMA, MESO, seqB);
  assert.ok(Lease.CompareResult.OLDER === leaseA.compare(leaseB));
  assert.ok(Lease.CompareResult.NEWER === leaseB.compare(leaseA));

  // Test comparison with function that returns a lease use result and sublease of the incoming lease.
  let [leaseUseResult, incomingLeaseSubleased] = testActiveLease(leaseA.leaseProto, leaseB, '');
  assert.ok(leaseUseResult.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OLDER);
  assert.deepEqual(leaseUseResult.getAttemptedLease().getSequenceList(), leaseA.leaseProto.getSequenceList());
  // latest known lease is the "active lease":lease_b since incoming lease failed checks.
  assert.deepEqual(leaseUseResult.getLatestKnownLease().getSequenceList(), leaseB.leaseProto.getSequenceList());
  assert.ok(incomingLeaseSubleased.leaseProto.getSequenceList().length > leaseA.leaseProto.getSequenceList().length);
  assert.ok(incomingLeaseSubleased.leaseProto.getResource() === leaseA.leaseProto.getResource());
  assert.ok(incomingLeaseSubleased.leaseProto.getEpoch() === leaseA.leaseProto.getEpoch());

  [leaseUseResult, incomingLeaseSubleased] = testActiveLease(leaseB.leaseProto, leaseA, '');
  assert.ok(leaseUseResult.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OK);
  assert.deepEqual(leaseUseResult.getAttemptedLease().getSequenceList(), leaseB.leaseProto.getSequenceList());
  // latest known lease is the sublease of lease_b, make sure the initial part of the sequence matches.
  assert.deepEqual(
    leaseUseResult.getLatestKnownLease().getSequenceList().slice(0, -1),
    leaseB.leaseProto.getSequenceList(),
  );
  assert.ok(incomingLeaseSubleased.leaseProto.getSequenceList().length > leaseB.leaseProto.getSequenceList().length);
  assert.ok(incomingLeaseSubleased.leaseProto.getResource() === leaseB.leaseProto.getResource());
  assert.ok(incomingLeaseSubleased.leaseProto.getEpoch() === leaseB.leaseProto.getEpoch());
});

test('test_compare_different_second_element', () => {
  const leaseA = _createLease(LLAMA, MESO, SEQ);
  const seqB = [...SEQ];
  seqB[1] += 1;
  const leaseB = _createLease(LLAMA, MESO, seqB);
  assert.ok(Lease.CompareResult.OLDER === leaseA.compare(leaseB));
  assert.ok(Lease.CompareResult.NEWER === leaseB.compare(leaseA));
});

test('test_compare_different_third_element', () => {
  const leaseA = _createLease(LLAMA, MESO, SEQ);
  const seqB = [...SEQ];
  seqB[2] += 1;
  const leaseB = _createLease(LLAMA, MESO, seqB);
  assert.ok(Lease.CompareResult.OLDER === leaseA.compare(leaseB));
  assert.ok(Lease.CompareResult.NEWER === leaseB.compare(leaseA));
});

test('test_compare_manual_sub_lease', () => {
  const leaseA = _createLease(LLAMA, MESO, SEQ);
  const seqB = [...SEQ, 400];
  const leaseB = _createLease(LLAMA, MESO, seqB);
  assert.ok(Lease.CompareResult.SUPER_LEASE === leaseA.compare(leaseB));
  assert.ok(Lease.CompareResult.SUB_LEASE === leaseB.compare(leaseA));

  // Test comparison with function that returns a lease use result and sublease of the incoming lease.
  // Note, by default the function does not allow super leases and will consider a super lease older.
  let [leaseUseResult, incomingLeaseSubleased] = testActiveLease(leaseA.leaseProto, leaseB);
  assert.ok(leaseUseResult.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OLDER);
  assert.deepEqual(leaseUseResult.getAttemptedLease().getSequenceList(), leaseA.leaseProto.getSequenceList());
  assert.deepEqual(leaseUseResult.getLatestKnownLease().getSequenceList(), leaseB.leaseProto.getSequenceList());
  assert.ok(incomingLeaseSubleased.leaseProto.getSequenceList().length === leaseA.leaseProto.getSequenceList().length);
  assert.ok(incomingLeaseSubleased.leaseProto.getResource() === leaseA.leaseProto.getResource());
  assert.ok(incomingLeaseSubleased.leaseProto.getEpoch() === leaseA.leaseProto.getEpoch());

  [leaseUseResult, incomingLeaseSubleased] = testActiveLease(leaseA.leaseProto, leaseB, null, true);
  assert.ok(leaseUseResult.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OK);
  assert.deepEqual(leaseUseResult.getAttemptedLease().getSequenceList(), leaseA.leaseProto.getSequenceList());
  assert.deepEqual(leaseUseResult.getLatestKnownLease().getSequenceList(), leaseB.leaseProto.getSequenceList());
  assert.ok(incomingLeaseSubleased.leaseProto.getSequenceList().length === leaseA.leaseProto.getSequenceList().length);
  assert.ok(incomingLeaseSubleased.leaseProto.getResource() === leaseA.leaseProto.getResource());
  assert.ok(incomingLeaseSubleased.leaseProto.getEpoch() === leaseA.leaseProto.getEpoch());

  [leaseUseResult, incomingLeaseSubleased] = testActiveLease(leaseB.leaseProto, leaseA, '');
  assert.ok(leaseUseResult.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OK);
  assert.deepEqual(leaseUseResult.getAttemptedLease().getSequenceList(), leaseB.leaseProto.getSequenceList());
  assert.deepEqual(
    leaseUseResult.getLatestKnownLease().getSequenceList().slice(0, -1),
    leaseB.leaseProto.getSequenceList(),
  );
  assert.ok(incomingLeaseSubleased.leaseProto.getSequenceList().length > leaseB.leaseProto.getSequenceList().length);
  assert.ok(incomingLeaseSubleased.leaseProto.getResource() === leaseB.leaseProto.getResource());
  assert.ok(incomingLeaseSubleased.leaseProto.getEpoch() === leaseB.leaseProto.getEpoch());
});

test('test_compare_auto_sub_lease', () => {
  const leaseA = _createLease(LLAMA, MESO, SEQ);
  const leaseB = leaseA.createSublease();
  assert.ok(LLAMA === leaseB.leaseProto.getResource());
  assert.ok(MESO === leaseB.leaseProto.getEpoch());
  assert.ok(leaseB.leaseProto.getSequenceList().length === 4);
  assert.deepEqual(SEQ, leaseB.leaseProto.getSequenceList().slice(0, 3));
  assert.ok(Lease.CompareResult.SUPER_LEASE === leaseA.compare(leaseB));
  assert.ok(Lease.CompareResult.SUB_LEASE === leaseB.compare(leaseA));
});

test('test_compare_newer', () => {
  const leaseA = _createLease(LLAMA, MESO, SEQ);
  const leaseB = leaseA.createNewer();
  assert.ok(LLAMA === leaseB.leaseProto.getResource());
  assert.ok(MESO === leaseB.leaseProto.getEpoch());
  assert.ok(leaseB.leaseProto.getSequenceList().length === 3);
  assert.ok(SEQ[0] === leaseB.leaseProto.getSequenceList()[0]);
  assert.ok(SEQ[1] === leaseB.leaseProto.getSequenceList()[1]);
  assert.ok(SEQ[2] < leaseB.leaseProto.getSequenceList()[2]);
  assert.ok(Lease.CompareResult.OLDER === leaseA.compare(leaseB));
  assert.ok(Lease.CompareResult.NEWER === leaseB.compare(leaseA));
});

// Start of LeaseWallet tests.

test('test_lease_wallet_constructor', () => {
  // eslint-disable-next-line no-unused-vars
  let a = new LeaseWallet();
});

test('test_lease_wallet_normal_operation', () => {
  const leaseWallet = new LeaseWallet();
  const lease = _createLease(LLAMA, MESO, SEQ);
  leaseWallet.add(lease);
  const activeLease = leaseWallet.advance(LLAMA);
  assert.ok(Lease.CompareResult.SUPER_LEASE === lease.compare(activeLease));
  const anotherLease = leaseWallet.advance(LLAMA);
  assert.ok(Lease.CompareResult.SUPER_LEASE === lease.compare(anotherLease));
  assert.ok(Lease.CompareResult.OLDER === activeLease.compare(anotherLease));
  leaseWallet.remove(lease);
});

test('test_lease_wallet_on_lease_result_empty', () => {
  const leaseWallet = new LeaseWallet();

  try {
    leaseWallet.getLeaseState('A');
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof NoSuchLease);
    assert.ok(err.message === 'No lease for resource "A"');
  }

  const leaseUseResult = _createLeaseUseResult(leasePb.LeaseUseResult.Status.STATUS_OK, _createLease('A', 'B', [1, 0]));
  leaseWallet.onLeaseUseResult(leaseUseResult, 'A');

  try {
    leaseWallet.getLeaseState('A');
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof NoSuchLease);
    assert.ok(err.message === 'No lease for resource "A"');
  }
});

test('test_lease_wallet_on_lease_result_ok', () => {
  const leaseWallet = new LeaseWallet();
  const lease = _createLease('A', 'epoch', [1]);
  leaseWallet.add(lease);

  // Assert that initial state of adding a lease looks fine.
  const leaseState = leaseWallet.getLeaseState('A');
  assert.ok(leaseState !== null);
  assert.ok(Lease.CompareResult.SAME === lease.compare(leaseState.leaseOriginal));
  assert.ok(Lease.CompareResult.SUPER_LEASE === lease.compare(leaseState.leaseCurrent));
  assert.ok(LeaseState.Status.STATUS_SELF_OWNER === leaseState.leaseStatus);

  // When an "OK" lease_use_result comes, LeaseState should not change.
  const leaseUseResult = _createLeaseUseResult(leasePb.LeaseUseResult.Status.STATUS_OK, leaseState.leaseCurrent);
  leaseWallet.onLeaseUseResult(leaseUseResult, 'A');
  const newLeaseState = leaseWallet.getLeaseState('A');
  assert.ok(newLeaseState !== null);
  assert.ok(Lease.CompareResult.SAME === lease.compare(newLeaseState.leaseOriginal));
  assert.ok(Lease.CompareResult.SUPER_LEASE === lease.compare(newLeaseState.leaseCurrent));
  assert.ok(LeaseState.Status.STATUS_SELF_OWNER === newLeaseState.leaseStatus);

  // When an "OK" lease_use_result arrives for a lease other than current one, LeaseState also should not change
  leaseWallet.advance('A');
  leaseWallet.onLeaseUseResult(leaseUseResult, 'A');
  const newerLeaseState = leaseWallet.getLeaseState('A');
  assert.ok(newerLeaseState !== null);
  assert.ok(Lease.CompareResult.SAME === lease.compare(newerLeaseState.leaseOriginal));
  assert.ok(Lease.CompareResult.SUPER_LEASE === lease.compare(newerLeaseState.leaseCurrent));
  assert.ok(Lease.CompareResult.OLDER === newLeaseState.leaseCurrent.compare(newerLeaseState.leaseCurrent));
  assert.ok(LeaseState.Status.STATUS_SELF_OWNER === newerLeaseState.leaseStatus);
});

test('test_lease_wallet_on_lease_result_older', () => {
  const leaseWallet = new LeaseWallet();
  const lease = _createLease('A', 'epoch', [1]);
  leaseWallet.add(lease);

  // Assert that initial state of adding a lease looks fine.
  const leaseState = leaseWallet.getLeaseState('A');
  assert.ok(leaseState !== null);
  assert.ok(Lease.CompareResult.SAME === lease.compare(leaseState.leaseOriginal));
  assert.ok(Lease.CompareResult.SUPER_LEASE === lease.compare(leaseState.leaseCurrent));
  assert.ok(LeaseState.Status.STATUS_SELF_OWNER === leaseState.leaseStatus);

  const staleLease = leaseState.leaseCurrent;

  // Advance the Lease so we can compare newer and older leases
  const recentLease = leaseWallet.advance('A');

  // When an "OLDER" result comes in for an attempt which is not the current lease,
  // do not change the current lease state
  let leaseUseResult = _createLeaseUseResult(leasePb.LeaseUseResult.Status.STATUS_OLDER, staleLease);
  leaseWallet.onLeaseUseResult(leaseUseResult, 'A');
  const newLeaseState = leaseWallet.getLeaseState('A');
  assert.ok(newLeaseState !== null);
  assert.ok(Lease.CompareResult.SAME === lease.compare(newLeaseState.leaseOriginal));
  assert.ok(Lease.CompareResult.SUPER_LEASE === lease.compare(newLeaseState.leaseCurrent));
  assert.ok(LeaseState.Status.STATUS_SELF_OWNER === newLeaseState.leaseStatus);

  // When an "OLDER" result comes in for an attempt which is the current lease,
  // the lease state should change to other owner.
  const testLatestKnownLease = newLeaseState.leaseCurrent.createNewer();
  leaseUseResult = _createLeaseUseResult(leasePb.LeaseUseResult.Status.STATUS_OLDER, recentLease, testLatestKnownLease);
  leaseWallet.onLeaseUseResult(leaseUseResult, 'A');
  const newerLeaseState = leaseWallet.getLeaseState('A');
  assert.ok(newerLeaseState !== null);
  assert.ok(newerLeaseState.leaseCurrent === null);
  assert.ok(newerLeaseState.leaseOriginal === null);
  assert.ok(LeaseState.Status.STATUS_OTHER_OWNER === newerLeaseState.leaseStatus);

  try {
    leaseWallet.getLease('A');
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof LeaseNotOwnedByWallet);
    assert.ok(err.message === `Lease on "A" has state (${LeaseState.Status.STATUS_OTHER_OWNER})`);
  }
});

test('test_lease_wallet_on_lease_result_revoked', () => {
  const leaseWallet = new LeaseWallet();
  const lease = _createLease('A', 'epoch', [1]);
  leaseWallet.add(lease);

  // Assert that initial state of adding a lease looks fine.
  const leaseState = leaseWallet.getLeaseState('A');
  assert.ok(leaseState !== null);
  assert.ok(Lease.CompareResult.SAME === lease.compare(leaseState.leaseOriginal));
  assert.ok(Lease.CompareResult.SUPER_LEASE === lease.compare(leaseState.leaseCurrent));
  assert.ok(LeaseState.Status.STATUS_SELF_OWNER === leaseState.leaseStatus);

  const staleLease = leaseState.leaseCurrent;

  // Advance the Lease so we can compare newer and older leases
  const recentLease = leaseWallet.advance('A');

  // When a "REVOKED" result comes in for an attempt which is not the current lease,
  // do not change the current lease state
  let leaseUseResult = _createLeaseUseResult(leasePb.LeaseUseResult.Status.STATUS_REVOKED, staleLease);
  leaseWallet.onLeaseUseResult(leaseUseResult, 'A');
  const newLeaseState = leaseWallet.getLeaseState('A');
  assert.ok(newLeaseState !== null);
  assert.ok(Lease.CompareResult.SAME === lease.compare(newLeaseState.leaseOriginal));
  assert.ok(Lease.CompareResult.SUPER_LEASE === lease.compare(newLeaseState.leaseCurrent));
  assert.ok(LeaseState.Status.STATUS_SELF_OWNER === newLeaseState.leaseStatus);

  // When an "REVOKED" result comes in for an attempt which is the current lease,
  // the lease state should change to revoked status
  leaseUseResult = _createLeaseUseResult(leasePb.LeaseUseResult.Status.STATUS_REVOKED, recentLease);
  leaseWallet.onLeaseUseResult(leaseUseResult, 'A');
  const newerLeaseState = leaseWallet.getLeaseState('A');
  assert.ok(newerLeaseState !== null);
  assert.ok(newerLeaseState.leaseCurrent === null);
  assert.ok(newerLeaseState.leaseOriginal === null);
  assert.ok(LeaseState.Status.STATUS_REVOKED === newerLeaseState.leaseStatus);
});

test('test_lease_wallet_on_lease_result_wrong_epoch', () => {
  const leaseWallet = new LeaseWallet();
  const lease = _createLease('A', 'epoch', [1]);
  leaseWallet.add(lease);

  // Assert that initial state of adding a lease looks fine.
  const leaseState = leaseWallet.getLeaseState('A');
  assert.ok(leaseState !== null);
  assert.ok(Lease.CompareResult.SAME === lease.compare(leaseState.leaseOriginal));
  assert.ok(Lease.CompareResult.SUPER_LEASE === lease.compare(leaseState.leaseCurrent));
  assert.ok(LeaseState.Status.STATUS_SELF_OWNER === leaseState.leaseStatus);

  const staleLease = leaseState.leaseCurrent;

  // Advance the Lease so we can compare newer and older leases
  const recentLease = leaseWallet.advance('A');

  // When a "REVOKED" result comes in for an attempt which is not the current lease,
  // do not change the current lease state
  let leaseUseResult = _createLeaseUseResult(leasePb.LeaseUseResult.Status.STATUS_WRONG_EPOCH, staleLease);
  leaseWallet.onLeaseUseResult(leaseUseResult, 'A');
  const newLeaseState = leaseWallet.getLeaseState('A');
  assert.ok(newLeaseState !== null);
  assert.ok(Lease.CompareResult.SAME === lease.compare(newLeaseState.leaseOriginal));
  assert.ok(Lease.CompareResult.SUPER_LEASE === lease.compare(newLeaseState.leaseCurrent));
  assert.ok(LeaseState.Status.STATUS_SELF_OWNER === newLeaseState.leaseStatus);

  // When an "REVOKED" result comes in for an attempt which is the current lease,
  // the lease state should change to revoked status
  leaseUseResult = _createLeaseUseResult(leasePb.LeaseUseResult.Status.STATUS_WRONG_EPOCH, recentLease);
  leaseWallet.onLeaseUseResult(leaseUseResult, 'A');
  const newerLeaseState = leaseWallet.getLeaseState('A');
  assert.ok(newerLeaseState !== null);
  assert.ok(newerLeaseState.leaseCurrent === null);
  assert.ok(newerLeaseState.leaseOriginal === null);
  assert.ok(LeaseState.Status.STATUS_UNOWNED === newerLeaseState.leaseStatus);
});

test('test_lease_wallet_on_lease_result_old_attempted_lease', () => {
  const leaseWallet = new LeaseWallet();
  const lease = _createLease('A', 'epoch', [1]);
  leaseWallet.add(lease);

  // Assert that initial state of adding a lease looks fine.
  const leaseState = leaseWallet.getLeaseState('A');
  assert.ok(leaseState !== null);
  assert.ok(Lease.CompareResult.SAME === lease.compare(leaseState.leaseOriginal));
  assert.ok(Lease.CompareResult.SUPER_LEASE === lease.compare(leaseState.leaseCurrent));
  assert.ok(LeaseState.Status.STATUS_SELF_OWNER === leaseState.leaseStatus);

  // Advance the lease in wallet so lease object, which will be used in lease_use_result, is old.
  const newerLease = leaseWallet.advance('A');
  const leaseUseResult = _createLeaseUseResult(
    leasePb.LeaseUseResult.Status.STATUS_OLDER,
    leaseState.leaseCurrent,
    newerLease,
  );
  leaseWallet.onLeaseUseResult(leaseUseResult, 'A');
  const newLeaseState = leaseWallet.getLeaseState('A');
  assert.ok(newLeaseState !== null);
  assert.ok(Lease.CompareResult.SAME === newerLease.compare(newLeaseState.leaseCurrent));
  assert.ok(LeaseState.Status.STATUS_SELF_OWNER === newLeaseState.leaseStatus);
});

class MockLeaseClient {
  constructor(leaseWallet, errorOnCallN = 0) {
    /** @type {LeaseWallet} */
    this.leaseWallet = leaseWallet;
    this.retainLeaseCalls = 0;
    this.errorOnCallN = errorOnCallN;
  }

  // eslint-disable-next-line no-unused-vars
  retainLease(lease, args) {
    this.retainLeaseCalls += 1;
    if (this.errorOnCallN === this.retainLeaseCalls) {
      this.leaseWallet.remove(lease);
      throw new ValueError('What the what');
    } else {
      return Promise.resolve(null);
    }
  }

  acquire(resource) {
    const lease = new Lease(
      new leasePb.Lease().setResource(resource).setSequenceList([1]).setEpoch(1).setClientNamesList(['root']),
    );
    this.leaseWallet.add(lease);
    return Promise.resolve(lease);
  }

  // eslint-disable-next-line no-unused-vars
  returnLease(lease) {
    // pass
  }
}

class MaxKeepAliveLoops {
  constructor(maxLoops) {
    this.maxLoops = maxLoops;
    this.curLoops = 0;
  }

  run() {
    if (this.curLoops >= this.maxLoops) {
      return false;
    }
    this.curLoops += 1;
    return true;
  }
}

test('test_lease_keep_alive_empty_wallet_with_acquire', async () => {
  const leaseWallet = new LeaseWallet();
  const leaseClient = new MockLeaseClient(leaseWallet);
  const maxLoops = new MaxKeepAliveLoops(3);
  const keepAlive = new LeaseKeepAlive(leaseClient, {
    resource: 'A',
    rpcIntervalMs: 100,
    keepRunningCb: maxLoops.run.bind(maxLoops),
  });

  await keepAlive.waitForInitialization();
  await keepAlive.waitUntilDone();
  assert.ok(maxLoops.curLoops === 3);
  assert.ok(leaseClient.retainLeaseCalls === 3);
});

test('test_lease_keep_alive_empty_wallet_no_acquire', async () => {
  const leaseWallet = new LeaseWallet();
  const leaseClient = new MockLeaseClient(leaseWallet);

  function noAcquire() {
    throw new Error('No lease given');
  }

  leaseClient.acquire = noAcquire;
  const maxLoops = new MaxKeepAliveLoops(3);
  const keepAlive = new LeaseKeepAlive(leaseClient, {
    resource: 'A',
    rpcIntervalMs: 100,
    keepRunningCb: maxLoops.run.bind(maxLoops),
  });

  await keepAlive.waitForInitialization();
  await keepAlive.waitUntilDone();
  assert.ok(maxLoops.curLoops === 3);
  assert.ok(leaseClient.retainLeaseCalls === 0);
});

test('test_lease_keep_alive_filled_wallet', async () => {
  const leaseWallet = new LeaseWallet();
  const leaseA = _createLease('A', 'epoch', [1]);
  leaseWallet.add(leaseA);
  const leaseClient = new MockLeaseClient(leaseWallet);
  const maxLoops = new MaxKeepAliveLoops(3);
  const keepAlive = new LeaseKeepAlive(leaseClient, {
    resource: 'A',
    rpcIntervalMs: 100,
    keepRunningCb: maxLoops.run.bind(maxLoops),
  });

  await keepAlive.waitForInitialization();
  await keepAlive.waitUntilDone();
  assert.ok(maxLoops.curLoops === 3);
  assert.ok(leaseClient.retainLeaseCalls === 3);
  assert.ok(leaseWallet.getLease('A') !== null);
});

test('test_lease_keep_alive_lease_use_result_error', async () => {
  const leaseWallet = new LeaseWallet();
  const leaseA = _createLease('A', 'epoch', [1]);
  leaseWallet.add(leaseA);
  const leaseClient = new MockLeaseClient(leaseWallet, 6);
  const maxLoops = new MaxKeepAliveLoops(10);
  const keepAlive = new LeaseKeepAlive(leaseClient, {
    resource: 'A',
    rpcIntervalMs: 100,
    keepRunningCb: maxLoops.run.bind(maxLoops),
  });

  await keepAlive.waitForInitialization();
  await keepAlive.waitUntilDone();
  assert.ok(maxLoops.curLoops === 10);
  assert.ok(leaseClient.retainLeaseCalls === 6);
  try {
    leaseWallet.getLease('A');
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof NoSuchLease);
    assert.ok(err.message === 'No lease for resource "A"');
  }
});

test('test_lease_keep_alive_shutdown', async () => {
  const { setTimeout: sleep } = require('node:timers/promises');
  const leaseWallet = new LeaseWallet();
  const leaseClient = new MockLeaseClient(leaseWallet);
  const keepAlive = new LeaseKeepAlive(leaseClient, {
    resource: 'A',
    rpcIntervalMs: 100,
  });

  await keepAlive.waitForInitialization();

  assert.ok(keepAlive.isAlive());
  await sleep(500);
  assert.ok(keepAlive.isAlive());
  await keepAlive.shutdown();
  assert.ok(!keepAlive.isAlive());
  // A second shutdown should also work, even if it is a no-op.
  await keepAlive.shutdown();
  assert.ok(!keepAlive.isAlive());
});

test('test_lease_compare_result_to_status', () => {
  // Test the implicit conversion between CompareResult enum and LeaseUseResult status enum.
  assert.ok(
    Lease.compareResultToLeaseUseResultStatus(Lease.CompareResult.SAME, false) ===
      leasePb.LeaseUseResult.Status.STATUS_OK,
  );
  assert.ok(
    Lease.compareResultToLeaseUseResultStatus(Lease.CompareResult.SUPER_LEASE, false) ===
      leasePb.LeaseUseResult.Status.STATUS_OLDER,
  );
  assert.ok(
    Lease.compareResultToLeaseUseResultStatus(Lease.CompareResult.SUPER_LEASE, true) ===
      leasePb.LeaseUseResult.Status.STATUS_OK,
  );
  assert.ok(
    Lease.compareResultToLeaseUseResultStatus(Lease.CompareResult.SUB_LEASE, false) ===
      leasePb.LeaseUseResult.Status.STATUS_OK,
  );
  assert.ok(
    Lease.compareResultToLeaseUseResultStatus(Lease.CompareResult.NEWER, false) ===
      leasePb.LeaseUseResult.Status.STATUS_OK,
  );
  assert.ok(
    Lease.compareResultToLeaseUseResultStatus(Lease.CompareResult.OLDER, false) ===
      leasePb.LeaseUseResult.Status.STATUS_OLDER,
  );
  assert.ok(
    Lease.compareResultToLeaseUseResultStatus(Lease.CompareResult.DIFFERENT_RESOURCES, false) ===
      leasePb.LeaseUseResult.Status.STATUS_UNMANAGED,
  );
  assert.ok(
    Lease.compareResultToLeaseUseResultStatus(Lease.CompareResult.DIFFERENT_EPOCHS, false) ===
      leasePb.LeaseUseResult.Status.STATUS_WRONG_EPOCH,
  );

  assert.throws(() => {
    Lease.compareResultToLeaseUseResultStatus(100, false);
  }, Error);
});
