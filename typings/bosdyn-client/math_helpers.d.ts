/**
 * Class representing a two-dimensional vector.
 */
export class Vec2 {
    /**
     * Create a Vec2 from a geometryPb.Vec2 proto.
     */
    static fromProto(proto: any): Vec2;
    constructor(x: any, y: any);
    x: any;
    y: any;
    set 0(value: any);
    get 0(): any;
    set 1(value: any);
    get 1(): any;
    toString(): string;
    negative(): Vec2;
    multiply(other: any): Vec2;
    divide(other: any): Vec2;
    add(other: any): Vec2;
    substract(other: any): Vec2;
    get length(): number;
    /**
     * Converts the Vec2 into an output of the protobuf geometryPb.Vec2.
     */
    toProto(): geometryPb.Vec2;
    dot(other: any): number;
    cross(other: any): number;
    [Symbol.iterator](): Generator<any, void, unknown>;
}
/**
 * Class representing a three-dimensional vector.
 */
export class Vec3 {
    /**
     * Create a Vec3 from a numjs array (of shape (3) or (3, 1)) or an array, like from_numpy() in Python.
     * @param {NdArray|number[]} arr
     * @returns {Vec3}
     */
    static fromNumpy(arr: NdArray | number[]): Vec3;
    /**
     * Create a Vec3 from a geometryPb.Vec3 proto.
     */
    static fromProto(proto: any): Vec3;
    constructor(x: any, y: any, z: any);
    x: any;
    y: any;
    z: any;
    set 0(value: any);
    get 0(): any;
    set 1(value: any);
    get 1(): any;
    set 2(value: any);
    get 2(): any;
    toString(): string;
    /**
     * Converts the Vec3 into a numjs array, like to_numpy() in Python.
     * @returns {NdArray}
     */
    toNumpy(): NdArray;
    negative(): Vec3;
    multiply(other: any): Vec3;
    divide(other: any): Vec3;
    add(other: any): Vec3;
    substract(other: any): Vec3;
    get length(): number;
    /**
     * Converts the Vec3 into an output of the protobuf geometryPb.Vec3.
     */
    toProto(): geometryPb.Vec3;
    dot(other: any): number;
    cross(other: any): Vec3;
    [Symbol.iterator](): Generator<any, void, unknown>;
}
/**
 * Class representing an SE2Pose with position and angle.
 */
export class SE2Pose {
    /**
     * Flatten a given SE3Pose to an SE2Pose. This will lose height information if the se3pose provided is not gravity
     * aligned. The common gravity aligned frames are odom, vision, and flat_body.
     */
    static flatten(se3pose: any): SE2Pose;
    /**
     * Extract SE2Pose from a 3x3 matrix
     */
    static fromMatrix(mat: any): SE2Pose;
    /**
     * Create a SE2Pose from a geometryPb.SE2Pose proto.
     */
    static fromProto(tform: any): SE2Pose;
    /** @deprecated Use fromProto instead (like Python since 3.1.0). */
    static fromObj(tform: any): SE2Pose;
    constructor(x: any, y: any, angle: any);
    x: any;
    y: any;
    angle: any;
    toString(): string;
    /**
     * Adds the SE2Pose properties into the geometryPb.SE2Pose 'proto'.
     */
    toObj(proto: any): void;
    /**
     * Converts the SE2Pose into an output of the protobuf geometryPb.SE2Pose.
     */
    toProto(): geometryPb.SE2Pose;
    /**
     * Compute the inverse of the SE2Pose.
     *
     * For example, if the SE(2) pose represented a_tform_b, then the inverse pose is b_tform_a.
     */
    inverse(): SE2Pose;
    /**
     * Computes the multiplication between the current SE2Pose and the input se2pose.
     *
     * For example, if this SE2Pose represents a_tform_b and the input se2pose represents b_tform_c, then the output will
     * represent the transform a_tform_c.
     */
    mult(other: any): Vec2 | SE2Pose;
    /**
     * Returns the rotation matrix generate from the angle of the current SE(2) Pose.
     */
    toRotMatrix(): NdArray;
    /**
     * Returns the 3x3 matrix to transform a 2D point (in generalized coordinates).
     */
    toMatrix(): NdArray;
    /**
     * This creates the adjoint matrix for the current SE2Pose.
     *
     * The adjoint matrix can be used to change reference frames for a SE(2) velocity vector. For example, if you have
     * SE2Velocity velocity_in_frame_b, then the adjoint matrix for the SE2Pose (representing a_tform_b) can be used as
     * follows to transform the velocity: velocity_in_frame_a = a_tform_b.toAdjointMatrix() * velocity_in_frame_b
     */
    toAdjointMatrix(): NdArray;
    /**
     * Property to allow attribute access of the protobuf message field 'position' similar to the geometryPb.SE2Pose for
     * the SE2Pose.
     */
    get position(): geometryPb.Vec2;
    /**
     * Compute the closest SE3Pose from the current SE2Pose.
     */
    getClosestSe3Transform(heightZ?: number): SE3Pose;
}
/**
 * Class representing an SE2Velocity with linear velocity and angular velocity.
 */
