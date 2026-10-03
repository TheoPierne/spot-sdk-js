/**
 * A client calling Spot CAM Ptz service.
 * @extends {BaseClient<PtzServiceClient>}
 */
export class PtzClient extends BaseClient<PtzServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * List all the available ptzs
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<ptzPb.PtzDescription[]>}
     */
    listPtz(args?: Object): Promise<ptzPb.PtzDescription[]>;
    /**
     * Position of the specified ptz
     * @param {ptzPb.PtzDescription} ptzDesc The ptz from which to retrieve the position
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<ptzPb.PtzPosition>}
     */
    getPtzPosition(ptzDesc: ptzPb.PtzDescription, args?: Object): Promise<ptzPb.PtzPosition>;
    /**
     * Velocity of the specified ptz
     * @param {ptzPb.PtzDescription} ptzDesc The ptz from which to retrieve the velocity
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<ptzPb.PtzVelocity>}
     */
    getPtzVelocity(ptzDesc: ptzPb.PtzDescription, args?: Object): Promise<ptzPb.PtzVelocity>;
    /**
     * Set position of the specified ptz in PTZ-space
     * @param {ptzPb.PtzDescription} ptzDesc The ptz from which to apply the position
     * @param {number} pan The new pan value for the position
     * @param {number} tilt The new tilt value for the position
     * @param {number} zoom The new zoom value for the position
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<ptzPb.PtzPosition>}
     */
    setPtzPosition(ptzDesc: ptzPb.PtzDescription, pan: number, tilt: number, zoom: number, args?: Object): Promise<ptzPb.PtzPosition>;
    /**
     * Set velocity of the specified ptz in PTZ-space
     * @param {ptzPb.PtzDescription} ptzDesc The ptz from which to apply the position
     * @param {number} pan The new pan value for the velocity
     * @param {number} tilt The new tilt value for the velocity
     * @param {number} zoom The new zoom value for the velocity
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<ptzPb.PtzVelocity>}
     */
    setPtzVelocity(ptzDesc: ptzPb.PtzDescription, pan: number, tilt: number, zoom: number, args?: Object): Promise<ptzPb.PtzVelocity>;
    /**
     * Initializes the PTZ autofocus or resets it if already initialized
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<ptzPb.InitializeLensResponse>}
     */
    initializeLens(args?: Object): Promise<ptzPb.InitializeLensResponse>;
    /**
     * Retrieve focus of the mechanical ptz
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<ptzPb.PtzFocusState>}
     */
    getPtzFocusState(args?: Object): Promise<ptzPb.PtzFocusState>;
    /**
     * Set focus of the mechanical ptz
     * @param {ptzPb.PtzFocusState.PtzFocusMode} focusMode Enum indicating whether to autofocus or manually focus
     * @param {number} distance Approximate distance to focus on, most accurate between 1.2m and 20m,
     * only settable in PTZ_FOCUS_MANUAL mode
     * @param {number} focusPosition Precise lens position for the camera for repeatable operations,
     * overrides distance if specified, only settable in PTZ_FOCUS_MANUAL mode
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<ptzPb.SetPtzFocusStateResponse>}
     */
    setPtzFocusState(focusMode: ptzPb.PtzFocusState.PtzFocusMode, distance?: number, focusPosition?: number, args?: Object): Promise<ptzPb.SetPtzFocusStateResponse>;
    _listPtzFromResponse(response: any): any;
    _getPtzPositionFromResponse(response: any): any;
    _getPtzVelocityFromResponse(response: any): any;
    _setPtzPositionFromResponse(response: any): any;
    _setPtzVelocityFromResponse(response: any): any;
    _initializeLensFromResponse(response: any): any;
    _getPtzFocusStateFromResponse(response: any): any;
    _setPtzFocusStateFromResponse(response: any): any;
}
/**
 * Generate a focus state proto.
 * @param {ptzPb.PtzFocusState.PtzFocusMode} focusMode Enum indicating whether to autofocus or manually focus.
 * @param {?number} [distance=null] Approximate distance to focus on, only used in PTZ_FOCUS_MANUAL mode.
 * @param {?number} [focusPosition=null] Precise lens position for the camera, overrides distance if specified, only
 * used in PTZ_FOCUS_MANUAL mode.
 * @returns {ptzPb.PtzFocusState}
 * @throws {ValueError} In PTZ_FOCUS_MANUAL mode, neither distance nor focusPosition is given.
 */
export function createFocusState(focusMode: ptzPb.PtzFocusState.PtzFocusMode, distance?: number | null, focusPosition?: number | null): ptzPb.PtzFocusState;
/**
 * Shift the pan angle (degrees) so that it is in the [0,360] range.
 * @param {number} pan The angle in degrees to be shift.
 * @returns {number}
 */
export function shiftPanAngle(pan: number): number;
import { PtzServiceClient } from "../../../src/bosdyn/api/spot_cam/service_grpc_pb";
import { BaseClient } from "../common";
import ptzPb = require("../../../src/bosdyn/api/spot_cam/ptz_pb");
