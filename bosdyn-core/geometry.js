'use strict';

const Quaternion = require('quaternion');

const geometry_pb = require('../bosdyn/api/geometry_pb');

class EulerZXY {
  constructor(yaw = 0.0, roll = 0.0, pitch = 0.0) {
    this.yaw = yaw;
    this.roll = roll;
    this.pitch = pitch;
  }

  /**
   * Transform an Euler ZXY to a quaternion
   * @returns {geometry_pb.Quaternion}
   */
  to_quaternion() {
    const { x, y, z, w } = Quaternion.fromEuler(this.yaw, this.roll, this.pitch, 'ZXY');

    // eslint-disable-next-line
    return new geometry_pb.Quaternion().setX(x).setY(y).setZ(z).setW(w);
  }
}

geometry_pb.Quaternion.prototype.to_euler_zxy = function to_euler_zxy() {
  const quat = new Quaternion(this.getW(), this.getX(), this.getY(), this.getZ());
  const [yaw, roll, pitch] = quat.toEuler('ZXY');
  return new EulerZXY(yaw, roll, pitch);
};

module.exports = {
  EulerZXY,
};
