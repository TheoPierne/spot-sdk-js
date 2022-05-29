'use strict';

const { NdArray, array, identity, dot, multiply, zeros, sqrt, arccos, cos, sin } = require('numjs');
const _ = require('underscore');

const geometry_pb = require('../bosdyn/api/geometry_pb');

class ArithmeticError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'ArithmeticError';
  }
}

function angle_diff(a1, a2) {
  let v = a1 - a2;
  while (v > Math.PI) {
    v -= 2 * Math.PI;
  }
  while (v < -Math.PI) {
    v += 2 * Math.PI;
  }
  return v;
}

function angle_diff_degrees(a1, a2) {
  let v = a1 - a2;
  while (v > 180) {
    v -= 360;
  }
  while (v < -180) {
    v += 360;
  }
  return v;
}

class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `X: ${this.x} Y: ${this.y}`;
  }

  negative() {
    return new Vec2(-this.x, -this.y);
  }

  multiply(other) {
    if (typeof other !== 'number') throw new TypeError(`Can't multiply types number and ${typeof other}.`);
    return new Vec2(this.x * other, this.y * other);
  }

  divide(other) {
    if (typeof other !== 'number') throw new TypeError(`Can't divide types number and ${typeof other}.`);
    return new Vec2(this.x / other, this.y / other);
  }

  add(other) {
    if (!(other instanceof Vec2)) throw new TypeError(`Can't add types Vec2 and ${other.constructor.name}.`);
    return new Vec2(this.x + other.x, this.y + other.y);
  }

  substract(other) {
    if (!(other instanceof Vec2)) throw new TypeError(`Can't substract types Vec2 and ${other.constructor.name}.`);
    return this.add(other.negative());
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  to_proto() {
    return new geometry_pb.Vec2().setX(this.x).setY(this.y);
  }

  dot(other) {
    if (!(other instanceof Vec2)) throw new TypeError(`Can't dot types Vec2 and ${other.constructor.name}.`);
    return this.x * other.x + this.y * other.y;
  }

  cross(other) {
    if (!(other instanceof Vec2)) throw new TypeError(`Can't cross types Vec2 and ${other.constructor.name}.`);
    return this.x * other.y - other.x * this.y;
  }

  static from_proto(proto) {
    return new Vec2(proto.getX(), proto.getY());
  }
}

class Vec3 {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  toString() {
    return `X: ${this.x} Y: ${this.y} Z: ${this.z}`;
  }

  negative() {
    return new Vec3(-this.x, -this.y, -this.z);
  }

  multiply(other) {
    if (typeof other !== 'number') throw new TypeError(`Can't multiply types number and ${typeof other}.`);
    return new Vec3(this.x * other, this.y * other, this.z * other);
  }

  divide(other) {
    if (typeof other !== 'number') throw new TypeError(`Can't divide types number and ${typeof other}.`);
    return new Vec3(this.x / other, this.y / other, this.z / other);
  }

  add(other) {
    if (!(other instanceof Vec3)) throw new TypeError(`Can't add types Vec3 and ${other.constructor.name}.`);
    return new Vec3(this.x + other.x, this.y + other.y, this.z + other.z);
  }

  substract(other) {
    if (!(other instanceof Vec3)) throw new TypeError(`Can't substract types Vec3 and ${other.constructor.name}.`);
    return this.add(other.negative());
  }

  get lenght() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  to_proto() {
    // eslint-disable-next-line
    return new geometry_pb.Vec3().setX(this.x).setY(this.y).setZ(this.z);
  }

  dot(other) {
    if (!(other instanceof Vec3)) throw new TypeError(`Can't dot types Vec3 and ${other.constructor.name}.`);
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }

  cross(other) {
    if (!(other instanceof Vec3)) throw new TypeError(`Can't cross types Vec3 and ${other.constructor.name}.`);
    return new Vec3(
      this.y * other.z - this.z * other.y,
      this.x * other.z - this.z * other.x,
      this.x * other.y - this.y * other.x,
      );
  }

  static from_proto(proto) {
    return new Vec3(proto.getX(), proto.getY(), proto.getZ());
  }
}

