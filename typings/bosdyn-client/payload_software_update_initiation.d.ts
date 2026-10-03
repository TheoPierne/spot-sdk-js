/**
 * Payload software update initiation gRPC client.
 * This client uses an insecure channel for signaling to a payload that it should
 * send its version information or initiate a software update.
 * @extends {BaseClient<PayloadSoftwareUpdateInitiationServiceClient>}
 */
export class PayloadSoftwareUpdateInitiation extends BaseClient<PayloadSoftwareUpdateInitiationServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Tell a payload to send its current version information to Spot.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<TriggerSendPayloadSoftwareInfoResponse>}
     */
    triggerSendPayloadSoftwareInfo(args?: Object): Promise<TriggerSendPayloadSoftwareInfoResponse>;
    /**
     * Tell a payload to initiate its software update logic.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<TriggerInitiateUpdateResponse>}
     */
    triggerInitiateUpdate(args?: Object): Promise<TriggerInitiateUpdateResponse>;
}
import { PayloadSoftwareUpdateInitiationServiceClient } from "../../src/bosdyn/api/payload_software_update_initiation_service_grpc_pb";
import { BaseClient } from "./common";
import { TriggerSendPayloadSoftwareInfoResponse } from "../../src/bosdyn/api/payload_software_update_initiation_pb";
import { TriggerInitiateUpdateResponse } from "../../src/bosdyn/api/payload_software_update_initiation_pb";
export { PayloadSoftwareUpdateInitiation as PayloadSoftwareUpdateInitiationClient };
