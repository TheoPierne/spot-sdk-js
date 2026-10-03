/**
 * @file Math helpers for the geometry of the robot: vectors, quaternions, SE(2) and SE(3) poses and velocities, and
 * their conversions from and to the protobuf messages.
 */

'use strict';

const { NdArray, array, identity, dot } = require('@d4c/numjs').default;

const geometryPb = require('../bosdyn/api/geometry_pb');

/**
 * The x, y and z of a math Vec3 or of a geometry Vec3 proto: Python reads the attributes of both.
 * @param {Vec3|geometryPb.Vec3} vec3
 * @returns {number[]}
 */
function _xyz(vec3) {
  return typeof vec3.getX === 'function' ? [vec3.getX(), vec3.getY(), vec3.getZ()] : [vec3.x, vec3.y, vec3.z];
}

/**
 * The x and y of a math Vec2 or of a geometry Vec2 proto.
 * @param {Vec2|geometryPb.Vec2} vec2
 * @returns {number[]}
 */
function _xy(vec2) {
  return typeof vec2.getX === 'function' ? [vec2.getX(), vec2.getY()] : [vec2.x, vec2.y];
}

/**
 * The element (i, j) of a numjs matrix or of an array of rows.
 * @param {NdArray|number[][]} mat
 * @param {number} i
 * @param {number} j
 * @returns {number}
 */
function _matGet(mat, i, j) {
  return typeof mat.get === 'function' ? mat.get(i, j) : mat[i][j];
}

/**
 * The element i of a vector: a numjs array of shape (n) or (n, 1), or an array.
 * @param {NdArray|number[]} vector
 * @param {number} i
 * @returns {number}
 */
function _vectorGet(vector, i) {
  if (!(vector instanceof NdArray)) return vector[i];
  return vector.shape.length > 1 ? vector.get(i, 0) : vector.get(i);
}

/**
 * A number with a precision, like '%0.3f' in Python (the values which are not numbers as they are).
 * @param {number} value
 * @param {number} digits
 * @returns {string}
 */
function _fixed(value, digits) {
  return typeof value === 'number' ? value.toFixed(digits) : String(value);
}

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

/**
 * Class representing a two-dimensional vector.
 */
class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Indexed like Python: v[0] is x and v[1] is y.
  get 0() {
    return this.x;
  }

  set 0(value) {
    this.x = value;
  }

  get 1() {
    return this.y;
  }

  set 1(value) {
    this.y = value;
  }

  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
  }

  toString() {
    return `X: ${_fixed(this.x, 3)} Y: ${_fixed(this.y, 3)}`;
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

  /**
   * Converts the Vec2 into an output of the protobuf geometryPb.Vec2.
   */
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

  /**
   * Create a Vec2 from a geometryPb.Vec2 proto.
   */
  static fromProto(proto) {
    return new Vec2(proto.getX(), proto.getY());
  }
}

/**
 * Class representing a three-dimensional vector.
 */
class Vec3 {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  // Indexed like Python: v[0] is x, v[1] is y and v[2] is z.
  get 0() {
    return this.x;
  }

  set 0(value) {
    this.x = value;
  }

  get 1() {
    return this.y;
  }

  set 1(value) {
    this.y = value;
  }

  get 2() {
    return this.z;
  }

