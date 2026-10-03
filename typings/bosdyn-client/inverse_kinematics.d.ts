export type InverseKinematicsRequest = import("../../src/bosdyn/api/spot/inverse_kinematics_pb").InverseKinematicsRequest;
/**
 * @typedef {import('../../src/bosdyn/api/spot/inverse_kinematics_pb').InverseKinematicsRequest} InverseKinematicsRequest
 */
/**
 * Client to request inverse kinematics solutions.
 * @extends {BaseClient<InverseKinematicsServiceClient>}
 */
export class InverseKinematicsClient extends BaseClient<InverseKinematicsServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Request an IK solution.
     * @param {InverseKinematicsRequest} request Request to issue
     * @param {Object} [args] Extra arguments
     * @returns {Promise<any>}
     */
    inverseKinematics(request: InverseKinematicsRequest, args?: Object): Promise<any>;
}
import { InverseKinematicsServiceClient } from "../../src/bosdyn/api/spot/inverse_kinematics_service_grpc_pb";
import { BaseClient } from "./common";
