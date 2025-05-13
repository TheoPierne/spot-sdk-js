'use strict';

const assert = require('node:assert');
const test = require('node:test');

const numjs = require('@d4c/numjs').default;
const seedrandom = require('seedrandom');

const geometryPb = require('../src/bosdyn/api/geometry_pb');
const {
  SE2Pose,
  SE3Pose,
  SE2Velocity,
  SE3Velocity,
  Quat,
  Vec2,
  Vec3,
  transformSe2velocity,
  transformSe3velocity,
  skewMatrix3d,
  skewMatrix2d,
  quatToEulerZYX,
  angleDiff,
  recenterAngleMod,
} = require('../src/bosdyn-client/math_helpers');

const EPSILON = 0.0001;

function compareMathHelpersSe2(calculatedSe2, expectedSe2) {
  assert.ok(Math.abs(calculatedSe2.x - expectedSe2.x) < 1e-5);
  assert.ok(Math.abs(calculatedSe2.y - expectedSe2.y) < 1e-5);
  assert.ok(Math.abs(calculatedSe2.angle - expectedSe2.angle) < 1e-5);
}

function compareMathHelpersSe3(calculatedSe3, expectedSe3) {
  assert.ok(Math.abs(calculatedSe3.x - expectedSe3.x) < 1e-5);
  assert.ok(Math.abs(calculatedSe3.y - expectedSe3.y) < 1e-5);
  assert.ok(Math.abs(calculatedSe3.z - expectedSe3.z) < 1e-5);
  assert.ok(Math.abs(calculatedSe3.rot.w - expectedSe3.rot.w) < 1e-5);
  assert.ok(Math.abs(calculatedSe3.rot.x - expectedSe3.rot.x) < 1e-5);
  assert.ok(Math.abs(calculatedSe3.rot.y - expectedSe3.rot.y) < 1e-5);
  assert.ok(Math.abs(calculatedSe3.rot.z - expectedSe3.rot.z) < 1e-5);
}

function compareSe2Velocity(expectedVel, calculatedVel) {
  assert.ok(Math.abs(expectedVel.linearVelocityX - calculatedVel.linearVelocityX) < 1e-6);
  assert.ok(Math.abs(expectedVel.linearVelocityY - calculatedVel.linearVelocityY) < 1e-6);
  assert.ok(Math.abs(expectedVel.angularVelocity - calculatedVel.angularVelocity) < 1e-6);
}

function compareSe3Velocity(expectedVel, calculated_vel, threshold = 1e-6) {
  assert.ok(Math.abs(expectedVel.linearVelocityX - calculated_vel.linearVelocityX) < threshold);
  assert.ok(Math.abs(expectedVel.linearVelocityY - calculated_vel.linearVelocityY) < threshold);
  assert.ok(Math.abs(expectedVel.linearVelocityZ - calculated_vel.linearVelocityZ) < threshold);
  assert.ok(Math.abs(expectedVel.angularVelocityX - calculated_vel.angularVelocityX) < threshold);
  assert.ok(Math.abs(expectedVel.angularVelocityY - calculated_vel.angularVelocityY) < threshold);
  assert.ok(Math.abs(expectedVel.angularVelocityZ - calculated_vel.angularVelocityZ) < threshold);
}

test('test_create_se2_pose', () => {
  // Test creating an SE2Pose from a proto with from_obj()
  const protoSe2 = new geometryPb.SE2Pose().setPosition(new geometryPb.Vec2().setX(1).setY(2)).setAngle(0.2);
  const se2 = SE2Pose.fromProto(protoSe2);
  assert.ok(se2 instanceof SE2Pose);
  assert.strictEqual(se2.x, protoSe2.getPosition().getX());
  assert.strictEqual(se2.y, protoSe2.getPosition().getY());
  assert.strictEqual(se2.angle, protoSe2.getAngle());

  // Test proto-like attribute access properties
  const pos = se2.position;
  assert.ok(pos instanceof geometryPb.Vec2);
  assert.strictEqual(pos.getX(), protoSe2.getPosition().getX());
  assert.strictEqual(pos.getY(), protoSe2.getPosition().getY());

  // Test going back to a proto message with toProto()
  const newProtoSe2 = se2.toProto();
  assert.ok(newProtoSe2 instanceof geometryPb.SE2Pose);
  assert.strictEqual(newProtoSe2.getPosition().getX(), protoSe2.getPosition().getX());
  assert.strictEqual(newProtoSe2.getPosition().getY(), protoSe2.getPosition().getY());
  assert.strictEqual(newProtoSe2.getAngle(), protoSe2.getAngle());

  // Test mutating an existing proto message to_obj()
  const protoMutSe2 = new geometryPb.SE2Pose();
  se2.toObj(protoMutSe2);
  assert.strictEqual(se2.x, protoMutSe2.getPosition().getX());
  assert.strictEqual(se2.y, protoMutSe2.getPosition().getY());
  assert.strictEqual(se2.angle, protoMutSe2.getAngle());
});

test('test_se2_times_se2', () => {
  // Multiply all-zeros
  let a = new SE2Pose(0, 0, 0);
  let b = new SE2Pose(0, 0, 0);
  let c = a.mult(b);
  compareMathHelpersSe2(c, new SE2Pose(0, 0, 0));

  // A: No translation, only rotation. B: translation and rotation
  a = new SE2Pose(0, 0, 0.2);
  b = new SE2Pose(1, 2, 1);
  c = a.mult(b);
  compareMathHelpersSe2(
    c,
    new SE2Pose(1 * Math.cos(0.2) + 2 * -Math.sin(0.2), 1 * Math.sin(0.2) + 2 * Math.cos(0.2), 1.2),
  );

  // A: No rotation, only translation. B: translation and rotation
  a = new SE2Pose(5, 3.3, 0);
  b = new SE2Pose(1, 2, 1);
  c = a.mult(b);
  compareMathHelpersSe2(c, new SE2Pose(6, 5.3, 1));

  // A: No rotation, only translation. B: No rotation, only translation.
  a = new SE2Pose(5.2, 3.3, 0);
  b = new SE2Pose(1.3, 2, 0);
  c = a.mult(b);
  compareMathHelpersSe2(c, new SE2Pose(6.5, 5.3, 0));

  // A: Rotation and translation. B: Only rotation, no translation.
  a = new SE2Pose(5.2, 3.3, 0.2);
  b = new SE2Pose(0, 0, 0.3);
  c = a.mult(b);
  compareMathHelpersSe2(c, new SE2Pose(5.2, 3.3, 0.5));

  // Both have rotation and translation
  a = new SE2Pose(5.2, 3.3, 0.2);
  b = new SE2Pose(1.2, 2, 0.3);
  c = a.mult(b);
  compareMathHelpersSe2(
    c,
    new SE2Pose(5.2 + 1.2 * Math.cos(0.2) + 2 * -Math.sin(0.2), 3.3 + 1.2 * Math.sin(0.2) + 2 * Math.cos(0.2), 0.5),
  );
});