function radians_to_degrees(radians) {
  return radians * (180 / Math.PI);
}

class SE2Pose {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
  }

  toString() {
    return `position -- X: ${this.x} Y: ${this.y} Yaw: ${radians_to_degrees(this.angle)} deg`;
  }

  static flatten(se3pose) {
    const x = se3pose.x;
    const y = se3pose.y;
    const angle = se3pose.rot.to_yaw();
    return new SE2Pose(x, y, angle);
  }

  to_obj(proto = {}) {
    proto.position = { x: this.x, y: this.y };
    proto.angle = this.angle;
  }

  to_proto() {
    return new geometry_pb.SE2Pose().setPosition(new geometry_pb.Vec2([this.x, this.y])).setAngle(this.angle);
  }

  inverse() {
    const c = Math.cos(this.angle);
    const s = Math.sin(this.angle);
    return new SE2Pose(-this.x * c - this.y * s, this.x * s - this.y * c, -this.angle);
  }

  mult(other) {
    if (other instanceof Vec2) {
      const rotation_matrix = array(this.to_rot_matrix());
      const rotated_pos = dot(rotation_matrix.T, [other.x, other.y]);
      return new Vec2(this.x + rotated_pos.get(0), this.y + rotated_pos.get(1));
    } else if (other instanceof SE2Pose) {
      const rotation_matrix = array(this.to_rot_matrix());
      const rotated_pos = dot(rotation_matrix.T, [other.x, other.y]);
      return new SE2Pose(this.x + rotated_pos.get(0), this.y + rotated_pos.get(1), this.angle + other.angle);
    } else {
      throw new TypeError(`Can't multiply types ${this.constructor.name} and ${other.constructor.name}.`);
    }
  }

  to_rot_matrix() {
    const c = Math.cos(this.angle);
    const s = Math.sin(this.angle);
    return [
    [c, -s],
    [s, c],
    ];
  }

  to_matrix() {
    const c = Math.cos(this.angle);
    const s = Math.sin(this.angle);
    return [
    [c, -s, this.x],
    [s, c, this.y],
    [0, 0, 1],
    ];
  }

  to_adjoint_matrix() {
    const a_R_b = this.to_rot_matrix();
    const position_skew_mat = skew_matrix_2d(this.position);
    const a_adjoint_b = new NdArray(
      array([
        [a_R_b, position_skew_mat.T],
        [0, 0, 1],
        ]),
      );
    return a_adjoint_b;
  }

  get position() {
    return new geometry_pb.Vec2().setX(this.x).setY(this.y);
  }

  static from_matrix(mat) {
    const x = mat.get([0, 2]);
    const y = mat.get([1, 2]);
    const angle = Math.acos(mat.get([0, 0]));
    return new SE2Pose(x, y, angle);
  }

  static from_obj(tform) {
    return new SE2Pose(tform.position.x, tform.position.y, tform.angle);
  }

  get_closest_se3_transform(height_z = 0.0) {
    return new SE3Pose(this.x, this.y, height_z, Quat.from_yaw(this.angle));
  }
}

class SE2Velocity {
  constructor(x, y, angular) {
    this.linear_velocity_x = x;
    this.linear_velocity_y = y;
    this.angular_velocity = angular;
  }

  toString() {
    // eslint-disable-next-line
    return `Linear velocity -- X: ${this.linear_velocity_x} Y: ${this.linear_velocity_y} Angular velocity -- ${this.angular_velocity}`;
  }

  to_obj(proto) {
    proto.linear = { x: this.linear_velocity_x, y: this.linear_velocity_y };
    proto.angular = this.angular_velocity;
  }

  to_proto() {
    return new geometry_pb.SE2Velocity()
    .setLinear(new geometry_pb.Vec2().setX(this.linear_velocity_x).setY(this.linear_velocity_y))
    .setAngular(this.angular_velocity);
  }

  to_vector() {
    return array([this.linear_velocity_x, this.linear_velocity_y, this.angular_velocity]).reshape(3, 1);
  }