  set 2(value) {
    this.z = value;
  }

  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
  }

  toString() {
    return `X: ${_fixed(this.x, 3)} Y: ${_fixed(this.y, 3)} Z: ${_fixed(this.z, 3)}`;
  }

  /**
   * Converts the Vec3 into a numjs array, like to_numpy() in Python.
   * @returns {NdArray}
   */
  toNumpy() {
    return array([this.x, this.y, this.z]);
  }

  /**
   * Create a Vec3 from a numjs array (of shape (3) or (3, 1)) or an array, like from_numpy() in Python.
   * @param {NdArray|number[]} arr
   * @returns {Vec3}
   */
  static fromNumpy(arr) {
    return new Vec3(_vectorGet(arr, 0), _vectorGet(arr, 1), _vectorGet(arr, 2));
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

  /**
   * Converts the Vec3 into an output of the protobuf geometryPb.Vec3.
   */
  toProto() {
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

  /**
   * Create a Vec3 from a geometryPb.Vec3 proto.
   */
  static fromProto(proto) {
    return new Vec3(proto.getX(), proto.getY(), proto.getZ());
  }
}

function radiansToDegrees(radians) {
  return radians * (180 / Math.PI);
}

/**
 * Class representing an SE2Pose with position and angle.
 */
class SE2Pose {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
  }

  toString() {
    const yaw = _fixed(radiansToDegrees(this.angle), 1);
    return `position -- X: ${_fixed(this.x, 3)} Y: ${_fixed(this.y, 3)} Yaw: ${yaw} deg`;
  }

  /**
   * Flatten a given SE3Pose to an SE2Pose. This will lose height information if the se3pose provided is not gravity
   * aligned. The common gravity aligned frames are odom, vision, and flat_body.
   */
  static flatten(se3pose) {
    const x = se3pose.x;
    const y = se3pose.y;
    const angle = se3pose.rot.toYaw();
    return new SE2Pose(x, y, angle);
  }

  /**
   * Adds the SE2Pose properties into the geometryPb.SE2Pose 'proto'.
   */
  toObj(proto) {
    const pos = new geometryPb.Vec2().setX(this.x).setY(this.y);
    proto.setPosition(pos);
    proto.setAngle(this.angle);
  }

  /**
   * Converts the SE2Pose into an output of the protobuf geometryPb.SE2Pose.
   */
  toProto() {
    return new geometryPb.SE2Pose().setPosition(new geometryPb.Vec2([this.x, this.y])).setAngle(this.angle);
  }

  /**
   * Compute the inverse of the SE2Pose.
   *
   * For example, if the SE(2) pose represented a_tform_b, then the inverse pose is b_tform_a.
   */
  inverse() {
    const c = Math.cos(this.angle);
    const s = Math.sin(this.angle);
    return new SE2Pose(-this.x * c - this.y * s, this.x * s - this.y * c, -this.angle);
  }

  /**
   * Computes the multiplication between the current SE2Pose and the input se2pose.
   *
   * For example, if this SE2Pose represents a_tform_b and the input se2pose represents b_tform_c, then the output will
   * represent the transform a_tform_c.
   */
  mult(other) {
    // The rotation of the position, without numjs (about 47 times faster).
    const c = Math.cos(this.angle);
    const s = Math.sin(this.angle);
    if (other instanceof Vec2) {
      return new Vec2(this.x + c * other.x - s * other.y, this.y + s * other.x + c * other.y);
    } else if (other instanceof SE2Pose) {
      return new SE2Pose(
        this.x + c * other.x - s * other.y,
        this.y + s * other.x + c * other.y,
        recenterAngleMod(this.angle + other.angle, 0),
      );
    } else {
      throw new TypeError(`Can't multiply types ${this.constructor.name} and ${other?.constructor?.name}.`);
    }
  }

  /**
   * Returns the rotation matrix generate from the angle of the current SE(2) Pose.
   */
  toRotMatrix() {
    const c = Math.cos(this.angle);
    const s = Math.sin(this.angle);
    return array([
      [c, -s],
      [s, c],
    ]);
  }

  /**
   * Returns the 3x3 matrix to transform a 2D point (in generalized coordinates).
   */
  toMatrix() {
    const c = Math.cos(this.angle);
    const s = Math.sin(this.angle);
    return array([
      [c, -s, this.x],
      [s, c, this.y],
      [0, 0, 1],
    ]);
  }

  /**
   * This creates the adjoint matrix for the current SE2Pose.
   *
   * The adjoint matrix can be used to change reference frames for a SE(2) velocity vector. For example, if you have
   * SE2Velocity velocity_in_frame_b, then the adjoint matrix for the SE2Pose (representing a_tform_b) can be used as
   * follows to transform the velocity: velocity_in_frame_a = a_tform_b.toAdjointMatrix() * velocity_in_frame_b
   */
  toAdjointMatrix() {
    const ARB = this.toRotMatrix().tolist();
    const positionSkewMat = skewMatrix2d(this.position).T.tolist();

    return array([
      [...ARB[0], ...positionSkewMat[0]],
      [...ARB[1], ...positionSkewMat[1]],
      [0, 0, 1],
    ]);
  }

  /**
   * Property to allow attribute access of the protobuf message field 'position' similar to the geometryPb.SE2Pose for
   * the SE2Pose.
   */
  get position() {
    return new geometryPb.Vec2().setX(this.x).setY(this.y);
  }

  /**
   * Extract SE2Pose from a 3x3 matrix
   */
  static fromMatrix(mat) {
    const x = mat.get(0, 2);
    const y = mat.get(1, 2);
    const angle = Math.atan2(mat.get(1, 0), mat.get(0, 0));
    return new SE2Pose(x, y, angle);
  }

  /**
   * Create a SE2Pose from a geometryPb.SE2Pose proto.
   */
  static fromProto(tform) {
    // Like Python, an unset position reads as (0, 0).
    const position = tform.getPosition();
    return new SE2Pose(position?.getX() ?? 0, position?.getY() ?? 0, tform.getAngle());
  }

  /** @deprecated Use fromProto instead (like Python since 3.1.0). */
  static fromObj(tform) {
    return SE2Pose.fromProto(tform);
  }

  /**
   * Compute the closest SE3Pose from the current SE2Pose.
   */
  getClosestSe3Transform(heightZ = 0.0) {
    return new SE3Pose(this.x, this.y, heightZ, Quat.fromYaw(this.angle));
  }
}