test('test_inverse_se2', () => {
  // Identity/all-zeros
  const a = new SE2Pose(0, 0, 0);
  const invA = a.inverse();
  compareMathHelpersSe2(invA, new SE2Pose(0, 0, 0));

  // Rotation only
  const b = new SE2Pose(0, 0, 1);
  const invB = b.inverse();
  compareMathHelpersSe2(invB, new SE2Pose(0, 0, -1));

  // Translation only
  const c = new SE2Pose(1, 2, 0);
  const invC = c.inverse();
  compareMathHelpersSe2(invC, new SE2Pose(-1, -2, 0));

  // Translation and rotation
  const d = new SE2Pose(1, 2, 1);
  const invD = d.inverse();
  compareMathHelpersSe2(invD, new SE2Pose(-1 * Math.cos(1) - 2 * Math.sin(1), 1 * Math.sin(1) - 2 * Math.cos(1), -1));
});

test('test_matrices_se2', () => {
  // Test making rotation matrix
  // No rotation se2 --> rotation matrix
  const a = new SE2Pose(0, 0, 0);
  const rotA = a.toRotMatrix();
  assert.deepEqual(rotA.tolist(), [
    [1, 0],
    [0, 1],
  ]);

  // Rotation se2 --> rotation matrix
  const b = new SE2Pose(1, 2, 0.5);
  const rotB = b.toRotMatrix();
  assert.deepStrictEqual(rotB.shape, [2, 2]);
  assert.deepEqual(
    rotB.tolist(),
    numjs
      .array([
        [Math.cos(0.5), -Math.sin(0.5)],
        [Math.sin(0.5), Math.cos(0.5)],
      ])
      .tolist(),
  );

  // Test skew matrix
  // No translation se2 --> skew matrix
  const d = new SE2Pose(1, 2, 0.1);
  const skewD = skewMatrix2d(d.position);
  assert.deepStrictEqual(skewD.shape, [1, 2]);
  assert.deepEqual(skewD.tolist(), numjs.array([[d.y, -d.x]]).tolist());

  // Translation se2 --> skew matrix
  const e = new SE2Pose(1, 2, 0.1);
  const skewE = skewMatrix2d(e.position);
  assert.deepStrictEqual(skewE.shape, [1, 2]);
  assert.deepEqual(skewE.tolist(), numjs.array([[e.y, -e.x]]).tolist());

  // Test making adjoint matrices
  // All zeros --> adjoint
  const c = new SE2Pose(0, 0, 0);
  const adjointC = c.toAdjointMatrix();
  assert.deepStrictEqual(adjointC.shape, [3, 3]);
  assert.deepEqual(
    adjointC.tolist(),
    numjs
      .array([
        [Math.cos(0), -Math.sin(0), c.y],
        [Math.sin(0), Math.cos(0), -c.x],
        [0, 0, 1],
      ])
      .tolist(),
  );

  // No rotation se2 --> adjoint
  const f = new SE2Pose(1, 2, 0);
  const adjointF = f.toAdjointMatrix();
  assert.deepStrictEqual(adjointF.shape, [3, 3]);
  assert.deepEqual(
    adjointF.tolist(),
    numjs
      .array([
        [Math.cos(f.angle), -Math.sin(f.angle), f.y],
        [Math.sin(f.angle), Math.cos(f.angle), -f.x],
        [0, 0, 1],
      ])
      .tolist(),
  );

  // No translation se2 --> adjoint
  const g = new SE2Pose(0, 0, 0.2);
  const adjointG = g.toAdjointMatrix();
  assert.deepStrictEqual(adjointG.shape, [3, 3]);
  assert.deepEqual(
    adjointG.tolist(),
    numjs
      .array([
        [Math.cos(g.angle), -Math.sin(g.angle), g.y],
        [Math.sin(g.angle), Math.cos(g.angle), -g.x],
        [0, 0, 1],
      ])
      .tolist(),
  );

  // Both translation and rotation se2 --> adjoint
  const h = new SE2Pose(2, 5, 0.2);
  const adjointH = h.toAdjointMatrix();
  assert.deepStrictEqual(adjointH.shape, [3, 3]);
  assert.deepEqual(
    adjointH.tolist(),
    numjs
      .array([
        [Math.cos(h.angle), -Math.sin(h.angle), h.y],
        [Math.sin(h.angle), Math.cos(h.angle), -h.x],
        [0, 0, 1],
      ])
      .tolist(),
  );
});

