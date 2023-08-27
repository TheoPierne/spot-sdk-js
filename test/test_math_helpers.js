'use strict';

const assert = require('node:assert');
const test = require('node:test');

const numjs = require('numjs');
const seedrandom = require('seedrandom');

const geometry_pb = require('../bosdyn/api/geometry_pb');
const {
  SE2Pose,
  SE3Pose,
  SE2Velocity,
  SE3Velocity,
  Quat,
  Vec2,
  Vec3,
  transform_se2velocity,
  transform_se3velocity,
  skew_matrix_3d,
  skew_matrix_2d,
  quat_to_eulerZYX,
  angle_diff,
  recenter_angle_mod,
} = require('../bosdyn-client/math_helpers');

const EPSILON = 0.0001;

function compare_math_helpers_se2(calculated_se2, expected_se2) {
  assert.ok(Math.abs(calculated_se2.x - expected_se2.x) < 1e-5);
  assert.ok(Math.abs(calculated_se2.y - expected_se2.y) < 1e-5);
  assert.ok(Math.abs(calculated_se2.angle - expected_se2.angle) < 1e-5);
}

function compare_math_helpers_se3(calculated_se3, expected_se3) {
  assert.ok(Math.abs(calculated_se3.x - expected_se3.x) < 1e-5);
  assert.ok(Math.abs(calculated_se3.y - expected_se3.y) < 1e-5);
  assert.ok(Math.abs(calculated_se3.z - expected_se3.z) < 1e-5);
  assert.ok(Math.abs(calculated_se3.rot.w - expected_se3.rot.w) < 1e-5);
  assert.ok(Math.abs(calculated_se3.rot.x - expected_se3.rot.x) < 1e-5);
  assert.ok(Math.abs(calculated_se3.rot.y - expected_se3.rot.y) < 1e-5);
  assert.ok(Math.abs(calculated_se3.rot.z - expected_se3.rot.z) < 1e-5);
}

function compare_se2_velocity(expected_vel, calculated_vel) {
  assert.ok(Math.abs(expected_vel.linear_velocity_x - calculated_vel.linear_velocity_x) < 1e-6);
  assert.ok(Math.abs(expected_vel.linear_velocity_y - calculated_vel.linear_velocity_y) < 1e-6);
  assert.ok(Math.abs(expected_vel.angular_velocity - calculated_vel.angular_velocity) < 1e-6);
}

function compare_se3_velocity(expected_vel, calculated_vel, threshold = 1e-6) {
  assert.ok(Math.abs(expected_vel.linear_velocity_x - calculated_vel.linear_velocity_x) < threshold);
  assert.ok(Math.abs(expected_vel.linear_velocity_y - calculated_vel.linear_velocity_y) < threshold);
  assert.ok(Math.abs(expected_vel.linear_velocity_z - calculated_vel.linear_velocity_z) < threshold);
  assert.ok(Math.abs(expected_vel.angular_velocity_x - calculated_vel.angular_velocity_x) < threshold);
  assert.ok(Math.abs(expected_vel.angular_velocity_y - calculated_vel.angular_velocity_y) < threshold);
  assert.ok(Math.abs(expected_vel.angular_velocity_z - calculated_vel.angular_velocity_z) < threshold);
}

test('test_create_se2_pose', () => {
  // Test creating an SE2Pose from a proto with from_obj()
  const proto_se2 = new geometry_pb.SE2Pose().setPosition(new geometry_pb.Vec2().setX(1).setY(2)).setAngle(0.2);
  const se2 = SE2Pose.from_proto(proto_se2);
  assert.ok(se2 instanceof SE2Pose);
  assert.strictEqual(se2.x, proto_se2.getPosition().getX());
  assert.strictEqual(se2.y, proto_se2.getPosition().getY());
  assert.strictEqual(se2.angle, proto_se2.getAngle());

  // Test proto-like attribute access properties
  const pos = se2.position;
  assert.ok(pos instanceof geometry_pb.Vec2);
  assert.strictEqual(pos.getX(), proto_se2.getPosition().getX());
  assert.strictEqual(pos.getY(), proto_se2.getPosition().getY());

  // Test going back to a proto message with to_proto()
  const new_proto_se2 = se2.to_proto();
  assert.ok(new_proto_se2 instanceof geometry_pb.SE2Pose);
  assert.strictEqual(new_proto_se2.getPosition().getX(), proto_se2.getPosition().getX());
  assert.strictEqual(new_proto_se2.getPosition().getY(), proto_se2.getPosition().getY());
  assert.strictEqual(new_proto_se2.getAngle(), proto_se2.getAngle());

  // Test mutating an existing proto message to_obj()
  const proto_mut_se2 = new geometry_pb.SE2Pose();
  se2.to_obj(proto_mut_se2);
  assert.strictEqual(se2.x, proto_mut_se2.getPosition().getX());
  assert.strictEqual(se2.y, proto_mut_se2.getPosition().getY());
  assert.strictEqual(se2.angle, proto_mut_se2.getAngle());
});