/**
 * Class representing an SE2Velocity with linear velocity and angular velocity.
 */
class SE2Velocity {
  constructor(x, y, angular) {
    this.linearVelocityX = x;
    this.linearVelocityY = y;
    this.angularVelocity = angular;
  }

  toString() {
    const [x, y, angular] = [this.linearVelocityX, this.linearVelocityY, this.angularVelocity].map(v => _fixed(v, 3));
    return `Linear velocity -- X: ${x} Y: ${y} Angular velocity -- ${angular} `;
  }

  /**
   * Adds the SE2Velocity properties into the geometryPb.SE2Velocity 'proto'.
   */
  toObj(proto) {
    proto.setLinear(new geometryPb.Vec2().setX(this.linearVelocityX).setY(this.linearVelocityY));
    proto.setAngular(this.angularVelocity);
  }

  /**
   * Converts the SE2Velocity into an output of the protobuf geometryPb.SE2Velocity.
   */
  toProto() {
    return new geometryPb.SE2Velocity()
      .setLinear(new geometryPb.Vec2().setX(this.linearVelocityX).setY(this.linearVelocityY))
      .setAngular(this.angularVelocity);
  }

  /**
   * Creates a 3x1 velocity vector as an NdArray.
   */
  toVector() {
    return array([this.linearVelocityX, this.linearVelocityY, this.angularVelocity]).reshape(3, 1);
  }

  /**
   * Converts a 3x1 velocity vector (of either an NdArray or a list) into a SE2Velocity object.
   */
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
        // The elements of a (3, 1) or a (3) array (get(0, 1) read the first element of a (3) array).
        return new SE2Velocity(_vectorGet(se2VelVector, 0), _vectorGet(se2VelVector, 1), _vectorGet(se2VelVector, 2));
      }
    }
    // Like Python: not a list nor an array.
    return null;
  }

  /**
   * Property to allow attribute access of the protobuf message field 'linear' similar to the geometryPb.SE2Velocity for
   * the SE2Velocity.
   */
  get linear() {
    return new geometryPb.Vec2().setX(this.linearVelocityX).setY(this.linearVelocityY);
  }

  /**
   * Property to allow attribute access of the protobuf message field 'angular' similar to the geometryPb.SE2Velocity
   * for the SE2Velocity.
   */
  get angular() {
    return this.angularVelocity;
  }

  /**
   * Create a SE2Velocity from a geometryPb.SE2Velocity proto.
   */
  static fromProto(vel) {
    return new SE2Velocity(vel.getLinear()?.getX() ?? 0, vel.getLinear()?.getY() ?? 0, vel.getAngular());
  }

  /** @deprecated Use fromProto instead (like Python since 3.1.0). */
  static fromObj(vel) {
    return SE2Velocity.fromProto(vel);
  }
}

