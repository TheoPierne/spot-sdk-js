/**
 * Orientation represented by Yaw('Z')-Roll('X')-Pitch('Y') order Euler angles. Each angle is expressed in radians.
 */
export class EulerZXY {
    constructor(yaw?: number, roll?: number, pitch?: number);
    yaw: number;
    roll: number;
    pitch: number;
    /**
     * Transform an Euler ZXY to a quaternion, with the formulas of Python.
     * @returns {geometryPb.Quaternion}
     */
    toQuaternion(): geometryPb.Quaternion;
}
import geometryPb = require("../../src/bosdyn/api/geometry_pb");