test('test_se2_conversions_se3_pose', () => {
  // Test converting se2pose --> se3pose with no height input
  const a = new SE2Pose(1, 2, 0.5);
  const se3A = a.getClosestSe3Transform();
  assert.ok(se3A instanceof SE3Pose);
  assert.strictEqual(a.x, se3A.x);
  assert.strictEqual(a.y, se3A.y);
  assert.strictEqual(se3A.z, 0);
  assert.ok(Math.abs(se3A.rot.w - 0.968912) < 1e-5);
  assert.strictEqual(se3A.rot.x, 0);
  assert.strictEqual(se3A.rot.y, 0);
  assert.ok(Math.abs(se3A.rot.z - 0.2474) < 1e-5);

  // Test converting se2pose --> se3pose with height input
  const se3AWithHeight = a.getClosestSe3Transform(5);
  assert.ok(se3AWithHeight instanceof SE3Pose);
  assert.strictEqual(a.x, se3AWithHeight.x);
  assert.strictEqual(a.y, se3AWithHeight.y);
  assert.strictEqual(se3AWithHeight.z, 5);
  assert.ok(Math.abs(se3AWithHeight.rot.w - 0.968912) < 1e-5);
  assert.strictEqual(se3AWithHeight.rot.x, 0);
  assert.strictEqual(se3AWithHeight.rot.y, 0);
  assert.ok(Math.abs(se3AWithHeight.rot.z - 0.2474) < 1e-5);

  // Test flattening an se3pose to se2pose
  const b = new SE3Pose(1, 2, 3, new Quat(1, 0, 0.2, 0));
  const se2B = SE2Pose.flatten(b);
  assert.ok(se2B instanceof SE2Pose);
  assert.strictEqual(se2B.x, 1);
  assert.strictEqual(se2B.y, 2);
  assert.strictEqual(se2B.angle, 0);

  // Test that flattening always gives us an angle between [-pi, pi]
  const rand = seedrandom(2345);
  for (let i = 0; i < 100; i++) {
    // Generate a random quaternion (normalizing a 4D Gaussian)
    const w = rand();
    const x = rand();
    const y = rand();
    const z = rand();
    const mag = Math.sqrt(w ** 2 + x ** 2 + y ** 2 + z ** 2);
    const se3B = new SE3Pose(0, 0, 0, new Quat(w / mag, x / mag, y / mag, z / mag));
    const se2BFlatten = SE2Pose.flatten(se3B);
    assert.ok(se2BFlatten.angle <= Math.PI);
    assert.ok(se2BFlatten.angle >= -Math.PI);
  }

  // Test converting se3pose --> se2pose
  const c = new SE3Pose(1, 2, 0, new Quat(0.1, 0.3, 0.2, 0.2));
  const se2C = c.getClosestSe2Transform();
  assert.ok(se2C instanceof SE2Pose);
  assert.strictEqual(se2C.x, 1);
  assert.strictEqual(se2C.y, 2);
  assert.ok(Math.abs(se2C.angle - 2.214297435588181) < 1e-5);

  // Test creating an se3pose using from_se2() with no z height
  const se3D = SE3Pose.fromSe2(new SE2Pose(1, 2, 0.5));
  assert.ok(se3D instanceof SE3Pose);
  assert.strictEqual(se3D.x, 1);
  assert.strictEqual(se3D.y, 2);
  assert.strictEqual(se3D.z, 0);
  assert.ok(Math.abs(se3D.rot.w - 0.968912) < 1e-5);
  assert.strictEqual(se3D.rot.x, 0);
  assert.strictEqual(se3D.rot.y, 0);
  assert.ok(Math.abs(se3D.rot.z - 0.2474) < 1e-5);

  // Test creating an se3pose using from_se2() with z height
  const se3E = SE3Pose.fromSe2(new SE2Pose(1, 2, 0.5), 2);
  assert.ok(se3E instanceof SE3Pose);
  assert.strictEqual(se3E.x, 1);
  assert.strictEqual(se3E.y, 2);
  assert.strictEqual(se3E.z, 2);
  assert.ok(Math.abs(se3E.rot.w - 0.968912) < 1e-5);
  assert.strictEqual(se3E.rot.x, 0);
  assert.strictEqual(se3E.rot.y, 0);
  assert.ok(Math.abs(se3E.rot.z - 0.2474) < 1e-5);
});

test('test_create_se3_pose', () => {
  // Test creating an SE3Pose from a proto with from_obj()
  const protoSe3 = new geometryPb.SE3Pose()
    .setPosition(new geometryPb.Vec3().setX(1).setY(2).setZ(3))
    .setRotation(new geometryPb.Quaternion().setW(0.1).setX(0.2).setY(0.2).setZ(0.1));
  const se3 = SE3Pose.fromProto(protoSe3);
  assert.ok(se3 instanceof SE3Pose);
  assert.strictEqual(se3.x, protoSe3.getPosition().getX());
  assert.strictEqual(se3.y, protoSe3.getPosition().getY());
  assert.strictEqual(se3.z, protoSe3.getPosition().getZ());
  assert.strictEqual(se3.rot.w, protoSe3.getRotation().getW());
  assert.strictEqual(se3.rot.x, protoSe3.getRotation().getX());
  assert.strictEqual(se3.rot.y, protoSe3.getRotation().getY());
  assert.strictEqual(se3.rot.z, protoSe3.getRotation().getZ());

  // Test proto-like attribute access properties
  const pos = se3.position;
  assert.ok(pos instanceof geometryPb.Vec3);
  assert.strictEqual(pos.getX(), protoSe3.getPosition().getX());
  assert.strictEqual(pos.getY(), protoSe3.getPosition().getY());
  assert.strictEqual(pos.getZ(), protoSe3.getPosition().getZ());
  const quat = se3.rotation;
  assert.ok(quat instanceof Quat);
  assert.strictEqual(quat.w, protoSe3.getRotation().getW());
  assert.strictEqual(quat.x, protoSe3.getRotation().getX());
  assert.strictEqual(quat.y, protoSe3.getRotation().getY());
  assert.strictEqual(quat.z, protoSe3.getRotation().getZ());

  // Test going back to a proto message with toProto()
  const newProtoSe3 = se3.toProto();
  assert.ok(newProtoSe3 instanceof geometryPb.SE3Pose);
  assert.strictEqual(newProtoSe3.getPosition().getX(), protoSe3.getPosition().getX());
  assert.strictEqual(newProtoSe3.getPosition().getY(), protoSe3.getPosition().getY());
  assert.strictEqual(newProtoSe3.getPosition().getZ(), protoSe3.getPosition().getZ());
  assert.strictEqual(newProtoSe3.getRotation().getW(), protoSe3.getRotation().getW());
  assert.strictEqual(newProtoSe3.getRotation().getX(), protoSe3.getRotation().getX());
  assert.strictEqual(newProtoSe3.getRotation().getY(), protoSe3.getRotation().getY());
  assert.strictEqual(newProtoSe3.getRotation().getZ(), protoSe3.getRotation().getZ());

  // Test mutating an existing proto message to_obj()
  const protoMutSe3 = new geometryPb.SE3Pose();
  se3.toObj(protoMutSe3);
  assert.strictEqual(se3.x, protoMutSe3.getPosition().getX());
  assert.strictEqual(se3.y, protoMutSe3.getPosition().getY());
  assert.strictEqual(se3.z, protoMutSe3.getPosition().getZ());
  assert.strictEqual(se3.rot.w, protoMutSe3.getRotation().getW());
  assert.strictEqual(se3.rot.x, protoMutSe3.getRotation().getX());
  assert.strictEqual(se3.rot.y, protoMutSe3.getRotation().getY());
  assert.strictEqual(se3.rot.z, protoMutSe3.getRotation().getZ());

  // Test identity SE3Pose
  const identity = SE3Pose.fromIdentity();
  assert.strictEqual(identity.x, 0);
  assert.strictEqual(identity.y, 0);
  assert.strictEqual(identity.z, 0);
  assert.strictEqual(identity.rot.w, 1);
  assert.strictEqual(identity.rot.x, 0);
  assert.strictEqual(identity.rot.y, 0);
  assert.strictEqual(identity.rot.z, 0);
});