  static from_vector(se2_vel_vector) {
    if (Array.isArray(se2_vel_vector)) {
      if (se2_vel_vector.length !== 3) {
        // eslint-disable-next-line
        console.log(`[MATH HELPERS] Velocity list must have 3 elements. The input has the wrong dimension of: ${se2_vel_vector.length} elements`);
        return null;
      } else {
        return new SE2Velocity(se2_vel_vector[0], se2_vel_vector[1], se2_vel_vector[2]);
      }
    }
    if (se2_vel_vector instanceof NdArray) {
      if (se2_vel_vector.shape[0].length !== 3 || se2_vel_vector.shape[0] !== 3) {
        // eslint-disable-next-line
        console.log(`[MATH HELPERS] Velocity numjs array must have 3 elements. The input has the wrong dimension of: ${se2_vel_vector.shape[0]}`);
        return null;
      } else {
        return new SE2Velocity(se2_vel_vector[0], se2_vel_vector[1], se2_vel_vector[2]);
      }
    }
    return new SE2Velocity(0, 0, 0);
  }

  get linear() {
    return new geometry_pb.Vec2().setX(this.linear_velocity_x).setY(this.linear_velocity_y);
  }

  get angular() {
    return this.angular_velocity;
  }

  static from_proto(vel) {
    return new SE2Velocity(vel.linear.x, vel.linear.y, vel.angular);
  }
}

class SE3Velocity {
  constructor(lin_x, lin_y, lin_z, ang_x, ang_y, ang_z) {
    this.linear_velocity_x = lin_x;
    this.linear_velocity_y = lin_y;
    this.linear_velocity_z = lin_z;
    this.angular_velocity_x = ang_x;
    this.angular_velocity_y = ang_y;
    this.angular_velocity_z = ang_z;
  }

  toString() {
    // eslint-disable-next-line
    return `Linear velocity -- X: ${this.linear_velocity_x} Y: ${this.linear_velocity_y} Z: ${this.linear_velocity_z} Angular velocity -- X: ${this.angular_velocity_x} Y: ${this.angular_velocity_y} Z: ${this.angular_velocity_z}`;
  }

  to_obj(proto) {
    proto.linear = { x: this.linear_velocity_x, y: this.linear_velocity_y, z: this.linear_velocity_z };
    proto.angular = { x: this.angular_velocity_x, y: this.angular_velocity_y, z: this.angular_velocity_z };
  }

  to_proto() {
    return new geometry_pb.SE3Velocity()
    .setLinear(new geometry_pb.Vec3([this.linear_velocity_x, this.linear_velocity_y, this.linear_velocity_z]))
    .setAngular(new geometry_pb.Vec3([this.angular_velocity_x, this.angular_velocity_y, this.angular_velocity_z]));
  }

  to_vector() {
    return array([
      this.linear_velocity_x,
      this.linear_velocity_y,
      this.linear_velocity_z,
      this.angular_velocity_x,
      this.angular_velocity_y,
      this.angular_velocity_z,
      ]).reshape(6, 1);
  }

  get linear() {
    return new geometry_pb.Vec3().setX(this.linear_velocity_x).setY(this.linear_velocity_y).setZ(this.linear_velocity_z);
  }

  get angular() {
    return new geometry_pb.Vec3().setX(this.angular_velocity_x).setY(this.angular_velocity_y).setZ(this.angular_velocity_z);
  }

  static from_proto(vel) {
    return new SE3Velocity(vel.getLinear().getX(), vel.getLinear().getY(), vel.getLinear().getZ(), vel.getAngular().getX(), vel.getAngular().getY(), vel.getAngular().getZ());
  }

