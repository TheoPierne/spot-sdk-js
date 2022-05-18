'use strict';

const geometry_pb = require('../bosdyn/api/geometry_pb');

class EulerZXY {
  constructor(yaw = 0.0, roll = 0.0, pitch = 0.0) {
    this.yaw = yaw;
    this.roll = roll;
    this.pitch = pitch;
  }

  to_quaternion() {
    const cy = Math.cos(0.5 * this.yaw);
    const cr = Math.cos(0.5 * this.roll);
    const cp = Math.cos(0.5 * this.pitch);
    const sy = Math.sin(0.5 * this.yaw);
    const sr = Math.sin(0.5 * this.roll);
    const sp = Math.sin(0.5 * this.pitch);

    const w = cp * cr * cy - sp * sr * sy;
    const x = cp * cy * sr - sp * cr * sy;
    const y = cp * sr * sy + cr * cy * sp;
    const z = cp * cr * sy + sp * cy * sr;

    // eslint-disable-next-line
    return new geometry_pb.Quaternion().setX(x).setY(y).setZ(z).setW(w);
  }
}

function _matrix_from_quaternion(q) {
  const rot_matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  rot_matrix[0][0] = 1.0 - 2.0 * q.getY() * q.getY() - 2.0 * q.getZ() * q.getZ();
  rot_matrix[0][1] = 2.0 * q.getX() * q.getY() - 2.0 * q.getZ() * q.getW();
  rot_matrix[0][2] = 2.0 * q.getX() * q.getZ() + 2.0 * q.getY() * q.getW();
  rot_matrix[1][0] = 2.0 * q.getX() * q.getY() + 2.0 * q.getZ() * q.getW();
  rot_matrix[1][1] = 1.0 - 2.0 * q.getX() * q.getX() - 2.0 * q.getZ() * q.getZ();
  rot_matrix[1][2] = 2.0 * q.getY() * q.getZ() - 2.0 * q.getX() * q.getW();
  rot_matrix[2][0] = 2.0 * q.getX() * q.getZ() - 2.0 * q.getY() * q.getW();
  rot_matrix[2][1] = 2.0 * q.getY() * q.getZ() + 2.0 * q.getX() * q.getW();
  rot_matrix[2][2] = 1.0 - 2.0 * q.getX() * q.getX() - 2.0 * q.getY() * q.getY();
  return rot_matrix;
}

function to_euler_zxy(d) {
  if (!(d instanceof geometry_pb.Quaternion)) throw new Error('Must input object of type Quaternion');

  const m = _matrix_from_quaternion(d);
  const euler_angle = new EulerZXY();
  const sin_roll = m[2][1];
  const cos_roll = Math.sqrt(m[2][0] * m[2][0] + m[2][2] * m[2][2]);
  euler_angle.roll = Math.atan2(sin_roll, cos_roll);

  if (cos_roll < 1e-22) {
    euler_angle.yaw = Math.atan2(m[1][0], m[0][0]);
    euler_angle.pitch = 0;
  } else {
    euler_angle.yaw = Math.atan2(-m[0][1], m[1][1]);
    euler_angle.pitch = Math.atan2(-m[2][0], m[2][2]);
  }

  return euler_angle;
}

geometry_pb.Quaternion.to_euler_zxy = to_euler_zxy;

module.exports = {
  EulerZXY,
};