test('test_se3_times_se3', () => {
  // All zeros.
  let a = new SE3Pose(0, 0, 0, new Quat(1, 0, 0, 0));
  let b = new SE3Pose(0, 0, 0, new Quat(1, 0, 0, 0));
  let c = a.mult(b);
  compareMathHelpersSe3(c, new SE3Pose(0, 0, 0, new Quat(1, 0, 0, 0)));

  // (x+1 X yaw+90) -> x+1,yaw+90
  a = new SE3Pose(1, 0, 0, new Quat(1, 0, 0, 0));
  b = new SE3Pose(0, 0, 0, new Quat(Math.sqrt(2.0) / 2.0, 0, 0, Math.sqrt(2.0) / 2.0));
  c = a.mult(b);
  compareMathHelpersSe3(c, new SE3Pose(1, 0, 0, new Quat(Math.sqrt(2.0) / 2.0, 0, 0, Math.sqrt(2.0) / 2.0)));

  // (yaw+90 X x+1) -> y+1,yaw+90
  a = new SE3Pose(0, 0, 0, new Quat(Math.sqrt(2.0) / 2.0, 0, 0, Math.sqrt(2.0) / 2.0));
  b = new SE3Pose(1, 0, 0, new Quat(1, 0, 0, 0));
  c = a.mult(b);
  compareMathHelpersSe3(c, new SE3Pose(0, 1, 0, new Quat(Math.sqrt(2.0) / 2.0, 0, 0, Math.sqrt(2.0) / 2.0)));
});

test('test_se3_inverse', () => {
  // Identity/all-zeros
  const a = new SE3Pose(0, 0, 0, new Quat(1, 0, 0, 0));
  const invA = a.inverse();
  compareMathHelpersSe3(invA, new SE3Pose(0, 0, 0, new Quat(1, 0, 0, 0)));

  // Translation only
  const b = new SE3Pose(1, 0, 0, new Quat(1, 0, 0, 0));
  const invB = b.inverse();
  compareMathHelpersSe3(invB, new SE3Pose(-1, 0, 0, new Quat(1, 0, 0, 0)));

  // Rotation only
  const c = new SE3Pose(0, 0, 0, new Quat(Math.sqrt(2.0) / 2.0, 0, 0, Math.sqrt(2.0) / 2.0));
  const invC = c.inverse();
  compareMathHelpersSe3(invC, new SE3Pose(0, 0, 0, new Quat(Math.sqrt(2.0) / 2.0, 0, 0, -Math.sqrt(2.0) / 2.0)));

  // Translation and rotation
  const d = new SE3Pose(1, 0, 0, new Quat(Math.sqrt(2.0) / 2.0, 0, 0, Math.sqrt(2.0) / 2.0));
  const invD = d.inverse();
  compareMathHelpersSe3(invD, new SE3Pose(0, 1, 0, new Quat(Math.sqrt(2.0) / 2.0, 0, 0, -Math.sqrt(2.0) / 2.0)));
});

test('test_matrices_se3', () => {
  // Test making skew matrix
  // No translation se2 --> rotation matrix
  const a = new SE3Pose(0, 0, 0, new Quat(1, 0, 0, 0));
  const skewA = skewMatrix3d(a.position);
  assert.deepStrictEqual(skewA.shape, [3, 3]);
  assert.deepEqual(skewA.tolist(), numjs.zeros([3, 3]).tolist());

  // Translation se2 --> skew matrix
  const b = new SE3Pose(1, 2, 3, new Quat(1, 0, 0, 0));
  const skewB = skewMatrix3d(b.position);
  assert.deepStrictEqual(skewB.shape, [3, 3]);
  assert.deepEqual(
    skewB.tolist(),
    numjs
      .array([
        [0, -3, 2],
        [3, 0, -1],
        [-2, 1, 0],
      ])
      .tolist(),
  );

  // Test making adjoint matrices
  // All zeros --> adjoint
  const c = new SE3Pose(0, 0, 0, new Quat(1, 0, 0, 0));
  const adjointC = c.toAdjointMatrix();
  assert.deepStrictEqual(adjointC.shape, [6, 6]);
  assert.deepEqual(adjointC.tolist(), numjs.identity(6).tolist());

  // No rotation se2 --> adjoint
  const d = new SE3Pose(1, 2, 3, new Quat(1, 0, 0, 0));
  const adjointD = d.toAdjointMatrix();
  assert.deepStrictEqual(adjointD.shape, [6, 6]);
  assert.deepEqual(
    adjointD.tolist(),
    numjs
      .array([
        [1, 0, 0, 0, -3, 2],
        [0, 1, 0, 3, 0, -1],
        [0, 0, 1, -2, 1, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1],
      ])
      .tolist(),
  );

  // No translation se2 --> adjoint
  const e = new SE3Pose(0, 0, 0, new Quat(0.1, 0.2, 0.3, 0.4));
  const adjointE = e.toAdjointMatrix();
  assert.deepStrictEqual(adjointE.shape, [6, 6]);
  assert.deepEqual(
    adjointE.tolist(),
    numjs
      .array([
        [0.5, 0.03999999999999998, 0.22000000000000003, 0, 0, 0],
        [0.2, 0.5999999999999999, 0.19999999999999998, 0, 0, 0],
        [0.10000000000000003, 0.28, 0.74, 0, 0, 0],
        [0, 0, 0, 0.5, 0.03999999999999998, 0.22000000000000003],
        [0, 0, 0, 0.2, 0.5999999999999999, 0.19999999999999998],
        [0, 0, 0, 0.10000000000000003, 0.28, 0.74],
      ])
      .tolist(),
  );

  // Both translation and rotation se2 --> adjoint
  const f = new SE3Pose(1, 2, 3, new Quat(0.1, 0.2, 0.3, 0.4));
  const adjointF = f.toAdjointMatrix();
  assert.deepStrictEqual(adjointF.shape, [6, 6]);
  assert.deepEqual(
    adjointF.tolist(),
    numjs
      .array([
        [0.5, 0.03999999999999998, 0.22000000000000003, -0.4, -1.2399999999999995, 0.88],
        [0.2, 0.5999999999999999, 0.19999999999999998, 1.4, -0.1600000000000001, -0.07999999999999985],
        [0.10000000000000003, 0.28, 0.74, -0.8, 0.5199999999999999, -0.24000000000000007],
        [0, 0, 0, 0.5, 0.03999999999999998, 0.22000000000000003],
        [0, 0, 0, 0.2, 0.5999999999999999, 0.19999999999999998],
        [0, 0, 0, 0.10000000000000003, 0.28, 0.74],
      ])
      .tolist(),
  );
});

