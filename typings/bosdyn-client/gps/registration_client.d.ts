/**
 * Client for the GPS Registration service.
 * @extends {BaseClient<RegistrationServiceClient>}
 */
export class RegistrationClient extends BaseClient<RegistrationServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Get location
     * @param {Object} [args] Options to provide for gRPC request.
     * @returns {Promise<registrationPb.GetLocationResponse>}
     */
    getLocation(args?: Object): Promise<registrationPb.GetLocationResponse>;
    /**
     * Reset GPS registration
     * @param {Object} [args] Options to provide for gRPC request.
     * @returns {Promise<registrationPb.ResetRegistrationResponse>}
     */
    resetRegistration(args?: Object): Promise<registrationPb.ResetRegistrationResponse>;
}
import { RegistrationServiceClient } from "../../../src/bosdyn/api/gps/registration_service_grpc_pb";
import { BaseClient } from "../common";
import registrationPb = require("../../../src/bosdyn/api/gps/registration_pb");
