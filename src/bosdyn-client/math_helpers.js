'use strict';

const { NdArray, array, identity, dot, sqrt, arccos, cos, sin } = require('@d4c/numjs').default;
const _ = require('underscore');

const geometryPb = require('../bosdyn/api/geometry_pb');

class ArithmeticError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'ArithmeticError';
  }
}

function recenterValueMod(value, center, amplitude) {
  let newValue = ((value - center) % amplitude) + center;
  if (newValue >= center + 0.5 * amplitude) {
    newValue -= amplitude;
  } else if (newValue < center - 0.5 * amplitude) {
    newValue += amplitude;
  }

  return newValue;
}

function recenterAngleMod(theta, center) {
  return recenterValueMod(theta, center, 2 * Math.PI);
}

function angleDiff(a1, a2) {
  return recenterAngleMod(a1 - a2, 0.0);
}

function angleDiffDegrees(a1, a2) {
  return recenterValueMod(a1 - a2, 0.0, 360.0);
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

  toProto() {
    return new geometryPb.Vec2().setX(this.x).setY(this.y);
  }

  dot(other) {
    if (!(other instanceof Vec2)) throw new TypeError(`Can't dot types Vec2 and ${other.constructor.name}.`);
    return this.x * other.x + this.y * other.y;
  }

  cross(other) {
    if (!(other instanceof Vec2)) throw new TypeError(`Can't cross types Vec2 and ${other.constructor.name}.`);
    return this.x * other.y - other.x * this.y;
  }

  static fromProto(proto) {
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

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  toProto() {
    // eslint-disable-next-line
    return new geometryPb.Vec3().setX(this.x).setY(this.y).setZ(this.z);
  }

  dot(other) {
    if (!(other instanceof Vec3)) throw new TypeError(`Can't dot types Vec3 and ${other.constructor.name}.`);
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }

  cross(other) {
    if (!(other instanceof Vec3)) throw new TypeError(`Can't cross types Vec3 and ${other.constructor.name}.`);
    return new Vec3(
      this.y * other.z - this.z * other.y,
      this.z * other.x - this.x * other.z,
      this.x * other.y - this.y * other.x,
    );
  }

  static fromProto(proto) {
    return new Vec3(proto.getX(), proto.getY(), proto.getZ());
  }
}

function radiansToDegrees(radians) {
  return radians * (180 / Math.PI);
}

class SE2Pose {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
  }

  toString() {
    return `position -- X: ${this.x} Y: ${this.y} Yaw: ${radiansToDegrees(this.angle)} deg`;
  }

  static flatten(se3pose) {
    const x = se3pose.x;
    const y = se3pose.y;
    const angle = se3pose.rot.toYaw();
    return new SE2Pose(x, y, angle);
  }

  toObj(proto = {}) {
    const pos = new geometryPb.Vec2().setX(this.x).setY(this.y);
    proto.setPosition(pos);
    proto.setAngle(this.angle);
  }

  toProto() {
    return new geometryPb.SE2Pose().setPosition(new geometryPb.Vec2([this.x, this.y])).setAngle(this.angle);
  }

  inverse() {
    const c = Math.cos(this.angle);
    const s = Math.sin(this.angle);
    return new SE2Pose(-this.x * c - this.y * s, this.x * s - this.y * c, -this.angle);
  }

  mult(other) {
    if (other instanceof Vec2) {
      const rotationMatrix = array(this.toRotMatrix());
      const rotatedPos = dot(rotationMatrix, [other.x, other.y]);
      return new Vec2(this.x + rotatedPos.get(0), this.y + rotatedPos.get(1));
    } else if (other instanceof SE2Pose) {
      const rotationMatrix = array(this.toRotMatrix());
      const rotatedPos = dot(rotationMatrix, [other.x, other.y]);
      return new SE2Pose(
        this.x + rotatedPos.get(0),
        this.y + rotatedPos.get(1),
        recenterAngleMod(this.angle + other.angle, 0),
      );
    } else {
      throw new TypeError(`Can't multiply types ${this.constructor.name} and ${other.constructor.name}.`);
    }
  }

  toRotMatrix() {
    const c = Math.cos(this.angle);
    const s = Math.sin(this.angle);
    return array([
      [c, -s],
      [s, c],
    ]);
  }

  toMatrix() {
    const c = Math.cos(this.angle);
    const s = Math.sin(this.angle);
    return array([
      [c, -s, this.x],
      [s, c, this.y],
      [0, 0, 1],
    ]);
  }

  toAdjointMatrix() {
    const ARB = this.toRotMatrix().tolist();
    const positionSkewMat = skewMatrix2d(this.position).T.tolist();

    return array([
      [...ARB[0], ...positionSkewMat[0]],
      [...ARB[1], ...positionSkewMat[1]],
      [0, 0, 1],
    ]);
  }

  get position() {
    return new geometryPb.Vec2().setX(this.x).setY(this.y);
  }

  static fromMatrix(mat) {
    const x = mat.get(0, 2);
    const y = mat.get(1, 2);
    const angle = Math.atan2(mat.get(1, 0), mat.get(0, 0));
    return new SE2Pose(x, y, angle);
  }

  static fromProto(tform) {
    const position = tform.getPosition();
    return new SE2Pose(position.getX(), position.getY(), tform.getAngle());
  }

  getClosestSe3Transform(heightZ = 0.0) {
    return new SE3Pose(this.x, this.y, heightZ, Quat.fromYaw(this.angle));
  }
}