test('test_create_se2_vel', () => {
  // Test creating an SE2Velocity from a proto with from_obj()
  const protoSe2 = new geometryPb.SE2Velocity().setLinear(new geometryPb.Vec2().setX(1).setY(2)).setAngular(0.2);
  const se2 = SE2Velocity.fromProto(protoSe2);
  assert.ok(se2 instanceof SE2Velocity);
  assert.strictEqual(se2.linearVelocityX, protoSe2.getLinear().getX());
  assert.strictEqual(se2.linearVelocityY, protoSe2.getLinear().getY());
  assert.strictEqual(se2.angularVelocity, protoSe2.getAngular());

  // Test proto-like attribute access properties
  const lin = se2.linear;
  assert.ok(lin instanceof geometryPb.Vec2);
  assert.strictEqual(lin.getX(), protoSe2.getLinear().getX());
  assert.strictEqual(lin.getY(), protoSe2.getLinear().getY());
  const ang = se2.angular;
  assert.strictEqual(ang, protoSe2.getAngular());

  // Test going back to a proto message with toProto()
  const newProtoSe2 = se2.toProto();
  assert.ok(newProtoSe2 instanceof geometryPb.SE2Velocity);
  assert.strictEqual(newProtoSe2.getLinear().getX(), protoSe2.getLinear().getX());
  assert.strictEqual(newProtoSe2.getLinear().getY(), protoSe2.getLinear().getY());
  assert.strictEqual(newProtoSe2.getAngular(), protoSe2.getAngular());

  // Test mutating an existing proto message to_obj()
  const protoMutSe2 = new geometryPb.SE2Velocity();
  se2.toObj(protoMutSe2);
  assert.strictEqual(se2.linearVelocityX, protoMutSe2.getLinear().getX());
  assert.strictEqual(se2.linearVelocityY, protoMutSe2.getLinear().getY());
  assert.strictEqual(se2.angularVelocity, protoMutSe2.getAngular());

  // Test creating the velocity vector
  const vec = se2.toVector();
  assert.ok(vec instanceof numjs.NdArray);
  assert.strictEqual(vec.get(0, 0), protoSe2.getLinear().getX());
  assert.strictEqual(vec.get(1, 0), protoSe2.getLinear().getY());
  assert.strictEqual(vec.get(2, 0), protoSe2.getAngular());

  // Test creating the SE2Velocity from a array
  const velArr = numjs.array([1, 2, 3]).reshape([3, 1]);
  const se2Vector = SE2Velocity.fromVector(velArr);
  assert.ok(se2Vector instanceof SE2Velocity);
  assert.strictEqual(se2Vector.linearVelocityX, 1);
  assert.strictEqual(se2Vector.linearVelocityY, 2);
  assert.strictEqual(se2Vector.angularVelocity, 3);

  // Test creating the SE2Velocity from a list
  const velList = [1, 2, 3];
  const se2FromList = SE2Velocity.fromVector(velList);
  assert.ok(se2FromList instanceof SE2Velocity);
  assert.strictEqual(se2FromList.linearVelocityX, 1);
  assert.strictEqual(se2FromList.linearVelocityY, 2);
  assert.strictEqual(se2FromList.angularVelocity, 3);
});