export class SE2Velocity {
    /**
     * Converts a 3x1 velocity vector (of either an NdArray or a list) into a SE2Velocity object.
     */
    static fromVector(se2VelVector: any): SE2Velocity | null;
    /**
     * Create a SE2Velocity from a geometryPb.SE2Velocity proto.
     */
    static fromProto(vel: any): SE2Velocity;
    /** @deprecated Use fromProto instead (like Python since 3.1.0). */
    static fromObj(vel: any): SE2Velocity;
    constructor(x: any, y: any, angular: any);
    linearVelocityX: any;
    linearVelocityY: any;
    angularVelocity: any;
    toString(): string;
    /**
     * Adds the SE2Velocity properties into the geometryPb.SE2Velocity 'proto'.
     */
    toObj(proto: any): void;
    /**
     * Converts the SE2Velocity into an output of the protobuf geometryPb.SE2Velocity.
     */
    toProto(): geometryPb.SE2Velocity;
    /**
     * Creates a 3x1 velocity vector as an NdArray.
     */
    toVector(): NdArray;
    /**
     * Property to allow attribute access of the protobuf message field 'linear' similar to the geometryPb.SE2Velocity for
     * the SE2Velocity.
     */
    get linear(): geometryPb.Vec2;
    /**
     * Property to allow attribute access of the protobuf message field 'angular' similar to the geometryPb.SE2Velocity
     * for the SE2Velocity.
     */
    get angular(): any;
}
/**
 * Class representing an SE3Velocity with linear velocity and angular velocity.
 */
export class SE3Velocity {
    /**
     * Create a SE3Velocity from a geometryPb.SE3Velocity proto.
     */
    static fromProto(vel: any): SE3Velocity;
    /** @deprecated Use fromProto instead (like Python since 3.1.0). */
    static fromObj(vel: any): SE3Velocity;
    /**
     * Converts a 6x1 velocity vector (of either an NdArray or a list) into a SE3Velocity object.
     */
    static fromVector(se3VelVector: any): SE3Velocity | null;
    constructor(linX: any, linY: any, linZ: any, angX: any, angY: any, angZ: any);
    linearVelocityX: any;
    linearVelocityY: any;
    linearVelocityZ: any;
    angularVelocityX: any;
    angularVelocityY: any;
    angularVelocityZ: any;
    toString(): string;
    /**
     * Adds the SE3Velocity properties into the geometryPb.SE3Velocity 'proto'.
     */
    toObj(proto: any): void;
    /**
     * Converts the SE3Velocity into an output of the protobuf geometryPb.SE3Velocity.
     */
    toProto(): geometryPb.SE3Velocity;
    /**
     * Creates a 6x1 velocity vector as an NdArray.
     */
    toVector(): NdArray;
    /**
     * Property to allow attribute access of the protobuf message field 'linear' similar to the geometryPb.SE3Velocity for
     * the SE3Velocity.
     */
    get linear(): geometryPb.Vec3;
    /**
     * Property to allow attribute access of the protobuf message field 'angular' similar to the geometryPb.SE3Velocity
     * for the SE3Velocity.
     */
    get angular(): geometryPb.Vec3;
}
/**
 * Class representing an SE3Pose with position and rotation.
 */
