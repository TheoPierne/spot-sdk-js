export type LeaseUseError = import("./exceptions").LeaseUseError;
export type RpcError = import("./exceptions").RpcError;
export type OpenDoorCommandRequest = import("../../src/bosdyn/api/spot/door_pb").OpenDoorCommandRequest;
export type OpenDoorCommandResponse = import("../../src/bosdyn/api/spot/door_pb").OpenDoorCommandResponse;
export type OpenDoorFeedbackRequest = import("../../src/bosdyn/api/spot/door_pb").OpenDoorFeedbackRequest;
export type OpenDoorFeedbackResponse = import("../../src/bosdyn/api/spot/door_pb").OpenDoorFeedbackResponse;
export type Robot = import("./robot").Robot;
/**
 * @typedef {import('./exceptions').LeaseUseError} LeaseUseError
 * @typedef {import('./exceptions').RpcError} RpcError
 * @typedef {import('../../src/bosdyn/api/spot/door_pb').OpenDoorCommandRequest} OpenDoorCommandRequest
 * @typedef {import('../../src/bosdyn/api/spot/door_pb').OpenDoorCommandResponse} OpenDoorCommandResponse
 * @typedef {import('../../src/bosdyn/api/spot/door_pb').OpenDoorFeedbackRequest} OpenDoorFeedbackRequest
 * @typedef {import('../../src/bosdyn/api/spot/door_pb').OpenDoorFeedbackResponse} OpenDoorFeedbackResponse
 */
/**
 * @typedef {import('./robot').Robot} Robot
 */
/**
 * Client for the door service.
 * @extends {BaseClient<DoorServiceClient>}
 */
export class DoorClient extends BaseClient<DoorServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    /**
     * Create an instance of DoorClient's class.
     * @param {?string} name Name of the Class.
     */
    constructor(name?: string | null);
    /**
     * Issue a open door command to the robot.
     * @param {OpenDoorCommandRequest} request The door command.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<OpenDoorCommandResponse>} The full OpenDoorCommandResponse message,
     * which includes a command id for feedback.
     * @throws {RpcError} Problem communicating with the robot.
     * @throws {LeaseUseError} The lease for the request failed.
     */
    openDoor(request: OpenDoorCommandRequest, args?: Object): Promise<OpenDoorCommandResponse>;
    /**
     * Get feedback from the robot on a specific door command.
     * @param {OpenDoorFeedbackRequest} request The request for feedback of the door command.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<OpenDoorFeedbackResponse>} The full OpenDoorFeedbackResponse message.
     * @throws {RpcError} Problem communicating with the robot.
     */
    openDoorFeedback(request: OpenDoorFeedbackRequest, args?: Object): Promise<OpenDoorFeedbackResponse>;
}
import { DoorServiceClient } from "../../src/bosdyn/api/spot/door_service_grpc_pb";
import { BaseClient } from "./common";