  static from_vector(se3_vel_vector) {
    if (Array.isArray(se3_vel_vector)) {
      if (se3_vel_vector.length !== 6) {
        // eslint-disable-next-line
        console.log(`[MATH HELPERS] Velocity list must have 6 elements. The input has the wrong dimension of: ${se3_vel_vector.length}`);
        return null;
      } else {
        return new SE3Velocity(
          se3_vel_vector[0],
          se3_vel_vector[1],
          se3_vel_vector[2],
          se3_vel_vector[3],
          se3_vel_vector[4],
          se3_vel_vector[5],
          );
      }
    }
    if (se3_vel_vector instanceof NdArray) {
      if (se3_vel_vector.shape[0] !== 6) {
        // eslint-disable-next-line
        console.log(`[MATH HELPERS] Velocity numjs array must have 6 elements. The input has the wrong dimension of: ${se3_vel_vector.shape[0]}`);
        return null;
      } else {
        return new SE3Velocity(
          se3_vel_vector[0],
          se3_vel_vector[1],
          se3_vel_vector[2],
          se3_vel_vector[3],
          se3_vel_vector[4],
          se3_vel_vector[5],
          );
      }
    }
    return new SE3Velocity(0, 0, 0, 0, 0, 0);
  }
}

class SE3Pose {
  constructor(x, y, z, rot) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.rot = rot instanceof geometry_pb.Quaternion ? Quat.from_proto(rot) : rot;
  }

  toString() {
    return `position -- X: ${this.x} Y: ${this.z} Z: ${this.z} rotation -- ${this.rot}`;
  }

  static from_proto(tform) {
    let quat;
    if (tform.hasRotation()) {
      quat = Quat.from_proto(tform.getRotation());
    } else {
      quat = new Quat();
    }
    return new SE3Pose(tform.getPosition().getX(), tform.getPosition().getY(), tform.getPosition().getZ(), quat);
  }

  static from_se2(tform, z = 0) {
    return new SE3Pose(tform.getX(), tform.getY(), z, Quat.from_yaw(tform.getAngle()));
  }

  to_obj(proto) {
    // eslint-disable-next-line
    proto.setPosition(new geometry_pb.Vec3().setX(this.x).setY(this.y).setZ(this.z));
    this.rot.to_obj(proto.getRotation());
  }

  to_proto() {
    /* eslint-disable */
    return new geometry_pb.SE3Pose()
    .setPosition(new geometry_pb.Vec3().setX(this.x).setY(this.y).setZ(this.z))
    .setRotation(new geometry_pb.Quaternion().setX(this.rot.x).setY(this.rot.y).setZ(this.rot.z).setW(this.rot.w));
    /* eslint-enable */
  }

  inverse() {
    const inv_rot = this.rot.inverse();
    const [x, y, z] = inv_rot.transform_point(this.x, this.y, this.z);
    return new SE3Pose(-x, -y, -z, inv_rot);
  }

  transform_point(x, y, z) {
    const [out_x, out_y, out_z] = this.rot.transform_point(x, y, z);
    return [out_x + this.x, out_y + this.y, out_z + this.z];
  }

  transform_cloud(points) {
    return SE3Pose.transform_cloud_from_matrix(this.to_matrix(), points);
  }

  static transform_cloud_from_matrix(transform, points) {
    // !!!!!!!! Code peut être faux à verifier en fonction du code python !!!!!!!!
    const rot = transform.get(0, 3);
    const trans = transform.get(3);
    return dot(points, rot.T).concat(trans);
  }

  to_matrix() {
    const ret = identity(4);
    const matrix = this.rot.to_matrix();
    // Assignation pour chaque indices de la matrice de l'object "rot";
    ret.set(0, 0, matrix.get(0, 0));
    ret.set(0, 1, matrix.get(0, 1));
    ret.set(0, 2, matrix.get(0, 2));
    ret.set(1, 0, matrix.get(1, 0));
    ret.set(1, 1, matrix.get(1, 1));
    ret.set(1, 2, matrix.get(1, 2));
    ret.set(2, 0, matrix.get(2, 0));
    ret.set(2, 1, matrix.get(2, 1));
    ret.set(2, 2, matrix.get(2, 2));
    // Assignation du "x", "y" et "z"
    ret.set(0, 3, this.x);
    ret.set(1, 3, this.y);
    ret.set(2, 3, this.z);
    return ret;
  }

  mult(other) {
    if (other instanceof Vec3) {
      const [x, y, z] = this.transform_point(other.x, other.y, other.z);
      return new Vec3(x, y, z);
    } else if (other instanceof SE3Pose){
      const [x, y, z] = this.rot.transform_point(other.x, other.y, other.z);
      return new SE3Pose(this.x + x, this.y + y, this.z + z, this.rot.mult(other.rot));
    } else {
      throw new TypeError(`Can't multiply types ${this.constructor.name} and ${other.constructor.name}.`);
    }
  }

  get position() {
    // eslint-disable-next-line
    return new geometry_pb.Vec3().setX(this.x).setY(this.y).setZ(this.z);
  }

  get rotation() {
    return this.rot;
  }

  static from_matrix(mat) {
    const [x, y, z] = mat.slice([0, 3], 3).tolist();
    const rot = Quat.from_matrix(mat.slice([0, 3], [0, 3]));
    return new SE3Pose(x, y, z, rot);
  }

  static from_identity() {
    return new SE3Pose(0, 0, 0, new Quat());
  }

  get_translation() {
    return array([this.x, this.y, this.z]);
  }

  to_adjoint_matrix() {
    const a_R_b = this.rot.to_matrix();
    const position_skew_mat = skew_matrix_3d(this.position);
    const mat = multiply(position_skew_mat, a_R_b).tolist();
    const a_adjoint_b = new NdArray(
      array([
        [a_R_b, mat],
        [zeros(3, 3), a_R_b],
        ]),
      );
    return a_adjoint_b;
  }

  get_closest_se2_transform() {
    const se2_angle = this.rot.closest_yaw_only_quaternion().to_yaw();
    return new SE2Pose(this.x, this.y, se2_angle);
  }

  static interp(a, b, fraction){
    const x = a.x * (1.0 - fraction) + b.x * fraction;
    const y = a.y * (1.0 - fraction) + b.y * fraction;
    const z = a.z * (1.0 - fraction) + b.z * fraction;
    const rot = Quat.slerp(a.rot, b.rot, fraction);
    return new SE3Pose(x, y, z, rot);
  }

}

