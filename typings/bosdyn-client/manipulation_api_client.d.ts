export type ManipulationApiRequest = import("../../src/bosdyn/api/manipulation_api_pb").ManipulationApiRequest;
export type ManipulationApiResponse = import("../../src/bosdyn/api/manipulation_api_pb").ManipulationApiResponse;
export type ManipulationApiFeedbackRequest = import("../../src/bosdyn/api/manipulation_api_pb").ManipulationApiFeedbackRequest;
export type ManipulationApiFeedbackResponse = import("../../src/bosdyn/api/manipulation_api_pb").ManipulationApiFeedbackResponse;
export type ApiGraspOverrideRequest = import("../../src/bosdyn/api/manipulation_api_pb").ApiGraspOverrideRequest;
export type ApiGraspOverrideResponse = import("../../src/bosdyn/api/manipulation_api_pb").ApiGraspOverrideResponse;
export type Robot = import("./robot").Robot;
/**
 * @typedef {import('../../src/bosdyn/api/manipulation_api_pb').ManipulationApiRequest} ManipulationApiRequest
 * @typedef {import('../../src/bosdyn/api/manipulation_api_pb').ManipulationApiResponse} ManipulationApiResponse
 * @typedef {import('../../src/bosdyn/api/manipulation_api_pb').ManipulationApiFeedbackRequest} ManipulationApiFeedbackRequest
 * @typedef {import('../../src/bosdyn/api/manipulation_api_pb').ManipulationApiFeedbackResponse} ManipulationApiFeedbackResponse
 * @typedef {import('../../src/bosdyn/api/manipulation_api_pb').ApiGraspOverrideRequest} ApiGraspOverrideRequest
 * @typedef {import('../../src/bosdyn/api/manipulation_api_pb').ApiGraspOverrideResponse} ApiGraspOverrideResponse
 */
/**
 * @typedef {import('./robot').Robot} Robot
 */
/**
 * Client for the ManipulationAPI service.
 * @extends {BaseClient<ManipulationApiServiceClient>}
 */
export class ManipulationApiClient extends BaseClient<ManipulationApiServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Issue a manipulation api command to the robot.
     * @param {ManipulationApiRequest} manipulationApiRequest The command request
     * for a manipulation task.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<ManipulationApiResponse>} The full ManipulationApiResponse message,
     * which includes a command id for feedback.
     */
    manipulationApiCommand(manipulationApiRequest: ManipulationApiRequest, args?: Object): Promise<ManipulationApiResponse>;
    /**
     * Issue a manipulation api feedback request to the robot.
     * @param {ManipulationApiFeedbackRequest} manipulationApiFeedbackRequest The request for
     * feedback for a specific manipulation command.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<ManipulationApiFeedbackResponse>} The full ManipulationApiFeedbackResponse
     * message.
     */
    manipulationApiFeedbackCommand(manipulationApiFeedbackRequest: ManipulationApiFeedbackRequest, args?: Object): Promise<ManipulationApiFeedbackResponse>;
    /**
     * Issue a grasp override command to the robot.
     * @param {ApiGraspOverrideRequest} graspOverrideRequest he command request
     * for a grasp override.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<ApiGraspOverrideResponse>}
     */
    graspOverrideCommand(graspOverrideRequest: ApiGraspOverrideRequest, args?: Object): Promise<ApiGraspOverrideResponse>;
}
import { ManipulationApiServiceClient } from "../../src/bosdyn/api/manipulation_api_service_grpc_pb";
import { BaseClient } from "./common";
