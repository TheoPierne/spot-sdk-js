/**
 * A client that allows arbitrary rays to be queried against the robot.
 * @extends {BaseClient<RayCastServiceClient>}
 */
export class RayCastClient extends BaseClient<RayCastServiceClient> {
    static defaultAuthority: string;
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Requests robot to intersect ray against the environment it built up.
     * @param {number[]} rayOrigin [x, y, z] position of the ray in the specified frame.
     * @param {number[]} rayDirection [x, y, z] vector denoting the direction of the ray in the specified frame.
     * @param {any[]} raycastTypes array of 0 or more raycast types. 0 will cast into all sources.
     * @param {?number} minDistance a positive real value denoting how far (meters) behind a ray an intersection
     * can occur.
     * @param {?string} frameName the frame the ray is in.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<rayCastPb.RaycastResponse>}
     */
    raycast(rayOrigin: number[], rayDirection: number[], raycastTypes: any[], minDistance?: number | null, frameName?: string | null, args?: Object): Promise<rayCastPb.RaycastResponse>;
    _raycastRequest(rayOrigin: any, rayDirection: any, raycastTypes: any, minDistance: any, frameName: any): rayCastPb.RaycastRequest;
}
/** General class of errors for ray cast service. */
export class RayCastResponseError extends ResponseError {
}
/** Request was invalid / malformed in some way. */
export class InvalidRequestError extends RayCastResponseError {
}
/** Requested source not valid for current robot configuration. */
export class InvalidIntersectionTypeError extends RayCastResponseError {
}
/** The frame_name for a command was not a known frame. */
export class UnknownFrameError extends RayCastResponseError {
}
import { RayCastServiceClient } from "../../src/bosdyn/api/ray_cast_service_grpc_pb";
import { BaseClient } from "./common";
import rayCastPb = require("../../src/bosdyn/api/ray_cast_pb");
import { ResponseError } from "./exceptions";
