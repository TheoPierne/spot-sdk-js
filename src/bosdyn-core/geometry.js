/**
 * @file Euler angles in the yaw, roll, pitch (ZXY) order, and their conversions from and to quaternions.
 */

'use strict';

const geometryPb = require('../bosdyn/api/geometry_pb');

/**
 * Orientation represented by Yaw('Z')-Roll('X')-Pitch('Y') order Euler angles. Each angle is expressed in radians.
 */
class EulerZXY {
  constructor(yaw = 0.0, roll = 0.0, pitch = 0.0) {
    this.yaw = yaw;
    this.roll = roll;
    this.pitch = pitch;
  }

  /**
   * Transform an Euler ZXY to a quaternion, with the formulas of Python.
   * @returns {geometryPb.Quaternion}
   */
  toQuaternion() {
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
    return new geometryPb.Quaternion().setW(w).setX(x).setY(y).setZ(z);
  }
}

/**
 * The rotation matrix of a quaternion proto, like _matrix_from_quaternion() in Python.
 * @param {geometryPb.Quaternion} q
 * @returns {number[][]}
 */
function _matrixFromQuaternion(q) {
  const [w, x, y, z] = [q.getW(), q.getX(), q.getY(), q.getZ()];
  return [
    [1.0 - 2.0 * y * y - 2.0 * z * z, 2.0 * x * y - 2.0 * z * w, 2.0 * x * z + 2.0 * y * w],
    [2.0 * x * y + 2.0 * z * w, 1.0 - 2.0 * x * x - 2.0 * z * z, 2.0 * y * z - 2.0 * x * w],
    [2.0 * x * z - 2.0 * y * w, 2.0 * y * z + 2.0 * x * w, 1.0 - 2.0 * x * x - 2.0 * y * y],
  ];
}

/**
 * Convert a Quaternion to EulerZXY, with the algorithm of Python (the quaternion package gave other angles near
 * the gimbal lock, e.g. a pitch of pi/2 instead of 0.46 for a roll of pi/2).
 * @this {geometryPb.Quaternion}
 * @returns {EulerZXY}
 */
geometryPb.Quaternion.prototype.toEulerZxy = function toEulerZxy() {
  const m = _matrixFromQuaternion(this);
  const eulerAngle = new EulerZXY();
  const sinRoll = m[2][1];
  const cosRoll = Math.sqrt(m[2][0] * m[2][0] + m[2][2] * m[2][2]);
  eulerAngle.roll = Math.atan2(sinRoll, cosRoll);
  if (cosRoll < 1e-22) {
    eulerAngle.yaw = Math.atan2(m[1][0], m[0][0]);
    eulerAngle.pitch = 0;
  } else {
    eulerAngle.yaw = Math.atan2(-m[0][1], m[1][1]);
    eulerAngle.pitch = Math.atan2(-m[2][0], m[2][2]);
  }
  return eulerAngle;
};

module.exports = {
  EulerZXY,
};