test('test_se2_times_se2', () => {
  // Multiply all-zeros
  let a = new SE2Pose(0, 0, 0);
  let b = new SE2Pose(0, 0, 0);
  let c = a.mult(b);
  compare_math_helpers_se2(c, new SE2Pose(0, 0, 0));

  // A: No translation, only rotation. B: translation and rotation
  a = new SE2Pose(0, 0, 0.2);
  b = new SE2Pose(1, 2, 1);
  c = a.mult(b);
  compare_math_helpers_se2(
    c,
    new SE2Pose(1 * Math.cos(0.2) + 2 * -Math.sin(0.2), 1 * Math.sin(0.2) + 2 * Math.cos(0.2), 1.2),
  );

  // A: No rotation, only translation. B: translation and rotation
  a = new SE2Pose(5, 3.3, 0);
  b = new SE2Pose(1, 2, 1);
  c = a.mult(b);
  compare_math_helpers_se2(c, new SE2Pose(6, 5.3, 1));

  // A: No rotation, only translation. B: No rotation, only translation.
  a = new SE2Pose(5.2, 3.3, 0);
  b = new SE2Pose(1.3, 2, 0);
  c = a.mult(b);
  compare_math_helpers_se2(c, new SE2Pose(6.5, 5.3, 0));

  // A: Rotation and translation. B: Only rotation, no translation.
  a = new SE2Pose(5.2, 3.3, 0.2);
  b = new SE2Pose(0, 0, 0.3);
  c = a.mult(b);
  compare_math_helpers_se2(c, new SE2Pose(5.2, 3.3, 0.5));

  // Both have rotation and translation
  a = new SE2Pose(5.2, 3.3, 0.2);
  b = new SE2Pose(1.2, 2, 0.3);
  c = a.mult(b);
  compare_math_helpers_se2(
    c,
    new SE2Pose(5.2 + 1.2 * Math.cos(0.2) + 2 * -Math.sin(0.2), 3.3 + 1.2 * Math.sin(0.2) + 2 * Math.cos(0.2), 0.5),
  );
});

test('test_inverse_se2', () => {
  // Identity/all-zeros
  const a = new SE2Pose(0, 0, 0);
  const inv_a = a.inverse();
  compare_math_helpers_se2(inv_a, new SE2Pose(0, 0, 0));

  // Rotation only
  const b = new SE2Pose(0, 0, 1);
  const inv_b = b.inverse();
  compare_math_helpers_se2(inv_b, new SE2Pose(0, 0, -1));

  // Translation only
  const c = new SE2Pose(1, 2, 0);
  const inv_c = c.inverse();
  compare_math_helpers_se2(inv_c, new SE2Pose(-1, -2, 0));

  // Translation and rotation
  const d = new SE2Pose(1, 2, 1);
  const inv_d = d.inverse();
  compare_math_helpers_se2(
    inv_d,
    new SE2Pose(-1 * Math.cos(1) - 2 * Math.sin(1), 1 * Math.sin(1) - 2 * Math.cos(1), -1),
  );
});

