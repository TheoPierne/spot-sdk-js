export type Lease = import("./lease").Lease;
/**
 * @typedef {import('./lease').Lease} Lease
 */
/** General class of errors for SpotCheck service. */
export class SpotCheckError extends ResponseError {
}
/** General class of errors for spot check routines. */
export class SpotCheckResponseError extends SpotCheckError {
}
/** Power error occurred while running spot check. */
export class SpotCheckUnexpectedPowerChangeError extends SpotCheckResponseError {
}
/** IMU reports robot is not on flat ground. */
export class SpotCheckImuCheckError extends SpotCheckResponseError {
}
/** Robot not started in sitting configuration. */
export class SpotCheckNotSittingError extends SpotCheckResponseError {
}
/** Internal time out during spot check loadcell cal. */
export class SpotCheckLoadcellTimeoutError extends SpotCheckResponseError {
}
/** Power on error occurred while running spot check. */
export class SpotCheckPowerOnFailure extends SpotCheckResponseError {
}
/** Internal time out during spot check endstop cal. */
export class SpotCheckEndstopTimeoutError extends SpotCheckResponseError {
}
/** Robot failed to stand during spotcheck. */
export class SpotCheckStandFailureError extends SpotCheckResponseError {
}
/** Internal time out during spot check camera check. */
export class SpotCheckCameraTimeoutError extends SpotCheckResponseError {
}
/** Robot failed flat ground check. */
export class SpotCheckGroundCheckError extends SpotCheckResponseError {
}
/**
 * Timed out waiting for SUCCESS response from spot check.
 */
export class SpotCheckTimedOutError extends Error {
    constructor(msg: any);
}
/** Timed out waiting for SUCCESS response from camera spot check (not used, like in Python). */
export class CameraSpotCheckTimedOutError extends Error {
    constructor(msg: any);
}
/** General class of errors for camera spot check feedback (not used, like in Python). */
export class CameraSpotCheckFeedbackError extends Error {
    constructor(msg: any);
}
/** General class of errors for camera calibration routines. */
export class CameraCalibrationResponseError extends SpotCheckError {
}
/** API client canceled calibration. */
export class CameraCalibrationUserCanceledError extends CameraCalibrationResponseError {
}
/** The robot is not powered on. */
export class CameraCalibrationPowerError extends CameraCalibrationResponseError {
}
/** Invalid starting configuration of robot. */
export class CameraCalibrationTargetNotCenteredError extends CameraCalibrationResponseError {
}
/** Robot command error occurred while running calibration. */
export class CameraCalibrationRobotCommandError extends CameraCalibrationResponseError {
}
/** Calibration algorithm failure occurred. */
export class CameraCalibrationCalibrationError extends CameraCalibrationResponseError {
}
/** Internal error occurred. */
export class CameraCalibrationInternalError extends CameraCalibrationResponseError {
}
/**
 * Timed out waiting for SUCCESS response from calibration.
 */
export class CameraCalibrationTimedOutError extends Error {
    constructor(msg: any);
}
/**
 * A client for verifying robot health and running calibration routines.
 * @extends {BaseClient<SpotCheckServiceClient>}
 */
export class SpotCheckClient extends BaseClient<SpotCheckServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Issue a spot check command to the robot.
     * @param {spotCheckPb.SpotCheckCommandRequest} request The spot check command request
     * @param {Object} [args] Options to pass to the GRPC request
     * @returns {Promise<spotCheckPb.SpotCheckCommandResponse>}
     */
    spotCheckCommand(request: spotCheckPb.SpotCheckCommandRequest, args?: Object): Promise<spotCheckPb.SpotCheckCommandResponse>;
    /**
     * Check the current status of spot check.
     * @param {spotCheckPb.SpotCheckFeedbackRequest} request The spot check feedback request
     * @param {Object} [args] Options to pass to the GRPC request
     * @returns {Promise<spotCheckPb.SpotCheckFeedbackResponse>}
     */
    spotCheckFeedback(request: spotCheckPb.SpotCheckFeedbackRequest, args?: Object): Promise<spotCheckPb.SpotCheckFeedbackResponse>;
    /**
     * Issue a camera calibration command to the robot.
     * @param {spotCheckPb.CameraCalibrationCommandRequest} request The camera calibration command request
     * @param {Object} [args] Options to pass to the GRPC request
     * @returns {Promise<spotCheckPb.CameraCalibrationCommandResponse>}
     */
    cameraCalibrationCommand(request: spotCheckPb.CameraCalibrationCommandRequest, args?: Object): Promise<spotCheckPb.CameraCalibrationCommandResponse>;
    /**
     * Check the current status of camera calibration.
     * @param {spotCheckPb.CameraCalibrationFeedbackRequest} request The camera calibration feedback request
     * @param {Object} [args] Options to pass to the GRPC request
     * @returns {Promise<spotCheckPb.CameraCalibrationFeedbackResponse>}
     */
    cameraCalibrationFeedback(request: spotCheckPb.CameraCalibrationFeedbackRequest, args?: Object): Promise<spotCheckPb.CameraCalibrationFeedbackResponse>;
}
/**
 * Run full spot check routine. The robot should be sitting on flat ground when this routine is
 * started. This routine calibrates robot joints and checks camera health.
 * @param {SpotCheckClient} spotCheckClient client for calling calibration service.
 * @param {Lease} lease A active lease. Spot check can be overridden at any time with another command.
 * @param {Object} options A set of options.
 * @param {number} [options.timeoutMSec] Max time this function will block for.
 * @param {number} [options.updateFrequency] How often this function will query feedback.
 * @param {boolean} [options.verbose] Periodically print status.
 * @returns {Promise<spotCheckPb.SpotCheckFeedbackResponse>}
 */
export function runSpotCheck(spotCheckClient: SpotCheckClient, lease: Lease, { timeoutMSec, updateFrequency, verbose }?: {
    timeoutMSec?: number | undefined;
    updateFrequency?: number | undefined;
    verbose?: boolean | undefined;
}): Promise<spotCheckPb.SpotCheckFeedbackResponse>;
/**
 * Run full camera calibration routine for robot. This function blocks until calibration has
 * completed. This function should be called once the robot is powered on and standing in the
 * configuration described in user documentation.
 * @param {SpotCheckClient} spotCheckclient client for calling calibration service.
 * @param {Lease} lease A active lease, used by calibration routine to issue robot commands. Lease
 * keep alive internally managed by service. Revoke lease to end routine
 * at any time.
 * @param {Object} options A set of options.
 * @param {number} [options.timeoutMSec] Max time this function will block for.
 * @param {number} [options.updateFrequency] How often this function will query feedback.
 * @param {boolean} [options.verbose] Periodically print status.
 * @returns {Promise<void>}
 */
export function runCameraCalibration(spotCheckclient: SpotCheckClient, lease: Lease, { timeoutMSec, updateFrequency, verbose }?: {
    timeoutMSec?: number | undefined;
    updateFrequency?: number | undefined;
    verbose?: boolean | undefined;
}): Promise<void>;
export const _spotcheckFeedbackErrorFromResponse: (...args: any[]) => any;
export const _calibrationFeedbackErrorFromResponse: (...args: any[]) => any;
import { ResponseError } from "./exceptions";
import { SpotCheckServiceClient } from "../../src/bosdyn/api/spot/spot_check_service_grpc_pb";
import { BaseClient } from "./common";
import spotCheckPb = require("../../src/bosdyn/api/spot/spot_check_pb");