export class SE3Pose {
    /**
     * Create a SE3Pose from a geometryPb.SE3Pose proto.
     */
    static fromProto(tform: any): SE3Pose;
    /** @deprecated Use fromProto instead (like Python since 3.1.0). */
    static fromObj(tform: any): SE3Pose;
    static fromSe2(tform: any, z?: number): SE3Pose;
    /**
     * Transform points with a 4x4 transform matrix, like Python's numpy.dot(points, rot.T) + trans.
     * @param {NdArray|number[][]} transform The 4x4 matrix.
     * @param {NdArray|number[][]} points The Nx3 points.
     * @returns {NdArray} The Nx3 transformed points.
     */
    static transformCloudFromMatrix(transform: NdArray | number[][], points: NdArray | number[][]): NdArray;
    /**
     * Extract an SE3Pose from a 4x4 matrix (a numjs matrix or an array of rows).
     * @param {NdArray|number[][]} mat
     * @returns {SE3Pose}
     */
    static fromMatrix(mat: NdArray | number[][]): SE3Pose;
    /**
     * Create a SE3Pose representing the identity SE(3) pose.
     */
    static fromIdentity(): SE3Pose;
    /**
     * Performs a blend of two SE3Poses. Out = a * (1 - fraction) + b * fraction
     */
    static interp(a: any, b: any, fraction: any): SE3Pose;
    constructor(x: any, y: any, z: any, rot: any);
    /** @type {number} */
    x: number;
    /** @type {number} */
    y: number;
    /** @type {number} */
    z: number;
    /** @type {Quat} */
    rot: Quat;
    toString(): string;
    /**
     * Adds the SE3Pose properties into the geometryPb.SE3Pose 'proto'.
     */
    toObj(proto: any): void;
    /**
     * Converts the SE3Pose into an output of the protobuf geometryPb.SE3Pose.
     */
    toProto(): geometryPb.SE3Pose;
    /**
     * Compute the inverse of the SE3Pose.
     *
     * For example, if the SE(3) pose represented a_tform_b, then the inverse pose is b_tform_a.
     */
    inverse(): SE3Pose;
    /**
     * Compute the transformation (translation and rotation) of a (x,y,z) vector using the current SE(3) pose.
     */
    transformPoint(x?: number, y?: number, z?: number): number[];
    /**
     * Transform a vector: a math Vec3 or a geometry Vec3 proto (a proto was read as (0, 0, 0)).
     * @param {Vec3|geometryPb.Vec3} vec3
     * @returns {geometryPb.Vec3}
     */
    transformVec3(vec3: Vec3 | geometryPb.Vec3): geometryPb.Vec3;
    /**
     * Compute the transformation (translation and rotation) of multiple vector/points using the current SE3Pose.
     */
    transformCloud(points: any): NdArray;
    /**
     * Returns the 4x4 matrix to transform a 3D point (in generalized coordinates).
     * @returns {NdArray}
     */
    toMatrix(): NdArray;
    /**
     * Calculates the Euclidean norm (magnitude) of the translation component pose.
     * @returns {number}
     */
    translationNorm(): number;
    /**
     * Computes the multiplication between the current math_helpers.SE3Pose and the input se3pose.
     *
     * For example, if the 'this' SE3Pose represents a_tform_b and the input se3pose represents b_tform_c,
     * then the output will represent the transform a_tform_c.
     * @param {SE3Pose} other
     * @returns {SE3Pose}
     */
    mult(other: SE3Pose): SE3Pose;
    /**
     * Property to allow attribute access of the protobuf message field 'position' similar to the geometryPb.SE3Pose for
     * the SE3Pose.
     */
    get position(): geometryPb.Vec3;
    /**
     * Property to allow attribute access of the protobuf message field 'rotation' similar to the geometryPb.SE3Pose for
     * the SE3Pose.
     */
    get rotation(): Quat;
    /**
     * Returns a 3x1 NdArray representing the translation only of the current SE3Pose.
     */
    getTranslation(): NdArray;
    /**
     * This creates the adjoint matrix for the current SE3Pose.
     *
     * The adjoint matrix can be used to change reference frames for a SE(3) velocity vector. For example, if you have
     * SE3Velocity velocity_in_frame_b, then the adjoint matrix for the SE3Pose (representing a_tform_b) can be used as
     * follows to transform the velocity: velocity_in_frame_a = a_tform_b.toAdjointMatrix() * velocity_in_frame_b
     */
    toAdjointMatrix(): NdArray;
    /**
     * Compute the closest SE2Pose from the current SE3Pose.
     */
    getClosestSe2Transform(): SE2Pose;
    [Symbol.iterator](): {
        next: () => {
            value: number;
            done: boolean;
        } | {
            done: boolean;
            value?: undefined;
        };
    };
}
/**
 * Class representing a Quaternion.
 */