/**
 * Class representing an SE3Velocity with linear velocity and angular velocity.
 */
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
    const [linX, linY, linZ, angX, angY, angZ] = [
      this.linearVelocityX,
      this.linearVelocityY,
      this.linearVelocityZ,
      this.angularVelocityX,
      this.angularVelocityY,
      this.angularVelocityZ,
    ].map(v => _fixed(v, 3));
    return `Linear velocity -- X: ${linX} Y: ${linY} Z: ${linZ} Angular velocity -- X: ${angX} Y: ${angY} Z: ${angZ}`;
  }

  /**
   * Adds the SE3Velocity properties into the geometryPb.SE3Velocity 'proto'.
   */
  toObj(proto) {
    proto.setLinear(
      new geometryPb.Vec3().setX(this.linearVelocityX).setY(this.linearVelocityY).setZ(this.linearVelocityZ),
    );
    proto.setAngular(
      new geometryPb.Vec3().setX(this.angularVelocityX).setY(this.angularVelocityY).setZ(this.angularVelocityZ),
    );
  }

  /**
   * Converts the SE3Velocity into an output of the protobuf geometryPb.SE3Velocity.
   */
  toProto() {
    return new geometryPb.SE3Velocity()
      .setLinear(new geometryPb.Vec3([this.linearVelocityX, this.linearVelocityY, this.linearVelocityZ]))
      .setAngular(new geometryPb.Vec3([this.angularVelocityX, this.angularVelocityY, this.angularVelocityZ]));
  }

  /**
   * Creates a 6x1 velocity vector as an NdArray.
   */
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

  /**
   * Property to allow attribute access of the protobuf message field 'linear' similar to the geometryPb.SE3Velocity for
   * the SE3Velocity.
   */
  get linear() {
    return new geometryPb.Vec3().setX(this.linearVelocityX).setY(this.linearVelocityY).setZ(this.linearVelocityZ);
  }

  /**
   * Property to allow attribute access of the protobuf message field 'angular' similar to the geometryPb.SE3Velocity
   * for the SE3Velocity.
   */
  get angular() {
    return new geometryPb.Vec3().setX(this.angularVelocityX).setY(this.angularVelocityY).setZ(this.angularVelocityZ);
  }

  /**
   * Create a SE3Velocity from a geometryPb.SE3Velocity proto.
   */
  static fromProto(vel) {
    // Like Python, an unset linear or angular velocity reads as (0, 0, 0).
    const [linX, linY, linZ] = vel.getLinear() ? _xyz(vel.getLinear()) : [0, 0, 0];
    const [angX, angY, angZ] = vel.getAngular() ? _xyz(vel.getAngular()) : [0, 0, 0];
    return new SE3Velocity(linX, linY, linZ, angX, angY, angZ);
  }

  /** @deprecated Use fromProto instead (like Python since 3.1.0). */
  static fromObj(vel) {
    return SE3Velocity.fromProto(vel);
  }

  /**
   * Converts a 6x1 velocity vector (of either an NdArray or a list) into a SE3Velocity object.
   */
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
        // The elements of a (6, 1) or a (6) array.
        return new SE3Velocity(...[0, 1, 2, 3, 4, 5].map(i => _vectorGet(se3VelVector, i)));
      }
    }
    // Like Python: not a list nor an array.
    return null;
  }
}

/**
 * Class representing an SE3Pose with position and rotation.
 */
class SE3Pose {
  constructor(x, y, z, rot) {
    /** @type {number} */
    this.x = x;
    /** @type {number} */
    this.y = y;
    /** @type {number} */
    this.z = z;
    /** @type {Quat} */
    this.rot = rot instanceof geometryPb.Quaternion ? Quat.fromProto(rot) : rot;
  }

  [Symbol.iterator]() {
    const arr = [this.x, this.y, this.z, this.rot.w, this.rot.x, this.rot.y, this.rot.z];
    let i = 0;
    return {
      next: () => (i < arr.length ? { value: arr[i++], done: false } : { done: true }),
    };
  }

  toString() {
    const [x, y, z] = [this.x, this.y, this.z].map(value => _fixed(value, 3));
    return `position -- X: ${x} Y: ${y} Z: ${z} rotation -- ${this.rot}`;
  }

  /**
   * Create a SE3Pose from a geometryPb.SE3Pose proto.
   */
  static fromProto(tform) {
    let quat;
    if (tform.hasRotation()) {
      quat = Quat.fromProto(tform.getRotation());
    } else {
      // Create the identity quaternion if no rotation is provided in the SE(3) pose.
      quat = new Quat();
    }
    // Like Python, an unset position reads as (0, 0, 0).
    const [x, y, z] = tform.getPosition() ? _xyz(tform.getPosition()) : [0, 0, 0];
    return new SE3Pose(x, y, z, quat);
  }

  /** @deprecated Use fromProto instead (like Python since 3.1.0). */
  static fromObj(tform) {
    return SE3Pose.fromProto(tform);
  }

  static fromSe2(tform, z = 0) {
    return new SE3Pose(tform.x, tform.y, z, Quat.fromYaw(tform.angle));
  }

  /**
   * Adds the SE3Pose properties into the geometryPb.SE3Pose 'proto'.
   */
  toObj(proto) {
    proto.setPosition(new geometryPb.Vec3().setX(this.x).setY(this.y).setZ(this.z));
    proto.setRotation(new geometryPb.Quaternion());
    this.rot.toObj(proto.getRotation());
  }