class SE2Velocity {
  constructor(x, y, angular) {
    this.linearVelocityX = x;
    this.linearVelocityY = y;
    this.angularVelocity = angular;
  }

  toString() {
    // eslint-disable-next-line
    return `Linear velocity -- X: ${this.linearVelocityX} Y: ${this.linearVelocityY} Angular velocity -- ${this.angularVelocity}`;
  }

  toObj(proto) {
    proto.setLinear(new geometryPb.Vec2().setX(this.linearVelocityX).setY(this.linearVelocityY));
    proto.setAngular(this.angularVelocity);
  }

  toProto() {
    return new geometryPb.SE2Velocity()
      .setLinear(new geometryPb.Vec2().setX(this.linearVelocityX).setY(this.linearVelocityY))
      .setAngular(this.angularVelocity);
  }

  toVector() {
    return array([this.linearVelocityX, this.linearVelocityY, this.angularVelocity]).reshape(3, 1);
  }

  static fromVector(se2VelVector) {
    if (Array.isArray(se2VelVector)) {
      if (se2VelVector.length !== 3) {
        // eslint-disable-next-line
        console.log(`[MATH HELPERS] Velocity list must have 3 elements. The input has the wrong dimension of: ${se2VelVector.length} elements`);
        return null;
      } else {
        return new SE2Velocity(se2VelVector[0], se2VelVector[1], se2VelVector[2]);
      }
    }
    if (se2VelVector instanceof NdArray) {
      if (se2VelVector.shape[0] !== 3) {
        // eslint-disable-next-line
        console.log(`[MATH HELPERS] Velocity numjs array must have 3 elements. The input has the wrong dimension of: ${se2VelVector.shape[0]}`);
        return null;
      } else {
        return new SE2Velocity(se2VelVector.get(0, 0), se2VelVector.get(0, 1), se2VelVector.get(0, 2));
      }
    }
    return new SE2Velocity(0, 0, 0);
  }

  get linear() {
    return new geometryPb.Vec2().setX(this.linearVelocityX).setY(this.linearVelocityY);
  }

  get angular() {
    return this.angularVelocity;
  }

  static fromProto(vel) {
    return new SE2Velocity(vel.getLinear().getX(), vel.getLinear().getY(), vel.getAngular());
  }
}