export class Quat {
    /**
     * Creates a Quat from a 3x3 rotation matrix (a numjs matrix or an array of rows).
     * @param {NdArray|number[][]} matrix
     * @returns {Quat}
     */
    static fromMatrix(matrix: NdArray | number[][]): Quat;
    static _fromMatrixW(rot: any): Quat;
    static _fromMatrixX(rot: any): Quat;
    static _fromMatrixY(rot: any): Quat;
    static _fromMatrixZ(rot: any): Quat;
    /**
     * Computes a representative Quat from the Euler angle for roll.
     */
    static fromRoll(angle: any): Quat;
    /**
     * Computes a representative Quat from the Euler angle for pitch.
     */
    static fromPitch(angle: any): Quat;
    /**
     * Computes a representative Quat from the Euler angle for yaw.
     */
    static fromYaw(angle: any): Quat;
    /**
     * Create a Quat from a geometryPb.Quaternion proto.
     */
    static fromProto(proto: any): Quat;
    /** @deprecated Use fromProto instead (like Python since 3.1.0). */
    static fromObj(proto: any): Quat;
    /**
     * Spherical linear interpolation between two quaternions (it always threw).
     * @param {Quat} a
     * @param {Quat} b
     * @param {number} fraction The blending factor, in [0, 1].
     * @returns {Quat}
     */
    static slerp(a: Quat, b: Quat, fraction: number): Quat;
    /**
     * Returns a quaternion representing the rotation from u to v.
     * @param {Vec3} uIn An instance of Vec3
     * @param {Vec3} vIn An instance of Vec3
     * @returns {Quat}
     */
    static fromTwoVectors(uIn: Vec3, vIn: Vec3): Quat;
    constructor(w?: number, x?: number, y?: number, z?: number);
    w: number;
    x: number;
    y: number;
    z: number;
    toString(): string;
    inspect(): string;
    /**
     * Computes the inverse of the current Quat.
     */
    inverse(): Quat;
    /**
     * Computes the transformation (rotation by the quaternion) of a single (x,y,z) point using the current Quat.
     */
    transformPoint(x: any, y: any, z: any): number[];
    /**
     * Rotate a vector: a math Vec3 or a geometry Vec3 proto.
     * @param {Vec3|geometryPb.Vec3} vec3
     * @returns {geometryPb.Vec3}
     */
    transformVec3(vec3: Vec3 | geometryPb.Vec3): geometryPb.Vec3;
    /**
     * Creates the 3x3 rotation matrix from the current Quat
     */
    toMatrix(): NdArray;
    /**
     * Computes the Euler angle roll from the current Quat
     */
    toRoll(): number;
    /**
     * Computes the Euler angle pitch from the current Quat
     */
    toPitch(): number;
    /**
     * Computes the Euler angle yaw from the current Quat
     */
    toYaw(): any;
    /**
     * Computes the angle and the respective axis from the Quat
     */
    toAxisAngle(): (number | number[])[];
    /**
     * Adds the Quat properties into the geometryPb.Quaternion 'proto'.
     */
    toObj(proto: any): void;
    /**
     * Converts the Quat into an output of the protobuf geometryPb.Quaternion.
     */
    toProto(): geometryPb.Quaternion;
    /**
     * Computes the multiplication of two Quats.
     */
    mult(otherQuat: any): Vec3 | Quat;
    /**
     * Normalizes the quaternion.
     * @returns {Quat}
     */
    normalize(): Quat;
    /**
     * Computes a yaw-only Quat from the current roll/pitch/yaw Quat
     */
    closestYawOnlyQuaternion(): Vec3 | Quat;
    conj(): Quat;
}
/**
 * Gets the x,y,z yaw of B in A from the SE3Pose protobuf message.
 */