  /**
   * Converts the SE3Pose into an output of the protobuf geometryPb.SE3Pose.
   */
  toProto() {
    return new geometryPb.SE3Pose()
      .setPosition(new geometryPb.Vec3().setX(this.x).setY(this.y).setZ(this.z))
      .setRotation(new geometryPb.Quaternion().setX(this.rot.x).setY(this.rot.y).setZ(this.rot.z).setW(this.rot.w));
  }

  /**
   * Compute the inverse of the SE3Pose.
   *
   * For example, if the SE(3) pose represented a_tform_b, then the inverse pose is b_tform_a.
   */
  inverse() {
    const invRot = this.rot.inverse();
    const [x, y, z] = invRot.transformPoint(this.x, this.y, this.z);
    return new SE3Pose(-x, -y, -z, invRot);
  }

  /**
   * Compute the transformation (translation and rotation) of a (x,y,z) vector using the current SE(3) pose.
   */
  transformPoint(x = 0, y = 0, z = 0) {
    const [outX, outY, outZ] = this.rot.transformPoint(x, y, z);
    return [outX + this.x, outY + this.y, outZ + this.z];
  }

  /**
   * Transform a vector: a math Vec3 or a geometry Vec3 proto (a proto was read as (0, 0, 0)).
   * @param {Vec3|geometryPb.Vec3} vec3
   * @returns {geometryPb.Vec3}
   */
  transformVec3(vec3) {
    const [outX, outY, outZ] = this.rot.transformPoint(..._xyz(vec3));
    return new geometryPb.Vec3()
      .setX(outX + this.x)
      .setY(outY + this.y)
      .setZ(outZ + this.z);
  }

  /**
   * Compute the transformation (translation and rotation) of multiple vector/points using the current SE3Pose.
   */
  transformCloud(points) {
    return SE3Pose.transformCloudFromMatrix(this.toMatrix(), points);
  }

  /**
   * Transform points with a 4x4 transform matrix, like Python's numpy.dot(points, rot.T) + trans.
   * @param {NdArray|number[][]} transform The 4x4 matrix.
   * @param {NdArray|number[][]} points The Nx3 points.
   * @returns {NdArray} The Nx3 transformed points.
   */
  static transformCloudFromMatrix(transform, points) {
    const T = Array.isArray(transform) ? transform : transform.tolist();
    const rows = Array.isArray(points) ? points : points.tolist();
    // applyTransformToPoints() was not defined: a ReferenceError at each call.
    const out = rows.map(([x, y, z]) => [0, 1, 2].map(i => T[i][0] * x + T[i][1] * y + T[i][2] * z + T[i][3]));
    return array(out);
  }

  /**
   * Returns the 4x4 matrix to transform a 3D point (in generalized coordinates).
   * @returns {NdArray}
   */
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

  /**
   * Calculates the Euclidean norm (magnitude) of the translation component pose.
   * @returns {number}
   */
  translationNorm() {
    return Math.hypot(this.x, this.y, this.z);
  }

  /**
   * Computes the multiplication between the current math_helpers.SE3Pose and the input se3pose.
   *
   * For example, if the 'this' SE3Pose represents a_tform_b and the input se3pose represents b_tform_c,
   * then the output will represent the transform a_tform_c.
   * @param {SE3Pose} other
   * @returns {SE3Pose}
   */
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

  /**
   * Property to allow attribute access of the protobuf message field 'position' similar to the geometryPb.SE3Pose for
   * the SE3Pose.
   */
  get position() {
    return new geometryPb.Vec3().setX(this.x).setY(this.y).setZ(this.z);
  }

  /**
   * Property to allow attribute access of the protobuf message field 'rotation' similar to the geometryPb.SE3Pose for
   * the SE3Pose.
   */
  get rotation() {
    return this.rot;
  }

  /**
   * Extract an SE3Pose from a 4x4 matrix (a numjs matrix or an array of rows).
   * @param {NdArray|number[][]} mat
   * @returns {SE3Pose}
   */
  static fromMatrix(mat) {
    // Numbers: slice().tolist() gave the rows [[x], [y], [z]].
    const [x, y, z] = [0, 1, 2].map(i => _matGet(mat, i, 3));
    const rot = Quat.fromMatrix([0, 1, 2].map(i => [0, 1, 2].map(j => _matGet(mat, i, j))));
    return new SE3Pose(x, y, z, rot);
  }

  /**
   * Create a SE3Pose representing the identity SE(3) pose.
   */
  static fromIdentity() {
    return new SE3Pose(0, 0, 0, new Quat());
  }

  /**
   * Returns a 3x1 NdArray representing the translation only of the current SE3Pose.
   */
  getTranslation() {
    return array([this.x, this.y, this.z]);
  }