test('test_create_se3_vel', () => {
  // Test creating an SE3Velocity from a proto with from_obj()
  const protoSe3 = new geometryPb.SE3Velocity()
    .setLinear(new geometryPb.Vec3().setX(1).setY(2).setZ(3))
    .setAngular(new geometryPb.Vec3().setX(1).setY(2).setZ(3));
  const se3 = SE3Velocity.fromProto(protoSe3);
  assert.ok(se3 instanceof SE3Velocity);
  assert.strictEqual(se3.linearVelocityX, protoSe3.getLinear().getX());
  assert.strictEqual(se3.linearVelocityY, protoSe3.getLinear().getY());
  assert.strictEqual(se3.linearVelocityZ, protoSe3.getLinear().getZ());
  assert.strictEqual(se3.angularVelocityX, protoSe3.getAngular().getX());
  assert.strictEqual(se3.angularVelocityY, protoSe3.getAngular().getY());
  assert.strictEqual(se3.angularVelocityZ, protoSe3.getAngular().getZ());

  // Test proto-like attribute access properties
  const lin = se3.linear;
  assert.ok(lin instanceof geometryPb.Vec3);
  assert.strictEqual(lin.getX(), protoSe3.getLinear().getX());
  assert.strictEqual(lin.getY(), protoSe3.getLinear().getY());
  assert.strictEqual(lin.getZ(), protoSe3.getLinear().getZ());
  const ang = se3.angular;
  assert.ok(ang instanceof geometryPb.Vec3);
  assert.strictEqual(ang.getX(), protoSe3.getAngular().getX());
  assert.strictEqual(ang.getY(), protoSe3.getAngular().getY());
  assert.strictEqual(ang.getZ(), protoSe3.getAngular().getZ());

  // Test going back to a proto message with toProto()
  const newProtoSe3 = se3.toProto();
  assert.ok(newProtoSe3 instanceof geometryPb.SE3Velocity);
  assert.strictEqual(newProtoSe3.getLinear().getX(), protoSe3.getLinear().getX());
  assert.strictEqual(newProtoSe3.getLinear().getY(), protoSe3.getLinear().getY());
  assert.strictEqual(newProtoSe3.getLinear().getZ(), protoSe3.getLinear().getZ());
  assert.strictEqual(newProtoSe3.getAngular().getX(), protoSe3.getAngular().getX());
  assert.strictEqual(newProtoSe3.getAngular().getY(), protoSe3.getAngular().getY());
  assert.strictEqual(newProtoSe3.getAngular().getZ(), protoSe3.getAngular().getZ());

  // Test mutating an existing proto message to_obj()
  const protoMutSe3 = new geometryPb.SE3Velocity();
  se3.toObj(protoMutSe3);
  assert.ok(protoMutSe3 instanceof geometryPb.SE3Velocity);
  assert.strictEqual(protoMutSe3.getLinear().getX(), protoSe3.getLinear().getX());
  assert.strictEqual(protoMutSe3.getLinear().getY(), protoSe3.getLinear().getY());
  assert.strictEqual(protoMutSe3.getLinear().getZ(), protoSe3.getLinear().getZ());
  assert.strictEqual(protoMutSe3.getAngular().getX(), protoSe3.getAngular().getX());
  assert.strictEqual(protoMutSe3.getAngular().getY(), protoSe3.getAngular().getY());
  assert.strictEqual(protoMutSe3.getAngular().getZ(), protoSe3.getAngular().getZ());

  // Test creating the velocity vector
  const vec = se3.toVector();
  assert.ok(vec instanceof numjs.NdArray);
  assert.strictEqual(vec.get(0, 0), protoSe3.getLinear().getX());
  assert.strictEqual(vec.get(1, 0), protoSe3.getLinear().getY());
  assert.strictEqual(vec.get(2, 0), protoSe3.getLinear().getZ());
  assert.strictEqual(vec.get(3, 0), protoSe3.getAngular().getX());
  assert.strictEqual(vec.get(4, 0), protoSe3.getAngular().getY());
  assert.strictEqual(vec.get(5, 0), protoSe3.getAngular().getZ());

  // Test creating the SE3Velocity from a numjs array
  const velArr = numjs.array([1, 2, 3, 4, 5, 6]).reshape([6, 1]);
  const se3FromVector = SE3Velocity.fromVector(velArr);
  assert.ok(se3FromVector instanceof SE3Velocity);
  assert.strictEqual(se3FromVector.linearVelocityX, 1);
  assert.strictEqual(se3FromVector.linearVelocityY, 2);
  assert.strictEqual(se3FromVector.linearVelocityZ, 3);
  assert.strictEqual(se3FromVector.angularVelocityX, 4);
  assert.strictEqual(se3FromVector.angularVelocityY, 5);
  assert.strictEqual(se3FromVector.angularVelocityZ, 6);

  // Test creating the SE2Velocity from an array
  const velList = [1, 2, 3, 4, 5, 6];
  const se3FromArray = SE3Velocity.fromVector(velList);
  assert.ok(se3FromArray instanceof SE3Velocity);
  assert.strictEqual(se3FromArray.linearVelocityX, 1);
  assert.strictEqual(se3FromArray.linearVelocityY, 2);
  assert.strictEqual(se3FromArray.linearVelocityZ, 3);
  assert.strictEqual(se3FromArray.angularVelocityX, 4);
  assert.strictEqual(se3FromArray.angularVelocityY, 5);
  assert.strictEqual(se3FromArray.angularVelocityZ, 6);
});

test('test_transform_velocity', () => {
  // Note this test assumes the adjoint matrix test passes.
  // Identity SE(2)
  const a = new SE2Pose(0, 0, 0);
  const velA = new SE2Velocity(1, 2, 0.2);
  const adjointA = a.toAdjointMatrix();
  const transformedA = transformSe2velocity(adjointA, velA);
  compareSe2Velocity(velA, transformedA);

  // Identity SE(3)
  const b = new SE3Pose(0, 0, 0, new Quat(1, 0, 0, 0));
  const velB = new SE3Velocity(1, 2, 3, 0.1, 0.2, 0.3);
  const adjointB = b.toAdjointMatrix();
  const transformedB = transformSe3velocity(adjointB, velB);
  compareSe3Velocity(velB, transformedB);

  // Full SE(2) transformation
  const c = new SE2Pose(2, 3, Math.PI);
  const velC = new SE2Velocity(1, 1, 2);
  const adjointC = c.toAdjointMatrix();
  const transformedC = transformSe2velocity(adjointC, velC);
  compareSe2Velocity(transformedC, new SE2Velocity(5, -5, 2));

  // Full SE(3) transformations
  const d = new SE3Pose(1, 2, 1, new Quat(0.707, 0.707, 0, 0));
  const velD = new SE3Velocity(1, 2, 3, 1, 2, 3);
  const adjointD = d.toAdjointMatrix();
  const transformedD = transformSe3velocity(adjointD, velD);
  compareSe3Velocity(
    transformedD,
    new SE3Velocity(
      1 + 1.99909 * 2 + 1.0003 * 3,
      2 * 0.000302 + 5 * -0.999698 + 1 + 3 * -0.000302,
      -0.999698 + 5 * 0.000302 + -2,
      1,
      0.000302 * 2 - 0.999698 * 3,
      0.999698 * 2 + 0.000302 * 3,
    ),
    1e-4,
  );
});

test('test_closest_yaw_only', () => {
  const rand = seedrandom(2345);
  for (let i = 0; i <= 50; i++) {
    const v1 = new Vec3(rand(), rand(), rand());
    const v2 = new Vec3(rand(), rand(), rand());

    const Q = Quat.fromTwoVectors(v1, v2);

    const nZ = Q.closestYawOnlyQuaternion().mult(new Vec3(0, 0, 1));

    assert.ok(Math.abs(nZ.x - 0) < 1e-10);
    assert.ok(Math.abs(nZ.y - 0) < 1e-10);
    assert.ok(Math.abs(nZ.z - 1) < 1e-10);

    // Find the rotation that rotates Q into closest_yaw_only_quaternion().
    // We expect this to have no z component.
    let quatErr = Q.closestYawOnlyQuaternion().mult(Q.conj());
    if (quatErr.w < 0) {
      // Forces the quaternion into the hemisphere with the scalar >= 0
      quatErr = quatErr.inverse();
    }
    const [errAngle, errAxis] = quatErr.toAxisAngle();
    assert.ok(Math.abs(errAngle * errAxis[2]) < 1e-10);
  }
});