class Quat {
  constructor(w = 1, x = 0, y = 0, z = 0) {
    this.w = w;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  toString() {
    return `W: ${this.w} X: ${this.x} Y: ${this.y} Z: ${this.z}`;
  }

  inspect() {
    return this.toString();
  }

  inverse() {
    return new Quat(this.w, -this.x, -this.y, -this.z);
  }

  transform_point(x, y, z) {
    const inv = this.inverse();
    let q = new Quat(0, x, y, z);
    q = q.mult(inv);
    q = this.mult(q);
    return [q.x, q.y, q.z];
  }

  transform_vec3(vec3){
    const [x, y, z] = this.transform_point(vec3.x, vec3.y, vec3.z);
    return new geometry_pb.Vec3().setX(x).setY(y).setZ(z);
  }

  to_matrix() {
    const ret = identity(3);
    ret.set(0, 0, 1.0 - 2.0 * this.y * this.y - 2.0 * this.z * this.z);
    ret.set(0, 1, 2.0 * this.x * this.y - 2.0 * this.z * this.w);
    ret.set(0, 2, 2.0 * this.x * this.z + 2.0 * this.y * this.w);

    ret.set(1, 0, 2.0 * this.x * this.y + 2.0 * this.z * this.w);
    ret.set(1, 1, 1.0 - 2.0 * this.x * this.x - 2.0 * this.z * this.z);
    ret.set(1, 2, 2.0 * this.y * this.z - 2.0 * this.x * this.w);

    ret.set(2, 0, 2.0 * this.x * this.z - 2.0 * this.y * this.w);
    ret.set(2, 1, 2.0 * this.y * this.z + 2.0 * this.x * this.w);
    ret.set(2, 2, 1.0 - 2.0 * this.x * this.x - 2.0 * this.y * this.y);

    return ret;
  }

  static from_matrix(rot) {
    const wt = 1 + rot.get(0, 0) + rot.get(1, 1) + rot.get(2, 2);
    if (wt > 0.1) return Quat._from_matrix_w(rot);
    const xt = 1 + rot.get(0, 0) - rot.get(1, 1) - rot.get(2, 2);
    const yt = 1 - rot.get(0, 0) + rot.get(1, 1) - rot.get(2, 2);
    const zt = 1 - rot.get(0, 0) - rot.get(1, 1) + rot.get(2, 2);
    const t = [
    [Quat._from_matrix_w, wt],
    [Quat._from_matrix_x, xt],
    [Quat._from_matrix_y, yt],
    [Quat._from_matrix_z, zt],
    ];
    const [from_matrix_coord, val] = _.max(t, e => e[1])[0];

    if (val < 1e-6) {
      throw new ArithmeticError(
        `[MATH HELPERS] Matrix cannot be converged to quaternion. 
        Are you sure this is a valid rotation matrix? \n${JSON.stringify(rot)}`,
        );
    }
    return from_matrix_coord(rot);
  }

  static _from_matrix_w(rot) {
    const w = Math.sqrt(1 + rot.get(0, 0) + rot.get(1, 1) + rot.get(2, 2)) * 0.5;
    return new Quat(
      w,
      (rot.get(2, 1) - rot.get(1, 2)) / (4.0 * w),
      (rot.get(0, 2) - rot.get(2, 0)) / (4.0 * w),
      (rot.get(1, 0) - rot.get(0, 1)) / (4.0 * w),
      );
  }

  static _from_matrix_x(rot) {
    const x = Math.sqrt(1 + rot.get(0, 0) - rot.get(1, 1) - rot.get(2, 2)) * 0.5;
    return new Quat(
      (rot.get(2, 1) - rot.get(1, 2)) / (4.0 * x),
      x,
      (rot.get(0, 1) + rot.get(1, 0)) / (4.0 * x),
      (rot.get(0, 2) + rot.get(2, 0)) / (4.0 * x),
      );
  }

  static _from_matrix_y(rot) {
    const y = Math.sqrt(1 - rot.get(0, 0) + rot.get(1, 1) - rot.get(2, 2)) * 0.5;
    return new Quat(
      (rot.get(0, 2) - rot.get(2, 0)) / (4.0 * y),
      (rot.get(0, 1) + rot.get(1, 0)) / (4.0 * y),
      y,
      (rot.get(1, 2) + rot.get(2, 1)) / (4.0 * y),
      );
  }

  static _from_matrix_z(rot) {
    const z = Math.sqrt(1 - rot.get(0, 0) - rot.get(1, 1) + rot.get(2, 2)) * 0.5;
    return new Quat(
      (rot.get(1, 0) - rot.get(0, 1)) / (4.0 * z),
      (rot.get(0, 2) + rot.get(2, 0)) / (4.0 * z),
      (rot.get(1, 2) + rot.get(2, 1)) / (4.0 * z),
      z,
      );
  }

  static from_roll(angle) {
    return new Quat(Math.cos(angle / 2.0), Math.sin(angle / 2.0));
  }

  static from_pitch(angle) {
    return new Quat(Math.cos(angle / 2.0), undefined, Math.sin(angle / 2.0));
  }

  static from_yaw(angle) {
    return new Quat(Math.cos(angle / 2.0), undefined, undefined, Math.sin(angle / 2.0));
  }

  to_roll() {
    const d = this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z;
    if (d === 0.0 || d === 0) return 0.0;
    const t0 = 2.0 * (this.w * this.x + this.y * this.z);
    const t1 = 1.0 - 2.0 * (this.x * this.x + this.y * this.y);
    return Math.atan2(t0, t1);
  }

  to_pitch() {
    const d = this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z;
    if (d === 0.0 || d === 0) return 0.0;
    let t2 = 2.0 * (this.w * this.y - this.z * this.x);
    if (t2 < -1.0) t2 = -1.0;
    if (t2 > 1.0) t2 = 1.0;
    return Math.asin(t2);
  }

  to_yaw() {
    const yaw_only_quat = this.closest_yaw_only_quaternion();
    return 2 * Math.atan2(yaw_only_quat.z, yaw_only_quat.w);
  }

  to_axis_angle() {
    const d = this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z;
    if (d === 0.0 || d === 0) return [0.0, [0, 0, 1]];
    const mag = 1.0 - this.w * this.w;
    if (mag <= 1e-3) return [0.0, [0, 0, 1]];

    const denom = Math.sqrt(mag);
    if (denom < 1e-3) return [0.0, [0, 0, 1]];

    const angle = 2.0 * Math.acos(this.w);
    const axis = [this.x / denom, this.y / denom, this.z / denom];
    return [angle, axis];
  }

  static from_proto(proto) {
    return new Quat(proto.getW(), proto.getX(), proto.getY(), proto.getZ());
  }

  to_obj(proto) {
    // eslint-disable-next-line
    proto.setW(this.w).setX(this.x).setY(this.y).setZ(this.z);
  }

  to_proto() {
    // eslint-disable-next-line
    return new geometry_pb.Quaternion().setX(this.x).setY(this.y).setZ(this.z).setW(this.w);
  }

  mult(other_quat) {
    if(other_quat instanceof Quat){
      return new Quat(
        this.w * other_quat.w - this.x * other_quat.x - this.y * other_quat.y - this.z * other_quat.z,
        this.w * other_quat.x + this.x * other_quat.w + this.y * other_quat.z - this.z * other_quat.y,
        this.w * other_quat.y - this.x * other_quat.z + this.y * other_quat.w + this.z * other_quat.x,
        this.w * other_quat.z + this.x * other_quat.y - this.y * other_quat.x + this.z * other_quat.w,
        );
    }else if(other_quat instanceof Vec3) {
      const [x, y, z] = this.transform_point(other.x, other.y, other.z);
      return new Vec3(x, y, z);
    }
  }

  normalize() {
    let q = array([this.w, this.x, this.y, this.z]);
    const len = sqrt(dot(q.transpose(), q));
    if (len < 1e-15) {
      q = [1.0, 0.0, 0.0, 0.0];
    } else {
      q /= len;
    }
    this.w = q[0];
    this.x = q[1];
    this.y = q[2];
    this.z = q[3];
    return this;
  }

  closest_yaw_only_quaternion() {
    const mag = Math.sqrt(this.w * this.w + this.z * this.z);
    if (mag > 0) {
      return new Quat(this.w / mag, 0, 0, this.z / mag);
    } else {
      return new Quat(0, 0, 1, 0);
    }
  }

  static slerp(a, b, fraction){
    let v0 = array([a.w, a.x, a.y, a.z]);
    let v1 = array([b.w, b.x, b.y, b.z]);
    let dotRes = dot(v0.T, v1);
    
    if (dotRes.get(0) < 0.0){
      v0 = v0.multiply(-1.0);
      dotRes = dotRes.negative();
    }

    const DOT_THRESHOLD = 1.0 - 1e-4;
    let result;
    if (dotRes.get(0) > DOT_THRESHOLD){      
      result = v0.add(fraction).multiply(v1.substract(v0));
      result = result.divide(sqrt(dot(result.T, result)));
    }else{
      // theta_0 = angle between input vectors
      const theta_0 = arccos(dot);
      // theta = angle between v0 and result
      const theta = theta_0.multiply(fraction);
      // compute this value only once
      const sin_theta = sin(theta);
      // compute this value only once
      const sin_theta_0 = sin(theta_0);

      const s0 = cos(theta).substract(dot.multiply(sin_theta).divide(sin_theta_0));
      const s1 = sin_theta.divide(sin_theta_0);

      result = s0.multiply(v0).add(s1.multiply(v1));
    }
    return new Quat(result.get(0), result.get(1), result.get(2), result.get(3));
  }
}

function pose_to_xyz_yaw(A_tform_B) {
  const yaw = Quat.from_proto(A_tform_B.getRotation()).to_yaw();
  const x = A_tform_B.getPosition().getX();
  const y = A_tform_B.getPosition().getY();
  const z = A_tform_B.getPosition().getZ();
  return [x, y, z, yaw];
}

function is_within_threshold(pose_3d, max_translation_meters, max_yaw_degrees) {
  const delta = SE2Pose.flatten(SE3Pose.from_obj(pose_3d));
  const dist_2d = Math.sqrt(delta.x * delta.x + delta.y * delta.y);
  const angle_deg = radians_to_degrees(Math.abs(delta.angle));
  return dist_2d < max_translation_meters && angle_deg < max_yaw_degrees;
}

function recenter_angle(q, lower_limit, upper_limit) {
  const recenter_range = upper_limit - lower_limit;
  while (q >= upper_limit) {
    q -= recenter_range;
  }
  while (q < lower_limit) {
    q += recenter_range;
  }
  return q;
}

function skew_matrix_3d(vec3_proto) {
  return array([
    [0, -vec3_proto.getZ(), vec3_proto.getY()],
    [vec3_proto.getZ(), 0, -vec3_proto.getX()],
    [-vec3_proto.getY(), vec3_proto.getX(), 0],
    ]);
}

function skew_matrix_2d(vec2_proto) {
  return array([[vec2_proto.getY(), -vec2_proto.getX()]]);
}

function transform_se2velocity(a_adjoint_b_matrix, se2_velocity_in_b) {
  let se2_velocity_in_b_vector;
  if (se2_velocity_in_b instanceof geometry_pb.SE2Velocity) {
    se2_velocity_in_b_vector = SE2Velocity.from_obj(se2_velocity_in_b).to_vector();
  } else if (se2_velocity_in_b instanceof SE2Velocity) {
    se2_velocity_in_b_vector = se2_velocity_in_b.to_vector();
  } else {
    return null;
  }
  const se2_velocity_in_a_vector = new NdArray(multiply(a_adjoint_b_matrix, se2_velocity_in_b_vector));
  const se2_velocity_in_a = SE2Velocity.from_vector(se2_velocity_in_a_vector);
  return se2_velocity_in_a;
}

function transform_se3velocity(a_adjoint_b_matrix, se3_velocity_in_b) {
  let se3_velocity_in_b_vec;
  if (se3_velocity_in_b instanceof geometry_pb.SE3Velocity) {
    se3_velocity_in_b_vec = SE3Velocity.from_obj(se3_velocity_in_b).to_vector();
  } else if (se3_velocity_in_b instanceof SE3Velocity) {
    se3_velocity_in_b_vec = se3_velocity_in_b.to_vector();
  } else {
    return null;
  }
  const se3_velocity_in_a_vec = new NdArray(multiply(a_adjoint_b_matrix, se3_velocity_in_b_vec));
  const se3_velocity_in_a = SE3Velocity.from_vector(se3_velocity_in_a_vec);
  return se3_velocity_in_a;
}

function quat_to_eulerZYX(q) {
  let pitch = Math.asin(-2 * (q.x * q.z - q.w * q.y));
  let yaw, roll;
  if (pitch > 0.9999) {
    yaw = 2 * Math.atan2(q.z, q.w);
    pitch = Math.PI / 2;
    roll = 0;
  } else if (pitch < -0.9999) {
    yaw = 2 * Math.atan2(q.z, q.w);
    pitch = -Math.PI / 2;
    roll = 0;
  } else {
    yaw = Math.atan2(2 * (q.x * q.y + q.w * q.z), q.w * q.w + q.x * q.x - q.y * q.y - q.z * q.z);
    roll = Math.atan2(2 * (q.y * q.z + q.w * q.x), q.w * q.w - q.x * q.x - q.y * q.y + q.z * q.z);
  }
  return { yaw, pitch, roll };
}

module.exports = {
  Vec2,
  Vec3,
  SE2Pose,
  SE2Velocity,
  SE3Velocity,
  SE3Pose,
  Quat,
  pose_to_xyz_yaw,
  is_within_threshold,
  recenter_angle,
  angle_diff,
  angle_diff_degrees,
  radians_to_degrees,
  skew_matrix_3d,
  skew_matrix_2d,
  transform_se2velocity,
  transform_se3velocity,
  quat_to_eulerZYX,
};