  /**
   * This creates the adjoint matrix for the current SE3Pose.
   *
   * The adjoint matrix can be used to change reference frames for a SE(3) velocity vector. For example, if you have
   * SE3Velocity velocity_in_frame_b, then the adjoint matrix for the SE3Pose (representing a_tform_b) can be used as
   * follows to transform the velocity: velocity_in_frame_a = a_tform_b.toAdjointMatrix() * velocity_in_frame_b
   */
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

  /**
   * Compute the closest SE2Pose from the current SE3Pose.
   */
  getClosestSe2Transform() {
    const se2Angle = this.rot.closestYawOnlyQuaternion().toYaw();
    return new SE2Pose(this.x, this.y, se2Angle);
  }

  /**
   * Performs a blend of two SE3Poses. Out = a * (1 - fraction) + b * fraction
   */
  static interp(a, b, fraction) {
    const x = a.x * (1.0 - fraction) + b.x * fraction;
    const y = a.y * (1.0 - fraction) + b.y * fraction;
    const z = a.z * (1.0 - fraction) + b.z * fraction;
    const rot = Quat.slerp(a.rot, b.rot, fraction);
    return new SE3Pose(x, y, z, rot);
  }
}

/**
 * Class representing a Quaternion.
 */
class Quat {
  constructor(w = 1, x = 0, y = 0, z = 0) {
    this.w = w;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  toString() {
    return `W: ${_fixed(this.w, 4)} X: ${_fixed(this.x, 4)} Y: ${_fixed(this.y, 4)} Z: ${_fixed(this.z, 4)}`;
  }

  inspect() {
    return this.toString();
  }

  /**
   * Computes the inverse of the current Quat.
   */
  inverse() {
    return new Quat(this.w, -this.x, -this.y, -this.z);
  }

  /**
   * Computes the transformation (rotation by the quaternion) of a single (x,y,z) point using the current Quat.
   */
  transformPoint(x, y, z) {
    const inv = this.inverse();
    let q = new Quat(0, x, y, z);
    q = q.mult(inv);
    q = this.mult(q);
    return [q.x, q.y, q.z];
  }

  /**
   * Rotate a vector: a math Vec3 or a geometry Vec3 proto.
   * @param {Vec3|geometryPb.Vec3} vec3
   * @returns {geometryPb.Vec3}
   */
  transformVec3(vec3) {
    const [x, y, z] = this.transformPoint(..._xyz(vec3));
    return new geometryPb.Vec3().setX(x).setY(y).setZ(z);
  }

  /**
   * Creates the 3x3 rotation matrix from the current Quat
   */
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

  /**
   * Creates a Quat from a 3x3 rotation matrix (a numjs matrix or an array of rows).
   * @param {NdArray|number[][]} matrix
   * @returns {Quat}
   */
  static fromMatrix(matrix) {
    const rot = { get: (i, j) => _matGet(matrix, i, j) };
    const wt = 1 + rot.get(0, 0) + rot.get(1, 1) + rot.get(2, 2);
    // Do this most often so we get consistently signed quaternions.
    if (wt > 0.1) return Quat._fromMatrixW(rot);
    const xt = 1 + rot.get(0, 0) - rot.get(1, 1) - rot.get(2, 2);
    const yt = 1 - rot.get(0, 0) + rot.get(1, 1) - rot.get(2, 2);
    const zt = 1 - rot.get(0, 0) - rot.get(1, 1) + rot.get(2, 2);
    // The largest of wt, xt, yt and zt gives the best conversion numerically.
    const t = [
      [Quat._fromMatrixW, wt],
      [Quat._fromMatrixX, xt],
      [Quat._fromMatrixY, yt],
      [Quat._fromMatrixZ, zt],
    ];
    // The pair with the largest value (`[0]` took its function: a TypeError for rotations of about 162° or more).
    const [fromMatrixCoord, val] = t.reduce((best, entry) => (entry[1] > best[1] ? entry : best));

    if (val < 1e-6) {
      throw new ArithmeticError(
        `[MATH HELPERS] Matrix cannot be converged to quaternion. 
        Are you sure this is a valid rotation matrix? \n${JSON.stringify(matrix)}`,
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

  /**
   * Computes a representative Quat from the Euler angle for roll.
   */
  static fromRoll(angle) {
    return new Quat(Math.cos(angle / 2.0), Math.sin(angle / 2.0));
  }

  /**
   * Computes a representative Quat from the Euler angle for pitch.
   */
  static fromPitch(angle) {
    return new Quat(Math.cos(angle / 2.0), undefined, Math.sin(angle / 2.0));
  }

  /**
   * Computes a representative Quat from the Euler angle for yaw.
   */
  static fromYaw(angle) {
    return new Quat(Math.cos(angle / 2.0), undefined, undefined, Math.sin(angle / 2.0));
  }

  /**
   * Computes the Euler angle roll from the current Quat
   */
  toRoll() {
    const d = this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z;
    if (d === 0.0 || d === 0) return 0.0;
    const t0 = 2.0 * (this.w * this.x + this.y * this.z);
    const t1 = 1.0 - 2.0 * (this.x * this.x + this.y * this.y);
    return Math.atan2(t0, t1);
  }

  /**
   * Computes the Euler angle pitch from the current Quat
   */
  toPitch() {
    const d = this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z;
    if (d === 0.0 || d === 0) return 0.0;
    let t2 = 2.0 * (this.w * this.y - this.z * this.x);
    if (t2 < -1.0) t2 = -1.0;
    if (t2 > 1.0) t2 = 1.0;
    return Math.asin(t2);
  }

  /**
   * Computes the Euler angle yaw from the current Quat
   */
  toYaw() {
    const yawOnlyQuat = this.closestYawOnlyQuaternion();
    return recenterAngleMod(2 * Math.atan2(yawOnlyQuat.z, yawOnlyQuat.w), 0);
  }

  /**
   * Computes the angle and the respective axis from the Quat
   */
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

  /**
   * Create a Quat from a geometryPb.Quaternion proto.
   */
  static fromProto(proto) {
    return new Quat(proto.getW(), proto.getX(), proto.getY(), proto.getZ());
  }

  /** @deprecated Use fromProto instead (like Python since 3.1.0). */
  static fromObj(proto) {
    return Quat.fromProto(proto);
  }

  /**
   * Adds the Quat properties into the geometryPb.Quaternion 'proto'.
   */
  toObj(proto) {
    proto.setW(this.w).setX(this.x).setY(this.y).setZ(this.z);
  }

  /**
   * Converts the Quat into an output of the protobuf geometryPb.Quaternion.
   */
  toProto() {
    return new geometryPb.Quaternion().setX(this.x).setY(this.y).setZ(this.z).setW(this.w);
  }

  /**
   * Computes the multiplication of two Quats.
   */
  mult(otherQuat) {
    // Like Python's mult(), any object with w, x, y and z: e.g. a Quaternion proto.
    if (otherQuat instanceof geometryPb.Quaternion) otherQuat = Quat.fromProto(otherQuat);
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
    throw new TypeError(`Can't multiply types Quat and ${otherQuat?.constructor?.name ?? typeof otherQuat}.`);
  }

  /**
   * Normalizes the quaternion.
   * @returns {Quat}
   */
  normalize() {
    // Without numjs (about 52 times faster).
    const len = Math.hypot(this.w, this.x, this.y, this.z);
    if (len < 1e-15) {
      [this.w, this.x, this.y, this.z] = [1, 0, 0, 0];
    } else {
      [this.w, this.x, this.y, this.z] = [this.w / len, this.x / len, this.y / len, this.z / len];
    }
    return this;
  }

  /**
   * Computes a yaw-only Quat from the current roll/pitch/yaw Quat
   */
  closestYawOnlyQuaternion() {
    const mag = Math.sqrt(this.w * this.w + this.z * this.z);
    if (mag > 0) {
      return new Quat(this.w / mag, 0, 0, this.z / mag);
    } else {
      return new Quat(0, 0, 1, 0).mult(this);
    }
  }

  /**
   * Spherical linear interpolation between two quaternions (it always threw).
   * @param {Quat} a
   * @param {Quat} b
   * @param {number} fraction The blending factor, in [0, 1].
   * @returns {Quat}
   */
  static slerp(a, b, fraction) {
    let v0 = [a.w, a.x, a.y, a.z];
    const v1 = [b.w, b.x, b.y, b.z];
    let dotRes = v0.reduce((sum, value, i) => sum + value * v1[i], 0);

    // If the dot product is negative, slerp will not take the shorter path. Note that v1 and -v1 are equivalent
    // when the negation is applied to all four components. Fix by reversing one quaternion.
    if (dotRes < 0) {
      v0 = v0.map(value => -value);
      dotRes = -dotRes;
    }

    const DOT_THRESHOLD = 1.0 - 1e-4;
    let result;
    if (dotRes > DOT_THRESHOLD) {
      // If the inputs are too close for comfort, linearly interpolate and normalize the result.
      result = v0.map((value, i) => value + fraction * (v1[i] - value));
      const norm = Math.hypot(...result);
      result = result.map(value => value / norm);
    } else {
      // Since dot is in range [0, DOT_THRESHOLD], acos is safe.
      // theta0 = angle between input vectors, theta = angle between v0 and result.
      const theta0 = Math.acos(dotRes);
      const theta = theta0 * fraction;
      const sinTheta = Math.sin(theta);
      const sinTheta0 = Math.sin(theta0);

      // == sin(theta0 - theta) / sin(theta0)
      const s0 = Math.cos(theta) - (dotRes * sinTheta) / sinTheta0;
      const s1 = sinTheta / sinTheta0;

      result = v0.map((value, i) => s0 * value + s1 * v1[i]);
    }
    return new Quat(result[0], result[1], result[2], result[3]);
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
    const max_u = Math.max(Math.abs(uIn.x), Math.abs(uIn.y), Math.abs(uIn.z));
    const max_v = Math.max(Math.abs(vIn.x), Math.abs(vIn.y), Math.abs(vIn.z));
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
      // u.add(v): `u + v` concatenated two strings.
      const c = u.cross(u.add(v));
      const maxC = Math.max(Math.abs(c.x), Math.abs(c.y), Math.abs(c.z));
      if (maxC === 0) {
        // We pick an orthogonal axis, avoiding the smallest one (the last branches were those of maxC !== 0).
        if (Math.abs(u.x) > Math.abs(u.y)) {
          if (Math.abs(u.y) > Math.abs(u.z)) {
            return new Quat(0, -u.y, u.x, 0).normalize();
          }
          return new Quat(0, u.z, 0, -u.x).normalize();
        } else if (Math.abs(u.x) > Math.abs(u.z)) {
          return new Quat(0, -u.y, u.x, 0).normalize();
        }
        return new Quat(0, 0, -u.z, u.y).normalize();
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

/**
 * Gets the x,y,z yaw of B in A from the SE3Pose protobuf message.
 */
function poseToXyzYaw(ATformB) {
  // Like Python, unset fields read as 0 (an unset rotation gives a yaw of 0).
  const yaw = ATformB.getRotation() ? Quat.fromProto(ATformB.getRotation()).toYaw() : 0;
  const [x, y, z] = ATformB.getPosition() ? _xyz(ATformB.getPosition()) : [0, 0, 0];
  return [x, y, z, yaw];
}

/**
 * Determines whether the given SE3 pose is small enough in X, Y, and theta.
 */
function isWithinThreshold(pose3d, maxTranslationmeters, maxYawDegrees) {
  // fromProto: from_obj does not exist in JavaScript.
  const delta = SE2Pose.flatten(SE3Pose.fromProto(pose3d));
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

/**
 * The 3x3 skew symmetric matrix of a vector (a geometry Vec3 proto or a math Vec3).
 * @param {geometryPb.Vec3|Vec3} vec3Proto
 * @returns {NdArray}
 */
function skewMatrix3d(vec3Proto) {
  const [x, y, z] = _xyz(vec3Proto);
  return array([
    [0, -z, y],
    [z, 0, -x],
    [-y, x, 0],
  ]);
}

/**
 * The 1x2 skew symmetric matrix of a vector (a geometry Vec2 proto or a math Vec2).
 * @param {geometryPb.Vec2|Vec2} vec2Proto
 * @returns {NdArray}
 */
function skewMatrix2d(vec2Proto) {
  const [x, y] = _xy(vec2Proto);
  return array([[y, -x]]);
}

/**
 * Converts a geometryPb.Matrix or geometryPb.Matrixf to a ndarray.
 * @param {geometryPb.Matrix|geometryPb.Matrixf} proto
 * @returns {array}
 */
function matrixFromProto(proto) {
  return array(proto.getValuesList()).reshape(proto.getRows(), proto.getCols());
}

/**
 * Changes the frame that the SE(2) Velocity is expressed in. More specifically, it converts the SE(2) Velocity in frame
 * b to a SE(2) Velocity in frame c using the adjoint matrix a_adjoint_b.
 */
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

/**
 * Changes the frame that the SE(3) Velocity is expressed in. More specifically, it converts the SE(3) Velocity in frame
 * b to a SE(3) Velocity in frame c using the adjoint matrix a_adjoint_b.
 */
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

/**
 * Convert a Quat object into Euler yaw, pitch, roll angles (radians).
 */
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
  matrixFromProto,
  transformSe2velocity,
  transformSe3velocity,
  quatToEulerZYX,
  recenterValueMod,
  recenterAngleMod,
};