test('test_quat_to_euler', () => {
  // Converted quat_0 should result in the yaw, pitch, roll shown in euler_zyx_0
  const quat0 = new Quat(1, 0, 0, 0);
  const eulerZyx0 = [0, 0, 0];
  const euler_Zyx0 = quatToEulerZYX(quat0);
  assert.deepEqual(eulerZyx0, euler_Zyx0);

  // Converted quat_1 should result in the yaw, pitch, roll shown in euler_zyx_1
  const quat1 = new Quat(0, 1, 0, 0);
  const eulerZyx1 = [0, 0, 180];
  const euler_Zyx1 = quatToEulerZYX(quat1).map(e => e * (180 / Math.PI));
  assert.deepEqual(eulerZyx1, euler_Zyx1);

  // Converted quat_2 should result in the yaw, pitch, roll shown in euler_zyx_2
  const quat2 = new Quat(0, 0, 1, 0);
  const eulerZyx2 = [180, 0, 180];
  const euler_Zyx2 = quatToEulerZYX(quat2).map(e => e * (180 / Math.PI));
  assert.deepEqual(eulerZyx2, euler_Zyx2);

  // Converted quat_3 should result in the yaw, pitch, roll shown in euler_zyx_3
  const quat3 = new Quat(0, 0, 0, 1);
  const eulerZyx3 = [180, 0, 0];
  const euler_Zyx3 = quatToEulerZYX(quat3).map(e => e * (180 / Math.PI));
  assert.deepEqual(eulerZyx3, euler_Zyx3);

  // Converted quat_4 should result in the yaw, pitch, roll shown in euler_zyx_4
  const quat4 = new Quat(0.183, 0.365, 0.548, 0.73);
  const eulerZyx4 = [134.9686404, -19.4120353, 81.9012582];
  const euler_Zyx4 = quatToEulerZYX(quat4).map(e => e * (180 / Math.PI));
  for (let i = 0; i < 3; i++) {
    assert.ok(Math.abs(eulerZyx4[i] - euler_Zyx4[i]) < 0.1);
  }

  // Including or excluding the roll should not affect yaw or pitch
  const quat5 = new Quat(0.8098232, 0.069881, 0.4989135, 0.3006466);
  const eulerZyx5 = quatToEulerZYX(quat5).map(e => e.toFixed(3));
  const quat6 = new Quat(0.7848856, -0.2113091, 0.3659982, 0.4531539);
  const eulerZyx6 = quatToEulerZYX(quat6).map(e => e.toFixed(3));
  assert.strictEqual(eulerZyx5[0], eulerZyx6[0]);
  assert.strictEqual(eulerZyx5[1], eulerZyx6[1]);
});

test('test_vec2', () => {
  const aProto = new geometryPb.Vec2().setX(1).setY(2);
  const bProto = new geometryPb.Vec2().setX(-3).setY(6);

  // Test fromProto()
  const a = Vec2.fromProto(aProto);
  const b = Vec2.fromProto(bProto);

  // Test addition operand
  let result = a.add(b);
  assert.strictEqual(result.x, -2);
  assert.strictEqual(result.y, 8);

  // Test subtraction operand
  result = a.substract(b);
  assert.strictEqual(result.x, 4);
  assert.strictEqual(result.y, -4);

  // Test mult operand
  result = a.multiply(3);
  assert.strictEqual(result.x, 3);
  assert.strictEqual(result.y, 6);

  // Test division operand
  result = a.divide(0.5).add(b);
  assert.strictEqual(result.x, -1);
  assert.strictEqual(result.y, 10);

  // Test negative operand
  result = b.negative();
  assert.strictEqual(result.x, 3);
  assert.strictEqual(result.y, -6);

  // Test rmult
  result = b.multiply(-2);
  assert.strictEqual(result.x, 6);
  assert.strictEqual(result.y, -12);

  // Test toProto()
  const aProto2 = a.toProto();
  assert.strictEqual(aProto2.getX(), aProto.getX());
  assert.strictEqual(aProto2.getY(), aProto.getY());

  // Test .length()
  assert.strictEqual(a.length, Math.sqrt(5));

  // Test .dot()
  assert.strictEqual(a.dot(b), 9);

  // Test .cross()
  assert.strictEqual(a.cross(b), 12);
  assert.strictEqual(b.cross(a), -12);
});

test('test_vec3', () => {
  const aProto = new geometryPb.Vec3().setX(1).setY(2).setZ(3);
  const bProto = new geometryPb.Vec3().setX(-3).setY(6).setZ(-9);

  // Test fromProto()
  const a = Vec3.fromProto(aProto);
  const b = Vec3.fromProto(bProto);

  // Test addition operand
  let result = a.add(b);
  assert.strictEqual(result.x, -2);
  assert.strictEqual(result.y, 8);
  assert.strictEqual(result.z, -6);

  // Test subtraction operand
  result = a.substract(b);
  assert.strictEqual(result.x, 4);
  assert.strictEqual(result.y, -4);
  assert.strictEqual(result.z, 12);

  // Test mult operand
  result = a.multiply(3);
  assert.strictEqual(result.x, 3);
  assert.strictEqual(result.y, 6);
  assert.strictEqual(result.z, 9);

  // Test division operand
  result = a.divide(0.5).add(b);
  assert.strictEqual(result.x, -1);
  assert.strictEqual(result.y, 10);
  assert.strictEqual(result.z, -3);

  // Test negative operand
  result = b.negative();
  assert.strictEqual(result.x, 3);
  assert.strictEqual(result.y, -6);
  assert.strictEqual(result.z, 9);

  // Test rmult
  result = b.multiply(-2);
  assert.strictEqual(result.x, 6);
  assert.strictEqual(result.y, -12);
  assert.strictEqual(result.z, 18);

  // Test toProto()
  const aProto2 = a.toProto();
  assert.strictEqual(aProto2.getX(), aProto.getX());
  assert.strictEqual(aProto2.getY(), aProto.getY());
  assert.strictEqual(aProto2.getZ(), aProto.getZ());

  // Test .length()
  assert.strictEqual(a.length, Math.sqrt(14));

  // Test .dot()
  assert.strictEqual(a.dot(b), -18);

  // Test .cross()
  assert.strictEqual(a.cross(b).x, -36);
  assert.strictEqual(a.cross(b).y, 0);
  assert.strictEqual(a.cross(b).z, 12);
  assert.strictEqual(b.cross(a).x, 36);
  assert.strictEqual(b.cross(a).y, 0);
  assert.strictEqual(b.cross(a).z, -12);
});

