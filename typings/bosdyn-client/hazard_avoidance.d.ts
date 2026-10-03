/**
 * Client for Hazard avoidance service.
 * @extends {BaseClient<HazardAvoidanceServiceClient>}
 */
export class HazardAvoidanceClient extends BaseClient<HazardAvoidanceServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    _timesyncEndpoint: any;
    updateFrom(other: any): Promise<void>;
    /**
     * Accessor for timesync-endpoint that is grabbed via 'updateFrom()'.
     */
    get timeSyncEndpoint(): any;
    /**
     * Add hazards to the hazard map.
     * @param {AddHazardsRequest} addHazardsReq The request including the hazard observations to add.
     * @returns {Promise<AddHazardResult[]>}
     */
    addHazards(addHazardsReq: AddHazardsRequest, args?: {}): Promise<AddHazardResult[]>;
}
/** General class of errors for hazard avoidance service. */
export class AddHazardsResponseError extends ResponseError {
}
import { HazardAvoidanceServiceClient } from "../../src/bosdyn/api/hazard_avoidance_service_grpc_pb";
import { BaseClient } from "./common";
import { AddHazardsRequest } from "../../src/bosdyn/api/hazard_avoidance_pb";
import { AddHazardResult } from "../../src/bosdyn/api/hazard_avoidance_pb";
import { ResponseError } from "./exceptions";