test('test_matrices_se2', () => {
  // Test making rotation matrix
  // No rotation se2 --> rotation matrix
  const a = new SE2Pose(0, 0, 0);
  const rot_a = a.to_rot_matrix();
  assert.deepEqual(rot_a.tolist(), [
    [1, 0],
    [0, 1],
  ]);

  // Rotation se2 --> rotation matrix
  const b = new SE2Pose(1, 2, 0.5);
  const rot_b = b.to_rot_matrix();
  assert.deepStrictEqual(rot_b.shape, [2, 2]);
  assert.deepEqual(
    rot_b.tolist(),
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
  const skew_d = skew_matrix_2d(d.position);
  assert.deepStrictEqual(skew_d.shape, [1, 2]);
  assert.deepEqual(skew_d.tolist(), numjs.array([[d.y, -d.x]]).tolist());

  // Translation se2 --> skew matrix
  const e = new SE2Pose(1, 2, 0.1);
  const skew_e = skew_matrix_2d(e.position);
  assert.deepStrictEqual(skew_e.shape, [1, 2]);
  assert.deepEqual(skew_e.tolist(), numjs.array([[e.y, -e.x]]).tolist());

  // Test making adjoint matrices
  // All zeros --> adjoint
  const c = new SE2Pose(0, 0, 0);
  const adjoint_c = c.to_adjoint_matrix();
  assert.deepStrictEqual(adjoint_c.shape, [3, 3]);
  assert.deepEqual(
    adjoint_c.tolist(),
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
  const adjoint_f = f.to_adjoint_matrix();
  assert.deepStrictEqual(adjoint_f.shape, [3, 3]);
  assert.deepEqual(
    adjoint_f.tolist(),
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
  const adjoint_g = g.to_adjoint_matrix();
  assert.deepStrictEqual(adjoint_g.shape, [3, 3]);
  assert.deepEqual(
    adjoint_g.tolist(),
    numjs
      .array([
        [Math.cos(f.angle), -Math.sin(f.angle), f.y],
        [Math.sin(f.angle), Math.cos(f.angle), -f.x],
        [0, 0, 1],
      ])
      .tolist(),
  );

  // Both translation and rotation se2 --> adjoint
  const h = new SE2Pose(2, 5, 0.2);
  const adjoint_h = h.to_adjoint_matrix();
  assert.deepStrictEqual(adjoint_h.shape, [3, 3]);
  assert.deepEqual(
    adjoint_h.tolist(),
    numjs.array([
      [Math.cos(f.angle), -Math.sin(f.angle), f.y],
      [Math.sin(f.angle), Math.cos(f.angle), -f.x],
      [0, 0, 1],
    ]),
  );
});

test('test_se2_conversions_se3_pose', () => {
  // Test converting se2pose --> se3pose with no height input
  const a = new SE2Pose(1, 2, 0.5);
  const se3_a = a.get_closest_se3_transform();
  assert.ok(se3_a instanceof SE3Pose);
  assert.strictEqual(a.x, se3_a.x);
  assert.strictEqual(a.y, se3_a.y);
  assert.strictEqual(se3_a.z, 0);
  assert.ok(Math.abs(se3_a.rot.w - 0.968912) < 1e-5);
  assert.strictEqual(se3_a.rot.x, 0);
  assert.strictEqual(se3_a.rot.y, 0);
  assert.ok(Math.abs(se3_a.rot.z - 0.2474) < 1e-5);

  // Test converting se2pose --> se3pose with height input
  const se3_a_with_height = a.get_closest_se3_transform(5);
  assert.ok(se3_a_with_height instanceof SE3Pose);
  assert.strictEqual(a.x, se3_a_with_height.x);
  assert.strictEqual(a.y, se3_a_with_height.y);
  assert.strictEqual(se3_a_with_height.z, 5);
  assert.ok(Math.abs(se3_a_with_height.rot.w - 0.968912) < 1e-5);
  assert.strictEqual(se3_a_with_height.rot.x, 0);
  assert.strictEqual(se3_a_with_height.rot.y, 0);
  assert.ok(Math.abs(se3_a_with_height.rot.z - 0.2474) < 1e-5);

  // Test flattening an se3pose to se2pose
  const b = new SE3Pose(1, 2, 3, new Quat(1, 0, 0.2, 0));
  const se2_b = SE2Pose.flatten(b);
  assert.ok(se2_b instanceof SE2Pose);
  assert.strictEqual(se2_b.x, 1);
  assert.strictEqual(se2_b.y, 2);
  assert.strictEqual(se2_b.angle, 0);

  // Test that flattening always gives us an angle between [-pi, pi]
  const rand = seedrandom(2345);
  for (let i = 0; i < 100; i++) {
    // Generate a random quaternion (normalizing a 4D Gaussian)
    const w = rand();
    const x = rand();
    const y = rand();
    const z = rand();
    const mag = Math.sqrt(w ** 2 + x ** 2 + y ** 2 + z ** 2);
    const se3_b = new SE3Pose(0, 0, 0, new Quat(w / mag, x / mag, y / mag, z / mag));
    const se2_b_flatten = SE2Pose.flatten(se3_b);
    assert.ok(se2_b_flatten.angle <= Math.PI);
    assert.ok(se2_b_flatten.angle >= -Math.PI);
  }

  // Test converting se3pose --> se2pose
  const c = new SE3Pose(1, 2, 0, new Quat(0.1, 0.3, 0.2, 0.2));
  const se2_c = c.get_closest_se2_transform();
  assert.ok(se2_c instanceof SE2Pose);
  assert.strictEqual(se2_c.x, 1);
  assert.strictEqual(se2_c.y, 2);
  assert.ok(Math.abs(se2_c.angle - 2.214297435588181) < 1e-5);

  // Test creating an se3pose using from_se2() with no z height
  const se3_d = SE3Pose.from_se2(new SE2Pose(1, 2, 0.5));
  assert.ok(se3_d instanceof SE3Pose);
  assert.strictEqual(se3_d.x, 1);
  assert.strictEqual(se3_d.y, 2);
  assert.strictEqual(se3_d.z, 0);
  assert.ok(Math.abs(se3_d.rot.w - 0.968912) < 1e-5);
  assert.strictEqual(se3_d.rot.x, 0);
  assert.strictEqual(se3_d.rot.y, 0);
  assert.ok(Math.abs(se3_d.rot.z - 0.2474) < 1e-5);

  // Test creating an se3pose using from_se2() with z height
  const se3_e = SE3Pose.from_se2(new SE2Pose(1, 2, 0.5), 2);
  assert.ok(se3_e instanceof SE3Pose);
  assert.strictEqual(se3_e.x, 1);
  assert.strictEqual(se3_e.y, 2);
  assert.strictEqual(se3_e.z, 2);
  assert.ok(Math.abs(se3_e.rot.w - 0.968912) < 1e-5);
  assert.strictEqual(se3_e.rot.x, 0);
  assert.strictEqual(se3_e.rot.y, 0);
  assert.ok(Math.abs(se3_e.rot.z - 0.2474) < 1e-5);
});

test('test_create_se3_pose', () => {
  // Test creating an SE3Pose from a proto with from_obj()
  const proto_se3 = new geometry_pb.SE3Pose()
    // eslint-disable-next-line newline-per-chained-call
    .setPosition(new geometry_pb.Vec3().setX(1).setY(2).setZ(3))
    // eslint-disable-next-line newline-per-chained-call
    .setRotation(new geometry_pb.Quaternion().setW(0.1).setX(0.2).setY(0.2).setZ(0.1));
  const se3 = SE3Pose.from_proto(proto_se3);
  assert.ok(se3 instanceof SE3Pose);
  assert.strictEqual(se3.x, proto_se3.getPosition().getX());
  assert.strictEqual(se3.y, proto_se3.getPosition().getY());
  assert.strictEqual(se3.z, proto_se3.getPosition().getZ());
  assert.strictEqual(se3.rot.w, proto_se3.getRotation().getW());
  assert.strictEqual(se3.rot.x, proto_se3.getRotation().getX());
  assert.strictEqual(se3.rot.y, proto_se3.getRotation().getY());
  assert.strictEqual(se3.rot.z, proto_se3.getRotation().getZ());

  // Test proto-like attribute access properties
  const pos = se3.position;
  assert.ok(pos instanceof geometry_pb.Vec3);
  assert.strictEqual(pos.getX(), proto_se3.getPosition().getX());
  assert.strictEqual(pos.getY(), proto_se3.getPosition().getY());
  assert.strictEqual(pos.getZ(), proto_se3.getPosition().getZ());
  const quat = se3.rotation;
  assert.ok(quat instanceof Quat);
  assert.strictEqual(quat.w, proto_se3.getRotation().getW());
  assert.strictEqual(quat.x, proto_se3.getRotation().getX());
  assert.strictEqual(quat.y, proto_se3.getRotation().getY());
  assert.strictEqual(quat.z, proto_se3.getRotation().getZ());

  // Test going back to a proto message with to_proto()
  const new_proto_se3 = se3.to_proto();
  assert.ok(new_proto_se3 instanceof geometry_pb.SE3Pose);
  assert.strictEqual(new_proto_se3.getPosition().getX(), proto_se3.getPosition().getX());
  assert.strictEqual(new_proto_se3.getPosition().getY(), proto_se3.getPosition().getY());
  assert.strictEqual(new_proto_se3.getPosition().getZ(), proto_se3.getPosition().getZ());
  assert.strictEqual(new_proto_se3.getRotation().getW(), proto_se3.getRotation().getW());
  assert.strictEqual(new_proto_se3.getRotation().getX(), proto_se3.getRotation().getX());
  assert.strictEqual(new_proto_se3.getRotation().getY(), proto_se3.getRotation().getY());
  assert.strictEqual(new_proto_se3.getRotation().getZ(), proto_se3.getRotation().getZ());

  // Test mutating an existing proto message to_obj()
  const proto_mut_se3 = new geometry_pb.SE3Pose();
  se3.to_obj(proto_mut_se3);
  assert.strictEqual(se3.x, proto_mut_se3.getPosition().getX());
  assert.strictEqual(se3.y, proto_mut_se3.getPosition().getY());
  assert.strictEqual(se3.z, proto_mut_se3.getPosition().getZ());
  assert.strictEqual(se3.rot.w, proto_mut_se3.getRotation().getW());
  assert.strictEqual(se3.rot.x, proto_mut_se3.getRotation().getX());
  assert.strictEqual(se3.rot.y, proto_mut_se3.getRotation().getY());
  assert.strictEqual(se3.rot.z, proto_mut_se3.getRotation().getZ());

  // Test identity SE3Pose
  const identity = SE3Pose.from_identity();
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
  compare_math_helpers_se3(c, new SE3Pose(0, 0, 0, new Quat(1, 0, 0, 0)));

  // (x+1 X yaw+90) -> x+1,yaw+90
  a = new SE3Pose(1, 0, 0, new Quat(1, 0, 0, 0));
  b = new SE3Pose(0, 0, 0, new Quat(Math.sqrt(2.0) / 2.0, 0, 0, Math.sqrt(2.0) / 2.0));
  c = a.mult(b);
  compare_math_helpers_se3(c, new SE3Pose(1, 0, 0, new Quat(Math.sqrt(2.0) / 2.0, 0, 0, Math.sqrt(2.0) / 2.0)));

  // (yaw+90 X x+1) -> y+1,yaw+90
  a = new SE3Pose(0, 0, 0, new Quat(Math.sqrt(2.0) / 2.0, 0, 0, Math.sqrt(2.0) / 2.0));
  b = new SE3Pose(1, 0, 0, new Quat(1, 0, 0, 0));
  c = a.mult(b);
  compare_math_helpers_se3(c, new SE3Pose(0, 1, 0, new Quat(Math.sqrt(2.0) / 2.0, 0, 0, Math.sqrt(2.0) / 2.0)));
});

test('test_se3_inverse', () => {
  // Identity/all-zeros
  const a = new SE3Pose(0, 0, 0, new Quat(1, 0, 0, 0));
  const inv_a = a.inverse();
  compare_math_helpers_se3(inv_a, new SE3Pose(0, 0, 0, new Quat(1, 0, 0, 0)));

  // Translation only
  const b = new SE3Pose(1, 0, 0, new Quat(1, 0, 0, 0));
  const inv_b = b.inverse();
  compare_math_helpers_se3(inv_b, new SE3Pose(-1, 0, 0, new Quat(1, 0, 0, 0)));

  // Rotation only
  const c = new SE3Pose(0, 0, 0, new Quat(Math.sqrt(2.0) / 2.0, 0, 0, Math.sqrt(2.0) / 2.0));
  const inv_c = c.inverse();
  compare_math_helpers_se3(inv_c, new SE3Pose(0, 0, 0, new Quat(Math.sqrt(2.0) / 2.0, 0, 0, -Math.sqrt(2.0) / 2.0)));

  // Translation and rotation
  const d = new SE3Pose(1, 0, 0, new Quat(Math.sqrt(2.0) / 2.0, 0, 0, Math.sqrt(2.0) / 2.0));
  const inv_d = d.inverse();
  compare_math_helpers_se3(inv_d, new SE3Pose(0, 1, 0, new Quat(Math.sqrt(2.0) / 2.0, 0, 0, -Math.sqrt(2.0) / 2.0)));
});

test('test_matrices_se3', () => {
  // Test making skew matrix
  // No translation se2 --> rotation matrix
  const a = new SE3Pose(0, 0, 0, new Quat(1, 0, 0, 0));
  const skew_a = skew_matrix_3d(a.position);
  assert.deepStrictEqual(skew_a.shape, [3, 3]);
  assert.deepEqual(skew_a.tolist(), numjs.zeros([3, 3]).tolist());

  // Translation se2 --> skew matrix
  const b = new SE3Pose(1, 2, 3, new Quat(1, 0, 0, 0));
  const skew_b = skew_matrix_3d(b.position);
  assert.deepStrictEqual(skew_b.shape, [3, 3]);
  assert.deepEqual(
    skew_b.tolist(),
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
  const adjoint_c = c.to_adjoint_matrix();
  assert.deepStrictEqual(adjoint_c.shape, [6, 6]);
  assert.deepEqual(adjoint_c.tolist(), numjs.identity(6).tolist());

  // No rotation se2 --> adjoint
  const d = new SE3Pose(1, 2, 3, new Quat(1, 0, 0, 0));
  const adjoint_d = d.to_adjoint_matrix();
  assert.deepStrictEqual(adjoint_d.shape, [6, 6]);
  assert.deepEqual(
    adjoint_d.tolist(),
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
  const adjoint_e = e.to_adjoint_matrix();
  assert.deepStrictEqual(adjoint_e.shape, [6, 6]);
  assert.deepEqual(
    adjoint_e.tolist(),
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
  const adjoint_f = f.to_adjoint_matrix();
  assert.deepStrictEqual(adjoint_f.shape, [6, 6]);
  assert.deepEqual(
    adjoint_f.tolist(),
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
  const proto_se2 = new geometry_pb.SE2Velocity().setLinear(new geometry_pb.Vec2().setX(1).setY(2)).setAngular(0.2);
  const se2 = SE2Velocity.from_proto(proto_se2);
  assert.ok(se2 instanceof SE2Velocity);
  assert.strictEqual(se2.linear_velocity_x, proto_se2.getLinear().getX());
  assert.strictEqual(se2.linear_velocity_y, proto_se2.getLinear().getY());
  assert.strictEqual(se2.angular_velocity, proto_se2.getAngular());

  // Test proto-like attribute access properties
  const lin = se2.linear;
  assert.ok(lin instanceof geometry_pb.Vec2);
  assert.strictEqual(lin.getX(), proto_se2.getLinear().getX());
  assert.strictEqual(lin.getY(), proto_se2.getLinear().getY());
  const ang = se2.angular;
  assert.strictEqual(ang, proto_se2.getAngular());

  // Test going back to a proto message with to_proto()
  const new_proto_se2 = se2.to_proto();
  assert.ok(new_proto_se2 instanceof geometry_pb.SE2Velocity);
  assert.strictEqual(new_proto_se2.getLinear().getX(), proto_se2.getLinear().getX());
  assert.strictEqual(new_proto_se2.getLinear().getY(), proto_se2.getLinear().getY());
  assert.strictEqual(new_proto_se2.getAngular(), proto_se2.getAngular());

  // Test mutating an existing proto message to_obj()
  const proto_mut_se2 = new geometry_pb.SE2Velocity();
  se2.to_obj(proto_mut_se2);
  assert.strictEqual(se2.linear_velocity_x, proto_mut_se2.getLinear().getX());
  assert.strictEqual(se2.linear_velocity_y, proto_mut_se2.getLinear().getY());
  assert.strictEqual(se2.angular_velocity, proto_mut_se2.getAngular());

  // Test creating the velocity vector
  const vec = se2.to_vector();
  assert.ok(vec instanceof numjs.NdArray);
  assert.strictEqual(vec.get(0, 0), proto_se2.getLinear().getX());
  assert.strictEqual(vec.get(1, 0), proto_se2.getLinear().getY());
  assert.strictEqual(vec.get(2, 0), proto_se2.getAngular());

  // Test creating the SE2Velocity from a array
  const vel_arr = numjs.array([1, 2, 3]).reshape([3, 1]);
  const se2_vector = SE2Velocity.from_vector(vel_arr);
  assert.ok(se2_vector instanceof SE2Velocity);
  assert.strictEqual(se2_vector.linear_velocity_x, 1);
  assert.strictEqual(se2_vector.linear_velocity_y, 2);
  assert.strictEqual(se2_vector.angular_velocity, 3);

  // Test creating the SE2Velocity from a list
  const vel_list = [1, 2, 3];
  const se2_from_list = SE2Velocity.from_vector(vel_list);
  assert.ok(se2_from_list instanceof SE2Velocity);
  assert.strictEqual(se2_from_list.linear_velocity_x, 1);
  assert.strictEqual(se2_from_list.linear_velocity_y, 2);
  assert.strictEqual(se2_from_list.angular_velocity, 3);
});

test('test_create_se3_vel', () => {
  // Test creating an SE3Velocity from a proto with from_obj()
  const proto_se3 = new geometry_pb.SE3Velocity()
    // eslint-disable-next-line newline-per-chained-call
    .setLinear(new geometry_pb.Vec3().setX(1).setY(2).setZ(3))
    // eslint-disable-next-line newline-per-chained-call
    .setAngular(new geometry_pb.Vec3().setX(1).setY(2).setZ(3));
  const se3 = SE3Velocity.from_proto(proto_se3);
  assert.ok(se3 instanceof SE3Velocity);
  assert.strictEqual(se3.linear_velocity_x, proto_se3.getLinear().getX());
  assert.strictEqual(se3.linear_velocity_y, proto_se3.getLinear().getY());
  assert.strictEqual(se3.linear_velocity_z, proto_se3.getLinear().getZ());
  assert.strictEqual(se3.angular_velocity_x, proto_se3.getAngular().getX());
  assert.strictEqual(se3.angular_velocity_y, proto_se3.getAngular().getY());
  assert.strictEqual(se3.angular_velocity_z, proto_se3.getAngular().getZ());

  // Test proto-like attribute access properties
  const lin = se3.linear;
  assert.ok(lin instanceof geometry_pb.Vec3);
  assert.strictEqual(lin.getX(), proto_se3.getLinear().getX());
  assert.strictEqual(lin.getY(), proto_se3.getLinear().getY());
  assert.strictEqual(lin.getZ(), proto_se3.getLinear().getZ());
  const ang = se3.angular;
  assert.ok(ang instanceof geometry_pb.Vec3);
  assert.strictEqual(ang.getX(), proto_se3.getAngular().getX());
  assert.strictEqual(ang.getY(), proto_se3.getAngular().getY());
  assert.strictEqual(ang.getZ(), proto_se3.getAngular().getZ());

  // Test going back to a proto message with to_proto()
  const new_proto_se3 = se3.to_proto();
  assert.ok(new_proto_se3 instanceof geometry_pb.SE3Velocity);
  assert.strictEqual(new_proto_se3.getLinear().getX(), proto_se3.getLinear().getX());
  assert.strictEqual(new_proto_se3.getLinear().getY(), proto_se3.getLinear().getY());
  assert.strictEqual(new_proto_se3.getLinear().getZ(), proto_se3.getLinear().getZ());
  assert.strictEqual(new_proto_se3.getAngular().getX(), proto_se3.getAngular().getX());
  assert.strictEqual(new_proto_se3.getAngular().getY(), proto_se3.getAngular().getY());
  assert.strictEqual(new_proto_se3.getAngular().getZ(), proto_se3.getAngular().getZ());

  // Test mutating an existing proto message to_obj()
  const proto_mut_se3 = new geometry_pb.SE3Velocity();
  se3.to_obj(proto_mut_se3);
  assert.ok(proto_mut_se3 instanceof geometry_pb.SE3Velocity);
  assert.strictEqual(proto_mut_se3.getLinear().getX(), proto_se3.getLinear().getX());
  assert.strictEqual(proto_mut_se3.getLinear().getY(), proto_se3.getLinear().getY());
  assert.strictEqual(proto_mut_se3.getLinear().getZ(), proto_se3.getLinear().getZ());
  assert.strictEqual(proto_mut_se3.getAngular().getX(), proto_se3.getAngular().getX());
  assert.strictEqual(proto_mut_se3.getAngular().getY(), proto_se3.getAngular().getY());
  assert.strictEqual(proto_mut_se3.getAngular().getZ(), proto_se3.getAngular().getZ());

  // Test creating the velocity vector
  const vec = se3.to_vector();
  assert.ok(vec instanceof numjs.NdArray);
  assert.strictEqual(vec.get(0, 0), proto_se3.getLinear().getX());
  assert.strictEqual(vec.get(1, 0), proto_se3.getLinear().getY());
  assert.strictEqual(vec.get(2, 0), proto_se3.getLinear().getZ());
  assert.strictEqual(vec.get(3, 0), proto_se3.getAngular().getX());
  assert.strictEqual(vec.get(4, 0), proto_se3.getAngular().getY());
  assert.strictEqual(vec.get(5, 0), proto_se3.getAngular().getZ());

  // Test creating the SE3Velocity from a numjs array
  const vel_arr = numjs.array([1, 2, 3, 4, 5, 6]).reshape([6, 1]);
  const se3_from_vector = SE3Velocity.from_vector(vel_arr);
  assert.ok(se3_from_vector instanceof SE3Velocity);
  assert.strictEqual(se3_from_vector.linear_velocity_x, 1);
  assert.strictEqual(se3_from_vector.linear_velocity_y, 2);
  assert.strictEqual(se3_from_vector.linear_velocity_z, 3);
  assert.strictEqual(se3_from_vector.angular_velocity_x, 4);
  assert.strictEqual(se3_from_vector.angular_velocity_y, 5);
  assert.strictEqual(se3_from_vector.angular_velocity_z, 6);

  // Test creating the SE2Velocity from an array
  const vel_list = [1, 2, 3, 4, 5, 6];
  const se3_from_array = SE3Velocity.from_vector(vel_list);
  assert.ok(se3_from_array instanceof SE3Velocity);
  assert.strictEqual(se3_from_array.linear_velocity_x, 1);
  assert.strictEqual(se3_from_array.linear_velocity_y, 2);
  assert.strictEqual(se3_from_array.linear_velocity_z, 3);
  assert.strictEqual(se3_from_array.angular_velocity_x, 4);
  assert.strictEqual(se3_from_array.angular_velocity_y, 5);
  assert.strictEqual(se3_from_array.angular_velocity_z, 6);
});

test('test_transform_velocity', () => {
  // Note this test assumes the adjoint matrix test passes.
  // Identity SE(2)
  const a = new SE2Pose(0, 0, 0);
  const vel_a = new SE2Velocity(1, 2, 0.2);
  const adjoint_a = a.to_adjoint_matrix();
  const transformed_a = transform_se2velocity(adjoint_a, vel_a);
  compare_se2_velocity(vel_a, transformed_a);

  // Identity SE(3)
  const b = new SE3Pose(0, 0, 0, new Quat(1, 0, 0, 0));
  const vel_b = new SE3Velocity(1, 2, 3, 0.1, 0.2, 0.3);
  const adjoint_b = b.to_adjoint_matrix();
  const transformed_b = transform_se3velocity(adjoint_b, vel_b);
  compare_se3_velocity(vel_b, transformed_b);

  // Full SE(2) transformation
  const c = new SE2Pose(2, 3, Math.PI);
  const vel_c = new SE2Velocity(1, 1, 2);
  const adjoint_c = c.to_adjoint_matrix();
  const transformed_c = transform_se2velocity(adjoint_c, vel_c);
  compare_se2_velocity(transformed_c, new SE2Velocity(5, -5, 2));

  // Full SE(3) transformations
  const d = new SE3Pose(1, 2, 1, new Quat(0.707, 0.707, 0, 0));
  const vel_d = new SE3Velocity(1, 2, 3, 1, 2, 3);
  const adjoint_d = d.to_adjoint_matrix();
  const transformed_d = transform_se3velocity(adjoint_d, vel_d);
  compare_se3_velocity(
    transformed_d,
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

    const Q = Quat.from_two_vectors(v1, v2);

    const n_z = Q.closest_yaw_only_quaternion().mult(new Vec3(0, 0, 1));

    assert.ok(Math.abs(n_z.x - 0) < 1e-10);
    assert.ok(Math.abs(n_z.y - 0) < 1e-10);
    assert.ok(Math.abs(n_z.z - 1) < 1e-10);

    // Find the rotation that rotates Q into closest_yaw_only_quaternion().
    // We expect this to have no z component.
    let quat_err = Q.closest_yaw_only_quaternion().mult(Q.conj());
    if (quat_err.w < 0) {
      // Forces the quaternion into the hemisphere with the scalar >= 0
      quat_err = quat_err.inverse();
    }
    const [err_angle, err_axis] = quat_err.to_axis_angle();
    assert.ok(Math.abs(err_angle * err_axis[2]) < 1e-10);
  }
});

test('test_quat_to_euler', () => {
  // Converted quat_0 should result in the yaw, pitch, roll shown in euler_zyx_0
  const quat_0 = new Quat(1, 0, 0, 0);
  const euler_zyx_0 = [0, 0, 0];
  const euler_zyx0 = quat_to_eulerZYX(quat_0);
  assert.deepEqual(euler_zyx_0, euler_zyx0);

  // Converted quat_1 should result in the yaw, pitch, roll shown in euler_zyx_1
  const quat_1 = new Quat(0, 1, 0, 0);
  const euler_zyx_1 = [0, 0, 180];
  const euler_zyx1 = quat_to_eulerZYX(quat_1).map(e => e * (180 / Math.PI));
  assert.deepEqual(euler_zyx_1, euler_zyx1);

  // Converted quat_2 should result in the yaw, pitch, roll shown in euler_zyx_2
  const quat_2 = new Quat(0, 0, 1, 0);
  const euler_zyx_2 = [180, 0, 180];
  const euler_zyx2 = quat_to_eulerZYX(quat_2).map(e => e * (180 / Math.PI));
  assert.deepEqual(euler_zyx_2, euler_zyx2);

  // Converted quat_3 should result in the yaw, pitch, roll shown in euler_zyx_3
  const quat_3 = new Quat(0, 0, 0, 1);
  const euler_zyx_3 = [180, 0, 0];
  const euler_zyx3 = quat_to_eulerZYX(quat_3).map(e => e * (180 / Math.PI));
  assert.deepEqual(euler_zyx_3, euler_zyx3);

  // Converted quat_4 should result in the yaw, pitch, roll shown in euler_zyx_4
  const quat_4 = new Quat(0.183, 0.365, 0.548, 0.73);
  const euler_zyx_4 = [134.9686404, -19.4120353, 81.9012582];
  const euler_zyx4 = quat_to_eulerZYX(quat_4).map(e => e * (180 / Math.PI));
  for (let i = 0; i < 3; i++) {
    assert.ok(Math.abs(euler_zyx_4[i] - euler_zyx4[i]) < 0.1);
  }

  // Including or excluding the roll should not affect yaw or pitch
  const quat_5 = new Quat(0.8098232, 0.069881, 0.4989135, 0.3006466);
  const euler_zyx_5 = quat_to_eulerZYX(quat_5).map(e => e.toFixed(3));
  const quat_6 = new Quat(0.7848856, -0.2113091, 0.3659982, 0.4531539);
  const euler_zyx_6 = quat_to_eulerZYX(quat_6).map(e => e.toFixed(3));
  assert.strictEqual(euler_zyx_5[0], euler_zyx_6[0]);
  assert.strictEqual(euler_zyx_5[1], euler_zyx_6[1]);
});

test('test_vec2', () => {
  const a_proto = new geometry_pb.Vec2().setX(1).setY(2);
  const b_proto = new geometry_pb.Vec2().setX(-3).setY(6);

  // Test from_proto()
  const a = Vec2.from_proto(a_proto);
  const b = Vec2.from_proto(b_proto);

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

  // Test to_proto()
  const a_proto_2 = a.to_proto();
  assert.strictEqual(a_proto_2.getX(), a_proto.getX());
  assert.strictEqual(a_proto_2.getY(), a_proto.getY());

  // Test .length()
  assert.strictEqual(a.length, Math.sqrt(5));

  // Test .dot()
  assert.strictEqual(a.dot(b), 9);

  // Test .cross()
  assert.strictEqual(a.cross(b), 12);
  assert.strictEqual(b.cross(a), -12);
});

test('test_vec3', () => {
  // eslint-disable-next-line newline-per-chained-call
  const a_proto = new geometry_pb.Vec3().setX(1).setY(2).setZ(3);
  // eslint-disable-next-line newline-per-chained-call
  const b_proto = new geometry_pb.Vec3().setX(-3).setY(6).setZ(-9);

  // Test from_proto()
  const a = Vec3.from_proto(a_proto);
  const b = Vec3.from_proto(b_proto);

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

  // Test to_proto()
  const a_proto_2 = a.to_proto();
  assert.strictEqual(a_proto_2.getX(), a_proto.getX());
  assert.strictEqual(a_proto_2.getY(), a_proto.getY());
  assert.strictEqual(a_proto_2.getZ(), a_proto.getZ());

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
    const new_se2 = SE2Pose.from_matrix(se2.to_matrix());
    assert.ok(Math.abs(new_se2.x - x) < EPSILON);
    assert.ok(Math.abs(new_se2.y - y) < EPSILON);
    assert.ok(angle_diff(new_se2.angle, angle) < EPSILON);
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
    const should_be_identity = new SE2Pose(x1, y1, angle1).mult(new SE2Pose(x1, y1, angle1 + p1).inverse());
    assert.ok(Math.abs(should_be_identity.angle) < EPSILON);
    assert.ok(Math.abs(should_be_identity.x) < EPSILON);
    assert.ok(Math.abs(should_be_identity.y) < EPSILON);

    // Check that we don't get a giant angle when multiplying poses together
    const new_pose = new SE2Pose(x1, y1, angle1 + p1).mult(new SE2Pose(x2, y2, angle2 + p2));
    assert.ok(new_pose.angle <= Math.PI);
    assert.ok(new_pose.angle >= -Math.PI);
    assert.ok(Math.abs(new_pose.angle - recenter_angle_mod(angle1 + angle2, 0.0)) < EPSILON);
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
    const vec_proto = new geometry_pb.Vec2().setX(Math.sqrt(2)).setY(Math.sqrt(2));
    const vec = Vec2.from_proto(vec_proto);
    const se2_proto = new geometry_pb.SE2Pose().setPosition(new geometry_pb.Vec2().setX(3).setY(5)).setAngle(angle);
    const se2 = SE2Pose.from_proto(se2_proto);
    const result = se2.mult(vec);
    assert.ok(Math.abs(result.x - x) < EPSILON);
    assert.ok(Math.abs(result.y - y) < EPSILON);
    assert.ok(result instanceof Vec2);
  });
});

test('test_se3_vec3_mult', () => {
  // eslint-disable-next-line newline-per-chained-call
  const vec_proto = new geometry_pb.Vec3().setX(Math.sqrt(3)).setY(Math.sqrt(3)).setZ(Math.sqrt(3));
  const vec = Vec3.from_proto(vec_proto);

  const root2o2 = Math.sqrt(2) / 2;
  const se3_proto = new geometry_pb.SE3Pose()
    // eslint-disable-next-line newline-per-chained-call
    .setPosition(new geometry_pb.Vec3().setX(1).setY(2).setZ(3))
    // eslint-disable-next-line newline-per-chained-call
    .setRotation(new geometry_pb.Quaternion().setW(0).setX(root2o2).setY(0).setZ(-root2o2));
  const se3 = SE3Pose.from_proto(se3_proto);
  const result = se3.mult(vec);
  assert.ok(Math.abs(result.x - -0.7320508) < EPSILON);
  assert.ok(Math.abs(result.y - 0.2679491) < EPSILON);
  assert.ok(Math.abs(result.z - 1.2679491) < EPSILON);
  assert.ok(result instanceof Vec3);
});