class SE3Velocity {
  constructor(linX, linY, linZ, angX, angY, angZ) {
    this.linearVelocityX = linX;
    this.linearVelocityY = linY;
    this.linearVelocityZ = linZ;
    this.angularVelocityX = angX;
    this.angularVelocityY = angY;
    this.angularVelocityZ = angZ;
  }

  toString() {
    // eslint-disable-next-line
    return `Linear velocity -- X: ${this.linearVelocityX} Y: ${this.linearVelocityY} Z: ${this.linearVelocityZ} Angular velocity -- X: ${this.angularVelocityX} Y: ${this.angularVelocityY} Z: ${this.angularVelocityZ}`;
  }

  toObj(proto) {
    proto.setLinear(
      new geometryPb.Vec3().setX(this.linearVelocityX).setY(this.linearVelocityY).setZ(this.linearVelocityZ),
    );
    proto.setAngular(
      new geometryPb.Vec3().setX(this.angularVelocityX).setY(this.angularVelocityY).setZ(this.angularVelocityZ),
    );
  }

  toProto() {
    return new geometryPb.SE3Velocity()
      .setLinear(new geometryPb.Vec3([this.linearVelocityX, this.linearVelocityY, this.linearVelocityZ]))
      .setAngular(new geometryPb.Vec3([this.angularVelocityX, this.angularVelocityY, this.angularVelocityZ]));
  }

  toVector() {
    return array([
      this.linearVelocityX,
      this.linearVelocityY,
      this.linearVelocityZ,
      this.angularVelocityX,
      this.angularVelocityY,
      this.angularVelocityZ,
    ]).reshape(6, 1);
  }

  get linear() {
    return new geometryPb.Vec3().setX(this.linearVelocityX).setY(this.linearVelocityY).setZ(this.linearVelocityZ);
  }

  get angular() {
    return new geometryPb.Vec3().setX(this.angularVelocityX).setY(this.angularVelocityY).setZ(this.angularVelocityZ);
  }

  static fromProto(vel) {
    return new SE3Velocity(
      vel.getLinear().getX(),
      vel.getLinear().getY(),
      vel.getLinear().getZ(),
      vel.getAngular().getX(),
      vel.getAngular().getY(),
      vel.getAngular().getZ(),
    );
  }