export function poseToXyzYaw(ATformB: any): any[];
/**
 * Determines whether the given SE3 pose is small enough in X, Y, and theta.
 */
export function isWithinThreshold(pose3d: any, maxTranslationmeters: any, maxYawDegrees: any): boolean;
export function recenterAngle(q: any, lowerLimit: any, upperLimit: any): any;
export function angleDiff(a1: any, a2: any): any;
export function angleDiffDegrees(a1: any, a2: any): any;
export function radiansToDegrees(radians: any): number;
/**
 * The 3x3 skew symmetric matrix of a vector (a geometry Vec3 proto or a math Vec3).
 * @param {geometryPb.Vec3|Vec3} vec3Proto
 * @returns {NdArray}
 */
export function skewMatrix3d(vec3Proto: geometryPb.Vec3 | Vec3): NdArray;
/**
 * The 1x2 skew symmetric matrix of a vector (a geometry Vec2 proto or a math Vec2).
 * @param {geometryPb.Vec2|Vec2} vec2Proto
 * @returns {NdArray}
 */
export function skewMatrix2d(vec2Proto: geometryPb.Vec2 | Vec2): NdArray;
/**
 * Converts a geometryPb.Matrix or geometryPb.Matrixf to a ndarray.
 * @param {geometryPb.Matrix|geometryPb.Matrixf} proto
 * @returns {array}
 */
export function matrixFromProto(proto: geometryPb.Matrix | geometryPb.Matrixf): typeof NdArray.new;
/**
 * Changes the frame that the SE(2) Velocity is expressed in. More specifically, it converts the SE(2) Velocity in frame
 * b to a SE(2) Velocity in frame c using the adjoint matrix a_adjoint_b.
 */
export function transformSe2velocity(aAdjointBMatrix: any, se2VelocityInB: any): SE2Velocity | null;
/**
 * Changes the frame that the SE(3) Velocity is expressed in. More specifically, it converts the SE(3) Velocity in frame
 * b to a SE(3) Velocity in frame c using the adjoint matrix a_adjoint_b.
 */
export function transformSe3velocity(aAdjointBMatrix: any, se3VelocityInB: any): SE3Velocity | null;
/**
 * Convert a Quat object into Euler yaw, pitch, roll angles (radians).
 */
export function quatToEulerZYX(q: any): number[];
export function recenterValueMod(value: any, center: any, amplitude: any): any;
export function recenterAngleMod(theta: any, center: any): any;
import geometryPb = require("../../src/bosdyn/api/geometry_pb");
import { NdArray } from "@d4c/numjs/build/main/lib";
