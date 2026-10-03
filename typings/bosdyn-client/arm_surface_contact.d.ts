export type ArmSurfaceContactRequest = import("../../src/bosdyn/api/arm_surface_contact_pb").ArmSurfaceContact.Request;
export type ArmSurfaceContactResponse = import("../../src/bosdyn/api/arm_surface_contact_service_pb").ArmSurfaceContactResponse;
/**
 * @typedef {import('../../src/bosdyn/api/arm_surface_contact_pb').ArmSurfaceContact.Request} ArmSurfaceContactRequest
 */
/**
 * @typedef {import('../../src/bosdyn/api/arm_surface_contact_service_pb').ArmSurfaceContactResponse} ArmSurfaceContactResponse
 */
/**
 * Client for the ArmSurfaceContact service.
 * @extends {BaseClient<ArmSurfaceContactServiceClient>}
 */
export class ArmSurfaceContactClient extends BaseClient<ArmSurfaceContactServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * @type {import('./time_sync').TimeSyncEndpoint|null}
     */
    _timesyncEndpoint: import("./time_sync").TimeSyncEndpoint | null;
    /**
     * Update instance from another object.
     * @param {import('./robot').Robot} other The object where to copy from.
     * @returns {Promise<void>}
     */
    updateFrom(other: import("./robot").Robot): Promise<void>;
    /**
     * Set or convert fields of the command proto that need timestamps in the robot's clock.
     * @param {ArmSurfaceContactRequest} command Command message to update.
     * @returns {void}
     * @private
     */
    private _updateCommandTimestamps;
    /**
     * Issue an arm surface contact command to the robot.
     * @param {ArmSurfaceContactRequest} request The command request.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<ArmSurfaceContactResponse>} The full arm surface contact response message.
     */
    armSurfaceContactCommand(request: ArmSurfaceContactRequest, args?: Object): Promise<ArmSurfaceContactResponse>;
}
export namespace EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME {
    namespace request {
        namespace poseTrajectoryInTask {
            let referenceTime: null;
        }
        namespace gripperCommand {
            namespace trajectory {
                let referenceTime_1: null;
                export { referenceTime_1 as referenceTime };
            }
        }
    }
}
import { ArmSurfaceContactServiceClient } from "../../src/bosdyn/api/arm_surface_contact_service_grpc_pb";
import { BaseClient } from "./common";