  static fromVector(se3VelVector) {
    if (Array.isArray(se3VelVector)) {
      if (se3VelVector.length !== 6) {
        // eslint-disable-next-line
        console.log(`[MATH HELPERS] Velocity list must have 6 elements. The input has the wrong dimension of: ${se3VelVector.length}`);
        return null;
      } else {
        return new SE3Velocity(
          se3VelVector[0],
          se3VelVector[1],
          se3VelVector[2],
          se3VelVector[3],
          se3VelVector[4],
          se3VelVector[5],
        );
      }
    }
    if (se3VelVector instanceof NdArray) {
      if (se3VelVector.shape[0] !== 6) {
        // eslint-disable-next-line
        console.log(`[MATH HELPERS] Velocity numjs array must have 6 elements. The input has the wrong dimension of: ${se3VelVector.shape[0]}`);
        return null;
      } else {
        return new SE3Velocity(
          se3VelVector.get(0, 0),
          se3VelVector.get(1, 0),
          se3VelVector.get(2, 0),
          se3VelVector.get(3, 0),
          se3VelVector.get(4, 0),
          se3VelVector.get(5, 0),
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
    this.rot = rot instanceof geometryPb.Quaternion ? Quat.fromProto(rot) : rot;
  }

  toString() {
    return `position -- X: ${this.x} Y: ${this.z} Z: ${this.z} rotation -- ${this.rot}`;
  }

  static fromProto(tform) {
    let quat;
    if (tform.hasRotation()) {
      quat = Quat.fromProto(tform.getRotation());
    } else {
      quat = new Quat();
    }
    return new SE3Pose(tform.getPosition().getX(), tform.getPosition().getY(), tform.getPosition().getZ(), quat);
  }

  static fromSe2(tform, z = 0) {
    return new SE3Pose(tform.x, tform.y, z, Quat.fromYaw(tform.angle));
  }

  toObj(proto) {
    // eslint-disable-next-line
    proto.setPosition(new geometryPb.Vec3().setX(this.x).setY(this.y).setZ(this.z));
    proto.setRotation(new geometryPb.Quaternion());
    this.rot.toObj(proto.getRotation());
  }

  toProto() {
    /* eslint-disable */
    return new geometryPb.SE3Pose()
      .setPosition(new geometryPb.Vec3().setX(this.x).setY(this.y).setZ(this.z))
      .setRotation(new geometryPb.Quaternion().setX(this.rot.x).setY(this.rot.y).setZ(this.rot.z).setW(this.rot.w));
    /* eslint-enable */
  }

  inverse() {
    const invRot = this.rot.inverse();
    const [x, y, z] = invRot.transformPoint(this.x, this.y, this.z);
    return new SE3Pose(-x, -y, -z, invRot);
  }

  transformPoint(x, y, z) {
    const [outX, outY, outZ] = this.rot.transformPoint(x, y, z);
    return [outX + this.x, outY + this.y, outZ + this.z];
  }

  transformCloud(points) {
    return SE3Pose.transformCloudFromMatrix(this.toMatrix(), points);
  }

  static transformCloudFromMatrix(transform, points) {
    // !!!!!!!! Code peut être faux à verifier en fonction du code python !!!!!!!!
    const rot = transform.get(0, 3);
    const trans = transform.get(3);
    return dot(points, rot.T).concat(trans);
  }

  toMatrix() {
    const ret = identity(4);
    const matrix = this.rot.toMatrix();
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
      const [x, y, z] = this.transformPoint(other.x, other.y, other.z);
      return new Vec3(x, y, z);
    } else if (other instanceof SE3Pose) {
      const [x, y, z] = this.rot.transformPoint(other.x, other.y, other.z);
      return new SE3Pose(this.x + x, this.y + y, this.z + z, this.rot.mult(other.rot));
    } else {
      throw new TypeError(`Can't multiply types ${this.constructor.name} and ${other.constructor.name}.`);
    }
  }

  get position() {
    // eslint-disable-next-line
    return new geometryPb.Vec3().setX(this.x).setY(this.y).setZ(this.z);
  }

  get rotation() {
    return this.rot;
  }

  static fromMatrix(mat) {
    const [x, y, z] = mat.slice([0, 3], 3).tolist();
    const rot = Quat.fromMatrix(mat.slice([0, 3], [0, 3]));
    return new SE3Pose(x, y, z, rot);
  }

  static fromIdentity() {
    return new SE3Pose(0, 0, 0, new Quat());
  }

  getTranslation() {
    return array([this.x, this.y, this.z]);
  }

  toAdjointMatrix() {
    let ARB = this.rot.toMatrix();
    let positionSkewMat = skewMatrix3d(this.position);

    const mat = dot(positionSkewMat, ARB).tolist();
    const zeros3x3 = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    ARB = ARB.tolist();
    positionSkewMat = positionSkewMat.tolist();

    const row1 = ARB.map((row, index) => row.concat(mat[index]));
    const row2 = zeros3x3.map((row, index) => row.concat(ARB[index]));
    return array(row1.concat(row2));
  }

  getClosestSe2Transform() {
    const se2Angle = this.rot.closestYawOnlyQuaternion().toYaw();
    return new SE2Pose(this.x, this.y, se2Angle);
  }

  static interp(a, b, fraction) {
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

  transformPoint(x, y, z) {
    const inv = this.inverse();
    let q = new Quat(0, x, y, z);
    q = q.mult(inv);
    q = this.mult(q);
    return [q.x, q.y, q.z];
  }

  transformVec3(vec3) {
    const [x, y, z] = this.transformPoint(vec3.x, vec3.y, vec3.z);
    return new geometryPb.Vec3().setX(x).setY(y).setZ(z);
  }

  toMatrix() {
    const ret = identity(3);
    ret.set(0, 0, 1 - 2 * this.y * this.y - 2 * this.z * this.z);
    ret.set(0, 1, 2 * this.x * this.y - 2 * this.z * this.w);
    ret.set(0, 2, 2 * this.x * this.z + 2 * this.y * this.w);

    ret.set(1, 0, 2 * this.x * this.y + 2 * this.z * this.w);
    ret.set(1, 1, 1 - 2 * this.x * this.x - 2 * this.z * this.z);
    ret.set(1, 2, 2 * this.y * this.z - 2 * this.x * this.w);

    ret.set(2, 0, 2 * this.x * this.z - 2 * this.y * this.w);
    ret.set(2, 1, 2 * this.y * this.z + 2 * this.x * this.w);
    ret.set(2, 2, 1 - 2 * this.x * this.x - 2 * this.y * this.y);

    return ret;
  }

  static fromMatrix(rot) {
    const wt = 1 + rot.get(0, 0) + rot.get(1, 1) + rot.get(2, 2);
    if (wt > 0.1) return Quat._fromMatrixW(rot);
    const xt = 1 + rot.get(0, 0) - rot.get(1, 1) - rot.get(2, 2);
    const yt = 1 - rot.get(0, 0) + rot.get(1, 1) - rot.get(2, 2);
    const zt = 1 - rot.get(0, 0) - rot.get(1, 1) + rot.get(2, 2);
    const t = [
      [Quat._fromMatrixW, wt],
      [Quat._fromMatrixX, xt],
      [Quat._fromMatrixY, yt],
      [Quat._fromMatrixZ, zt],
    ];
    const [fromMatrixCoord, val] = _.max(t, e => e[1])[0];

    if (val < 1e-6) {
      throw new ArithmeticError(
        `[MATH HELPERS] Matrix cannot be converged to quaternion. 
        Are you sure this is a valid rotation matrix? \n${JSON.stringify(rot)}`,
      );
    }
    return fromMatrixCoord(rot);
  }

  static _fromMatrixW(rot) {
    const w = Math.sqrt(1 + rot.get(0, 0) + rot.get(1, 1) + rot.get(2, 2)) * 0.5;
    return new Quat(
      w,
      (rot.get(2, 1) - rot.get(1, 2)) / (4.0 * w),
      (rot.get(0, 2) - rot.get(2, 0)) / (4.0 * w),
      (rot.get(1, 0) - rot.get(0, 1)) / (4.0 * w),
    );
  }

  static _fromMatrixX(rot) {
    const x = Math.sqrt(1 + rot.get(0, 0) - rot.get(1, 1) - rot.get(2, 2)) * 0.5;
    return new Quat(
      (rot.get(2, 1) - rot.get(1, 2)) / (4.0 * x),
      x,
      (rot.get(0, 1) + rot.get(1, 0)) / (4.0 * x),
      (rot.get(0, 2) + rot.get(2, 0)) / (4.0 * x),
    );
  }

  static _fromMatrixY(rot) {
    const y = Math.sqrt(1 - rot.get(0, 0) + rot.get(1, 1) - rot.get(2, 2)) * 0.5;
    return new Quat(
      (rot.get(0, 2) - rot.get(2, 0)) / (4.0 * y),
      (rot.get(0, 1) + rot.get(1, 0)) / (4.0 * y),
      y,
      (rot.get(1, 2) + rot.get(2, 1)) / (4.0 * y),
    );
  }

  static _fromMatrixZ(rot) {
    const z = Math.sqrt(1 - rot.get(0, 0) - rot.get(1, 1) + rot.get(2, 2)) * 0.5;
    return new Quat(
      (rot.get(1, 0) - rot.get(0, 1)) / (4.0 * z),
      (rot.get(0, 2) + rot.get(2, 0)) / (4.0 * z),
      (rot.get(1, 2) + rot.get(2, 1)) / (4.0 * z),
      z,
    );
  }

  static fromRoll(angle) {
    return new Quat(Math.cos(angle / 2.0), Math.sin(angle / 2.0));
  }

  static fromPitch(angle) {
    return new Quat(Math.cos(angle / 2.0), undefined, Math.sin(angle / 2.0));
  }

  static fromYaw(angle) {
    return new Quat(Math.cos(angle / 2.0), undefined, undefined, Math.sin(angle / 2.0));
  }

  toRoll() {
    const d = this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z;
    if (d === 0.0 || d === 0) return 0.0;
    const t0 = 2.0 * (this.w * this.x + this.y * this.z);
    const t1 = 1.0 - 2.0 * (this.x * this.x + this.y * this.y);
    return Math.atan2(t0, t1);
  }

  toPitch() {
    const d = this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z;
    if (d === 0.0 || d === 0) return 0.0;
    let t2 = 2.0 * (this.w * this.y - this.z * this.x);
    if (t2 < -1.0) t2 = -1.0;
    if (t2 > 1.0) t2 = 1.0;
    return Math.asin(t2);
  }

  toYaw() {
    const yawOnlyQuat = this.closestYawOnlyQuaternion();
    return recenterAngleMod(2 * Math.atan2(yawOnlyQuat.z, yawOnlyQuat.w), 0);
  }

  toAxisAngle() {
    const d = this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z;
    if (d === 0.0 || d === 0) return [0.0, [0, 0, 1]];
    const mag = 1.0 - this.w * this.w;
    if (mag <= 1e-12) return [0.0, [0, 0, 1]];

    const denom = Math.sqrt(mag);
    if (denom < 1e-12) return [0.0, [0, 0, 1]];

    const angle = 2.0 * Math.acos(this.w);
    const axis = [this.x / denom, this.y / denom, this.z / denom];
    return [angle, axis];
  }

  static fromProto(proto) {
    return new Quat(proto.getW(), proto.getX(), proto.getY(), proto.getZ());
  }

  toObj(proto) {
    // eslint-disable-next-line
    proto.setW(this.w).setX(this.x).setY(this.y).setZ(this.z);
  }

  toProto() {
    // eslint-disable-next-line
    return new geometryPb.Quaternion().setX(this.x).setY(this.y).setZ(this.z).setW(this.w);
  }

  mult(otherQuat) {
    if (otherQuat instanceof Quat) {
      return new Quat(
        this.w * otherQuat.w - this.x * otherQuat.x - this.y * otherQuat.y - this.z * otherQuat.z,
        this.w * otherQuat.x + this.x * otherQuat.w + this.y * otherQuat.z - this.z * otherQuat.y,
        this.w * otherQuat.y - this.x * otherQuat.z + this.y * otherQuat.w + this.z * otherQuat.x,
        this.w * otherQuat.z + this.x * otherQuat.y - this.y * otherQuat.x + this.z * otherQuat.w,
      );
    }
    if (otherQuat instanceof Vec3) {
      const [x, y, z] = this.transformPoint(otherQuat.x, otherQuat.y, otherQuat.z);
      return new Vec3(x, y, z);
    }
    throw new TypeError(`Can't multiply types Quat and ${typeof other}.`);
  }

  /**
   * Normalizes the quaternion.
   * @returns {Quat}
   */
  normalize() {
    let q = array([this.w, this.x, this.y, this.z]);
    const len = sqrt(dot(q.transpose(), q)).tolist()[0];
    if (len < 1e-15) {
      q = array([1, 0, 0, 0]);
    } else {
      q = q.divide(len);
    }
    this.w = q.get(0);
    this.x = q.get(1);
    this.y = q.get(2);
    this.z = q.get(3);
    return this;
  }

  closestYawOnlyQuaternion() {
    const mag = Math.sqrt(this.w * this.w + this.z * this.z);
    if (mag > 0) {
      return new Quat(this.w / mag, 0, 0, this.z / mag);
    } else {
      return new Quat(0, 0, 1, 0).mult(this);
    }
  }

  static slerp(a, b, fraction) {
    let v0 = array([a.w, a.x, a.y, a.z]);
    let v1 = array([b.w, b.x, b.y, b.z]);
    let dotRes = dot(v0.T, v1);

    if (dotRes.get(0) < 0) {
      v0 = v0.multiply(-1);
      dotRes = dotRes.negative();
    }

    const DOT_THRESHOLD = 1.0 - 1e-4;
    let result;
    if (dotRes.get(0) > DOT_THRESHOLD) {
      result = v0.add(fraction).multiply(v1.substract(v0));
      result = result.divide(sqrt(dot(result.T, result)));
    } else {
      // Theta_0 = angle between input vectors
      const theta0 = arccos(dot);
      // Theta = angle between v0 and result
      const theta = theta0.multiply(fraction);
      // Compute this value only once
      const sinTheta = sin(theta);
      // Compute this value only once
      const sinTheta0 = sin(theta0);

      const s0 = cos(theta).subtract(dotRes.multiply(sinTheta).divide(sinTheta0));
      const s1 = sinTheta.divide(sinTheta0);

      result = s0.multiply(v0).add(s1.multiply(v1));
    }
    return new Quat(result.get(0), result.get(1), result.get(2), result.get(3));
  }

  /**
   * Returns a quaternion representing the rotation from u to v.
   * @param {Vec3} uIn An instance of Vec3
   * @param {Vec3} vIn An instance of Vec3
   * @returns {Quat}
   */
  static fromTwoVectors(uIn, vIn) {
    // Normalizing by max avoids all sorts of underflow and overflow issues when we multiply
    // terms together, including any issues in calculating the norm itself.
    const max_u = array([Math.abs(uIn.x), Math.abs(uIn.y), Math.abs(uIn.z)]).max();
    const max_v = array([Math.abs(vIn.x), Math.abs(vIn.y), Math.abs(vIn.z)]).max();
    if (max_u === 0 || max_v === 0) {
      // Undefined; return identity
      return new Quat(1, 0, 0, 0);
    }

    const u = uIn.multiply(1 / max_u);
    const v = vIn.multiply(1 / max_v);

    const uDotV = u.dot(v);
    const uDotU = u.dot(u);
    const vDotV = v.dot(v);
    const norm_u_norm_v = Math.sqrt(uDotU * vDotV);

    if (uDotV < 0) {
      // When this is the case, things get annoying because the | u || v | + u.v(see uDotV >= 0
      // case below) has cancellation; this leads us to a different formula that is sensitive to
      // the magnitude of c.If the vectors are close to antipodal, the cross product itself can
      // be ill conditioned.Algebraically, u x(u + v) is equal to u x v, but, the result is
      // much more likely to be orthogonal to u and v for extreme cases.
      const c = u.cross(u + v);
      const maxC = array([Math.abs(c.x), Math.abs(c.y), Math.abs(c.z)]).max();
      if (maxC === 0) {
        // We pick an orthogonal axis, avoiding the smallest one
        if (Math.abs(u.x) > Math.abs(u.y)) {
          if (Math.abs(u.y) > Math.abs(u.z)) {
            const q = new Quat(0, -u.y, u.x, 0);
            return q.normalize();
          }
        } else {
          const q = new Quat(0, u.z, 0, -u.x);
          return q.normalize();
        }
      } else if (Math.abs(u.x) > Math.abs(u.z)) {
        const q = new Quat(0, -u.y, u.x, 0);
        return q.normalize();
      } else {
        const q = new Quat(0, 0, -u.z, u.y);
        return q.normalize();
      }
      const cScl = c.multiply(1 / maxC);
      const norm2CScl = cScl.dot(cScl);
      const tmp = cScl.multiply(norm_u_norm_v - uDotV);
      const q = new Quat(norm2CScl * maxC, tmp.x, tmp.y, tmp.z);
      return q.normalize();
    } else {
      const c = u.cross(v);
      const q = new Quat(norm_u_norm_v + uDotV, c.x, c.y, c.z);
      return q.normalize();
    }
  }

  conj() {
    return new Quat(this.w, -this.x, -this.y, -this.z);
  }
}

function poseToXyzYaw(ATformB) {
  const yaw = Quat.fromProto(ATformB.getRotation()).toYaw();
  const x = ATformB.getPosition().getX();
  const y = ATformB.getPosition().getY();
  const z = ATformB.getPosition().getZ();
  return [x, y, z, yaw];
}

function isWithinThreshold(pose3d, maxTranslationmeters, maxYawDegrees) {
  const delta = SE2Pose.flatten(SE3Pose.from_obj(pose3d));
  const dist2d = Math.sqrt(delta.x * delta.x + delta.y * delta.y);
  const angleDeg = radiansToDegrees(Math.abs(delta.angle));
  return dist2d < maxTranslationmeters && angleDeg < maxYawDegrees;
}

function recenterAngle(q, lowerLimit, upperLimit) {
  const recenterRange = upperLimit - lowerLimit;
  while (q >= upperLimit) {
    q -= recenterRange;
  }
  while (q < lowerLimit) {
    q += recenterRange;
  }
  return q;
}

function skewMatrix3d(vec3Proto) {
  return array([
    [0, -vec3Proto.getZ(), vec3Proto.getY()],
    [vec3Proto.getZ(), 0, -vec3Proto.getX()],
    [-vec3Proto.getY(), vec3Proto.getX(), 0],
  ]);
}

function skewMatrix2d(vec2Proto) {
  return array([[vec2Proto.getY(), -vec2Proto.getX()]]);
}

function transformSe2velocity(aAdjointBMatrix, se2VelocityInB) {
  let se2VelocityInBVector;
  if (se2VelocityInB instanceof geometryPb.SE2Velocity) {
    se2VelocityInBVector = SE2Velocity.fromProto(se2VelocityInB).toVector();
  } else if (se2VelocityInB instanceof SE2Velocity) {
    se2VelocityInBVector = se2VelocityInB.toVector();
  } else {
    return null;
  }

  return SE2Velocity.fromVector(dot(aAdjointBMatrix, se2VelocityInBVector));
}

function transformSe3velocity(aAdjointBMatrix, se3VelocityInB) {
  let se3VelocityInBVec;
  if (se3VelocityInB instanceof geometryPb.SE3Velocity) {
    se3VelocityInBVec = SE3Velocity.fromProto(se3VelocityInB).toVector();
  } else if (se3VelocityInB instanceof SE3Velocity) {
    se3VelocityInBVec = se3VelocityInB.toVector();
  } else {
    return null;
  }

  return SE3Velocity.fromVector(dot(aAdjointBMatrix, se3VelocityInBVec));
}

function quatToEulerZYX(q) {
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
  return [yaw, pitch, roll];
}

module.exports = {
  Vec2,
  Vec3,
  SE2Pose,
  SE2Velocity,
  SE3Velocity,
  SE3Pose,
  Quat,
  poseToXyzYaw,
  isWithinThreshold,
  recenterAngle,
  angleDiff,
  angleDiffDegrees,
  radiansToDegrees,
  skewMatrix3d,
  skewMatrix2d,
  transformSe2velocity,
  transformSe3velocity,
  quatToEulerZYX,
  recenterValueMod,
  recenterAngleMod,
};
