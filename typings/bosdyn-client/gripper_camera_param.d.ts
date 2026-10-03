export type GripperCameraParamRequest = import("../../src/bosdyn/api/gripper_camera_param_pb").GripperCameraParamRequest;
export type GripperCameraParamResponse = import("../../src/bosdyn/api/gripper_camera_param_pb").GripperCameraParamResponse;
export type GripperCameraGetParamRequest = import("../../src/bosdyn/api/gripper_camera_param_pb").GripperCameraGetParamRequest;
export type GripperCameraGetParamResponse = import("../../src/bosdyn/api/gripper_camera_param_pb").GripperCameraGetParamResponse;
export type SetGripperCameraCalibrationRequest = import("../../src/bosdyn/api/gripper_camera_param_pb").SetGripperCameraCalibrationRequest;
export type SetGripperCameraCalibrationResponse = import("../../src/bosdyn/api/gripper_camera_param_pb").SetGripperCameraCalibrationResponse;
export type GetGripperCameraCalibrationRequest = import("../../src/bosdyn/api/gripper_camera_param_pb").GetGripperCameraCalibrationRequest;
export type GetGripperCameraCalibrationResponse = import("../../src/bosdyn/api/gripper_camera_param_pb").GetGripperCameraCalibrationResponse;
/**
 * @typedef {import('../../src/bosdyn/api/gripper_camera_param_pb').GripperCameraParamRequest} GripperCameraParamRequest
 * @typedef {import('../../src/bosdyn/api/gripper_camera_param_pb').GripperCameraParamResponse} GripperCameraParamResponse
 * @typedef {import('../../src/bosdyn/api/gripper_camera_param_pb').GripperCameraGetParamRequest} GripperCameraGetParamRequest
 * @typedef {import('../../src/bosdyn/api/gripper_camera_param_pb').GripperCameraGetParamResponse} GripperCameraGetParamResponse
 * @typedef {import('../../src/bosdyn/api/gripper_camera_param_pb').SetGripperCameraCalibrationRequest} SetGripperCameraCalibrationRequest
 * @typedef {import('../../src/bosdyn/api/gripper_camera_param_pb').SetGripperCameraCalibrationResponse} SetGripperCameraCalibrationResponse
 * @typedef {import('../../src/bosdyn/api/gripper_camera_param_pb').GetGripperCameraCalibrationRequest} GetGripperCameraCalibrationRequest
 * @typedef {import('../../src/bosdyn/api/gripper_camera_param_pb').GetGripperCameraCalibrationResponse} GetGripperCameraCalibrationResponse
 */
/**
 * Client for the Gripper Camera Parameter service.
 * @extends {BaseClient<GripperCameraParamServiceClient>}
 */
export class GripperCameraParamClient extends BaseClient<GripperCameraParamServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Issue a gripper camera parameter command to the robot.
     * @param {GripperCameraParamRequest} gripperCameraParamRequest
     * The gripper camera param request
     * @param {Object} [args] The args to be send with the gRPC request
     * @returns {Promise<GripperCameraParamResponse>}
     */
    setCameraParams(gripperCameraParamRequest: GripperCameraParamRequest, args?: Object): Promise<GripperCameraParamResponse>;
    /**
     * Issue a request to get the current gripper camera parameters from the robot.
     * @param {GripperCameraGetParamRequest} gripperCameraGetParamRequest
     * The gripper camera get param request
     * @param {Object} [args] The args to be send with the gRPC request
     * @returns {Promise<GripperCameraGetParamResponse>}
     */
    getCameraParams(gripperCameraGetParamRequest: GripperCameraGetParamRequest, args?: Object): Promise<GripperCameraGetParamResponse>;
    /**
     * Issue gripper camera calibration
     * @param {SetGripperCameraCalibrationRequest} setGripperCameraCalibRequest The command request to set gripper camera
     * calibration
     * @param {Object} [args] The args to be send with the gRPC request
     * @returns {Promise<SetGripperCameraCalibrationResponse>}
     */
    setCameraCalib(setGripperCameraCalibRequest: SetGripperCameraCalibrationRequest, args?: Object): Promise<SetGripperCameraCalibrationResponse>;
    /**
     * Issue gripper camera get calibration
     * @param {GetGripperCameraCalibrationRequest} getGripperCameraCalibRequest
     * @param {Object} [args] The args to be send with the gRPC request
     * @returns {Promise<GetGripperCameraCalibrationResponse>}
     */
    getCameraCalib(getGripperCameraCalibRequest: GetGripperCameraCalibrationRequest, args?: Object): Promise<GetGripperCameraCalibrationResponse>;
}
import { GripperCameraParamServiceClient } from "../../src/bosdyn/api/gripper_camera_param_service_grpc_pb";
import { BaseClient } from "./common";