test('test_vec3_cross', () => {
  let a = new Vec3(1, 0, 0);
  let b = new Vec3(1, 0, 0);
  assert.strictEqual(a.cross(b).x, 0);
  assert.strictEqual(a.cross(b).y, 0);
  assert.strictEqual(a.cross(b).z, 0);

  b = new Vec3(0, 1, 0);
  assert.strictEqual(a.cross(b).x, 0);
  assert.strictEqual(a.cross(b).y, 0);
  assert.strictEqual(a.cross(b).z, 1);

  b = new Vec3(0, 0, 1);
  assert.strictEqual(a.cross(b).x, 0);
  assert.strictEqual(a.cross(b).y, -1);
  assert.strictEqual(a.cross(b).z, 0);

  a = new Vec3(0, 1, 0);
  b = new Vec3(1, 0, 0);
  assert.strictEqual(a.cross(b).x, 0);
  assert.strictEqual(a.cross(b).y, 0);
  assert.strictEqual(a.cross(b).z, -1);

  b = new Vec3(0, 1, 0);
  assert.strictEqual(a.cross(b).x, 0);
  assert.strictEqual(a.cross(b).y, 0);
  assert.strictEqual(a.cross(b).z, 0);

  b = new Vec3(0, 0, 1);
  assert.strictEqual(a.cross(b).x, 1);
  assert.strictEqual(a.cross(b).y, 0);
  assert.strictEqual(a.cross(b).z, 0);

  a = new Vec3(0, 0, 1);
  b = new Vec3(1, 0, 0);
  assert.strictEqual(a.cross(b).x, 0);
  assert.strictEqual(a.cross(b).y, 1);
  assert.strictEqual(a.cross(b).z, 0);

  b = new Vec3(0, 1, 0);
  assert.strictEqual(a.cross(b).x, -1);
  assert.strictEqual(a.cross(b).y, 0);
  assert.strictEqual(a.cross(b).z, 0);

  b = new Vec3(0, 0, 1);
  assert.strictEqual(a.cross(b).x, 0);
  assert.strictEqual(a.cross(b).y, 0);
  assert.strictEqual(a.cross(b).z, 0);
});

test('test_se2_to_and_from_matrix', () => {
  // Test that going to and from a matrix doesn't change anything
  [
    [3, 7, 1.047198],
    [5, 5, -1.047198],
  ].forEach(([x, y, angle]) => {
    const se2 = new SE2Pose(x, y, angle);
    const newSe2 = SE2Pose.fromMatrix(se2.toMatrix());
    assert.ok(Math.abs(newSe2.x - x) < EPSILON);
    assert.ok(Math.abs(newSe2.y - y) < EPSILON);
    assert.ok(angleDiff(newSe2.angle, angle) < EPSILON);
  });
});

test('test_se2_angle_stuff', () => {
  const rand = seedrandom(1234);
  for (let i = 0; i < 100; i++) {
    // Generate SE2Pose with potentially large positive or negative angles
    const angle1 = generateRandomValues(-Math.PI, Math.PI);
    const angle2 = generateRandomValues(-Math.PI, Math.PI);
    const x1 = generateRandomValues(-2, 2);
    const y1 = generateRandomValues(-2, 2);
    const x2 = generateRandomValues(-2, 2);
    const y2 = generateRandomValues(-2, 2);
    const p1 = generateRandomValues(-20, 20, true) * 2 * Math.PI;
    const p2 = generateRandomValues(-20, 20, true) * 2 * Math.PI;

    // Check that we get 0 when we multiply a pose with its inverse
    const shouldBeIdentity = new SE2Pose(x1, y1, angle1).mult(new SE2Pose(x1, y1, angle1 + p1).inverse());
    assert.ok(Math.abs(shouldBeIdentity.angle) < EPSILON);
    assert.ok(Math.abs(shouldBeIdentity.x) < EPSILON);
    assert.ok(Math.abs(shouldBeIdentity.y) < EPSILON);

    // Check that we don't get a giant angle when multiplying poses together
    const newPose = new SE2Pose(x1, y1, angle1 + p1).mult(new SE2Pose(x2, y2, angle2 + p2));
    assert.ok(newPose.angle <= Math.PI);
    assert.ok(newPose.angle >= -Math.PI);
    assert.ok(Math.abs(newPose.angle - recenterAngleMod(angle1 + angle2, 0.0)) < EPSILON);
  }

  /**
   * Generate random value between min and max according to seed
   * @param {number} min The minimum value
   * @param {number} max The maximum value
   * @param {boolean} int Tell whether result should be int or float
   * @returns {number}
   */
  function generateRandomValues(min, max, int = false) {
    const randomNumber = rand() * (max - min) + min;
    return int ? randomNumber | 0 : randomNumber;
  }
});

test('test_se2_vec2_mult', () => {
  [
    [3, 7, 0.785398],
    [5, 5, -0.785398],
  ].forEach(([x, y, angle]) => {
    const vecProto = new geometryPb.Vec2().setX(Math.sqrt(2)).setY(Math.sqrt(2));
    const vec = Vec2.fromProto(vecProto);
    const se2Proto = new geometryPb.SE2Pose().setPosition(new geometryPb.Vec2().setX(3).setY(5)).setAngle(angle);
    const se2 = SE2Pose.fromProto(se2Proto);
    const result = se2.mult(vec);
    assert.ok(Math.abs(result.x - x) < EPSILON);
    assert.ok(Math.abs(result.y - y) < EPSILON);
    assert.ok(result instanceof Vec2);
  });
});

test('test_se3_vec3_mult', () => {
  const vecProto = new geometryPb.Vec3().setX(Math.sqrt(3)).setY(Math.sqrt(3)).setZ(Math.sqrt(3));
  const vec = Vec3.fromProto(vecProto);

  const root2o2 = Math.sqrt(2) / 2;
  const se3Proto = new geometryPb.SE3Pose()
    .setPosition(new geometryPb.Vec3().setX(1).setY(2).setZ(3))
    .setRotation(new geometryPb.Quaternion().setW(0).setX(root2o2).setY(0).setZ(-root2o2));
  const se3 = SE3Pose.fromProto(se3Proto);
  const result = se3.mult(vec);
  assert.ok(Math.abs(result.x - -0.7320508) < EPSILON);
  assert.ok(Math.abs(result.y - 0.2679491) < EPSILON);
  assert.ok(Math.abs(result.z - 1.2679491) < EPSILON);
  assert.ok(result instanceof Vec3);
});
